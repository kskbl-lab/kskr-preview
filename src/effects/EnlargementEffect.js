import { MosaicEffect } from './MosaicBase.js'

/**
 * EnlargementEffect - 局部放大（圆形/方形放大镜）
 * 参数: shape(0=circle,1=square), centerX(0-1), centerY(0-1),
 *       magnification(50-400), size(0-300), feather(0-100)
 */
export class EnlargementEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { shape: 0, centerX: 0.5, centerY: 0.5, magnification: 108, size: 154, feather: 71 }
  }

  apply() {
    const { width, height } = this.canvas
    const ctx = this.ctx
    const src = ctx.getImageData(0, 0, width, height)
    const d   = src.data
    const out = new Uint8ClampedArray(d)  // copy original

    const cx      = this.params.centerX * width
    const cy      = this.params.centerY * height
    const radius  = this.params.size / 100 * Math.min(width, height) * 0.5
    const scale   = this.params.magnification / 100
    const feather = this.params.feather / 100
    const isCircle = Math.round(this.params.shape) === 0

    const bilinear = (sx, sy) => {
      const x0 = Math.floor(sx), y0 = Math.floor(sy)
      const x1 = Math.min(width - 1, x0 + 1)
      const y1 = Math.min(height - 1, y0 + 1)
      const fx = sx - x0, fy = sy - y0
      const px0 = Math.max(0, x0), py0 = Math.max(0, y0)
      const px1 = Math.min(width-1, x1), py1 = Math.min(height-1, y1)
      const i00 = (py0*width+px0)*4, i10 = (py0*width+px1)*4
      const i01 = (py1*width+px0)*4, i11 = (py1*width+px1)*4
      return [
        d[i00]*(1-fx)*(1-fy) + d[i10]*fx*(1-fy) + d[i01]*(1-fx)*fy + d[i11]*fx*fy,
        d[i00+1]*(1-fx)*(1-fy) + d[i10+1]*fx*(1-fy) + d[i01+1]*(1-fx)*fy + d[i11+1]*fx*fy,
        d[i00+2]*(1-fx)*(1-fy) + d[i10+2]*fx*(1-fy) + d[i01+2]*(1-fx)*fy + d[i11+2]*fx*fy,
        255
      ]
    }

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const dx = x - cx, dy = y - cy
        let norm = 0
        if (isCircle) {
          const dist = Math.sqrt(dx*dx + dy*dy)
          norm = dist / radius
        } else {
          norm = Math.max(Math.abs(dx), Math.abs(dy)) / radius
        }

        if (norm > 1) continue  // outside lens

        // feather blend factor (1=full magnification, 0=original)
        const featherStart = 1 - feather
        const blend = norm < featherStart ? 1 : 1 - (norm - featherStart) / (feather + 0.001)

        // Source position with inverse magnification mapping
        const invScale = 1 / scale
        const sx = cx + dx * invScale
        const sy = cy + dy * invScale

        const [mr, mg, mb] = bilinear(sx, sy)
        const i  = (y * width + x) * 4
        const or = out[i], og = out[i+1], ob = out[i+2]

        out[i]   = Math.round(mr * blend + or * (1 - blend))
        out[i+1] = Math.round(mg * blend + og * (1 - blend))
        out[i+2] = Math.round(mb * blend + ob * (1 - blend))
        out[i+3] = 255
      }
    }

    const imgData = ctx.createImageData(width, height)
    imgData.data.set(out)
    ctx.putImageData(imgData, 0, 0)
  }

  updateParams(p) { this.params = { ...this.params, ...p }; this.render() }
}
