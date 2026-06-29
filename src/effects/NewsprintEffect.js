import { MosaicEffect } from './MosaicBase.js'

/**
 * Newsprint Effect - 报纸印刷半调效果
 * 参数: colorModel(0-2), pattern(0-2), period(1-30), angle(0-180),
 *       antiAlias(1-32), turbulence(0-5), blocksize(-2~2), angleBoost(0-5)
 */
export class NewsprintEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = {
      colorModel: 2,
      pattern:    2,
      period:     12.7,
      angle:      75,
      antiAlias:  16,
      turbulence: 0,
      blocksize:  -1,
      angleBoost: 0,
    }
  }

  apply() {
    const { width, height } = this.canvas
    const ctx = this.ctx

    // Get original pixels
    const src = ctx.getImageData(0, 0, width, height)
    const d   = src.data

    // Work on off-screen buffer
    const out = ctx.createImageData(width, height)
    const od  = out.data

    const period    = Math.max(2, this.params.period)
    const angle     = (this.params.angle + this.params.angleBoost * 10) * Math.PI / 180
    const turbScale = this.params.turbulence * period * 0.3
    const blockMod  = Math.pow(2, this.params.blocksize)
    const cosA = Math.cos(angle), sinA = Math.sin(angle)

    // helper: bilinear sample
    const sample = (x, y) => {
      const px = Math.min(width  - 1, Math.max(0, Math.round(x)))
      const py = Math.min(height - 1, Math.max(0, Math.round(y)))
      const i  = (py * width + px) * 4
      return [d[i], d[i+1], d[i+2], d[i+3]]
    }

    const pat = this.params.pattern // 0=dot 1=line 2=square

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // Turbulence offset
        let tx = 0, ty = 0
        if (turbScale > 0) {
          const t = Math.sin((x + y * 0.7) * 0.1) * turbScale
          tx = t; ty = t * 0.6
        }

        // Rotate to screen space
        const rx = (x + tx) * cosA - (y + ty) * sinA
        const ry = (x + tx) * sinA + (y + ty) * cosA

        // Cell position
        const cx = Math.floor(rx / period) * period + period * 0.5
        const cy = Math.floor(ry / period) * period + period * 0.5

        // Back to image space
        const sx = cx * cosA + cy * sinA
        const sy = -cx * sinA + cy * cosA

        const [r, g, b] = sample(sx, sy)
        const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255

        // Local phase within cell [0,1]
        const lx = ((rx % period) + period) % period / period
        const ly = ((ry % period) + period) % period / period
        const dx = lx - 0.5, dy = ly - 0.5

        let fill = false
        if (pat === 1) {
          // Line
          fill = Math.abs(dx) < lum * 0.5 * blockMod
        } else if (pat === 0) {
          // Dot
          const radius = lum * 0.5 * blockMod
          fill = (dx * dx + dy * dy) < radius * radius
        } else {
          // Square
          const hs = lum * 0.5 * blockMod
          fill = Math.abs(dx) < hs && Math.abs(dy) < hs
        }

        const idx = (y * width + x) * 4
        if (this.params.colorModel === 0) {
          // BW
          const v = fill ? 0 : 255
          od[idx] = od[idx+1] = od[idx+2] = v; od[idx+3] = 255
        } else if (this.params.colorModel === 1) {
          // Color: use original hue, halftone density
          const v = fill ? 1 : 0
          od[idx]   = Math.round(r * v)
          od[idx+1] = Math.round(g * v)
          od[idx+2] = Math.round(b * v)
          od[idx+3] = 255
        } else {
          // Grayscale halftone
          const v = fill ? 20 : 240
          od[idx] = od[idx+1] = od[idx+2] = v; od[idx+3] = 255
        }
      }
    }

    ctx.putImageData(out, 0, 0)
  }

  updateParams(p) {
    this.params = { ...this.params, ...p }
    this.render()
  }
}
