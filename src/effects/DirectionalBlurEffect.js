import { MosaicEffect } from './MosaicBase.js'

/**
 * Directional Blur - AE 定向模糊
 * 参数：length（模糊长度），direction（模糊方向，角度 0-360）
 */
export class DirectionalBlurEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { length: 30, direction: 0 }
  }

  apply() {
    const { ctx, canvas, sourceImage } = this
    const W = canvas.width, H = canvas.height
    const { length, direction } = this.params

    const passes = Math.max(1, Math.round((length / 100) * 30))
    const rad = (direction * Math.PI) / 180
    const dx = Math.cos(rad)
    const dy = Math.sin(rad)
    const stepLen = (length / 100) * Math.max(W, H) * 0.15

    ctx.clearRect(0, 0, W, H)
    ctx.globalAlpha = 1 / passes

    for (let i = 0; i < passes; i++) {
      const t = (i / (passes - 1 || 1) - 0.5) * 2  // -1 ~ 1
      const ox = dx * t * stepLen
      const oy = dy * t * stepLen
      ctx.drawImage(sourceImage, ox, oy, W, H)
    }

    ctx.globalAlpha = 1
  }
}
