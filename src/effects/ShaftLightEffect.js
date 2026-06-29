import { MosaicEffect } from './MosaicBase.js'

/**
 * ShaftLight - 丁达尔光柱（放射光线）
 * 参数: threshold(0-1), strength(0-5), length(0-2), centerX(0-1), centerY(0-1)
 */
export class ShaftLightEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { threshold: 0.2, strength: 1.82, length: 1.0, centerX: 0.5, centerY: 0.5 }
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
    const thresh = this.params.threshold
    const str    = this.params.strength
    const len    = this.params.length

    // Step 1: Extract bright mask
    const bright = new Float32Array(width * height)
    for (let i = 0; i < width * height; i++) {
      const lum = (0.299 * d[i*4] + 0.587 * d[i*4+1] + 0.114 * d[i*4+2]) / 255
      bright[i] = lum > thresh ? (lum - thresh) / (1 - thresh) : 0
    }

    // Step 2: Radial blur from center (god-rays)
    const samples = Math.round(len * 60 + 20)
    const decay   = 0.97
    const rays    = new Float32Array(width * height)

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let accum = 0
        let sx = x, sy = y
        const stepX = (cx - x) / samples
        const stepY = (cy - y) / samples
        let w = 1

        for (let s = 0; s < samples; s++) {
          const px = Math.min(width-1, Math.max(0, Math.round(sx)))
          const py = Math.min(height-1, Math.max(0, Math.round(sy)))
          accum += bright[py * width + px] * w
          w    *= decay
          sx   += stepX
          sy   += stepY
        }
        rays[y * width + x] = accum / samples
      }
    }

    // Normalize rays
    let maxRay = 0
    for (let i = 0; i < rays.length; i++) if (rays[i] > maxRay) maxRay = rays[i]
    if (maxRay > 0) for (let i = 0; i < rays.length; i++) rays[i] /= maxRay

    // Step 3: Compose
    for (let i = 0; i < width * height; i++) {
      const pi  = i * 4
      const ray = rays[i] * str
      od[pi]   = Math.min(255, d[pi]   + ray * 255)
      od[pi+1] = Math.min(255, d[pi+1] + ray * 245)
      od[pi+2] = Math.min(255, d[pi+2] + ray * 220)
      od[pi+3] = 255
    }
    ctx.putImageData(out, 0, 0)
  }

  updateParams(p) { this.params = { ...this.params, ...p }; this.render() }
}
