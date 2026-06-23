import { MosaicEffect } from './MosaicBase.js'

/**
 * Basic Mosaic - 方形像素马赛克
 */
export class BasicMosaicEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { intensity: 50 }
  }

  apply() {
    const { ctx, canvas, sourceImage } = this
    const W = canvas.width, H = canvas.height
    const size = Math.max(2, Math.round((this.params.intensity / 100) * 60) + 2)

    const tmp = document.createElement('canvas')
    tmp.width = W; tmp.height = H
    const tctx = tmp.getContext('2d')
    tctx.drawImage(sourceImage, 0, 0, W, H)
    const imgData = tctx.getImageData(0, 0, W, H).data

    ctx.clearRect(0, 0, W, H)
    for (let y = 0; y < H; y += size) {
      for (let x = 0; x < W; x += size) {
        const [r, g, b, a] = this.getAvgColor(imgData, x, y, size - 1, size - 1, W, H)
        ctx.fillStyle = `rgba(${r|0},${g|0},${b|0},${a/255})`
        ctx.fillRect(x, y, size, size)
      }
    }
  }
}
