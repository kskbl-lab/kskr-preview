import { MosaicEffect } from './MosaicBase.js'

/**
 * CCLens - 鱼眼镜头变形
 * 参数: centerX(0-1), centerY(0-1), size(0-200), convergence(-100~100)
 */
export class CCLensEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { centerX: 0.5, centerY: 0.39, size: 76, convergence: 20 }
  }

  apply() {
    const { width, height } = this.canvas
    const ctx = this.ctx
    const src = ctx.getImageData(0, 0, width, height)
    const d   = src.data
    const out = ctx.createImageData(width, height)
    const od  = out.data

    const cx   = this.params.centerX * width
    const cy   = this.params.centerY * height
    const size = Math.max(1, this.params.size)
    // convergence: positive=bulge outward, negative=pinch inward
    const conv = this.params.convergence / 100  // -1~1

    const sample = (sx, sy) => {
      const px = Math.min(width - 1, Math.max(0, Math.round(sx)))
      const py = Math.min(height - 1, Math.max(0, Math.round(sy)))
      const i  = (py * width + px) * 4
      return [d[i], d[i+1], d[i+2], d[i+3]]
    }

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const dx = x - cx
        const dy = y - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxR = size * Math.max(width, height) / 100

        if (dist < maxR && dist > 0) {
          const norm = dist / maxR  // 0~1
          // lens distortion formula
          const factor = conv > 0
            ? Math.pow(norm, 1 - conv * 0.8)
            : Math.pow(norm, 1 + Math.abs(conv) * 1.5)
          const ratio = (factor * maxR) / dist
          const sx = cx + dx * ratio
          const sy = cy + dy * ratio
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
