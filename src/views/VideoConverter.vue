<template>
  <div class="converter-page">

    <!-- ─── 左侧控制面板 ─────────────────────── -->
    <div class="conv-panel">

      <!-- 头部 -->
      <div class="panel-header">
        <span class="panel-title">视频素材转换</span>
        <div class="header-actions">
          <button v-if="tasks.length" class="btn-ghost btn-xs" @click="clearDone" title="清除已完成">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
          </button>
          <button v-if="hasRunning" class="btn-ghost btn-xs btn-danger" @click="cancelAll">取消全部</button>
        </div>
      </div>

      <!-- 全局设置 -->
      <div class="global-settings">
        <div class="setting-title">输出设置</div>

        <!-- 输出模式 -->
        <div class="setting-row">
          <span class="setting-label">输出格式</span>
          <div class="mode-toggle">
            <button :class="{ active: globalMode === 'gif' }"  @click="globalMode = 'gif'">GIF 动图</button>
            <button :class="{ active: globalMode === 'png' }"  @click="globalMode = 'png'">PNG 序列帧</button>
            <button :class="{ active: globalMode === 'webm' }" @click="globalMode = 'webm'">WebM 视频</button>
          </div>
        </div>

        <!-- 帧率预设 -->
        <div class="setting-row">
          <span class="setting-label">帧率</span>
          <div class="fps-row">
            <div class="fps-presets">
              <button v-for="f in fpsPresets" :key="f" :class="{ active: globalFps === f }" @click="globalFps = f">{{ f }}<small>fps</small></button>
            </div>
            <div class="input-with-unit">
              <input type="number" v-model.number="globalFps" min="1" max="60" step="0.5" class="num-input-sm" />
              <span class="unit">fps</span>
            </div>
          </div>
        </div>

        <!-- 输出宽度 -->
        <div class="setting-row">
          <span class="setting-label">输出宽度</span>
          <div class="input-with-unit">
            <input type="number" v-model.number="globalWidth" min="64" max="3840" step="1" class="num-input" />
            <span class="unit">px &nbsp;(高度自动)</span>
          </div>
        </div>

        <!-- GIF 提示 -->
        <div v-if="globalMode === 'gif'" class="mode-hint">
          GIF 最多 256 色，颜色丰富的视频建议使用 PNG 序列帧
        </div>
      </div>

      <!-- 添加文件按钮 -->
      <div class="add-file-area">
        <input ref="fileInput" type="file" accept="video/mp4,video/quicktime,video/webm,.mp4,.mov,.webm" multiple style="display:none" @change="onFileChange" />
        <button class="btn-add" @click="fileInput.click()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          添加视频文件
        </button>
        <div class="add-hint">支持 MP4、MOV、WebM，可多选</div>
      </div>

      <!-- 任务列表 -->
      <div class="task-list" v-if="tasks.length">
        <div class="task-list-header">
          <span>任务队列 ({{ tasks.length }})</span>
          <button v-if="tasks.length > 1 && !hasRunning" class="btn-link" @click="startAll">全部开始</button>
        </div>

        <div
          v-for="task in tasks"
          :key="task.id"
          class="task-item"
          :class="'task-' + task.status"
          @click="selectTask(task)"
          :style="{ cursor: 'pointer', outline: selectedTaskId === task.id ? '1px solid var(--border-hover, #444)' : 'none' }"
        >
          <div class="task-name">{{ task.file.name }}</div>
          <div class="task-meta">
            {{ formatSize(task.file.size) }}
            <span v-if="task.duration"> · {{ formatDuration(task.duration) }}</span>
            <span class="task-badge" :class="'badge-' + task.status">{{ statusLabel(task.status) }}</span>
          </div>

          <!-- 进度条 -->
          <div v-if="task.status === 'running'" class="task-progress">
            <div class="prog-bar"><div class="prog-fill" :style="{ width: task.progress + '%' }"></div></div>
            <span class="prog-pct">{{ Math.round(task.progress) }}%</span>
          </div>

          <!-- 操作按钮 -->
          <div class="task-actions" @click.stop>
            <button v-if="task.status === 'idle' || task.status === 'error'" class="task-btn" @click="startTask(task)">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
            <button v-if="task.status === 'running'" class="task-btn btn-cancel" @click="cancelTask(task)">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>
            </button>
            <a v-if="task.downloadUrl" :href="task.downloadUrl" :download="task.downloadName" class="task-btn btn-dl" @click.stop>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </a>
            <button class="task-btn btn-remove" @click="removeTask(task)">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- 空态 -->
      <div v-else class="empty-hint">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
        <p>还没有任务，点击"添加视频文件"开始</p>
      </div>

    </div>

    <!-- ─── 右侧预览区 ─────────────────────── -->
    <div class="conv-preview" @dragover.prevent @drop.prevent="onDropGlobal">

      <!-- 无选中任务时的占位 -->
      <div v-if="!selectedTask" class="preview-placeholder">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
        <p>点击左侧任务可预览视频</p>
        <p class="placeholder-sub">或拖拽视频文件到此处添加</p>
      </div>

      <!-- 视频预览 -->
      <template v-if="selectedTask">
        <div class="video-preview-wrap">
          <video
            :key="selectedTask.id"
            :src="selectedTask.objectUrl"
            controls muted playsinline
            class="video-preview"
            @loadedmetadata="onVideoMeta($event, selectedTask)"
          ></video>
        </div>

        <!-- 任务详情 / 状态 -->
        <div class="status-area">
          <div class="status-header">
            <div class="status-row" :class="'status-' + selectedTask.status">
              <span class="status-dot"></span>
              <span class="status-text">{{ selectedTask.statusText || statusLabel(selectedTask.status) }}</span>
            </div>
            <div class="task-info-badges">
              <span class="info-badge">{{ globalMode.toUpperCase() }}</span>
              <span class="info-badge">{{ globalFps }} fps</span>
              <span class="info-badge">{{ globalWidth }}px</span>
            </div>
          </div>

          <!-- 进度条 -->
          <div v-if="selectedTask.status === 'running'" class="progress-wrap">
            <div class="progress-bar"><div class="progress-fill" :style="{ width: selectedTask.progress + '%' }"></div></div>
            <span class="progress-pct">{{ Math.round(selectedTask.progress) }}%</span>
          </div>

          <!-- 错误 -->
          <div v-if="selectedTask.errorMsg" class="error-msg">{{ selectedTask.errorMsg }}</div>

          <!-- 文件信息 -->
          <div class="file-info-inline">
            <span>{{ selectedTask.file.name }}</span>
            <span>{{ formatSize(selectedTask.file.size) }}</span>
            <span v-if="selectedTask.duration">{{ formatDuration(selectedTask.duration) }}</span>
            <span v-if="selectedTask.origW">{{ selectedTask.origW }} × {{ selectedTask.origH }}</span>
          </div>

          <!-- 操作按钮行 -->
          <div class="action-row">
            <button v-if="selectedTask.status === 'idle' || selectedTask.status === 'error'"
              class="btn-convert" @click="startTask(selectedTask)">
              开始转换
            </button>
            <button v-if="selectedTask.status === 'running'"
              class="btn-cancel-big" @click="cancelTask(selectedTask)">
              取消转换
            </button>
            <a v-if="selectedTask.downloadUrl"
              :href="selectedTask.downloadUrl" :download="selectedTask.downloadName"
              class="btn-download">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              下载 {{ selectedTask.downloadName }}
            </a>
          </div>
        </div>
      </template>

    </div>

    <!-- 隐藏 canvas -->
    <canvas ref="offCanvas" style="display:none"></canvas>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import JSZip from 'jszip'

// ─── 全局设置 ────────────────────────────────
const globalMode  = ref('gif')
const globalFps   = ref(24)
const globalWidth = ref(960)
const fpsPresets  = [12, 16, 24, 30]

// ─── 任务队列 ────────────────────────────────
const tasks         = ref([])
const selectedTaskId = ref(null)
const fileInput     = ref(null)
const offCanvas     = ref(null)
let taskIdCounter   = 0

const selectedTask = computed(() => tasks.value.find(t => t.id === selectedTaskId.value) || null)
const hasRunning   = computed(() => tasks.value.some(t => t.status === 'running'))

// ─── 文件加载 ────────────────────────────────
function onFileChange(e) {
  addFiles(Array.from(e.target.files || []))
  e.target.value = ''
}

function onDropGlobal(e) {
  const files = Array.from(e.dataTransfer?.files || []).filter(f => /\.(mp4|mov|webm)$/i.test(f.name))
  if (files.length) addFiles(files)
}

function addFiles(files) {
  for (const file of files) {
    const allowed = /\.(mp4|mov|webm)$/i.test(file.name)
    if (!allowed) continue
    if (file.size > 500 * 1024 * 1024) continue

    const task = {
      id: ++taskIdCounter,
      file,
      objectUrl: URL.createObjectURL(file),
      status: 'idle',       // idle | running | done | error | cancelled
      statusText: '等待开始',
      progress: 0,
      duration: 0,
      origW: 0,
      origH: 0,
      downloadUrl: '',
      downloadName: '',
      errorMsg: '',
      cancelled: false,
      // 快照当前设置，转换时使用
      mode: globalMode.value,
      fps: globalFps.value,
      width: globalWidth.value,
    }
    tasks.value.push(task)
    if (!selectedTaskId.value) selectedTaskId.value = task.id
  }
}

function selectTask(task) { selectedTaskId.value = task.id }

function removeTask(task) {
  if (task.status === 'running') task.cancelled = true
  URL.revokeObjectURL(task.objectUrl)
  if (task.downloadUrl) URL.revokeObjectURL(task.downloadUrl)
  tasks.value = tasks.value.filter(t => t.id !== task.id)
  if (selectedTaskId.value === task.id) {
    selectedTaskId.value = tasks.value[0]?.id || null
  }
}

function clearDone() {
  tasks.value.filter(t => t.status === 'done' || t.status === 'cancelled').forEach(t => {
    URL.revokeObjectURL(t.objectUrl)
    if (t.downloadUrl) URL.revokeObjectURL(t.downloadUrl)
  })
  tasks.value = tasks.value.filter(t => t.status !== 'done' && t.status !== 'cancelled')
}

function cancelAll() {
  tasks.value.forEach(t => { if (t.status === 'running') t.cancelled = true })
}

async function startAll() {
  for (const t of tasks.value) {
    if (t.status === 'idle' || t.status === 'error') {
      await startTask(t)
    }
  }
}

// ─── 视频元数据 ──────────────────────────────
function onVideoMeta(e, task) {
  const v = e.target
  task.duration = v.duration
  task.origW    = v.videoWidth
  task.origH    = v.videoHeight
  if (!task.width || task.width === 960) task.width = v.videoWidth || 960
}

// ─── 转换入口 ────────────────────────────────
async function startTask(task) {
  if (task.status === 'running') return

  // 用启动时的全局设置快照
  task.mode  = globalMode.value
  task.fps   = globalFps.value
  task.width = globalWidth.value

  task.cancelled  = false
  task.status     = 'running'
  task.progress   = 0
  task.errorMsg   = ''
  task.statusText = '正在转换…'
  if (task.downloadUrl) { URL.revokeObjectURL(task.downloadUrl); task.downloadUrl = '' }

  const canvas = offCanvas.value
  if (!canvas) { taskError(task, '画布初始化失败'); return }

  // 需要先拿到 video 元素 —— 通过隐藏 video 加载
  const video = await loadVideoEl(task.objectUrl)
  if (!video) { taskError(task, '视频加载失败'); return }

  task.duration = task.duration || video.duration
  task.origW    = task.origW    || video.videoWidth
  task.origH    = task.origH    || video.videoHeight

  const w = task.width
  const h = task.origH ? Math.round(w * task.origH / task.origW) : Math.round(w * 9/16)
  canvas.width  = w
  canvas.height = h
  const ctx = canvas.getContext('2d')

  const duration     = video.duration
  const interval     = 1 / task.fps
  const totalFrames  = Math.ceil(duration * task.fps)

  if (totalFrames > 1500) { taskError(task, `帧数过多 (${totalFrames})，请降低帧率（建议 ≤ 30fps × 时长）`); return }

  try {
    if (task.mode === 'gif') {
      await convertToGif(task, video, canvas, ctx, duration, interval, totalFrames, w, h)
    } else if (task.mode === 'png') {
      await convertToPng(task, video, canvas, ctx, duration, interval, totalFrames, w, h)
    } else {
      await convertToWebM(task, video, canvas, ctx, duration, interval, totalFrames, w, h)
    }
  } catch (err) {
    if (!task.cancelled) taskError(task, '转换失败：' + (err?.message || String(err)))
    else { task.status = 'cancelled'; task.statusText = '已取消' }
  }
}

// ─── 加载隐藏 video ──────────────────────────
function loadVideoEl(src) {
  return new Promise((resolve) => {
    const v = document.createElement('video')
    v.muted    = true
    v.preload  = 'metadata'
    v.src      = src
    v.onloadeddata = () => resolve(v)
    v.onerror  = () => resolve(null)
    v.load()
  })
}

// ─── GIF 转换 ────────────────────────────────
async function convertToGif(task, video, canvas, ctx, duration, interval, totalFrames, w, h) {
  const delay = Math.round(1000 / task.fps)
  const frames = []

  for (let i = 0; i < totalFrames; i++) {
    if (task.cancelled) throw new Error('cancelled')
    const t = i * interval
    await seekTo(video, Math.min(t, duration - 0.001))
    ctx.drawImage(video, 0, 0, w, h)
    const imageData = ctx.getImageData(0, 0, w, h)
    frames.push(imageData)
    task.progress   = Math.round((i + 1) / totalFrames * 80)
    task.statusText = `采集帧 ${i+1} / ${totalFrames}`
    if (i % 3 === 0) await sleep(0)
  }

  if (task.cancelled) throw new Error('cancelled')
  task.statusText = '正在编码 GIF…'

  const gifBlob = await encodeGif(frames, w, h, delay, (p) => {
    task.progress = 80 + Math.round(p * 20)
  })

  if (task.cancelled) throw new Error('cancelled')
  finishTask(task, gifBlob, stripExt(task.file.name) + '.gif', `GIF 完成，共 ${totalFrames} 帧`)
}

// ─── PNG zip ─────────────────────────────────
async function convertToPng(task, video, canvas, ctx, duration, interval, totalFrames, w, h) {
  const zip    = new JSZip()
  const folder = zip.folder('frames')

  for (let i = 0; i < totalFrames; i++) {
    if (task.cancelled) throw new Error('cancelled')
    const t = i * interval
    await seekTo(video, Math.min(t, duration - 0.001))
    ctx.drawImage(video, 0, 0, w, h)
    const blob = await canvasToBlob(canvas, 'image/png')
    folder.file(`frame_${String(i+1).padStart(4,'0')}.png`, blob)
    task.progress   = Math.round((i + 1) / totalFrames * 80)
    task.statusText = `导出帧 ${i+1} / ${totalFrames}`
    if (i % 5 === 0) await sleep(0)
  }

  if (task.cancelled) throw new Error('cancelled')
  task.statusText = '打包 ZIP…'
  const zipBlob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE' }, (m) => {
    task.progress = 80 + Math.round(m.percent * 0.2)
  })

  finishTask(task, zipBlob, stripExt(task.file.name) + '_frames.zip', `PNG 完成，共 ${totalFrames} 帧`)
}

// ─── WebM 录制 ───────────────────────────────
async function convertToWebM(task, video, canvas, ctx, duration, interval, totalFrames, w, h) {
  const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
    ? 'video/webm;codecs=vp9' : 'video/webm'
  const stream   = canvas.captureStream(task.fps)
  const chunks   = []
  const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 8_000_000 })
  recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data) }
  const recordDone = new Promise(resolve => { recorder.onstop = resolve })
  recorder.start()

  for (let i = 0; i < totalFrames; i++) {
    if (task.cancelled) { recorder.stop(); await recordDone; throw new Error('cancelled') }
    const t = i * interval
    await seekTo(video, Math.min(t, duration - 0.001))
    ctx.drawImage(video, 0, 0, w, h)
    task.progress   = Math.round((i+1) / totalFrames * 100)
    task.statusText = `录制帧 ${i+1} / ${totalFrames}`
    await sleep(Math.max(16, Math.round(1000 / task.fps)))
  }

  recorder.stop()
  await recordDone
  const blob = new Blob(chunks, { type: mimeType })
  finishTask(task, blob, stripExt(task.file.name) + '.webm', `WebM 完成，共 ${totalFrames} 帧`)
}

// ─── 任务完成 / 错误 ─────────────────────────
function finishTask(task, blob, name, text) {
  task.downloadUrl  = URL.createObjectURL(blob)
  task.downloadName = name
  task.status       = 'done'
  task.statusText   = text
  task.progress     = 100
}

function taskError(task, msg) {
  task.status    = 'error'
  task.statusText = '转换失败'
  task.errorMsg  = msg
  task.progress  = 0
}

function cancelTask(task) { task.cancelled = true }

// ─── 轻量 GIF 编码器 ─────────────────────────
// 基于 NeuQuant 调色板量化 + LZW 压缩，纯 JS，无依赖
async function encodeGif(frames, w, h, delay, onProgress) {
  // 简化：每帧独立量化 + 写 GIF Block
  // 对性能和颜色都有基本保障
  const buf = []

  const writeStr = (s) => { for (let i = 0; i < s.length; i++) buf.push(s.charCodeAt(i)) }
  const writeByte = (b) => buf.push(b & 0xFF)
  const writeWord = (w) => { buf.push(w & 0xFF); buf.push((w >> 8) & 0xFF) }

  // GIF Header
  writeStr('GIF89a')
  writeWord(w); writeWord(h)
  writeByte(0x70) // global color table flag=0, no global CT
  writeByte(0)    // bg color index
  writeByte(0)    // pixel aspect ratio

  // Netscape loop extension
  writeByte(0x21); writeByte(0xFF); writeByte(11)
  writeStr('NETSCAPE2.0')
  writeByte(3); writeByte(1); writeWord(0); writeByte(0)

  const totalF = frames.length
  for (let fi = 0; fi < totalF; fi++) {
    const frame = frames[fi]
    const pixels = frame.data

    // --- 量化：NeuQuant 快速版 (256色) ---
    const { palette, indexed } = quantize(pixels, w * h)

    // Graphic Control Extension
    writeByte(0x21); writeByte(0xF9); writeByte(4)
    writeByte(0x04)       // dispose = do not dispose
    writeWord(Math.round(delay / 10))  // delay in 1/100s
    writeByte(0)          // transparent color index (none)
    writeByte(0)

    // Image Descriptor
    writeByte(0x2C)
    writeWord(0); writeWord(0) // left, top
    writeWord(w); writeWord(h)
    writeByte(0x80 | 7)   // local color table flag, size=256 (2^(7+1))

    // Local Color Table (256 * 3 bytes)
    for (let i = 0; i < 256; i++) {
      const pi = i * 3
      writeByte(palette[pi] || 0)
      writeByte(palette[pi+1] || 0)
      writeByte(palette[pi+2] || 0)
    }

    // LZW min code size
    writeByte(8)

    // LZW compress
    const lzw = lzwEncode(indexed, 8)
    // write in sub-blocks (max 255 bytes each)
    let offset = 0
    while (offset < lzw.length) {
      const blockSize = Math.min(255, lzw.length - offset)
      writeByte(blockSize)
      for (let i = 0; i < blockSize; i++) buf.push(lzw[offset + i])
      offset += blockSize
    }
    writeByte(0) // block terminator

    if (onProgress) onProgress((fi + 1) / totalF)
    if (fi % 3 === 0) await sleep(0)
  }

  writeByte(0x3B) // GIF trailer

  return new Blob([new Uint8Array(buf)], { type: 'image/gif' })
}

// 简单中位切割量化 (Median Cut, 256色)
function quantize(pixels, pixelCount) {
  // 构建 RGB 样本
  const samples = []
  const step = Math.max(1, Math.floor(pixelCount / 4000)) // 最多取 4000 个样本
  for (let i = 0; i < pixelCount; i += step) {
    const idx = i * 4
    samples.push([pixels[idx], pixels[idx+1], pixels[idx+2]])
  }

  // Median cut
  const palette = medianCut(samples, 8) // 2^8 = 256 colors
  // 填充到 256 个颜色
  while (palette.length < 256) palette.push([0, 0, 0])

  // 建索引映射
  const indexed = new Uint8Array(pixelCount)
  for (let i = 0; i < pixelCount; i++) {
    const idx = i * 4
    indexed[i] = nearestColor(pixels[idx], pixels[idx+1], pixels[idx+2], palette)
  }

  const flat = new Uint8Array(256 * 3)
  for (let i = 0; i < 256; i++) {
    flat[i*3]   = palette[i][0]
    flat[i*3+1] = palette[i][1]
    flat[i*3+2] = palette[i][2]
  }
  return { palette: flat, indexed }
}

function medianCut(samples, depth) {
  if (depth === 0 || samples.length === 0) {
    if (samples.length === 0) return [[0,0,0]]
    const r = Math.round(samples.reduce((s,p)=>s+p[0],0)/samples.length)
    const g = Math.round(samples.reduce((s,p)=>s+p[1],0)/samples.length)
    const b = Math.round(samples.reduce((s,p)=>s+p[2],0)/samples.length)
    return [[r, g, b]]
  }
  // 找范围最大的通道
  let minR=255,maxR=0,minG=255,maxG=0,minB=255,maxB=0
  for (const [r,g,b] of samples) {
    if (r<minR)minR=r; if (r>maxR)maxR=r
    if (g<minG)minG=g; if (g>maxG)maxG=g
    if (b<minB)minB=b; if (b>maxB)maxB=b
  }
  const rangeR=maxR-minR, rangeG=maxG-minG, rangeB=maxB-minB
  let ch = 0
  if (rangeG>=rangeR && rangeG>=rangeB) ch=1
  else if (rangeB>=rangeR && rangeB>=rangeG) ch=2
  samples.sort((a,b)=>a[ch]-b[ch])
  const mid = Math.floor(samples.length/2)
  return [
    ...medianCut(samples.slice(0, mid), depth-1),
    ...medianCut(samples.slice(mid),    depth-1),
  ]
}

function nearestColor(r, g, b, palette) {
  let best = 0, bestDist = Infinity
  for (let i = 0; i < palette.length; i++) {
    const dr=r-palette[i][0], dg=g-palette[i][1], db=b-palette[i][2]
    const d = dr*dr + dg*dg + db*db
    if (d < bestDist) { bestDist=d; best=i }
  }
  return best
}

// LZW 编码
function lzwEncode(indices, minCodeSize) {
  const clearCode = 1 << minCodeSize
  const eofCode   = clearCode + 1
  let codeSize    = minCodeSize + 1
  let nextCode    = eofCode + 1
  const maxCode   = () => 1 << codeSize

  const output = []
  let bitBuf = 0, bitLen = 0

  const writeBits = (code) => {
    bitBuf |= code << bitLen
    bitLen += codeSize
    while (bitLen >= 8) { output.push(bitBuf & 0xFF); bitBuf >>= 8; bitLen -= 8 }
  }

  // Init code table
  let codeTable = new Map()
  const resetTable = () => {
    codeTable = new Map()
    for (let i = 0; i < clearCode; i++) codeTable.set(String(i), i)
    nextCode = eofCode + 1
    codeSize = minCodeSize + 1
  }

  resetTable()
  writeBits(clearCode)

  let buf = ''
  for (let i = 0; i < indices.length; i++) {
    const pixel = String(indices[i])
    const next  = buf ? buf + ',' + pixel : pixel
    if (codeTable.has(next)) {
      buf = next
    } else {
      writeBits(codeTable.get(buf))
      if (nextCode < 4096) {
        codeTable.set(next, nextCode++)
        if (nextCode > maxCode() && codeSize < 12) codeSize++
      } else {
        writeBits(clearCode)
        resetTable()
      }
      buf = pixel
    }
  }
  if (buf) writeBits(codeTable.get(buf))
  writeBits(eofCode)
  if (bitLen > 0) output.push(bitBuf & 0xFF)
  return output
}

// ─── 工具函数 ─────────────────────────────────
function seekTo(video, time) {
  return new Promise((resolve, reject) => {
    if (Math.abs(video.currentTime - time) < 0.001) { resolve(); return }
    const onSeeked = () => { video.removeEventListener('seeked', onSeeked); resolve() }
    const onErr    = () => { video.removeEventListener('error', onErr); reject(new Error('seek error')) }
    video.addEventListener('seeked', onSeeked, { once: true })
    video.addEventListener('error',  onErr,    { once: true })
    video.currentTime = time
  })
}

function canvasToBlob(canvas, type) {
  return new Promise(resolve => canvas.toBlob(resolve, type))
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

function formatSize(bytes) {
  if (bytes < 1024)       return bytes + ' B'
  if (bytes < 1048576)    return (bytes/1024).toFixed(1) + ' KB'
  return (bytes/1048576).toFixed(2) + ' MB'
}

function formatDuration(sec) {
  if (!sec || !isFinite(sec)) return ''
  const m = Math.floor(sec/60)
  const s = (sec%60).toFixed(1)
  return `${m}:${String(s).padStart(4,'0')}`
}

function stripExt(name) { return name.replace(/\.[^.]+$/, '') }

function statusLabel(s) {
  return { idle:'等待', running:'转换中', done:'完成', error:'失败', cancelled:'已取消' }[s] || s
}

onBeforeUnmount(() => {
  tasks.value.forEach(t => {
    t.cancelled = true
    URL.revokeObjectURL(t.objectUrl)
    if (t.downloadUrl) URL.revokeObjectURL(t.downloadUrl)
  })
})
</script>

<style scoped>
.converter-page {
  flex: 1; display: flex; overflow: hidden; min-height: 0;
  background: var(--app-bg, #080808);
}

/* ── 左侧面板 ─────────────────────── */
.conv-panel {
  width: 320px; flex-shrink: 0;
  background: var(--panel-bg, #0a0a0a);
  border-right: 1px solid var(--border, #1e1e1e);
  display: flex; flex-direction: column; overflow: hidden;
}

.panel-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 16px 14px;
  border-bottom: 1px solid var(--border, #1e1e1e);
  flex-shrink: 0;
}
.panel-title { font-size: 13px; font-weight: 600; color: var(--text-primary, #ccc); }
.header-actions { display: flex; gap: 6px; align-items: center; }

/* 全局设置 */
.global-settings {
  padding: 14px 16px;
  border-bottom: 1px solid var(--border, #1e1e1e);
  flex-shrink: 0;
  display: flex; flex-direction: column; gap: 10px;
}
.setting-title {
  font-size: 10.5px; font-weight: 600; letter-spacing: 0.6px; text-transform: uppercase;
  color: var(--text-muted, #444);
}
.setting-row { display: flex; flex-direction: column; gap: 5px; }
.setting-label { font-size: 11.5px; color: var(--text-dim, #888); }

.mode-toggle {
  display: flex; background: var(--ctrl-bg, #111);
  border: 1px solid var(--border, #1e1e1e); border-radius: 6px; overflow: hidden;
}
.mode-toggle button {
  flex: 1; padding: 5px 4px; background: transparent; border: none;
  color: var(--text-muted, #555); font-size: 11.5px; cursor: pointer; transition: all 0.15s;
}
.mode-toggle button:hover  { color: var(--text-dim, #888); background: var(--ctrl-hover, #151515); }
.mode-toggle button.active { color: var(--text-primary, #ddd); background: var(--ctrl-active, #1a1a1a); }

.fps-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.fps-presets { display: flex; gap: 4px; }
.fps-presets button {
  padding: 4px 8px; background: var(--ctrl-bg, #111);
  border: 1px solid var(--border, #1e1e1e); border-radius: 4px;
  color: var(--text-muted, #555); font-size: 11px; cursor: pointer; transition: all 0.15s;
}
.fps-presets button small { font-size: 9px; opacity: 0.7; margin-left: 1px; }
.fps-presets button:hover  { border-color: var(--border-hover,#333); color: var(--text-dim,#888); }
.fps-presets button.active { border-color: var(--text-dim,#666); color: var(--text-primary,#ddd); background: var(--ctrl-active,#1a1a1a); }

.input-with-unit { display: flex; align-items: center; gap: 6px; }
.num-input, .num-input-sm {
  background: var(--ctrl-bg, #111); border: 1px solid var(--border, #1e1e1e);
  border-radius: 5px; padding: 4px 8px; color: var(--text-primary, #ccc);
  font-size: 12px; outline: none; transition: border-color 0.15s;
}
.num-input    { width: 80px; }
.num-input-sm { width: 56px; }
.num-input:focus, .num-input-sm:focus { border-color: var(--border-hover, #444); }
.unit { font-size: 11px; color: var(--text-muted, #555); }

.mode-hint {
  font-size: 10.5px; color: var(--text-muted, #555);
  background: var(--ctrl-bg, #111); border-radius: 4px; padding: 5px 8px;
  line-height: 1.5;
}

/* 添加文件区 */
.add-file-area {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border, #1e1e1e);
  flex-shrink: 0;
  display: flex; flex-direction: column; gap: 6px;
}
.btn-add {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  padding: 8px; width: 100%;
  background: var(--ctrl-bg, #111); border: 1px dashed var(--border, #2a2a2a);
  border-radius: 6px; color: var(--text-dim, #888); font-size: 12.5px;
  cursor: pointer; transition: all 0.15s;
}
.btn-add:hover { border-color: var(--border-hover, #444); color: var(--text-primary, #ccc); background: var(--ctrl-hover, #141414); }
.add-hint { font-size: 10.5px; color: var(--text-muted, #555); text-align: center; }

/* 任务列表 */
.task-list {
  flex: 1; overflow-y: auto; padding: 8px 10px;
  display: flex; flex-direction: column; gap: 4px;
}
.task-list::-webkit-scrollbar { width: 4px; }
.task-list::-webkit-scrollbar-thumb { background: var(--scrollbar, #222); border-radius: 2px; }

.task-list-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 4px 6px 6px;
  font-size: 10.5px; color: var(--text-muted, #555);
  flex-shrink: 0;
}
.btn-link { background: none; border: none; color: var(--text-dim, #777); font-size: 11px; cursor: pointer; padding: 0; }
.btn-link:hover { color: var(--text-primary, #ccc); }

.task-item {
  background: var(--ctrl-bg, #111);
  border: 1px solid var(--border, #1e1e1e);
  border-radius: 7px; padding: 9px 10px;
  position: relative; transition: border-color 0.15s;
}
.task-item:hover { border-color: var(--border-hover, #2a2a2a); }
.task-running  { border-color: #2a3a5e !important; }
.task-done     { border-color: #1a3a2a !important; }
.task-error    { border-color: #3a1a1a !important; }
.task-cancelled { opacity: 0.5; }

.task-name {
  font-size: 11.5px; color: var(--text-primary, #ccc);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  padding-right: 60px;
}
.task-meta {
  font-size: 10.5px; color: var(--text-muted, #555);
  margin-top: 2px; display: flex; align-items: center; gap: 4px;
}
.task-badge {
  font-size: 9.5px; padding: 1px 6px; border-radius: 10px; margin-left: 2px;
}
.badge-idle      { background: rgba(100,100,100,0.2); color: #888; }
.badge-running   { background: rgba(91,142,230,0.2);  color: #5b8ee6; }
.badge-done      { background: rgba(76,175,120,0.2);  color: #4caf78; }
.badge-error     { background: rgba(224,82,82,0.2);   color: #e05252; }
.badge-cancelled { background: rgba(100,100,100,0.15);color: #666; }

.task-progress { margin-top: 6px; display: flex; align-items: center; gap: 6px; }
.prog-bar  { flex: 1; height: 3px; background: var(--ctrl-bg,#1a1a1a); border-radius: 2px; overflow: hidden; }
.prog-fill { height: 100%; background: #5b8ee6; border-radius: 2px; transition: width 0.2s; }
.prog-pct  { font-size: 10px; color: var(--text-muted,#555); min-width: 30px; text-align: right; }

.task-actions {
  position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
  display: flex; gap: 2px; align-items: center;
}
.task-btn {
  width: 24px; height: 24px; border-radius: 4px; border: none;
  background: var(--ctrl-hover, #161616); color: var(--text-muted, #555);
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: all 0.15s;
}
.task-btn:hover        { color: var(--text-primary, #ccc); background: var(--ctrl-active, #222); }
.btn-cancel:hover      { color: #e05252; }
.btn-dl                { text-decoration: none; color: #4caf78; }
.btn-dl:hover          { background: rgba(76,175,120,0.15); }
.btn-remove:hover      { color: #e05252; }

.empty-hint {
  flex: 1; display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 10px; color: var(--text-muted, #444);
  padding: 20px;
}
.empty-hint p { font-size: 12px; text-align: center; line-height: 1.5; }

/* ── 按钮 ─────────────────────── */
.btn-ghost {
  display: flex; align-items: center; gap: 4px;
  background: transparent; border: 1px solid var(--border, #2a2a2a);
  border-radius: 4px; padding: 3px 8px;
  color: var(--text-muted, #555); font-size: 11px; cursor: pointer; transition: all 0.15s;
}
.btn-ghost:hover   { border-color: var(--border-hover,#444); color: var(--text-dim,#888); }
.btn-danger:hover  { border-color: #e05252; color: #e05252; }
.btn-xs { padding: 2px 7px; font-size: 10.5px; }

/* ── 右侧预览 ─────────────────────── */
.conv-preview {
  flex: 1; display: flex; flex-direction: column;
  overflow: hidden; background: var(--canvas-bg, #080808); position: relative;
}
.conv-preview::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--grid-line,rgba(255,255,255,0.015)) 1px, transparent 1px),
    linear-gradient(90deg,var(--grid-line,rgba(255,255,255,0.015)) 1px,transparent 1px);
  background-size: 40px 40px; pointer-events: none; z-index: 0;
}
.preview-placeholder {
  flex: 1; display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 12px; z-index: 1; color: var(--text-muted, #333);
}
.preview-placeholder p { font-size: 13px; }
.placeholder-sub { font-size: 11.5px; color: var(--text-muted, #444) !important; margin-top: -4px; }

.video-preview-wrap {
  flex: 1; display: flex; align-items: center; justify-content: center;
  padding: 28px; z-index: 1; min-height: 0; overflow: hidden;
}
.video-preview {
  max-width: 100%; max-height: 100%;
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 20px 50px rgba(0,0,0,0.6);
}

/* 状态区 */
.status-area {
  z-index: 1; flex-shrink: 0;
  border-top: 1px solid var(--border, #1e1e1e);
  background: var(--panel-bg, #0a0a0a);
  padding: 14px 20px;
  display: flex; flex-direction: column; gap: 10px;
}
.status-header { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.status-row { display: flex; align-items: center; gap: 7px; }
.status-dot {
  width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
  background: var(--text-muted, #555);
}
.status-idle .status-dot    { background: #555; }
.status-running .status-dot { background: #5b8ee6; animation: pulse 0.8s infinite; }
.status-done .status-dot    { background: #4caf78; }
.status-error .status-dot   { background: #e05252; }
.status-cancelled .status-dot { background: #666; }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
.status-text { font-size: 12.5px; color: var(--text-dim, #888); }

.task-info-badges { display: flex; gap: 5px; }
.info-badge {
  font-size: 10.5px; padding: 2px 7px;
  background: var(--ctrl-bg, #111); border: 1px solid var(--border, #1e1e1e);
  border-radius: 10px; color: var(--text-muted, #555);
}

.progress-wrap { display: flex; align-items: center; gap: 10px; }
.progress-bar {
  flex: 1; height: 4px; background: var(--ctrl-bg, #1a1a1a);
  border-radius: 2px; overflow: hidden;
}
.progress-fill { height: 100%; background: #5b8ee6; border-radius: 2px; transition: width 0.2s; }
.progress-pct  { font-size: 11.5px; color: var(--text-muted,#555); min-width: 36px; text-align: right; }

.file-info-inline {
  display: flex; gap: 10px; align-items: center; flex-wrap: wrap;
  font-size: 11px; color: var(--text-muted, #555);
}
.file-info-inline span:first-child { color: var(--text-dim, #888); max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.error-msg {
  font-size: 12px; color: #e05252;
  background: rgba(224,82,82,0.08);
  border: 1px solid rgba(224,82,82,0.2);
  border-radius: 5px; padding: 7px 10px;
}

.action-row { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.btn-convert, .btn-cancel-big {
  padding: 8px 20px; border-radius: 6px; font-size: 12.5px; font-weight: 600;
  cursor: pointer; transition: all 0.15s; border: 1px solid var(--border-hover,#333);
}
.btn-convert {
  background: var(--ctrl-active, #1a1a1a); color: var(--text-primary, #ddd);
}
.btn-convert:hover { background: #222; border-color: #555; color: #fff; }
.btn-cancel-big {
  background: rgba(224,82,82,0.1); border-color: rgba(224,82,82,0.3); color: #e05252;
}
.btn-cancel-big:hover { background: rgba(224,82,82,0.2); }

.btn-download {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 16px; background: rgba(76,175,120,0.1);
  border: 1px solid rgba(76,175,120,0.3); border-radius: 6px;
  color: #4caf78; font-size: 12px; font-weight: 500;
  text-decoration: none; transition: all 0.15s;
}
.btn-download:hover { background: rgba(76,175,120,0.2); }
</style>
