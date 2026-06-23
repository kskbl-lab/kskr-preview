import { MosaicEffect } from './MosaicBase.js'

/**
 * Colorful Mosaic III - 三角形彩色马赛克（Delaunay 风格）
 * 三角形拼接，颜色鲜艳
 */
export class ColorfulMosaic3Effect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { intensity: 50 }
    this._cachedSize = -1
    this._triangles = null
  }

  _hash(x, y, t) {
    let n = Math.sin(x * 127.1 + y * 311.7 + t * 74.3) * 43758.5453
    return n - Math.floor(n)
  }

  apply() {
    const { ctx, canvas, sourceImage } = this
    const W = canvas.width, H = canvas.height
    const cellSize = Math.max(8, Math.round((this.params.intensity / 100) * 60) + 10)

    const tmp = document.createElement('canvas')
    tmp.width = W; tmp.height = H
    const tctx = tmp.getContext('2d')
    tctx.drawImage(sourceImage, 0, 0, W, H)
    const imgData = tctx.getImageData(0, 0, W, H).data

    if (this._cachedSize !== cellSize) {
      this._triangles = this._genTriangles(W, H, cellSize)
      this._cachedSize = cellSize
    }

    ctx.clearRect(0, 0, W, H)
    for (const tri of this._triangles) {
      const cx = (tri[0] + tri[2] + tri[4]) / 3
      const cy = (tri[1] + tri[3] + tri[5]) / 3
      const [r, g, b] = this.getAvgColor(imgData, cx - cellSize/2, cy - cellSize/2, cellSize, cellSize, W, H)
      const [rr, gg, bb] = this._boostSat(r, g, b, 1.8)
      ctx.beginPath()
      ctx.moveTo(tri[0], tri[1])
      ctx.lineTo(tri[2], tri[3])
      ctx.lineTo(tri[4], tri[5])
      ctx.closePath()
      ctx.fillStyle = `rgb(${rr|0},${gg|0},${bb|0})`
      ctx.fill()
    }
  }

  _genTriangles(W, H, s) {
    const tris = []
    const cols = Math.ceil(W / s) + 1
    const rows = Math.ceil(H / s) + 1
    // 生成带抖动的网格点
    const pts = []
    for (let row = 0; row <= rows; row++) {
      pts.push([])
      for (let col = 0; col <= cols; col++) {
        const jx = (this._hash(col, row, 0) - 0.5) * s * 0.7
        const jy = (this._hash(col, row, 1) - 0.5) * s * 0.7
        pts[row].push([col * s + jx, row * s + jy])
      }
    }
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const [ax, ay] = pts[row][col]
        const [bx, by] = pts[row][col + 1]
        const [cx, cy] = pts[row + 1][col]
        const [dx, dy] = pts[row + 1][col + 1]
        tris.push([ax, ay, bx, by, cx, cy])
        tris.push([bx, by, dx, dy, cx, cy])
      }
    }
    return tris
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
