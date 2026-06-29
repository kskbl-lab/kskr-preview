import { MosaicEffect } from './MosaicBase.js'

/**
 * Comic Effect - 漫画风格
 * 参数: comicType(0=BlackWhite,1=Color), color1(hue1 0-360), color2(hue2 0-360), gridNum(0-1 网格密度)
 */
export class ComicEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { comicType: 0, color1: 300, color2: 300, gridNum: 0.14 }
  }

  hsvToRgb(h, s, v) {
    h = ((h % 360) + 360) % 360
    const c = v * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = v - c
    let r = 0, g = 0, b = 0
    if      (h < 60)  { r=c; g=x; b=0 }
    else if (h < 120) { r=x; g=c; b=0 }
    else if (h < 180) { r=0; g=c; b=x }
    else if (h < 240) { r=0; g=x; b=c }
    else if (h < 300) { r=x; g=0; b=c }
    else              { r=c; g=0; b=x }
    return [(r+m)*255, (g+m)*255, (b+m)*255]
  }

  apply() {
    const { width, height } = this.canvas
    const ctx = this.ctx
    const src = ctx.getImageData(0, 0, width, height)
    const d   = src.data
    const out = ctx.createImageData(width, height)
    const od  = out.data

    const gridSize = Math.max(2, Math.round(this.params.gridNum * 30 + 3))
    const isColor  = this.params.comicType === 1
    const [h1r, h1g, h1b] = this.hsvToRgb(this.params.color1, 0.8, 0.9)
    const [h2r, h2g, h2b] = this.hsvToRgb(this.params.color2, 0.6, 0.7)

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4
        const lum = (0.299 * d[i] + 0.587 * d[i+1] + 0.114 * d[i+2]) / 255

        // Threshold zones
        const cellX = Math.floor(x / gridSize)
        const cellY = Math.floor(y / gridSize)
        // Local position in cell
        const lx = (x % gridSize) / gridSize
        const ly = (y % gridSize) / gridSize

        // Halftone dot pattern
        const dx = lx - 0.5, dy = ly - 0.5
        const dotR = lum * 0.55
        const inDot = (dx*dx + dy*dy) < dotR * dotR

        // Hatching lines (diagonal) for mid-tones
        const diagVal = ((x + y) % gridSize) / gridSize
        const inHatch = diagVal < (1 - lum) * 0.6 && lum < 0.7

        // Grid lines
        const inGrid = (x % gridSize === 0 || y % gridSize === 0)

        let r, g, b
        if (lum > 0.85) {
          // Highlight: white
          r = g = b = 255
        } else if (lum > 0.5) {
          // Mid: dot halftone pattern
          if (inDot) {
            r = g = b = 30
          } else {
            r = g = b = 240
          }
        } else if (lum > 0.2) {
          // Shadow: hatching
          if (inHatch) {
            r = g = b = 20
          } else {
            r = g = b = 220
          }
        } else {
          // Deep shadow: solid dark
          r = g = b = 15
        }

        // Grid outline
        if (inGrid && this.params.gridNum > 0.02) {
          r = g = b = Math.min(r, 80)
        }

        if (isColor) {
          // Tint with color1/color2 based on luminance
          const t = lum
          r = Math.round(r * (h1r/255 * t + h2r/255 * (1-t)) * 1.2)
          g = Math.round(g * (h1g/255 * t + h2g/255 * (1-t)) * 1.2)
          b = Math.round(b * (h1b/255 * t + h2b/255 * (1-t)) * 1.2)
        }

        od[i]   = Math.min(255, Math.max(0, r))
        od[i+1] = Math.min(255, Math.max(0, g))
        od[i+2] = Math.min(255, Math.max(0, b))
        od[i+3] = 255
      }
    }

    ctx.putImageData(out, 0, 0)
  }

  updateParams(p) {
    this.params = { ...this.params, ...p }
    this.render()
  }
}
