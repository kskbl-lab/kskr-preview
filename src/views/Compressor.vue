<template>
  <div class="compressor-page" @dragover.prevent @drop.prevent="onDrop">
    <aside class="control-panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">素材压缩器</div>
          <div class="panel-subtitle">MP4 / PNG 序列帧</div>
        </div>
        <button v-if="hasSource" class="text-btn danger" :disabled="processing" @click="clearAll">清空</button>
      </div>

      <section class="section">
        <div class="section-title">素材类型</div>
        <div class="type-tabs">
          <button :class="{ active: sourceType === 'video' }" :disabled="processing" @click="switchType('video')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="15" height="14" rx="2"/><path d="m17 10 5-3v10l-5-3z"/></svg>
            MP4 视频
          </button>
          <button :class="{ active: sourceType === 'png' }" :disabled="processing" @click="switchType('png')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
            PNG 序列帧
          </button>
        </div>
      </section>

      <section class="section">
        <div class="section-title">导入素材</div>
        <input ref="videoInput" type="file" accept="video/mp4,.mp4" hidden @change="onVideoPick" />
        <input ref="pngInput" type="file" accept="image/png,.png" multiple hidden @change="onPngPick" />
        <input ref="folderInput" type="file" accept="image/png,.png" multiple webkitdirectory hidden @change="onPngPick" />
        <button v-if="sourceType === 'video'" class="import-btn" :disabled="processing" @click="videoInput.click()">选择 MP4 文件</button>
        <div v-else class="import-row">
          <button class="import-btn" :disabled="processing" @click="pngInput.click()">选择 PNG</button>
          <button class="import-btn" :disabled="processing" @click="folderInput.click()">选择文件夹</button>
        </div>
        <div class="hint">{{ sourceType === 'video' ? '支持单个 MP4 文件，建议不超过 500 MB' : '支持多选或整个序列帧文件夹，按文件名排序' }}</div>
      </section>

      <section v-if="hasSource" class="section settings">
        <div class="section-title">目标大小</div>
        <div class="source-summary">
          <span>原始总大小</span>
          <strong>{{ formatSize(totalBytes) }}</strong>
        </div>
        <div class="preset-row">
          <button v-for="ratio in ratios" :key="ratio" :class="{ active: activeRatio === ratio }" @click="applyRatio(ratio)">
            {{ ratio }}%
          </button>
        </div>
        <label class="size-input-wrap">
          <span>自定义大小</span>
          <div class="size-input">
            <input v-model.number="targetMB" type="number" min="0.001" :max="maxTargetMB" step="0.01" @input="validateTarget" />
            <span>MB</span>
          </div>
        </label>
        <div class="scale-info">
          <div>
            <span>文件比例</span>
            <strong>{{ targetPercent }}%</strong>
          </div>
          <div>
            <span>画面缩放</span>
            <strong>{{ scalePercent }}%</strong>
          </div>
        </div>
        <div v-if="targetError" class="error">{{ targetError }}</div>
        <div class="hint">目标大小为编码估算值；画面宽高等比例缩放，不会拉伸变形。</div>
      </section>

      <div class="panel-footer">
        <button class="primary-btn" :disabled="!canStart" @click="startCompression">
          <span v-if="!processing">开始压缩</span>
          <span v-else>正在压缩 {{ Math.round(progress) }}%</span>
        </button>
        <div v-if="processing" class="progress-track"><div :style="{ width: progress + '%' }"></div></div>
        <button v-if="processing" class="cancel-btn" @click="cancelled = true">取消</button>
      </div>
    </aside>

    <main class="workspace">
      <div v-if="!hasSource" class="empty-state">
        <div class="empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/><path d="M3 3l6 6M21 3l-6 6M3 21l6-6M21 21l-6-6"/></svg>
        </div>
        <p>拖拽 MP4 或 PNG 序列帧到这里</p>
        <span>也可以从左侧选择文件</span>
      </div>

      <template v-else>
        <header class="workspace-header">
          <div>
            <h2>{{ displayName }}</h2>
            <p>{{ sourceDescription }}</p>
          </div>
          <span class="type-badge">{{ sourceType === 'video' ? 'MP4' : 'PNG SEQUENCE' }}</span>
        </header>

        <div class="preview-area">
          <video v-if="sourceType === 'video'" :src="videoUrl" controls muted playsinline @loadedmetadata="onVideoMetadata"></video>
          <div v-else class="sequence-preview checker">
            <img v-if="previewUrl" :src="previewUrl" />
            <div class="frame-counter">{{ pngFiles.length }} 帧</div>
          </div>
        </div>

        <div class="metrics">
          <div><span>原始大小</span><strong>{{ formatSize(totalBytes) }}</strong></div>
          <div class="arrow">→</div>
          <div><span>目标大小</span><strong>{{ formatSize(targetBytes) }}</strong></div>
          <div v-if="dimensions"><span>输出尺寸</span><strong>{{ outputDimensions }}</strong></div>
        </div>

        <div v-if="statusText" class="status" :class="{ failed: status === 'error', success: status === 'done' }">
          {{ statusText }}
        </div>

        <a v-if="downloadUrl" class="download-btn" :href="downloadUrl" :download="downloadName">
          下载压缩文件
          <span v-if="outputBytes">{{ formatSize(outputBytes) }}</span>
        </a>
      </template>
    </main>
    <canvas ref="canvas" hidden></canvas>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import JSZip from 'jszip'

const sourceType = ref('video')
const videoInput = ref(null)
const pngInput = ref(null)
const folderInput = ref(null)
const canvas = ref(null)
const videoFile = ref(null)
const pngFiles = ref([])
const videoUrl = ref('')
const previewUrl = ref('')
const targetMB = ref(0)
const dimensions = ref(null)
const duration = ref(0)
const progress = ref(0)
const processing = ref(false)
const cancelled = ref(false)
const status = ref('idle')
const statusText = ref('')
const targetError = ref('')
const downloadUrl = ref('')
const downloadName = ref('')
const outputBytes = ref(0)
const ratios = [25, 50, 75]

const hasSource = computed(() => sourceType.value === 'video' ? !!videoFile.value : pngFiles.value.length > 0)
const totalBytes = computed(() => sourceType.value === 'video' ? (videoFile.value?.size || 0) : pngFiles.value.reduce((sum, f) => sum + f.size, 0))
const targetBytes = computed(() => Math.max(0, Number(targetMB.value) || 0) * 1024 * 1024)
const maxTargetMB = computed(() => Math.max(.001, totalBytes.value / 1024 / 1024))
const targetPercent = computed(() => totalBytes.value ? Math.min(100, Math.round(targetBytes.value / totalBytes.value * 100)) : 0)
const scale = computed(() => Math.min(1, Math.max(.05, Math.sqrt(targetBytes.value / Math.max(1, totalBytes.value)))))
const scalePercent = computed(() => Math.round(scale.value * 100))
const activeRatio = computed(() => ratios.find(r => Math.abs(targetPercent.value - r) <= 1))
const canStart = computed(() => hasSource.value && !processing.value && !targetError.value && targetBytes.value > 0)
const displayName = computed(() => sourceType.value === 'video' ? videoFile.value?.name : `${pngFiles.value[0]?.name || ''} 等 ${pngFiles.value.length} 帧`)
const sourceDescription = computed(() => sourceType.value === 'video'
  ? `${formatSize(totalBytes.value)}${duration.value ? ` · ${formatDuration(duration.value)}` : ''}`
  : `${pngFiles.value.length} 个 PNG · ${formatSize(totalBytes.value)}`)
const outputDimensions = computed(() => dimensions.value
  ? `${even(dimensions.value.w * scale.value)} × ${even(dimensions.value.h * scale.value)}`
  : '读取中')

function switchType(type) {
  if (sourceType.value === type) return
  clearAll()
  sourceType.value = type
}
function onVideoPick(e) {
  const file = e.target.files?.[0]
  e.target.value = ''
  if (file) loadVideo(file)
}
function onPngPick(e) {
  const files = Array.from(e.target.files || []).filter(f => /\.png$/i.test(f.name))
  e.target.value = ''
  if (files.length) loadPngs(files)
}
function onDrop(e) {
  if (processing.value) return
  const files = Array.from(e.dataTransfer?.files || [])
  const mp4 = files.find(f => /\.mp4$/i.test(f.name))
  const pngs = files.filter(f => /\.png$/i.test(f.name))
  if (mp4) { sourceType.value = 'video'; clearAll(false); loadVideo(mp4) }
  else if (pngs.length) { sourceType.value = 'png'; clearAll(false); loadPngs(pngs) }
}
function loadVideo(file) {
  clearAll(false)
  videoFile.value = file
  videoUrl.value = URL.createObjectURL(file)
  setDefaultTarget()
}
async function loadPngs(files) {
  clearAll(false)
  pngFiles.value = files.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
  previewUrl.value = URL.createObjectURL(pngFiles.value[0])
  try {
    const img = await loadImage(previewUrl.value)
    dimensions.value = { w: img.naturalWidth, h: img.naturalHeight }
  } catch { statusText.value = '首帧读取失败'; status.value = 'error' }
  setDefaultTarget()
}
function setDefaultTarget() {
  targetMB.value = Number((totalBytes.value / 1024 / 1024 * .5).toFixed(3))
  targetError.value = ''
}
function applyRatio(ratio) {
  targetMB.value = Number((totalBytes.value / 1024 / 1024 * ratio / 100).toFixed(3))
  validateTarget()
}
function validateTarget() {
  const value = Number(targetMB.value)
  targetError.value = !value || value <= 0
    ? '请输入大于 0 的目标大小'
    : value >= maxTargetMB.value
      ? '目标大小需要小于原始文件'
      : ''
}
function onVideoMetadata(e) {
  dimensions.value = { w: e.target.videoWidth, h: e.target.videoHeight }
  duration.value = e.target.duration
}

async function startCompression() {
  validateTarget()
  if (!canStart.value) return
  resetOutput()
  processing.value = true
  cancelled.value = false
  status.value = 'running'
  statusText.value = '正在准备素材…'
  try {
    if (sourceType.value === 'video') await compressVideo()
    else await compressPngs()
  } catch (error) {
    if (cancelled.value) {
      status.value = 'idle'
      statusText.value = '已取消压缩'
    } else {
      status.value = 'error'
      statusText.value = `压缩失败：${error?.message || error}`
    }
  } finally {
    processing.value = false
  }
}

async function compressVideo() {
  const video = document.createElement('video')
  video.src = videoUrl.value
  video.muted = true
  video.playsInline = true
  await once(video, 'loadedmetadata')
  const w = even(video.videoWidth * scale.value)
  const h = even(video.videoHeight * scale.value)
  const c = canvas.value
  c.width = w; c.height = h
  const ctx = c.getContext('2d')
  const stream = c.captureStream(30)
  let mime = ['video/mp4;codecs=avc1', 'video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm']
    .find(type => MediaRecorder.isTypeSupported(type))
  if (!mime) throw new Error('当前浏览器不支持视频编码')
  const bitrate = Math.max(150000, Math.floor(targetBytes.value * 8 / Math.max(1, video.duration) * .92))
  const chunks = []
  const recorder = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: bitrate })
  recorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data) }
  const stopped = once(recorder, 'stop')
  recorder.start(500)
  video.currentTime = 0
  await video.play()
  statusText.value = '正在等比例缩放并编码视频…'
  await new Promise((resolve, reject) => {
    const draw = () => {
      if (cancelled.value || video.ended) { resolve(); return }
      try {
        ctx.drawImage(video, 0, 0, w, h)
        progress.value = Math.min(99, video.currentTime / video.duration * 100)
        requestAnimationFrame(draw)
      } catch (e) { reject(e) }
    }
    draw()
  })
  video.pause()
  recorder.stop()
  await stopped
  if (cancelled.value) throw new Error('cancelled')
  const blob = new Blob(chunks, { type: mime })
  const ext = mime.startsWith('video/mp4') ? 'mp4' : 'webm'
  finish(blob, `${stripExt(videoFile.value.name)}_compressed.${ext}`)
}

async function compressPngs() {
  const zip = new JSZip()
  const folder = zip.folder('compressed_frames')
  const c = canvas.value
  for (let i = 0; i < pngFiles.value.length; i++) {
    if (cancelled.value) throw new Error('cancelled')
    const file = pngFiles.value[i]
    const url = URL.createObjectURL(file)
    try {
      const img = await loadImage(url)
      c.width = even(img.naturalWidth * scale.value)
      c.height = even(img.naturalHeight * scale.value)
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height)
      const blob = await canvasBlob(c, 'image/png')
      folder.file(file.webkitRelativePath || file.name, blob)
    } finally { URL.revokeObjectURL(url) }
    progress.value = (i + 1) / pngFiles.value.length * 85
    statusText.value = `正在处理第 ${i + 1} / ${pngFiles.value.length} 帧…`
    if (i % 4 === 0) await sleep(0)
  }
  statusText.value = '正在打包 PNG 序列帧…'
  const blob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 9 } }, m => {
    progress.value = 85 + m.percent * .15
  })
  if (cancelled.value) throw new Error('cancelled')
  finish(blob, 'png_sequence_compressed.zip')
}

function finish(blob, name) {
  downloadUrl.value = URL.createObjectURL(blob)
  downloadName.value = name
  outputBytes.value = blob.size
  progress.value = 100
  status.value = 'done'
  const delta = Math.max(0, Math.round((1 - blob.size / totalBytes.value) * 100))
  statusText.value = `压缩完成，实际减少 ${delta}%`
}
function resetOutput() {
  if (downloadUrl.value) URL.revokeObjectURL(downloadUrl.value)
  downloadUrl.value = ''; downloadName.value = ''; outputBytes.value = 0; progress.value = 0
}
function clearAll(resetType = true) {
  if (videoUrl.value) URL.revokeObjectURL(videoUrl.value)
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  resetOutput()
  videoFile.value = null; pngFiles.value = []; videoUrl.value = ''; previewUrl.value = ''
  dimensions.value = null; duration.value = 0; targetMB.value = 0
  status.value = 'idle'; statusText.value = ''; targetError.value = ''
  if (resetType) cancelled.value = true
}
function once(el, event) {
  return new Promise((resolve, reject) => {
    el.addEventListener(event, resolve, { once: true })
    el.addEventListener('error', () => reject(new Error('素材读取失败')), { once: true })
  })
}
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('图片读取失败'))
    img.src = src
  })
}
function canvasBlob(c, type) { return new Promise((resolve, reject) => c.toBlob(b => b ? resolve(b) : reject(new Error('图片编码失败')), type)) }
function even(value) { return Math.max(2, Math.round(value / 2) * 2) }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }
function stripExt(name) { return name.replace(/\.[^.]+$/, '') }
function formatDuration(sec) {
  const m = Math.floor(sec / 60), s = Math.floor(sec % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}
function formatSize(bytes) {
  if (!bytes) return '0 B'
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1048576).toFixed(2)} MB`
}
onBeforeUnmount(() => { cancelled.value = true; clearAll(false) })
</script>

<style scoped>
.compressor-page { flex:1; min-width:0; display:flex; overflow:hidden; background:var(--app-bg); color:var(--text-primary); }
.control-panel { width:320px; flex-shrink:0; display:flex; flex-direction:column; border-right:1px solid var(--border); background:var(--panel-bg); overflow-y:auto; }
.panel-header { padding:16px; display:flex; justify-content:space-between; align-items:flex-start; border-bottom:1px solid var(--border); }
.panel-title { font-size:14px; font-weight:600; }.panel-subtitle,.hint { margin-top:4px; font-size:11px; line-height:1.55; color:var(--text-muted); }
.text-btn { border:0; background:none; color:var(--text-dim); cursor:pointer; }.text-btn.danger:hover { color:#d87979; }
.section { padding:15px 16px; border-bottom:1px solid var(--border); }.section-title { margin-bottom:10px; font-size:10.5px; font-weight:600; letter-spacing:.6px; color:var(--text-muted); text-transform:uppercase; }
.type-tabs,.preset-row,.import-row { display:flex; gap:7px; }.type-tabs button,.preset-row button,.import-btn { flex:1; height:34px; border:1px solid var(--border); border-radius:6px; background:var(--ctrl-bg); color:var(--text-dim); cursor:pointer; font:inherit; font-size:12px; }
.type-tabs button { display:flex; align-items:center; justify-content:center; gap:6px; }.type-tabs button.active,.preset-row button.active { color:var(--text-primary); border-color:var(--border-hover); background:var(--ctrl-active); }
.type-tabs button:disabled,.import-btn:disabled { opacity:.45; cursor:not-allowed; }.import-btn:hover:not(:disabled) { border-color:var(--border-hover); color:var(--text-primary); }
.source-summary,.size-input-wrap,.scale-info>div { display:flex; align-items:center; justify-content:space-between; font-size:12px; color:var(--text-dim); }.source-summary strong { color:var(--text-primary); }
.preset-row { margin:12px 0; }.preset-row button { height:28px; }
.size-input-wrap { margin:8px 0 12px; }.size-input { width:130px; display:flex; border:1px solid var(--border); border-radius:6px; overflow:hidden; background:var(--ctrl-bg); }
.size-input input { width:82px; padding:8px; border:0; outline:0; color:var(--text-primary); background:transparent; font:inherit; text-align:right; }.size-input span { padding:8px; color:var(--text-muted); border-left:1px solid var(--border); }
.scale-info { display:grid; grid-template-columns:1fr 1fr; gap:8px; }.scale-info>div { padding:9px; border:1px solid var(--border); border-radius:6px; background:var(--ctrl-bg); }.scale-info strong { color:var(--text-primary); }
.error { margin-top:8px; padding:7px 9px; border-radius:5px; color:#d87979; background:rgba(180,50,50,.08); font-size:11px; }
.panel-footer { margin-top:auto; padding:16px; }.primary-btn,.download-btn { width:100%; height:38px; border:1px solid var(--border-hover); border-radius:7px; background:var(--text-primary); color:var(--app-bg); font:inherit; font-size:12px; font-weight:600; cursor:pointer; }
.primary-btn:disabled { opacity:.3; cursor:not-allowed; }.progress-track { height:3px; margin-top:10px; overflow:hidden; border-radius:3px; background:var(--ctrl-bg); }.progress-track div { height:100%; background:var(--text-primary); transition:width .15s; }
.cancel-btn { width:100%; margin-top:8px; border:0; background:none; color:var(--text-dim); cursor:pointer; font-size:11px; }
.workspace { flex:1; min-width:0; display:flex; flex-direction:column; align-items:center; padding:28px 36px; overflow:auto; }
.empty-state { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-muted); }.empty-icon { width:92px; height:92px; display:grid; place-items:center; margin-bottom:14px; border:1px dashed var(--border-hover); border-radius:22px; }
.empty-state p { margin:0 0 6px; font-size:14px; color:var(--text-dim); }.empty-state span { font-size:11px; }
.workspace-header { width:min(820px,100%); display:flex; justify-content:space-between; align-items:flex-start; }.workspace-header h2 { max-width:650px; margin:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:16px; }.workspace-header p { margin:6px 0 0; color:var(--text-muted); font-size:11px; }
.type-badge { padding:4px 8px; border:1px solid var(--border); border-radius:4px; background:var(--ctrl-bg); color:var(--text-dim); font-size:10px; }
.preview-area { width:min(820px,100%); height:min(48vh,460px); display:flex; align-items:center; justify-content:center; margin:24px 0 18px; border:1px solid var(--border); border-radius:10px; overflow:hidden; background:#050505; }
.preview-area video { width:100%; height:100%; object-fit:contain; }.sequence-preview { position:relative; width:100%; height:100%; display:grid; place-items:center; }.sequence-preview img { max-width:100%; max-height:100%; object-fit:contain; }
.checker { background-color:#111; background-image:linear-gradient(45deg,#191919 25%,transparent 25%),linear-gradient(-45deg,#191919 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#191919 75%),linear-gradient(-45deg,transparent 75%,#191919 75%); background-size:18px 18px; background-position:0 0,0 9px,9px -9px,-9px 0; }
.frame-counter { position:absolute; right:12px; bottom:12px; padding:5px 8px; border-radius:5px; background:rgba(0,0,0,.7); color:#aaa; font-size:11px; }
.metrics { width:min(820px,100%); display:grid; grid-template-columns:1fr 32px 1fr 1fr; gap:10px; }.metrics>div:not(.arrow) { display:flex; flex-direction:column; gap:5px; padding:12px 14px; border:1px solid var(--border); border-radius:7px; background:var(--panel-bg); }.metrics span { color:var(--text-muted); font-size:10px; }.metrics strong { font-size:14px; }.metrics .arrow { display:grid; place-items:center; color:var(--text-muted); }
.status { width:min(792px,calc(100% - 28px)); margin-top:12px; padding:10px 14px; border-radius:6px; background:var(--ctrl-bg); color:var(--text-dim); font-size:11px; }.status.success { color:#73a986; }.status.failed { color:#d87979; }
.download-btn { width:min(820px,100%); display:flex; align-items:center; justify-content:center; gap:10px; margin-top:12px; text-decoration:none; box-sizing:border-box; }.download-btn span { opacity:.65; font-weight:400; }
@media (max-width:900px) { .control-panel{width:290px}.workspace{padding:20px}.metrics{grid-template-columns:1fr 24px 1fr}.metrics>div:last-child{grid-column:1/-1}.preview-area{height:38vh} }
</style>
