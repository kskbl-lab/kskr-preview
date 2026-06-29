import { MosaicEffect } from './MosaicBase.js'

/**
 * RippleEffect - 波纹（模拟 AE 波纹效果）
 * 参数: radius(0-200), waveSpeed(0-10), waveWidth(1-100), waveHeight(0-5), wavePhase(0-360)
 */
export class RippleEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { radius: 100, waveSpeed: 4.9, waveWidth: 55.1, waveHeight: 1.0, wavePhase: 0 }
  }

  apply() {
    const { width, height } = this.canvas
    const ctx = this.ctx
    const src = ctx.getImageData(0, 0, width, height)
    const d   = src.data
    const out = ctx.createImageData(width, height)
    const od  = out.data

    // 波纹中心（图像中心）
    const cx = width * 0.5
    const cy = height * 0.5
    const maxR    = this.params.radius / 100 * Math.max(width, height)
    const wWidth  = Math.max(1, this.params.waveWidth) / 100 * maxR
    const wHeight = this.params.waveHeight * Math.min(width, height) * 0.02
    const phase   = this.params.wavePhase * Math.PI / 180

    const sample = (sx, sy) => {
      const px = Math.min(width - 1, Math.max(0, Math.round(sx)))
      const py = Math.min(height - 1, Math.max(0, Math.round(sy)))
      const i  = (py * width + px) * 4
      return [d[i], d[i+1], d[i+2], d[i+3]]
    }

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const dx   = x - cx
        const dy   = y - cy
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < maxR && dist > 0) {
          // 圆形波纹：沿半径方向产生位移
          const waveArg = (dist / wWidth) * Math.PI * 2 - phase
          const displacement = Math.sin(waveArg) * wHeight * (1 - dist / maxR)
          const nx = dx / dist
          const ny = dy / dist
          const sx = x + nx * displacement
          const sy = y + ny * displacement
          const [r, g, b, a] = sample(sx, sy)
          const i = (y * width + x) * 4
          od[i] = r; od[i+1] = g; od[i+2] = b; od[i+3] = a
        } else {
          const i = (y * width + x) * 4
          od[i] = d[i]; od[i+1] = d[i+1]; od[i+2] = d[i+2]; od[i+3] = d[i+3]
        }
      }
    }
    ctx.putImageData(out, 0, 0)
  }

  updateParams(p) { this.params = { ...this.params, ...p }; this.render() }
}
