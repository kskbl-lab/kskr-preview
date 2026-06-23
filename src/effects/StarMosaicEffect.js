import { MosaicEffect } from './MosaicBase.js'

/**
 * Star Mosaic - 星形马赛克
 * 用星形图案铺满画面，每个星取采样区域颜色，整体有浮雕玻璃质感
 */
export class StarMosaicEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { intensity: 50 }
  }

  apply() {
    const { ctx, canvas, sourceImage } = this
    const W = canvas.width, H = canvas.height
    const size = Math.max(10, Math.round((this.params.intensity / 100) * 70) + 10)

    const tmp = document.createElement('canvas')
    tmp.width = W; tmp.height = H
    const tctx = tmp.getContext('2d')
    tctx.drawImage(sourceImage, 0, 0, W, H)
    const imgData = tctx.getImageData(0, 0, W, H).data

    // 底层：模糊原图
    ctx.clearRect(0, 0, W, H)
    ctx.filter = 'blur(4px) brightness(0.5)'
    ctx.drawImage(sourceImage, 0, 0, W, H)
    ctx.filter = 'none'

    const cols = Math.ceil(W / size) + 1
    const rows = Math.ceil(H / size) + 1

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cx = col * size + size / 2
        const cy = row * size + size / 2
        const [r, g, b] = this.getAvgColor(imgData, cx - size / 2, cy - size / 2, size, size, W, H)

        ctx.save()
        ctx.translate(cx, cy)

        // 星形路径
        ctx.beginPath()
        for (let i = 0; i < 10; i++) {
          const angle = (Math.PI / 5) * i - Math.PI / 2
          const radius = i % 2 === 0 ? size * 0.48 : size * 0.22
          const px = Math.cos(angle) * radius
          const py = Math.sin(angle) * radius
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.closePath()

        // 金属渐变填充
        const grad = ctx.createRadialGradient(-size * 0.15, -size * 0.15, 0, 0, 0, size * 0.5)
        grad.addColorStop(0, `rgba(${Math.min(255,(r|0)+60)},${Math.min(255,(g|0)+60)},${Math.min(255,(b|0)+60)},1)`)
        grad.addColorStop(0.5, `rgba(${r|0},${g|0},${b|0},0.9)`)
        grad.addColorStop(1, `rgba(${Math.max(0,(r|0)-40)},${Math.max(0,(g|0)-40)},${Math.max(0,(b|0)-40)},0.8)`)
        ctx.fillStyle = grad
        ctx.fill()

        // 描边
        ctx.strokeStyle = 'rgba(0,0,0,0.4)'
        ctx.lineWidth = 0.8
        ctx.stroke()

        ctx.restore()
      }
    }
  }
}
