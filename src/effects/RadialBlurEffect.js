import { MosaicEffect } from './MosaicBase.js'

/**
 * Radial Blur - AE 径向模糊
 * 支持旋转模糊（Spin）和缩放模糊（Zoom）两种模式
 * 参数：mode(0=旋转,1=缩放), intensity, center(0-100 x,y)
 */
export class RadialBlurEffect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = {
      mode: 0,       // 0=旋转模糊 1=缩放模糊
      intensity: 30,
      center: 50,    // 中心点位置 0-100 (x=y同步，可扩展)
    }
  }

  apply() {
    const { ctx, canvas, sourceImage } = this
    const W = canvas.width, H = canvas.height
    const { mode, intensity, center } = this.params

    const cx = (center / 100) * W
    const cy = (center / 100) * H
    const passes = Math.max(1, Math.round((intensity / 100) * 24))
    const maxAngle = (intensity / 100) * 0.08  // 旋转最大角度 rad
    const maxZoom = (intensity / 100) * 0.12   // 缩放最大倍率

    ctx.clearRect(0, 0, W, H)

    // 叠加多帧累积模拟模糊
    ctx.globalAlpha = 1 / passes
    for (let i = 0; i < passes; i++) {
      const t = (i / (passes - 1 || 1)) - 0.5  // -0.5 ~ 0.5

      ctx.save()
      ctx.translate(cx, cy)

      if (mode === 0) {
        // 旋转模糊
        ctx.rotate(t * maxAngle * 2)
      } else {
        // 缩放模糊
        const s = 1 + t * maxZoom * 2
        ctx.scale(s, s)
      }

      ctx.translate(-cx, -cy)
      ctx.drawImage(sourceImage, 0, 0, W, H)
      ctx.restore()
    }

    ctx.globalAlpha = 1
  }
}
