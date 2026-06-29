import { MosaicEffect } from './MosaicBase.js'

/**
 * TwirlDistort - 旋转扭曲（漩涡效果）
 * 参数: centerX(0-1), centerY(0-1), radius(0-200), angle(-360~360), smoothness(0-100)
 */
export class TwirlDistortEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { centerX: 0.5, centerY: 0.5, radius: 80, angle: 120, smoothness: 60 }
  }

  apply() {
    const { width, height } = this.canvas
    const ctx = this.ctx
    const src = ctx.getImageData(0, 0, width, height)
    const d   = src.data
    const out = ctx.createImageData(width, height)
    const od  = out.data

    const cx     = this.params.centerX * width
    const cy     = this.params.centerY * height
    const maxR   = this.params.radius / 100 * Math.max(width, height) * 0.5
    const maxAng = this.params.angle * Math.PI / 180
    const smooth = Math.max(1, this.params.smoothness) / 100

    const bilinear = (sx, sy) => {
      const x0 = Math.floor(sx), y0 = Math.floor(sy)
      const x1 = Math.min(width  - 1, x0 + 1)
      const y1 = Math.min(height - 1, y0 + 1)
      const fx = sx - x0, fy = sy - y0
      const px0 = Math.max(0, x0), px1 = Math.max(0, x1)
      const py0 = Math.max(0, y0), py1 = Math.max(0, y1)
      const i00 = (py0 * width + px0) * 4
      const i10 = (py0 * width + px1) * 4
      const i01 = (py1 * width + px0) * 4
      const i11 = (py1 * width + px1) * 4
      return [
        d[i00]*(1-fx)*(1-fy) + d[i10]*fx*(1-fy) + d[i01]*(1-fx)*fy + d[i11]*fx*fy,
        d[i00+1]*(1-fx)*(1-fy) + d[i10+1]*fx*(1-fy) + d[i01+1]*(1-fx)*fy + d[i11+1]*fx*fy,
        d[i00+2]*(1-fx)*(1-fy) + d[i10+2]*fx*(1-fy) + d[i01+2]*(1-fx)*fy + d[i11+2]*fx*fy,
        255
      ]
    }

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const dx   = x - cx
        const dy   = y - cy
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < maxR) {
          // 扭曲强度随距离衰减（smooth 控制衰减曲线）
          const t = 1 - Math.pow(dist / maxR, smooth * 2 + 0.1)
          const rotAng = maxAng * t
          const cosR  = Math.cos(rotAng)
          const sinR  = Math.sin(rotAng)
          const sx    = cx + dx * cosR - dy * sinR
          const sy    = cy + dx * sinR + dy * cosR
          const [r, g, b, a] = bilinear(sx, sy)
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
