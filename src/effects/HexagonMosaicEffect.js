import { MosaicEffect } from './MosaicBase.js'

/**
 * Hexagon Mosaic - 六边形马赛克
 */
export class HexagonMosaicEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { intensity: 50 }
  }

  apply() {
    const { ctx, canvas, sourceImage } = this
    const W = canvas.width, H = canvas.height
    const size = Math.max(6, Math.round((this.params.intensity / 100) * 60) + 6)

    const tmp = document.createElement('canvas')
    tmp.width = W; tmp.height = H
    const tctx = tmp.getContext('2d')
    tctx.drawImage(sourceImage, 0, 0, W, H)
    const imgData = tctx.getImageData(0, 0, W, H).data

    ctx.clearRect(0, 0, W, H)

    const hexW = size * 2
    const hexH = Math.sqrt(3) * size
    const colStep = hexW * 0.75
    const rowStep = hexH

    const cols = Math.ceil(W / colStep) + 1
    const rows = Math.ceil(H / rowStep) + 1

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const offset = (col % 2 === 0) ? 0 : hexH / 2
        const cx = col * colStep
        const cy = row * rowStep + offset

        const [r, g, b] = this.getAvgColor(imgData, cx - size, cy - size, size * 2, size * 2, W, H)
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i - Math.PI / 6
          const px = cx + size * Math.cos(angle)
          const py = cy + size * Math.sin(angle)
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.fillStyle = `rgb(${r|0},${g|0},${b|0})`
        ctx.fill()

        // 细描边
        ctx.strokeStyle = 'rgba(0,0,0,0.2)'
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }
  }
}
