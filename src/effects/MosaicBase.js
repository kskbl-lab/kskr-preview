/**
 * MosaicEffect - 通用马赛克基类
 * 所有马赛克插件继承此类
 */
export class MosaicEffect {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.sourceImage = null
    this.params = {}
    this.animFrame = null
    this.isAnimating = false
  }

  loadImage(img) {
    this.sourceImage = img
    this.canvas.width = img.naturalWidth || img.width
    this.canvas.height = img.naturalHeight || img.height
    this.render()
  }

  updateParams(p) {
    this.params = { ...this.params, ...p }
    this.render()
  }

  render() {
    if (!this.sourceImage) return
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.drawImage(this.sourceImage, 0, 0, this.canvas.width, this.canvas.height)
    this.apply()
  }

  apply() {}

  destroy() {
    if (this.animFrame) cancelAnimationFrame(this.animFrame)
  }

  // 工具：从原图获取区域平均色
  getAvgColor(imgData, x, y, w, h, canvasW, canvasH) {
    let r = 0, g = 0, b = 0, a = 0, count = 0
    const x0 = Math.max(0, Math.floor(x))
    const y0 = Math.max(0, Math.floor(y))
    const x1 = Math.min(canvasW - 1, Math.floor(x + w))
    const y1 = Math.min(canvasH - 1, Math.floor(y + h))
    for (let py = y0; py <= y1; py++) {
      for (let px = x0; px <= x1; px++) {
        const i = (py * canvasW + px) * 4
        r += imgData[i]; g += imgData[i+1]; b += imgData[i+2]; a += imgData[i+3]
        count++
      }
    }
    if (count === 0) return [0, 0, 0, 255]
    return [r/count, g/count, b/count, a/count]
  }
}
