import { MosaicEffect } from './MosaicBase.js'

/**
 * Colorful Mosaic II - 彩色圆形气泡马赛克
 * 不规则大小的圆形色块，颜色加了随机饱和度增强
 */
export class ColorfulMosaic2Effect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { intensity: 50 }
    this._seeds = null
    this._cachedSize = -1
  }

  _hash(x, y, t) {
    let n = Math.sin(x * 127.1 + y * 311.7 + t * 74.3) * 43758.5453
    return n - Math.floor(n)
  }

  apply() {
    const { ctx, canvas, sourceImage } = this
    const W = canvas.width, H = canvas.height
    const cellSize = Math.max(6, Math.round((this.params.intensity / 100) * 50) + 6)

    const tmp = document.createElement('canvas')
    tmp.width = W; tmp.height = H
    const tctx = tmp.getContext('2d')
    tctx.drawImage(sourceImage, 0, 0, W, H)
    const imgData = tctx.getImageData(0, 0, W, H).data

    if (this._cachedSize !== cellSize) {
      this._seeds = []
      const cols = Math.ceil(W / cellSize) + 1
      const rows = Math.ceil(H / cellSize) + 1
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const jitter = cellSize * 0.65
          const sx = col * cellSize + (this._hash(col, row, 0) - 0.5) * jitter
          const sy = row * cellSize + (this._hash(col, row, 1) - 0.5) * jitter
          const r = cellSize * (0.35 + this._hash(col, row, 2) * 0.3)
          this._seeds.push({ x: sx, y: sy, r })
        }
      }
      this._cachedSize = cellSize
    }

    // 黑色背景
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, W, H)

    for (const s of this._seeds) {
      const [r, g, b] = this.getAvgColor(imgData, s.x - s.r, s.y - s.r, s.r * 2, s.r * 2, W, H)
      // 增强饱和度
      const [rr, gg, bb] = this._boostSat(r, g, b, 1.5)
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgb(${rr|0},${gg|0},${bb|0})`
      ctx.fill()
    }
  }

  _boostSat(r, g, b, factor) {
    const max = Math.max(r, g, b), min = Math.min(r, g, b)
    const mid = (max + min) / 2
    return [
      Math.min(255, Math.max(0, mid + (r - mid) * factor)),
      Math.min(255, Math.max(0, mid + (g - mid) * factor)),
      Math.min(255, Math.max(0, mid + (b - mid) * factor)),
    ]
  }
}
