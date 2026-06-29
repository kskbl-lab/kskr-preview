import { MosaicEffect } from './MosaicBase.js'

/**
 * Cartoon Effect - 卡通/动画渲染风格
 * 参数: render(0=FillOnly,1=EdgesOnly,2=FillAndEdges),
 *       detailRadius(1-30), detailThreshold(0-20),
 *       shadingSteps(2-16), shadingSmoothness(0-20),
 *       edgeThreshold(0-5), edgeWidth(0-8), edgeOpacity(0-1)
 */
export class CartoonEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = {
      render:           2,
      detailRadius:     10.6,
      detailThreshold:  10,
      shadingSteps:     10,
      shadingSmoothness:10,
      edgeThreshold:    1,
      edgeWidth:        2.5,
      edgeOpacity:      0.26,
    }
  }

  apply() {
    const { width, height } = this.canvas
    const ctx = this.ctx
    const src = ctx.getImageData(0, 0, width, height)
    const d   = src.data

    const steps  = Math.max(2, Math.round(this.params.shadingSteps))
    const smooth = this.params.shadingSmoothness * 0.5
    const edgeW  = Math.max(1, Math.round(this.params.edgeWidth))
    const edgeTh = this.params.edgeThreshold * 30
    const edgeOp = this.params.edgeOpacity
    const render = this.params.render

    // 1. Posterize (quantize colors into steps)
    const flat = new Uint8ClampedArray(d.length)
    for (let i = 0; i < d.length; i += 4) {
      for (let c = 0; c < 3; c++) {
        const v = d[i + c]
        const q = Math.round(v / 255 * (steps - 1)) / (steps - 1) * 255
        flat[i + c] = Math.min(255, q + (v - q) * smooth / (smooth + 5))
      }
      flat[i + 3] = 255
    }

    // 2. Simple edge detection via luminance Sobel
    const lum = new Float32Array(width * height)
    for (let i = 0; i < width * height; i++) {
      const pi = i * 4
      lum[i] = 0.299 * d[pi] + 0.587 * d[pi+1] + 0.114 * d[pi+2]
    }
    const edges = new Uint8ClampedArray(width * height) // 0=no edge, 255=edge
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const i = y * width + x
        const gx = -lum[i-width-1] + lum[i-width+1] - 2*lum[i-1] + 2*lum[i+1] - lum[i+width-1] + lum[i+width+1]
        const gy = -lum[i-width-1] - 2*lum[i-width] - lum[i-width+1] + lum[i+width-1] + 2*lum[i+width] + lum[i+width+1]
        edges[i] = Math.sqrt(gx*gx + gy*gy) > edgeTh ? 255 : 0
      }
    }

    // 3. Dilate edges by edgeW
    const dilated = new Uint8ClampedArray(edges.length)
    if (edgeW > 0) {
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let found = false
          for (let dy = -edgeW; dy <= edgeW && !found; dy++) {
            for (let dx = -edgeW; dx <= edgeW && !found; dx++) {
              const nx = x + dx, ny = y + dy
              if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                if (edges[ny * width + nx]) found = true
              }
            }
          }
          dilated[y * width + x] = found ? 255 : 0
        }
      }
    }

    // 4. Compose output
    const out = ctx.createImageData(width, height)
    const od  = out.data
    for (let i = 0; i < width * height; i++) {
      const pi = i * 4
      const isEdge = dilated[i] > 0

      if (render === 0) {
        // Fill only
        od[pi] = flat[pi]; od[pi+1] = flat[pi+1]; od[pi+2] = flat[pi+2]; od[pi+3] = 255
      } else if (render === 1) {
        // Edges only
        const v = isEdge ? 0 : 255
        od[pi] = od[pi+1] = od[pi+2] = v; od[pi+3] = 255
      } else {
        // Fill + edges
        if (isEdge) {
          od[pi]   = Math.round(flat[pi]   * (1 - edgeOp))
          od[pi+1] = Math.round(flat[pi+1] * (1 - edgeOp))
          od[pi+2] = Math.round(flat[pi+2] * (1 - edgeOp))
        } else {
          od[pi] = flat[pi]; od[pi+1] = flat[pi+1]; od[pi+2] = flat[pi+2]
        }
        od[pi+3] = 255
      }
    }

    ctx.putImageData(out, 0, 0)
  }

  updateParams(p) {
    this.params = { ...this.params, ...p }
    this.render()
  }
}
