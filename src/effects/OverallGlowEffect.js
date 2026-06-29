import { MosaicEffect } from './MosaicBase.js'

/**
 * OverallGlowEffect - 泛光（整体柔光光晕，让图像产生梦幻发光感）
 * 参数: threshold(0-100), glowRadius(0-100), glowStrength(0-100), glowColor(0=白,1=暖,2=冷)
 */
export class OverallGlowEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { threshold: 60, glowRadius: 40, glowStrength: 60, glowColor: 0 }
  }

  apply() {
    const { width, height } = this.canvas
    const ctx = this.ctx
    const src = ctx.getImageData(0, 0, width, height)
    const d   = src.data
    const out = ctx.createImageData(width, height)
    const od  = out.data

    const thresh    = this.params.threshold / 100
    const radius    = Math.round(this.params.glowRadius / 100 * Math.min(width, height) * 0.08 + 2)
    const strength  = this.params.glowStrength / 100
    const colorMode = Math.round(this.params.glowColor)

    // 色调 tint
    const tintR = colorMode === 1 ? 1.0 : colorMode === 2 ? 0.7 : 1.0
    const tintG = colorMode === 1 ? 0.9 : colorMode === 2 ? 0.85 : 1.0
    const tintB = colorMode === 1 ? 0.6 : colorMode === 2 ? 1.0 : 1.0

    // Step 1: Extract bright regions
    const bright = new Float32Array(width * height * 3)
    for (let i = 0; i < width * height; i++) {
      const r = d[i*4] / 255, g = d[i*4+1] / 255, b = d[i*4+2] / 255
      const lum = 0.299*r + 0.587*g + 0.114*b
      const mask = lum > thresh ? (lum - thresh) / (1 - thresh + 0.001) : 0
      bright[i*3]   = r * mask
      bright[i*3+1] = g * mask
      bright[i*3+2] = b * mask
    }

    // Step 2: Multi-pass box blur (approximate Gaussian)
    const blurred = new Float32Array(width * height * 3)
    const tmp3    = new Float32Array(width * height * 3)
    const src3    = bright.slice()

    // Horizontal
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let sr = 0, sg = 0, sb = 0, cnt = 0
        for (let k = -radius; k <= radius; k++) {
          const nx = Math.min(width-1, Math.max(0, x+k))
          const i  = (y*width+nx)*3
          sr += src3[i]; sg += src3[i+1]; sb += src3[i+2]; cnt++
        }
        const j = (y*width+x)*3
        tmp3[j] = sr/cnt; tmp3[j+1] = sg/cnt; tmp3[j+2] = sb/cnt
      }
    }
    // Vertical
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let sr = 0, sg = 0, sb = 0, cnt = 0
        for (let k = -radius; k <= radius; k++) {
          const ny = Math.min(height-1, Math.max(0, y+k))
          const i  = (ny*width+x)*3
          sr += tmp3[i]; sg += tmp3[i+1]; sb += tmp3[i+2]; cnt++
        }
        const j = (y*width+x)*3
        blurred[j] = sr/cnt; blurred[j+1] = sg/cnt; blurred[j+2] = sb/cnt
      }
    }

    // Step 3: Screen blend
    for (let i = 0; i < width * height; i++) {
      const pi = i * 4
      const gr = blurred[i*3] * tintR * strength
      const gg = blurred[i*3+1] * tintG * strength
      const gb = blurred[i*3+2] * tintB * strength
      const sr = d[pi]/255, sg = d[pi+1]/255, sb = d[pi+2]/255
      // Screen blend: 1-(1-a)(1-b)
      od[pi]   = Math.min(255, Math.round((1 - (1-sr)*(1-gr)) * 255))
      od[pi+1] = Math.min(255, Math.round((1 - (1-sg)*(1-gg)) * 255))
      od[pi+2] = Math.min(255, Math.round((1 - (1-sb)*(1-gb)) * 255))
      od[pi+3] = 255
    }
    ctx.putImageData(out, 0, 0)
  }

  updateParams(p) { this.params = { ...this.params, ...p }; this.render() }
}
