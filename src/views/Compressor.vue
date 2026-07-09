<template>
  <div class="compressor-page" @dragenter.prevent="dragging = true" @dragover.prevent @dragleave="onDragLeave" @drop.prevent="onDrop">
    <aside class="control-panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">素材压缩器</div>
          <div class="panel-subtitle">批量 MP4 / PNG 序列帧</div>
        </div>
        <button v-if="tasks.length" class="text-btn danger" :disabled="processing" @click="clearAll">清空</button>
      </div>

      <section class="section">
        <div class="section-title">素材类型</div>
        <div class="type-tabs">
          <button :class="{ active: sourceType === 'video' }" :disabled="processing" @click="sourceType = 'video'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="15" height="14" rx="2"/><path d="m17 10 5-3v10l-5-3z"/></svg>
            MP4 视频
          </button>
          <button :class="{ active: sourceType === 'png' }" :disabled="processing" @click="sourceType = 'png'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
            PNG 序列帧
          </button>
        </div>
      </section>

      <section class="section">
        <div class="section-title">批量导入</div>
        <input ref="videoInput" type="file" accept="video/mp4,.mp4" multiple hidden @change="onVideoPick" />
        <input ref="pngInput" type="file" accept="image/png,.png" multiple hidden @change="onPngPick" />
        <input ref="folderInput" type="file" accept="image/png,.png" multiple webkitdirectory hidden @change="onFolderPick" />
        <button v-if="sourceType === 'video'" class="import-btn" :disabled="processing" @click="videoInput.click()">批量选择 MP4</button>
        <div v-else class="import-row">
          <button class="import-btn" :disabled="processing" @click="pngInput.click()">选择 PNG</button>
          <button class="import-btn" :disabled="processing" @click="folderInput.click()">选择文件夹</button>
        </div>
        <div class="hint">{{ sourceType === 'video' ? '支持多选，或一次拖入多个 MP4' : '一次导入作为一组序列帧；拖入多个文件夹会分别建组' }}</div>
      </section>

      <section v-if="selectedTask" class="section settings">
        <div class="section-title">当前任务目标大小</div>
        <div class="source-summary">
          <span>原始大小</span>
          <strong>{{ formatSize(selectedTask.totalBytes) }}</strong>
        </div>
        <div class="preset-row">
          <button v-for="ratio in ratios" :key="ratio" :class="{ active: taskPercent(selectedTask) === ratio }" @click="applyRatio(ratio)">
            {{ ratio }}%
          </button>
        </div>
        <label class="size-input-wrap">
          <span>自定义大小</span>
          <div class="size-input">
            <input :value="selectedTask.targetMB" type="number" min="0.001" :max="selectedTask.totalBytes / 1048576" step="0.01" @input="updateTarget($event.target.value)" />
            <span>MB</span>
          </div>
        </label>
        <div class="scale-info">
          <div><span>文件比例</span><strong>{{ taskPercent(selectedTask) }}%</strong></div>
          <div><span>画面缩放</span><strong>{{ taskScalePercent(selectedTask) }}%</strong></div>
        </div>
        <div v-if="selectedTask.targetError" class="error">{{ selectedTask.targetError }}</div>
        <button class="apply-all-btn" :disabled="processing || tasks.length < 2" @click="applyRatioToAll">
          将 {{ taskPercent(selectedTask) }}% 比例应用到全部
        </button>
        <div class="hint">每个任务都可以设置不同大小；画面宽高等比例缩放。</div>
      </section>

      <div class="panel-footer">
        <button class="primary-btn" :disabled="!canStart" @click="startAll">
          {{ processing ? `正在处理 ${doneCount}/${tasks.length}` : `开始全部压缩 (${pendingCount})` }}
        </button>
        <div v-if="processing" class="progress-track"><div :style="{ width: overallProgress + '%' }"></div></div>
        <button v-if="processing" class="cancel-btn" @click="cancelAll">取消全部</button>
        <button v-if="doneCount > 1 && !processing" class="batch-download" @click="downloadAll">打包下载全部结果</button>
      </div>
    </aside>

    <section class="queue-panel">
      <div class="queue-header">
        <span>任务队列</span>
        <span v-if="tasks.length">{{ tasks.length }} 项</span>
      </div>
      <div v-if="tasks.length" class="task-list">
        <button v-for="task in tasks" :key="task.id" class="task-item" :class="[{ selected: task.id === selectedId }, 'status-' + task.status]" @click="selectedId = task.id">
          <span class="task-icon">{{ task.type === 'video' ? 'MP4' : 'PNG' }}</span>
          <span class="task-content">
            <strong :title="task.name">{{ task.name }}</strong>
            <small>{{ task.type === 'png' ? `${task.files.length} 帧 · ` : '' }}{{ formatSize(task.totalBytes) }}</small>
            <span v-if="task.status === 'running'" class="mini-progress"><i :style="{ width: task.progress + '%' }"></i></span>
          </span>
          <span class="task-status">{{ statusLabel(task.status) }}</span>
          <span class="remove-task" title="移除" @click.stop="removeTask(task)">×</span>
        </button>
      </div>
      <div v-else class="queue-empty">暂无任务</div>
    </section>

    <main class="workspace">
      <div v-if="!selectedTask" class="empty-state">
        <div class="empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/><path d="M3 3l6 6M21 3l-6 6M3 21l6-6M21 21l-6-6"/></svg>
        </div>
        <p>拖入多个 MP4 或 PNG 序列帧文件夹</p>
        <span>也可以从左侧批量选择素材</span>
      </div>

      <template v-else>
        <header class="workspace-header">
          <div><h2>{{ selectedTask.name }}</h2><p>{{ taskDescription(selectedTask) }}</p></div>
          <span class="type-badge">{{ selectedTask.type === 'video' ? 'MP4' : 'PNG SEQUENCE' }}</span>
        </header>
        <div class="preview-area">
          <video v-if="selectedTask.type === 'video'" :key="selectedTask.id" :src="selectedTask.previewUrl" controls muted playsinline @loadedmetadata="onVideoMetadata($event, selectedTask)"></video>
          <div v-else class="sequence-preview checker">
            <img :src="selectedTask.previewUrl" />
            <div class="frame-counter">{{ selectedTask.files.length }} 帧</div>
          </div>
        </div>
        <div class="metrics">
          <div><span>原始大小</span><strong>{{ formatSize(selectedTask.totalBytes) }}</strong></div>
          <div class="arrow">→</div>
          <div><span>目标大小</span><strong>{{ formatSize(taskTargetBytes(selectedTask)) }}</strong></div>
          <div><span>输出尺寸</span><strong>{{ outputDimensions(selectedTask) }}</strong></div>
        </div>
        <div v-if="selectedTask.statusText" class="status" :class="{ failed: selectedTask.status === 'error', success: selectedTask.status === 'done' }">{{ selectedTask.statusText }}</div>
        <a v-if="selectedTask.downloadUrl" class="download-btn" :href="selectedTask.downloadUrl" :download="selectedTask.downloadName">
          下载此任务结果 <span>{{ formatSize(selectedTask.outputBytes) }}</span>
        </a>
      </template>
    </main>

    <div v-if="dragging" class="drop-overlay">
      <div>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 14v5h14v-5"/></svg>
        <strong>松开即可批量添加</strong>
        <span>支持多个 MP4、PNG 文件和 PNG 文件夹</span>
      </div>
    </div>
    <canvas ref="canvas" hidden></canvas>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import JSZip from 'jszip'

const sourceType = ref('video')
const videoInput = ref(null), pngInput = ref(null), folderInput = ref(null), canvas = ref(null)
const tasks = ref([]), selectedId = ref(null), processing = ref(false), cancelled = ref(false), dragging = ref(false)
const ratios = [25, 50, 75]
let taskCounter = 0

const selectedTask = computed(() => tasks.value.find(t => t.id === selectedId.value) || null)
const doneCount = computed(() => tasks.value.filter(t => t.status === 'done').length)
const pendingCount = computed(() => tasks.value.filter(t => ['idle', 'error', 'cancelled'].includes(t.status)).length)
const canStart = computed(() => pendingCount.value > 0 && !processing.value && tasks.value.every(t => !t.targetError))
const overallProgress = computed(() => tasks.value.length ? tasks.value.reduce((sum, t) => sum + (t.status === 'done' ? 100 : t.progress), 0) / tasks.value.length : 0)

function onVideoPick(e) { addVideos(Array.from(e.target.files || [])); e.target.value = '' }
function onPngPick(e) { addPngGroup(Array.from(e.target.files || []), 'PNG 序列帧'); e.target.value = '' }
function onFolderPick(e) {
  const files = Array.from(e.target.files || [])
  const root = files[0]?.webkitRelativePath?.split('/')[0] || 'PNG 序列帧'
  addPngGroup(files, root)
  e.target.value = ''
}
async function onDrop(e) {
  dragging.value = false
  if (processing.value) return
  const items = Array.from(e.dataTransfer?.items || [])
  const entries = items.map(item => item.webkitGetAsEntry?.()).filter(Boolean)
  if (entries.some(entry => entry.isDirectory)) {
    for (const entry of entries) {
      if (entry.isDirectory) {
        const files = (await readEntry(entry)).filter(isPng)
        if (files.length) addPngGroup(files, entry.name)
      } else if (entry.isFile) {
        const file = await entryFile(entry)
        if (isMp4(file)) addVideos([file])
      }
    }
    const loosePngs = []
    for (const entry of entries.filter(x => x.isFile)) {
      const file = await entryFile(entry)
      if (isPng(file)) loosePngs.push(file)
    }
    if (loosePngs.length) addPngGroup(loosePngs, '拖入的 PNG 序列帧')
    return
  }
  const files = Array.from(e.dataTransfer?.files || [])
  addVideos(files.filter(isMp4))
  const pngs = files.filter(isPng)
  if (pngs.length) addPngGroup(pngs, '拖入的 PNG 序列帧')
}
function onDragLeave(e) { if (!e.currentTarget.contains(e.relatedTarget)) dragging.value = false }

function addVideos(files) {
  sourceType.value = 'video'
  for (const file of files.filter(isMp4)) {
    if (tasks.value.some(t => t.type === 'video' && t.name === file.name && t.totalBytes === file.size)) continue
    const task = makeTask('video', file.name, [file])
    task.previewUrl = URL.createObjectURL(file)
    tasks.value.push(task)
    selectedId.value ||= task.id
  }
}
async function addPngGroup(files, name) {
  const pngs = files.filter(isPng).sort((a, b) => filePath(a).localeCompare(filePath(b), undefined, { numeric: true }))
  if (!pngs.length) return
  sourceType.value = 'png'
  const task = makeTask('png', name, pngs)
  task.previewUrl = URL.createObjectURL(pngs[0])
  try {
    const img = await loadImage(task.previewUrl)
    task.dimensions = { w: img.naturalWidth, h: img.naturalHeight }
  } catch { task.status = 'error'; task.statusText = '首帧读取失败' }
  tasks.value.push(task)
  selectedId.value ||= task.id
}
function makeTask(type, name, files) {
  const totalBytes = files.reduce((sum, f) => sum + f.size, 0)
  return {
    id: ++taskCounter, type, name, files, totalBytes,
    targetMB: Number((totalBytes / 1048576 * .5).toFixed(3)),
    targetError: '', previewUrl: '', dimensions: null, duration: 0,
    status: 'idle', statusText: '等待压缩', progress: 0, cancelled: false,
    downloadUrl: '', downloadName: '', outputBytes: 0,
  }
}

function updateTarget(value) {
  const task = selectedTask.value
  if (!task) return
  task.targetMB = Number(value)
  validateTask(task)
}
function validateTask(task) {
  task.targetError = !task.targetMB || task.targetMB <= 0
    ? '请输入大于 0 的目标大小'
    : task.targetMB * 1048576 >= task.totalBytes ? '目标大小需要小于原始文件' : ''
}
function applyRatio(ratio) {
  const task = selectedTask.value
  task.targetMB = Number((task.totalBytes / 1048576 * ratio / 100).toFixed(3))
  validateTask(task)
}
function applyRatioToAll() {
  const ratio = taskTargetBytes(selectedTask.value) / selectedTask.value.totalBytes
  tasks.value.forEach(task => {
    task.targetMB = Number((task.totalBytes / 1048576 * ratio).toFixed(3))
    validateTask(task)
  })
}

async function startAll() {
  processing.value = true
  cancelled.value = false
  for (const task of tasks.value) {
    if (cancelled.value) break
    if (!['idle', 'error', 'cancelled'].includes(task.status)) continue
    await processTask(task)
  }
  processing.value = false
}
async function processTask(task) {
  resetOutput(task)
  task.status = 'running'; task.statusText = '正在准备素材…'; task.progress = 0; task.cancelled = false
  try {
    if (task.type === 'video') await compressVideo(task)
    else await compressPngs(task)
  } catch (error) {
    task.status = cancelled.value || task.cancelled ? 'cancelled' : 'error'
    task.statusText = task.status === 'cancelled' ? '已取消' : `压缩失败：${error?.message || error}`
    task.progress = 0
  }
}
async function compressVideo(task) {
  const video = document.createElement('video')
  video.src = task.previewUrl; video.muted = true; video.playsInline = true
  await once(video, 'loadedmetadata')
  task.duration = video.duration
  task.dimensions ||= { w: video.videoWidth, h: video.videoHeight }
  const s = taskScale(task), w = even(video.videoWidth * s), h = even(video.videoHeight * s)
  const c = canvas.value; c.width = w; c.height = h
  const ctx = c.getContext('2d'), stream = c.captureStream(30)
  const mime = ['video/mp4;codecs=avc1', 'video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'].find(x => MediaRecorder.isTypeSupported(x))
  if (!mime) throw new Error('当前浏览器不支持视频编码')
  const chunks = [], bitrate = Math.max(150000, Math.floor(taskTargetBytes(task) * 8 / Math.max(1, video.duration) * .92))
  const recorder = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: bitrate })
  recorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data) }
  const stopped = once(recorder, 'stop')
  recorder.start(500); await video.play()
  task.statusText = '正在等比例缩放并编码视频…'
  await new Promise((resolve, reject) => {
    const draw = () => {
      if (cancelled.value || task.cancelled || video.ended) { resolve(); return }
      try { ctx.drawImage(video, 0, 0, w, h); task.progress = Math.min(99, video.currentTime / video.duration * 100); requestAnimationFrame(draw) }
      catch (e) { reject(e) }
    }
    draw()
  })
  video.pause(); recorder.stop(); await stopped
  if (cancelled.value || task.cancelled) throw new Error('cancelled')
  const ext = mime.startsWith('video/mp4') ? 'mp4' : 'webm'
  finish(task, new Blob(chunks, { type: mime }), `${stripExt(task.name)}_compressed.${ext}`)
}
async function compressPngs(task) {
  const zip = new JSZip(), folder = zip.folder('compressed_frames'), c = canvas.value, s = taskScale(task)
  for (let i = 0; i < task.files.length; i++) {
    if (cancelled.value || task.cancelled) throw new Error('cancelled')
    const file = task.files[i], url = URL.createObjectURL(file)
    try {
      const img = await loadImage(url)
      c.width = even(img.naturalWidth * s); c.height = even(img.naturalHeight * s)
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height)
      folder.file(relativeFramePath(file), await canvasBlob(c, 'image/png'))
    } finally { URL.revokeObjectURL(url) }
    task.progress = (i + 1) / task.files.length * 85
    task.statusText = `正在处理第 ${i + 1} / ${task.files.length} 帧…`
    if (i % 4 === 0) await sleep(0)
  }
  task.statusText = '正在打包 PNG 序列帧…'
  const blob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 9 } }, m => { task.progress = 85 + m.percent * .15 })
  if (cancelled.value || task.cancelled) throw new Error('cancelled')
  finish(task, blob, `${safeName(task.name)}_compressed.zip`)
}
function finish(task, blob, name) {
  task.downloadUrl = URL.createObjectURL(blob); task.downloadName = name; task.outputBytes = blob.size
  task.progress = 100; task.status = 'done'
  task.statusText = `压缩完成，实际减少 ${Math.max(0, Math.round((1 - blob.size / task.totalBytes) * 100))}%`
}
async function downloadAll() {
  const zip = new JSZip()
  for (const task of tasks.value.filter(t => t.downloadUrl)) {
    zip.file(task.downloadName, await (await fetch(task.downloadUrl)).blob())
  }
  triggerDownload(await zip.generateAsync({ type: 'blob' }), 'compressed_results.zip')
}

function cancelAll() { cancelled.value = true; tasks.value.forEach(t => { if (t.status === 'running') t.cancelled = true }) }
function removeTask(task) {
  if (task.status === 'running') task.cancelled = true
  releaseTask(task)
  tasks.value = tasks.value.filter(t => t.id !== task.id)
  if (selectedId.value === task.id) selectedId.value = tasks.value[0]?.id || null
}
function clearAll() { cancelAll(); tasks.value.forEach(releaseTask); tasks.value = []; selectedId.value = null }
function releaseTask(task) { if (task.previewUrl) URL.revokeObjectURL(task.previewUrl); resetOutput(task) }
function resetOutput(task) { if (task.downloadUrl) URL.revokeObjectURL(task.downloadUrl); task.downloadUrl = ''; task.downloadName = ''; task.outputBytes = 0 }
function onVideoMetadata(e, task) { task.dimensions = { w: e.target.videoWidth, h: e.target.videoHeight }; task.duration = e.target.duration }

async function readEntry(entry) {
  if (entry.isFile) return [await entryFile(entry)]
  const reader = entry.createReader(), entries = []
  while (true) {
    const batch = await new Promise((resolve, reject) => reader.readEntries(resolve, reject))
    if (!batch.length) break
    entries.push(...batch)
  }
  const nested = await Promise.all(entries.map(readEntry))
  return nested.flat()
}
function entryFile(entry) { return new Promise((resolve, reject) => entry.file(resolve, reject)) }
function isMp4(file) { return !!file && (/\.mp4$/i.test(file.name) || file.type === 'video/mp4') }
function isPng(file) { return !!file && (/\.png$/i.test(file.name) || file.type === 'image/png') }
function filePath(file) { return file.webkitRelativePath || file.name }
function relativeFramePath(file) { const parts = filePath(file).split('/'); return parts.length > 1 ? parts.slice(1).join('/') : file.name }
function safeName(name) { return name.replace(/[\\/:*?"<>|]+/g, '_') }
function taskTargetBytes(task) { return Math.max(0, Number(task?.targetMB) || 0) * 1048576 }
function taskScale(task) { return Math.min(1, Math.max(.05, Math.sqrt(taskTargetBytes(task) / Math.max(1, task.totalBytes)))) }
function taskPercent(task) { return Math.min(100, Math.round(taskTargetBytes(task) / task.totalBytes * 100)) }
function taskScalePercent(task) { return Math.round(taskScale(task) * 100) }
function outputDimensions(task) { return task.dimensions ? `${even(task.dimensions.w * taskScale(task))} × ${even(task.dimensions.h * taskScale(task))}` : '读取中' }
function taskDescription(task) { return task.type === 'video' ? `${formatSize(task.totalBytes)}${task.duration ? ` · ${formatDuration(task.duration)}` : ''}` : `${task.files.length} 个 PNG · ${formatSize(task.totalBytes)}` }
function statusLabel(status) { return ({ idle:'等待', running:'处理中', done:'完成', error:'失败', cancelled:'已取消' })[status] || status }
function once(el, event) { return new Promise((resolve, reject) => { el.addEventListener(event, resolve, { once:true }); el.addEventListener('error', () => reject(new Error('素材读取失败')), { once:true }) }) }
function loadImage(src) { return new Promise((resolve, reject) => { const img = new Image(); img.onload = () => resolve(img); img.onerror = () => reject(new Error('图片读取失败')); img.src = src }) }
function canvasBlob(c, type) { return new Promise((resolve, reject) => c.toBlob(b => b ? resolve(b) : reject(new Error('图片编码失败')), type)) }
function triggerDownload(blob, name) { const url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000) }
function even(value) { return Math.max(2, Math.round(value / 2) * 2) }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }
function stripExt(name) { return name.replace(/\.[^.]+$/, '') }
function formatDuration(sec) { return `${Math.floor(sec / 60)}:${String(Math.floor(sec % 60)).padStart(2, '0')}` }
function formatSize(bytes) { if (!bytes) return '0 B'; if (bytes < 1024) return `${bytes} B`; if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`; return `${(bytes / 1048576).toFixed(2)} MB` }
onBeforeUnmount(clearAll)
</script>

<style scoped>
.compressor-page{position:relative;flex:1;min-width:0;display:flex;overflow:hidden;background:var(--app-bg);color:var(--text-primary)}
.control-panel{width:300px;flex-shrink:0;display:flex;flex-direction:column;border-right:1px solid var(--border);background:var(--panel-bg);overflow-y:auto}
.panel-header{padding:16px;display:flex;justify-content:space-between;align-items:flex-start;border-bottom:1px solid var(--border)}.panel-title{font-size:14px;font-weight:600}.panel-subtitle,.hint{margin-top:4px;font-size:11px;line-height:1.55;color:var(--text-muted)}
.text-btn{border:0;background:none;color:var(--text-dim);cursor:pointer}.text-btn.danger:hover{color:#d87979}.section{padding:15px 16px;border-bottom:1px solid var(--border)}.section-title{margin-bottom:10px;font-size:10.5px;font-weight:600;letter-spacing:.6px;color:var(--text-muted);text-transform:uppercase}
.type-tabs,.preset-row,.import-row{display:flex;gap:7px}.type-tabs button,.preset-row button,.import-btn{flex:1;height:34px;border:1px solid var(--border);border-radius:6px;background:var(--ctrl-bg);color:var(--text-dim);cursor:pointer;font:inherit;font-size:12px}.type-tabs button{display:flex;align-items:center;justify-content:center;gap:6px}.type-tabs button.active,.preset-row button.active{color:var(--text-primary);border-color:var(--border-hover);background:var(--ctrl-active)}button:disabled{opacity:.4;cursor:not-allowed}.import-btn:hover:not(:disabled){border-color:var(--border-hover);color:var(--text-primary)}
.source-summary,.size-input-wrap,.scale-info>div{display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--text-dim)}.source-summary strong,.scale-info strong{color:var(--text-primary)}.preset-row{margin:12px 0}.preset-row button{height:28px}.size-input-wrap{margin:8px 0 12px}.size-input{width:130px;display:flex;border:1px solid var(--border);border-radius:6px;overflow:hidden;background:var(--ctrl-bg)}.size-input input{width:82px;padding:8px;border:0;outline:0;color:var(--text-primary);background:transparent;font:inherit;text-align:right}.size-input span{padding:8px;color:var(--text-muted);border-left:1px solid var(--border)}
.scale-info{display:grid;grid-template-columns:1fr 1fr;gap:8px}.scale-info>div{padding:9px;border:1px solid var(--border);border-radius:6px;background:var(--ctrl-bg)}.error{margin-top:8px;padding:7px 9px;border-radius:5px;color:#d87979;background:rgba(180,50,50,.08);font-size:11px}.apply-all-btn{width:100%;margin-top:10px;padding:7px;border:1px solid var(--border);border-radius:5px;background:transparent;color:var(--text-dim);font-size:11px;cursor:pointer}
.panel-footer{margin-top:auto;padding:16px}.primary-btn,.download-btn{width:100%;height:38px;border:1px solid var(--border-hover);border-radius:7px;background:var(--text-primary);color:var(--app-bg);font:inherit;font-size:12px;font-weight:600;cursor:pointer}.progress-track{height:3px;margin-top:10px;overflow:hidden;border-radius:3px;background:var(--ctrl-bg)}.progress-track div{height:100%;background:var(--text-primary)}.cancel-btn,.batch-download{width:100%;margin-top:8px;padding:7px;border:0;background:none;color:var(--text-dim);cursor:pointer;font-size:11px}.batch-download{border:1px solid var(--border);border-radius:5px}
.queue-panel{width:270px;flex-shrink:0;display:flex;flex-direction:column;border-right:1px solid var(--border);background:var(--sidebar-bg)}.queue-header{height:46px;padding:0 14px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);color:var(--text-dim);font-size:11px}.task-list{padding:8px;overflow-y:auto}.task-item{position:relative;width:100%;display:flex;align-items:center;gap:9px;padding:9px 24px 9px 8px;margin-bottom:5px;border:1px solid transparent;border-radius:7px;background:transparent;color:var(--text-dim);text-align:left;cursor:pointer}.task-item:hover{background:var(--ctrl-hover)}.task-item.selected{border-color:var(--border-hover);background:var(--ctrl-active)}.task-icon{width:32px;height:25px;display:grid;place-items:center;border:1px solid var(--border);border-radius:4px;background:var(--ctrl-bg);font-size:8px}.task-content{min-width:0;flex:1;display:flex;flex-direction:column;gap:3px}.task-content strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--text-primary);font-size:11px}.task-content small{color:var(--text-muted);font-size:9px}.task-status{font-size:9px;color:var(--text-muted)}.status-done .task-status{color:#73a986}.status-error .task-status{color:#d87979}.remove-task{position:absolute;right:5px;top:4px;opacity:0;color:var(--text-muted);font-size:15px}.task-item:hover .remove-task{opacity:1}.mini-progress{height:2px;background:var(--border);border-radius:2px}.mini-progress i{display:block;height:100%;background:var(--text-primary)}.queue-empty{flex:1;display:grid;place-items:center;color:var(--text-muted);font-size:11px}
.workspace{flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;padding:26px 30px;overflow:auto}.empty-state{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--text-muted)}.empty-icon{width:92px;height:92px;display:grid;place-items:center;margin-bottom:14px;border:1px dashed var(--border-hover);border-radius:22px}.empty-state p{margin:0 0 6px;font-size:14px;color:var(--text-dim)}.empty-state span{font-size:11px}
.workspace-header{width:min(760px,100%);display:flex;justify-content:space-between;align-items:flex-start}.workspace-header h2{max-width:600px;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:16px}.workspace-header p{margin:6px 0 0;color:var(--text-muted);font-size:11px}.type-badge{padding:4px 8px;border:1px solid var(--border);border-radius:4px;background:var(--ctrl-bg);color:var(--text-dim);font-size:10px}
.preview-area{width:min(760px,100%);height:min(44vh,420px);display:flex;align-items:center;justify-content:center;margin:22px 0 16px;border:1px solid var(--border);border-radius:10px;overflow:hidden;background:#050505}.preview-area video{width:100%;height:100%;object-fit:contain}.sequence-preview{position:relative;width:100%;height:100%;display:grid;place-items:center}.sequence-preview img{max-width:100%;max-height:100%;object-fit:contain}.checker{background-color:#111;background-image:linear-gradient(45deg,#191919 25%,transparent 25%),linear-gradient(-45deg,#191919 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#191919 75%),linear-gradient(-45deg,transparent 75%,#191919 75%);background-size:18px 18px;background-position:0 0,0 9px,9px -9px,-9px 0}.frame-counter{position:absolute;right:12px;bottom:12px;padding:5px 8px;border-radius:5px;background:rgba(0,0,0,.7);color:#aaa;font-size:11px}
.metrics{width:min(760px,100%);display:grid;grid-template-columns:1fr 28px 1fr 1fr;gap:8px}.metrics>div:not(.arrow){display:flex;flex-direction:column;gap:5px;padding:11px 13px;border:1px solid var(--border);border-radius:7px;background:var(--panel-bg)}.metrics span{color:var(--text-muted);font-size:10px}.metrics strong{font-size:13px}.metrics .arrow{display:grid;place-items:center;color:var(--text-muted)}.status{width:min(732px,calc(100% - 28px));margin-top:12px;padding:10px 14px;border-radius:6px;background:var(--ctrl-bg);color:var(--text-dim);font-size:11px}.status.success{color:#73a986}.status.failed{color:#d87979}.download-btn{width:min(760px,100%);display:flex;align-items:center;justify-content:center;gap:10px;margin-top:12px;text-decoration:none;box-sizing:border-box}.download-btn span{opacity:.65;font-weight:400}
.drop-overlay{position:absolute;inset:10px;z-index:100;display:grid;place-items:center;border:2px dashed var(--text-dim);border-radius:14px;background:color-mix(in srgb,var(--app-bg) 92%,transparent);pointer-events:none}.drop-overlay>div{display:flex;flex-direction:column;align-items:center;gap:9px}.drop-overlay strong{font-size:16px}.drop-overlay span{color:var(--text-dim);font-size:11px}
@media(max-width:1050px){.control-panel{width:280px}.queue-panel{width:230px}.workspace{padding:20px}.metrics{grid-template-columns:1fr 24px 1fr}.metrics>div:last-child{grid-column:1/-1}}
</style>
