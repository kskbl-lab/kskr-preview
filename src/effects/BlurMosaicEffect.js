import { MosaicEffect } from './MosaicBase.js'

/**
 * Blur Mosaic - 模糊分块马赛克（区域高斯模糊）
 */
export class BlurMosaicEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { intensity: 50 }
  }

  apply() {
    const { ctx, canvas, sourceImage } = this
    const W = canvas.width, H = canvas.height
    const size = Math.max(4, Math.round((this.params.intensity / 100) * 80) + 4)
    const blurPasses = Math.round((this.params.intensity / 100) * 3) + 1

    ctx.clearRect(0, 0, W, H)
    // 绘制缩小再放大模拟模糊马赛克
    const tmp = document.createElement('canvas')
    const scale = Math.max(4, size)
    tmp.width = Math.max(1, Math.ceil(W / scale))
    tmp.height = Math.max(1, Math.ceil(H / scale))
    const tctx = tmp.getContext('2d')
    tctx.imageSmoothingEnabled = true
    tctx.imageSmoothingQuality = 'high'
    tctx.drawImage(sourceImage, 0, 0, tmp.width, tmp.height)

    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    ctx.drawImage(tmp, 0, 0, W, H)

    // 叠加模糊边界
    ctx.filter = `blur(${blurPasses * 2}px)`
    ctx.globalAlpha = 0.3
    ctx.drawImage(sourceImage, 0, 0, W, H)
    ctx.filter = 'none'
    ctx.globalAlpha = 1
  }
}
