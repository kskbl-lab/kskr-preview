import { MosaicEffect } from './MosaicBase.js'

/**
 * Glass Mosaic II - 玻璃格马赛克（更强的折射+圆角磨砂质感）
 */
export class GlassMosaic2Effect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { intensity: 50 }
  }

  apply() {
    const { ctx, canvas, sourceImage } = this
    const W = canvas.width, H = canvas.height
    const size = Math.max(16, Math.round((this.params.intensity / 100) * 100) + 16)
    const radius = size * 0.12

    const offscreen = document.createElement('canvas')
    offscreen.width = W; offscreen.height = H
    const oc = offscreen.getContext('2d')
    oc.drawImage(sourceImage, 0, 0, W, H)
    const imgData = oc.getImageData(0, 0, W, H).data

    ctx.clearRect(0, 0, W, H)
    // 先绘制底层模糊原图
    ctx.filter = 'blur(2px)'
    ctx.drawImage(sourceImage, 0, 0, W, H)
    ctx.filter = 'none'

    for (let y = 0; y < H; y += size) {
      for (let x = 0; x < W; x += size) {
        const tw = Math.min(size, W - x)
        const th = Math.min(size, H - y)
        const cx = x + tw / 2, cy = y + th / 2

        ctx.save()
        // 圆角裁剪
        ctx.beginPath()
        this._roundRect(ctx, x + 1, y + 1, tw - 2, th - 2, radius)
        ctx.clip()

        // 折射偏移
        const offsetX = Math.sin((cx / W) * Math.PI * 2) * size * 0.15
        const offsetY = Math.cos((cy / H) * Math.PI * 2) * size * 0.15
        ctx.drawImage(offscreen, offsetX, offsetY, W, H)

        // 磨砂叠加
        ctx.fillStyle = 'rgba(255,255,255,0.06)'
        ctx.fillRect(x, y, tw, th)

        // 上边高光
        const hl = ctx.createLinearGradient(x, y, x, y + th * 0.4)
        hl.addColorStop(0, 'rgba(255,255,255,0.25)')
        hl.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = hl
        ctx.fillRect(x, y, tw, th * 0.4)

        ctx.restore()

        // 边框
        ctx.save()
        ctx.beginPath()
        this._roundRect(ctx, x + 0.5, y + 0.5, tw - 1, th - 1, radius)
        ctx.strokeStyle = 'rgba(255,255,255,0.25)'
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.restore()
      }
    }
  }

  _roundRect(ctx, x, y, w, h, r) {
    ctx.moveTo(x + r, y)
    ctx.lineTo(x + w - r, y)
    ctx.quadraticCurveTo(x + w, y, x + w, y + r)
    ctx.lineTo(x + w, y + h - r)
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
    ctx.lineTo(x + r, y + h)
    ctx.quadraticCurveTo(x, y + h, x, y + h - r)
    ctx.lineTo(x, y + r)
    ctx.quadraticCurveTo(x, y, x + r, y)
    ctx.closePath()
  }
}
