import { MosaicEffect } from './MosaicBase.js'

/**
 * Colorful Mosaic I - Voronoi 不规则多边形彩色马赛克
 * 类似 Crystallize 效果，边缘白色描边
 */
export class ColorfulMosaic1Effect extends MosaicEffect {
  constructor(canvas) {
    super(canvas)
    this.params = { intensity: 50 }
    this._cachedSeeds = null
    this._cachedSize = -1
  }

  apply() {
    const { ctx, canvas, sourceImage } = this
    const W = canvas.width, H = canvas.height
    const cellSize = Math.max(8, Math.round((this.params.intensity / 100) * 60) + 8)

    const tmp = document.createElement('canvas')
    tmp.width = W; tmp.height = H
    const tctx = tmp.getContext('2d')
    tctx.drawImage(sourceImage, 0, 0, W, H)
    const imgData = tctx.getImageData(0, 0, W, H).data

    // 生成 Voronoi 种子点
    if (this._cachedSize !== cellSize) {
      this._cachedSeeds = this._genSeeds(W, H, cellSize)
      this._cachedSize = cellSize
    }
    const seeds = this._cachedSeeds

    // 预计算每个种子的颜色
    const colors = seeds.map(([sx, sy]) => {
      const [r, g, b] = this.getAvgColor(imgData, sx - cellSize/2, sy - cellSize/2, cellSize, cellSize, W, H)
      return [r|0, g|0, b|0]
    })

    // 为每个像素找最近种子（采样绘制多边形替代逐像素）
    ctx.clearRect(0, 0, W, H)
    this._drawVoronoi(ctx, seeds, colors, W, H, cellSize)
  }

  _genSeeds(W, H, cellSize) {
    const seeds = []
    const cols = Math.ceil(W / cellSize) + 1
    const rows = Math.ceil(H / cellSize) + 1
    // 固定随机（基于网格）
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const jitter = cellSize * 0.7
        const sx = col * cellSize + (this._hash(col, row, 0) - 0.5) * jitter
        const sy = row * cellSize + (this._hash(col, row, 1) - 0.5) * jitter
        seeds.push([sx, sy])
      }
    }
    return seeds
  }

  _hash(x, y, t) {
    let n = Math.sin(x * 127.1 + y * 311.7 + t * 74.3) * 43758.5453
    return n - Math.floor(n)
  }

  _drawVoronoi(ctx, seeds, colors, W, H, cellSize) {
    // 简化：对每个网格格子画凸多边形近似
    const step = Math.max(1, Math.ceil(cellSize / 2))
    const outCanvas = document.createElement('canvas')
    outCanvas.width = W; outCanvas.height = H
    const oc = outCanvas.getContext('2d')
    const outData = oc.createImageData(W, H)
    const d = outData.data

    // 逐像素找最近种子（仅在采样网格上）
    for (let py = 0; py < H; py++) {
      for (let px = 0; px < W; px++) {
        let minDist = Infinity, minIdx = 0
        // 只搜索附近几个种子（加速）
        const gi = Math.round(px / cellSize)
        const gj = Math.round(py / cellSize)
        const cols = Math.ceil(W / cellSize) + 1
        for (let dj = -2; dj <= 2; dj++) {
          for (let di = -2; di <= 2; di++) {
            const ni = gi + di, nj = gj + dj
            if (ni < 0 || nj < 0 || ni >= Math.ceil(W/cellSize)+1 || nj >= Math.ceil(H/cellSize)+1) continue
            const idx = nj * (Math.ceil(W/cellSize)+1) + ni
            if (idx < 0 || idx >= seeds.length) continue
            const [sx, sy] = seeds[idx]
            const dist = (px - sx) ** 2 + (py - sy) ** 2
            if (dist < minDist) { minDist = dist; minIdx = idx }
          }
        }
        const [r, g, b] = colors[minIdx]
        const i = (py * W + px) * 4
        d[i] = r; d[i+1] = g; d[i+2] = b; d[i+3] = 255
      }
    }
    oc.putImageData(outData, 0, 0)

    // 画到主 canvas 并加白色网格描边
    ctx.drawImage(outCanvas, 0, 0)

    // 描边（检测边界）
    const edgeData = oc.getImageData(0, 0, W, H).data
    const edgeCanvas = document.createElement('canvas')
    edgeCanvas.width = W; edgeCanvas.height = H
    const ec = edgeCanvas.getContext('2d')
    const eOut = ec.createImageData(W, H)
    const ed = eOut.data

    for (let py = 1; py < H - 1; py++) {
      for (let px = 1; px < W - 1; px++) {
        const i = (py * W + px) * 4
        const ir = (py * W + px + 1) * 4
        const ib = ((py + 1) * W + px) * 4
        const isEdge = edgeData[i] !== edgeData[ir] || edgeData[i+1] !== edgeData[ir+1] ||
                       edgeData[i] !== edgeData[ib] || edgeData[i+1] !== edgeData[ib+1]
        if (isEdge) { ed[i] = 255; ed[i+1] = 255; ed[i+2] = 255; ed[i+3] = 200 }
      }
    }
    ec.putImageData(eOut, 0, 0)
    ctx.drawImage(edgeCanvas, 0, 0)
  }
}
