import { MosaicEffect } from './MosaicBase.js'

/**
 * Engrave Effect - 雕刻/浮雕风格
 * 参数: Strength (0-10)
 */
export class EngraveEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { strength: 2.9 }
  }

  apply() {
    const { width, height } = this.canvas
    const ctx = this.ctx
    const imageData = ctx.getImageData(0, 0, width, height)
    const d = imageData.data
    const out = new Uint8ClampedArray(d.length)

    const strength = Math.max(0.1, (this.params.strength / 10) * 8 + 0.5)

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4
        const il = x > 0 ? ((y * width + (x - 1)) * 4) : i
        const it = y > 0 ? (((y - 1) * width + x) * 4) : i

        // Sobel-like emboss: difference between current and top-left
        const dr = (d[i]   - d[il]  + d[i]   - d[it])   * strength * 0.5 + 128
        const dg = (d[i+1] - d[il+1]+ d[i+1] - d[it+1]) * strength * 0.5 + 128
        const db = (d[i+2] - d[il+2]+ d[i+2] - d[it+2]) * strength * 0.5 + 128

        // Convert to grayscale-toned engraving
        const gray = 0.299 * dr + 0.587 * dg + 0.114 * db
        out[i]   = gray
        out[i+1] = gray
        out[i+2] = gray
        out[i+3] = 255
      }
    }

    // Blend with a copper/silver tint
    for (let i = 0; i < out.length; i += 4) {
      const g = out[i]
      // Subtle warm metallic tint
      out[i]   = Math.min(255, g * 1.05)
      out[i+1] = Math.min(255, g * 0.97)
      out[i+2] = Math.min(255, g * 0.88)
    }

    imageData.data.set(out)
    ctx.putImageData(imageData, 0, 0)
  }

  updateParams(p) {
    this.params = { ...this.params, strength: p.strength ?? this.params.strength }
    this.render()
  }
}
