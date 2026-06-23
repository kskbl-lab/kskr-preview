import { MosaicEffect } from './MosaicBase.js'

/**
 * Glass Mosaic I - 玻璃格扭曲马赛克
 * 每格内容做反射/扭曲处理，带高光和描边
 */
export class GlassMosaic1Effect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { intensity: 50 }
  }

  apply() {
    const { ctx, canvas, sourceImage } = this
    const W = canvas.width, H = canvas.height
    const size = Math.max(20, Math.round((this.params.intensity / 100) * 120) + 20)

    const offscreen = document.createElement('canvas')
    offscreen.width = W; offscreen.height = H
    const oc = offscreen.getContext('2d')
    oc.drawImage(sourceImage, 0, 0, W, H)

    ctx.clearRect(0, 0, W, H)

    for (let y = 0; y < H; y += size) {
      for (let x = 0; x < W; x += size) {
        const tw = Math.min(size, W - x)
        const th = Math.min(size, H - y)

        ctx.save()
        ctx.beginPath()
        ctx.rect(x, y, tw, th)
        ctx.clip()

        // 图像内容（稍微缩放+翻转模拟玻璃反射）
        ctx.transform(1.08, 0.04, -0.04, 1.08, x - x * 0.08 + tw * 0.02, y - y * 0.08 + th * 0.02)
        ctx.drawImage(offscreen, 0, 0, W, H)
        ctx.setTransform(1, 0, 0, 1, 0, 0)

        // 高光
        const hl = ctx.createLinearGradient(x, y, x + tw, y + th)
        hl.addColorStop(0, 'rgba(255,255,255,0.18)')
        hl.addColorStop(0.4, 'rgba(255,255,255,0.04)')
        hl.addColorStop(1, 'rgba(0,0,0,0.12)')
        ctx.fillStyle = hl
        ctx.fillRect(x, y, tw, th)

        ctx.restore()

        // 描边
        ctx.strokeStyle = 'rgba(0,0,0,0.6)'
        ctx.lineWidth = 1
        ctx.strokeRect(x + 0.5, y + 0.5, tw - 1, th - 1)
      }
    }
  }
}
