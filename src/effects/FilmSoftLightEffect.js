import { MosaicEffect } from './MosaicBase.js'

/**
 * FilmSoftLight Effect - 胶片柔光
 * 参数: lightColor(0-100 色相偏移), lightRange(0-100 扩散范围), lightIntensity(0-100 亮度)
 */
export class FilmSoftLightEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { lightColor: 50, lightRange: 73, lightIntensity: 50 }
  }

  apply() {
    const { width, height } = this.canvas
    const ctx = this.ctx
    const src = ctx.getImageData(0, 0, width, height)
    const d   = src.data
    const out = ctx.createImageData(width, height)
    const od  = out.data

    const intensity = this.params.lightIntensity / 100  // 0-1
    const range     = this.params.lightRange / 100       // 0-1 (扩散半径占图像比例)
    const colorHue  = this.params.lightColor / 100       // 0-1 => 色调偏移

    // 光源中心（中央）
    const cx = width  * 0.5
    const cy = height * 0.5
    // 光斑半径
    const radius = Math.max(width, height) * range * 0.8

    // 光色 (hue 偏移映射到暖橙~冷蓝)
    // colorHue=0 → 冷白蓝, 0.5 → 中性, 1 → 暖黄橙
    const lr = 200 + colorHue * 55          // 200~255
    const lg = 180 + (1 - Math.abs(colorHue - 0.5) * 2) * 40  // 180~220
    const lb = 255 - colorHue * 80          // 175~255

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4
        const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)

        // Gaussian glow falloff
        const glow = Math.exp(-(dist * dist) / (2 * radius * radius)) * intensity * 1.2

        // Soft light blend: original + glow overlay
        const r0 = d[i], g0 = d[i+1], b0 = d[i+2]

        // Soft light formula: C_out = 2*Cb*Cs + Cb²*(1-2Cs)
        const cs_r = Math.min(1, glow * lr / 255)
        const cs_g = Math.min(1, glow * lg / 255)
        const cs_b = Math.min(1, glow * lb / 255)
        const cb_r = r0 / 255, cb_g = g0 / 255, cb_b = b0 / 255

        const softR = (2 * cb_r * cs_r + cb_r * cb_r * (1 - 2 * cs_r)) * 255
        const softG = (2 * cb_g * cs_g + cb_g * cb_g * (1 - 2 * cs_g)) * 255
        const softB = (2 * cb_b * cs_b + cb_b * cb_b * (1 - 2 * cs_b)) * 255

        od[i]   = Math.min(255, Math.max(0, r0 + (softR - r0) * glow * 2))
        od[i+1] = Math.min(255, Math.max(0, g0 + (softG - g0) * glow * 2))
        od[i+2] = Math.min(255, Math.max(0, b0 + (softB - b0) * glow * 2))
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
