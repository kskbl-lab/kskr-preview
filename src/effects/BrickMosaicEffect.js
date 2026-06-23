import { MosaicEffect } from './MosaicBase.js'

/**
 * Brick Mosaic - 乐高砖块马赛克
 * 每块方块中心绘制一个圆形凸起
 */
export class BrickMosaicEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { intensity: 50 }
  }

  apply() {
    const { ctx, canvas, sourceImage } = this
    const W = canvas.width, H = canvas.height
    const size = Math.max(4, Math.round((this.params.intensity / 100) * 56) + 8)

    const tmp = document.createElement('canvas')
    tmp.width = W; tmp.height = H
    const tctx = tmp.getContext('2d')
    tctx.drawImage(sourceImage, 0, 0, W, H)
    const imgData = tctx.getImageData(0, 0, W, H).data

    ctx.clearRect(0, 0, W, H)

    for (let y = 0; y < H; y += size) {
      for (let x = 0; x < W; x += size) {
        const [r, g, b] = this.getAvgColor(imgData, x, y, size - 1, size - 1, W, H)
        const ri = r | 0, gi = g | 0, bi = b | 0

        // 砖块底色
        ctx.fillStyle = `rgb(${ri},${gi},${bi})`
        ctx.fillRect(x, y, size, size)

        // 暗边（右下）
        ctx.fillStyle = `rgba(0,0,0,0.35)`
        ctx.fillRect(x + size - 2, y, 2, size)
        ctx.fillRect(x, y + size - 2, size, 2)

        // 亮边（左上）
        ctx.fillStyle = `rgba(255,255,255,0.2)`
        ctx.fillRect(x, y, size - 2, 2)
        ctx.fillRect(x, y, 2, size - 2)

        // 中心圆点
        const cx = x + size / 2
        const cy = y + size / 2
        const cr = size * 0.28

        const grad = ctx.createRadialGradient(cx - cr * 0.3, cy - cr * 0.3, cr * 0.1, cx, cy, cr)
        grad.addColorStop(0, `rgba(255,255,255,0.5)`)
        grad.addColorStop(0.5, `rgba(${ri},${gi},${bi},0.9)`)
        grad.addColorStop(1, `rgba(0,0,0,0.3)`)
        ctx.beginPath()
        ctx.arc(cx, cy, cr, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }
    }
  }
}
