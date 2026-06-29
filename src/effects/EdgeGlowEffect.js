import { MosaicEffect } from './MosaicBase.js'

/**
 * EdgeGlow - 边缘辉光
 * 参数: glowCenterX(0-1), glowCenterY(0-1), glowIntensity(0-100), glowDensity(0-100)
 */
export class EdgeGlowEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { glowCenterX: 0.5, glowCenterY: 0.5, glowIntensity: 50, glowDensity: 60 }
  }

  apply() {
    const { width, height } = this.canvas
    const ctx = this.ctx
    const src = ctx.getImageData(0, 0, width, height)
    const d   = src.data
    const out = ctx.createImageData(width, height)
    const od  = out.data

    const cx        = this.params.glowCenterX * width
    const cy        = this.params.glowCenterY * height
    const intensity = this.params.glowIntensity / 100
    const density   = this.params.glowDensity / 100

    // Step 1: Sobel edge detection
    const lum = new Float32Array(width * height)
    for (let i = 0; i < width * height; i++) {
      lum[i] = (0.299 * d[i*4] + 0.587 * d[i*4+1] + 0.114 * d[i*4+2]) / 255
    }
    const edgeMag = new Float32Array(width * height)
    let maxEdge = 0
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const i = y * width + x
        const gx = -lum[i-width-1] + lum[i-width+1] - 2*lum[i-1] + 2*lum[i+1] - lum[i+width-1] + lum[i+width+1]
        const gy = -lum[i-width-1] - 2*lum[i-width] - lum[i-width+1] + lum[i+width-1] + 2*lum[i+width] + lum[i+width+1]
        edgeMag[i] = Math.sqrt(gx*gx + gy*gy)
        if (edgeMag[i] > maxEdge) maxEdge = edgeMag[i]
      }
    }

    // Step 2: Blur edge map (approximate gaussian with box)
    const blurR  = Math.round(density * 12 + 2)
    const blurred = new Float32Array(width * height)
    // horizontal pass
    const tmp = new Float32Array(width * height)
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let sum = 0, cnt = 0
        for (let k = -blurR; k <= blurR; k++) {
          const nx = Math.min(width-1, Math.max(0, x+k))
          sum += edgeMag[y*width+nx]; cnt++
        }
        tmp[y*width+x] = sum / cnt
      }
    }
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let sum = 0, cnt = 0
        for (let k = -blurR; k <= blurR; k++) {
          const ny = Math.min(height-1, Math.max(0, y+k))
          sum += tmp[ny*width+x]; cnt++
        }
        blurred[y*width+x] = sum / cnt
      }
    }

    // Step 3: Compose - add glow on edges, distance falloff from center
    const maxDist = Math.sqrt(cx*cx + cy*cy) * 1.5
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i   = (y * width + x) * 4
        const ei  = y * width + x
        const e   = maxEdge > 0 ? blurred[ei] / maxEdge : 0
        const dx  = x - cx, dy2 = y - cy
        const distFactor = 1 - Math.sqrt(dx*dx + dy2*dy2) / maxDist
        const glow = e * intensity * Math.max(0, distFactor) * 3

        od[i]   = Math.min(255, d[i]   + glow * 255)
        od[i+1] = Math.min(255, d[i+1] + glow * 255)
        od[i+2] = Math.min(255, d[i+2] + glow * 255)
        od[i+3] = 255
      }
    }
    ctx.putImageData(out, 0, 0)
  }

  updateParams(p) { this.params = { ...this.params, ...p }; this.render() }
}
