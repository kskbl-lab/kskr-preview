import { MosaicEffect } from './MosaicBase.js'

/**
 * WaveWarpEffect - 波形变形（模拟 AE 波形变形效果）
 * 参数: waveType(0=正弦,1=方波,2=三角), waveHeight(0-100), waveWidth(1-200),
 *       direction(0-360°), waveSpeed(0-10), phase(0-360)
 */
export class WaveWarpEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { waveType: 0, waveHeight: 10, waveWidth: 40, direction: 90, waveSpeed: 1.0, phase: 0 }
  }

  apply() {
    const { width, height } = this.canvas
    const ctx = this.ctx
    const src = ctx.getImageData(0, 0, width, height)
    const d   = src.data
    const out = ctx.createImageData(width, height)
    const od  = out.data

    const angle      = this.params.direction * Math.PI / 180
    const wHeight    = this.params.waveHeight * Math.min(width, height) * 0.01
    const wWidthPx   = Math.max(1, this.params.waveWidth) * Math.min(width, height) * 0.01
    const phase      = this.params.phase * Math.PI / 180
    const waveType   = Math.round(this.params.waveType)

    const cosA = Math.cos(angle)
    const sinA = Math.sin(angle)

    const waveFn = (t) => {
      const v = ((t % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)
      if (waveType === 1) return v < Math.PI ? 1 : -1        // 方波
      if (waveType === 2) return v < Math.PI ? (v / Math.PI * 2 - 1) : (3 - v / Math.PI * 2)  // 三角
      return Math.sin(t)  // 正弦
    }

    const sample = (sx, sy) => {
      const px = Math.min(width - 1, Math.max(0, Math.round(sx)))
      const py = Math.min(height - 1, Math.max(0, Math.round(sy)))
      const i  = (py * width + px) * 4
      return [d[i], d[i+1], d[i+2], d[i+3]]
    }

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // 波形方向：沿 direction 方向是波的传播轴，垂直方向是位移方向
        const along = x * cosA + y * sinA
        const t     = (along / wWidthPx) * Math.PI * 2 - phase

        // 位移方向垂直于 direction
        const disp  = waveFn(t) * wHeight
        const sx    = x + disp * sinA
        const sy    = y - disp * cosA

        const [r, g, b, a] = sample(sx, sy)
        const i = (y * width + x) * 4
        od[i] = r; od[i+1] = g; od[i+2] = b; od[i+3] = a
      }
    }
    ctx.putImageData(out, 0, 0)
  }

  updateParams(p) { this.params = { ...this.params, ...p }; this.render() }
}
