<template>
  <div
    class="keyer-page"
    @dragenter.prevent="dragging = true"
    @dragover.prevent
    @dragleave="onDragLeave"
    @drop.prevent="onDrop"
  >
    <aside class="keyer-panel">
      <div class="panel-header">
        <div>
          <h1>智能抠像</h1>
          <p>绿幕与指定颜色背景移除</p>
        </div>
        <span class="live-badge">LOCAL</span>
      </div>

      <section class="panel-section import-section">
        <input ref="fileInput" type="file" accept="image/png,image/jpeg,image/webp,video/mp4,video/webm,video/quicktime,.png,.jpg,.jpeg,.webp,.mp4,.webm,.mov" hidden @change="onFileChange" />
        <button class="import-button" type="button" @click="fileInput?.click()">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4m0 0L7 9m5-5 5 5M5 14v5h14v-5"/></svg>
          {{ sourceLoaded ? '更换素材' : '选择图片或视频' }}
        </button>
        <p>支持 PNG、JPG、WebP、MP4、MOV 和 WebM，也可拖入</p>
        <div v-if="sourceLoaded" class="source-file">
          <span class="source-type">{{ sourceType === 'video' ? 'VIDEO' : 'IMAGE' }}</span>
          <span class="source-name">{{ sourceFile?.name }}</span>
          <button type="button" title="移除素材" @click="clearSource">×</button>
        </div>
      </section>

      <section class="panel-section" :class="{ disabled: !sourceLoaded }">
        <div class="section-title">
          <span>抠除颜色</span>
          <button class="reset-button" type="button" :disabled="!sourceLoaded" @click="resetControls">重置</button>
        </div>

        <div class="color-control">
          <label class="color-swatch" :style="{ background: targetColor }">
            <input v-model="targetColor" type="color" :disabled="!sourceLoaded" aria-label="选择抠除颜色" />
          </label>
          <div class="color-value">
            <span>当前颜色</span>
            <strong>{{ targetColor.toUpperCase() }}</strong>
          </div>
          <button class="eyedropper-button" :class="{ active: sampling }" type="button" :disabled="!sourceLoaded" @click="sampling = !sampling">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m19 3 2 2-8.5 8.5-3-3L18 2l1 1ZM8.5 11.5 4 16v4h4l4.5-4.5"/></svg>
            {{ sampling ? '点击画面取色' : '吸管取色' }}
          </button>
        </div>

        <div class="preset-row">
          <button v-for="preset in colorPresets" :key="preset.color" type="button" :disabled="!sourceLoaded" @click="targetColor = preset.color">
            <i :style="{ background: preset.color }"></i>{{ preset.label }}
          </button>
        </div>
      </section>

      <section class="panel-section control-list" :class="{ disabled: !sourceLoaded }">
        <div class="range-control">
          <div class="range-label"><span>颜色容差<small>扩大抠色范围</small></span><strong>{{ tolerance }}</strong></div>
          <input v-model.number="tolerance" type="range" min="0" max="100" :disabled="!sourceLoaded" />
        </div>
        <div class="range-control">
          <div class="range-label"><span>边缘柔化<small>平滑头发与细小边缘</small></span><strong>{{ softness }}</strong></div>
          <input v-model.number="softness" type="range" min="0" max="100" :disabled="!sourceLoaded" />
        </div>
        <div class="range-control">
          <div class="range-label"><span>缩边<small>向内收紧透明遮罩</small></span><strong>{{ choke }}</strong></div>
          <input v-model.number="choke" type="range" min="0" max="100" :disabled="!sourceLoaded" />
        </div>
        <div class="range-control">
          <div class="range-label"><span>去色溢<small>降低边缘绿色或蓝色反光</small></span><strong>{{ spill }}</strong></div>
          <input v-model.number="spill" type="range" min="0" max="100" :disabled="!sourceLoaded" />
        </div>
      </section>

      <section class="panel-section export-section">
        <button class="export-button" type="button" :disabled="!sourceLoaded" @click="exportPng">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v12m0 0 5-5m-5 5-5-5M5 20h14"/></svg>
          {{ sourceType === 'video' ? '导出当前透明帧' : '导出透明 PNG' }}
        </button>
        <p v-if="sourceType === 'video'">当前为视频实时预览，此按钮导出播放位置的透明画面。</p>
      </section>
    </aside>

    <main class="keyer-workspace">
      <div v-if="!sourceLoaded" class="empty-workspace" @click="fileInput?.click()">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4zM4 15l4-4 4 4 3-3 5 5M8 9h.01"/></svg>
        </div>
        <h2>拖入绿幕素材开始抠像</h2>
        <p>也可点击此处选择图片或视频</p>
        <div class="empty-tags"><span>指定颜色</span><span>边缘柔化</span><span>缩边</span><span>去绿边</span></div>
      </div>

      <template v-else>
        <div class="workspace-header">
          <div>
            <span class="workspace-kicker">CHROMA KEY PREVIEW</span>
            <h2>{{ sourceFile?.name }}</h2>
          </div>
          <div class="source-meta"><span>{{ sourceWidth }} × {{ sourceHeight }}</span><span>{{ sourceType === 'video' ? '视频' : '图片' }}</span></div>
        </div>

        <div class="preview-toolbar">
          <div class="view-tabs">
            <button type="button" :class="{ active: previewMode === 'result' }" @click="previewMode = 'result'">抠像结果</button>
            <button type="button" :class="{ active: previewMode === 'compare' }" @click="previewMode = 'compare'">前后对比</button>
          </div>
          <div class="background-tabs">
            <span>预览背景</span>
            <button v-for="bg in backgrounds" :key="bg.id" type="button" :class="['bg-dot', bg.id, { active: previewBackground === bg.id }]" :title="bg.label" @click="previewBackground = bg.id"></button>
          </div>
        </div>

        <div class="preview-stage" :class="['background-' + previewBackground, { sampling }]">
          <div v-if="previewMode === 'compare'" class="preview-pane source-pane">
            <span class="pane-label">原始画面</span>
            <img v-if="sourceType === 'image'" ref="sourceImage" :src="objectUrl" alt="原始素材" @load="onImageLoad" />
            <video v-else ref="sourceVideo" :src="objectUrl" controls muted loop playsinline @loadeddata="onVideoLoad" @play="startRenderLoop" @pause="renderFrame" @seeked="renderFrame"></video>
          </div>

          <div class="preview-pane result-pane">
            <span class="pane-label">{{ sampling ? '点击要抠除的背景颜色' : '透明结果' }}</span>
            <canvas ref="outputCanvas" @click="sampleColor"></canvas>
          </div>

          <template v-if="previewMode === 'result'">
            <img v-if="sourceType === 'image'" ref="sourceImage" class="hidden-source" :src="objectUrl" alt="" @load="onImageLoad" />
            <video v-else ref="sourceVideo" class="hidden-source" :src="objectUrl" muted loop playsinline @loadeddata="onVideoLoad" @play="startRenderLoop" @pause="renderFrame" @seeked="renderFrame"></video>
          </template>
        </div>

        <div v-if="sourceType === 'video' && previewMode === 'result'" class="video-controls">
          <button type="button" @click="toggleVideo">{{ sourceVideo?.paused ? '播放' : '暂停' }}</button>
          <input type="range" min="0" :max="videoDuration || 0" step="0.01" :value="videoCurrentTime" @input="seekVideo" />
          <span>{{ formatTime(videoCurrentTime) }} / {{ formatTime(videoDuration) }}</span>
        </div>

        <div class="workspace-hint">
          <span class="status-dot"></span>
          <span>{{ sampling ? '吸管模式已开启，请在画面中点击背景取色' : '处理在浏览器本地完成，素材不会上传' }}</span>
        </div>
      </template>
    </main>

    <div v-if="dragging" class="drop-overlay">
      <div><strong>释放素材开始抠像</strong><span>支持图片和视频</span></div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import * as THREE from 'three'

const fileInput = ref(null)
const sourceImage = ref(null)
const sourceVideo = ref(null)
const outputCanvas = ref(null)
const sourceFile = ref(null)
const sourceType = ref('image')
const sourceLoaded = ref(false)
const objectUrl = ref('')
const sourceWidth = ref(0)
const sourceHeight = ref(0)
const dragging = ref(false)
const sampling = ref(false)
const targetColor = ref('#00ff00')
const tolerance = ref(28)
const softness = ref(18)
const choke = ref(4)
const spill = ref(58)
const previewMode = ref('result')
const previewBackground = ref('checker')
const videoDuration = ref(0)
const videoCurrentTime = ref(0)

const colorPresets = [
  { label: '绿幕', color: '#00ff00' },
  { label: '蓝幕', color: '#0066ff' },
  { label: '白色', color: '#ffffff' },
  { label: '黑色', color: '#000000' },
]
const backgrounds = [
  { id: 'checker', label: '透明棋盘格' },
  { id: 'black', label: '黑色' },
  { id: 'white', label: '白色' },
]

let renderer = null
let scene = null
let camera = null
let material = null
let texture = null
let animationFrame = 0
let autoColorPending = false
const sampleCanvas = document.createElement('canvas')

const vertexShader = `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`
const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform vec3 uKeyColor;
  uniform float uTolerance;
  uniform float uSoftness;
  uniform float uChoke;
  uniform float uSpill;

  vec2 chroma(vec3 c) {
    return vec2(-0.168736*c.r - 0.331264*c.g + 0.5*c.b,
                 0.5*c.r - 0.418688*c.g - 0.081312*c.b);
  }

  void main() {
    vec4 source = texture2D(uTexture, vUv);
    float distanceToKey = distance(chroma(source.rgb), chroma(uKeyColor));
    float threshold = uTolerance + uChoke;
    float feather = max(0.001, uSoftness);
    float alpha = smoothstep(threshold - feather, threshold + feather, distanceToKey);
    float spillAmount = (1.0 - alpha) * uSpill;
    vec3 cleaned = source.rgb;
    if (uKeyColor.g >= uKeyColor.r && uKeyColor.g >= uKeyColor.b) {
      float limit = max(source.r, source.b) * 1.08;
      float reduced = mix(source.g, min(source.g, limit), spillAmount);
      float removed = max(0.0, source.g - reduced);
      cleaned = vec3(source.r + removed * 0.18, reduced, source.b + removed * 0.18);
    } else if (uKeyColor.b >= uKeyColor.r && uKeyColor.b >= uKeyColor.g) {
      float limit = max(source.r, source.g) * 1.08;
      float reduced = mix(source.b, min(source.b, limit), spillAmount);
      float removed = max(0.0, source.b - reduced);
      cleaned = vec3(source.r + removed * 0.15, source.g + removed * 0.15, reduced);
    } else {
      float luminance = dot(source.rgb, vec3(0.2126, 0.7152, 0.0722));
      cleaned = mix(source.rgb, vec3(luminance), spillAmount * 0.16);
    }
    gl_FragColor = vec4(cleaned, alpha * source.a);
  }
`

function setupRenderer(media) {
  disposeRenderer()
  if (!outputCanvas.value) return
  renderer = new THREE.WebGLRenderer({ canvas: outputCanvas.value, alpha: true, antialias: false, preserveDrawingBuffer: true, premultipliedAlpha: false })
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
  renderer.setClearColor(0x000000, 0)
  scene = new THREE.Scene()
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  texture = sourceType.value === 'video' ? new THREE.VideoTexture(media) : new THREE.Texture(media)
  texture.colorSpace = THREE.NoColorSpace
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.needsUpdate = true
  material = new THREE.ShaderMaterial({
    vertexShader, fragmentShader, transparent: true, depthTest: false, depthWrite: false,
    uniforms: {
      uTexture: { value: texture }, uKeyColor: { value: colorVector(targetColor.value) },
      uTolerance: { value: mappedTolerance() }, uSoftness: { value: mappedSoftness() },
      uChoke: { value: mappedChoke() }, uSpill: { value: spill.value / 100 },
    },
  })
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material))
  setPreviewSize()
  renderFrame()
}

function detectEdgeColor(media) {
  const size = 64
  sampleCanvas.width = size
  sampleCanvas.height = size
  const context = sampleCanvas.getContext('2d', { willReadFrequently: true })
  context.drawImage(media, 0, 0, size, size)
  const pixels = context.getImageData(0, 0, size, size).data
  const buckets = new Map()
  const edgeWidth = 8
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (x >= edgeWidth && x < size - edgeWidth && y >= edgeWidth && y < size - edgeWidth) continue
      const index = (y * size + x) * 4
      if (pixels[index + 3] < 24) continue
      const r = pixels[index], g = pixels[index + 1], b = pixels[index + 2]
      const key = `${r >> 4}-${g >> 4}-${b >> 4}`
      const bucket = buckets.get(key) || { count: 0, r: 0, g: 0, b: 0 }
      bucket.count++; bucket.r += r; bucket.g += g; bucket.b += b
      buckets.set(key, bucket)
    }
  }
  const dominant = [...buckets.values()].sort((a, b) => b.count - a.count)[0]
  if (!dominant) return
  const values = [dominant.r, dominant.g, dominant.b].map(value => Math.round(value / dominant.count))
  targetColor.value = '#' + values.map(value => value.toString(16).padStart(2, '0')).join('')
}

function setPreviewSize(fullResolution = false) {
  if (!renderer || !sourceWidth.value || !sourceHeight.value) return
  const limit = fullResolution ? Math.max(sourceWidth.value, sourceHeight.value) : 1600
  const scale = Math.min(1, limit / Math.max(sourceWidth.value, sourceHeight.value))
  renderer.setSize(Math.max(1, Math.round(sourceWidth.value * scale)), Math.max(1, Math.round(sourceHeight.value * scale)), false)
}

function renderFrame() {
  if (!renderer || !scene || !camera) return
  if (texture && sourceType.value === 'image') texture.needsUpdate = true
  renderer.render(scene, camera)
  if (sourceType.value === 'video' && sourceVideo.value) videoCurrentTime.value = sourceVideo.value.currentTime || 0
}

function startRenderLoop() {
  cancelAnimationFrame(animationFrame)
  const tick = () => {
    renderFrame()
    if (sourceVideo.value && !sourceVideo.value.paused && !sourceVideo.value.ended) animationFrame = requestAnimationFrame(tick)
  }
  tick()
}

function updateUniforms() {
  if (!material) return
  material.uniforms.uKeyColor.value.copy(colorVector(targetColor.value))
  material.uniforms.uTolerance.value = mappedTolerance()
  material.uniforms.uSoftness.value = mappedSoftness()
  material.uniforms.uChoke.value = mappedChoke()
  material.uniforms.uSpill.value = spill.value / 100
  renderFrame()
}

const mappedTolerance = () => 0.018 + tolerance.value / 100 * 0.36
const mappedSoftness = () => 0.002 + softness.value / 100 * 0.115
const mappedChoke = () => choke.value / 100 * 0.12
function colorVector(hex) {
  const value = parseInt(hex.replace('#', ''), 16)
  return new THREE.Vector3(((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255)
}

function onFileChange(event) {
  const file = event.target.files?.[0]
  if (file) loadFile(file)
  event.target.value = ''
}

async function loadFile(file) {
  if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
    window.alert('请选择图片或视频文件')
    return
  }
  clearSource()
  sourceFile.value = file
  sourceType.value = file.type.startsWith('video/') ? 'video' : 'image'
  autoColorPending = true
  objectUrl.value = URL.createObjectURL(file)
  sourceLoaded.value = true
  await nextTick()
}

async function onImageLoad() {
  const image = sourceImage.value
  if (!image) return
  sourceWidth.value = image.naturalWidth
  sourceHeight.value = image.naturalHeight
  if (autoColorPending) { detectEdgeColor(image); autoColorPending = false }
  await nextTick()
  setupRenderer(image)
}

async function onVideoLoad() {
  const video = sourceVideo.value
  if (!video) return
  sourceWidth.value = video.videoWidth
  sourceHeight.value = video.videoHeight
  videoDuration.value = video.duration || 0
  if (autoColorPending) { detectEdgeColor(video); autoColorPending = false }
  await nextTick()
  setupRenderer(video)
  renderFrame()
}

function sampleColor(event) {
  if (!sampling.value || !sourceLoaded.value) return
  const media = sourceType.value === 'video' ? sourceVideo.value : sourceImage.value
  if (!media) return
  const maxSize = 1024
  const scale = Math.min(1, maxSize / Math.max(sourceWidth.value, sourceHeight.value))
  sampleCanvas.width = Math.max(1, Math.round(sourceWidth.value * scale))
  sampleCanvas.height = Math.max(1, Math.round(sourceHeight.value * scale))
  const context = sampleCanvas.getContext('2d', { willReadFrequently: true })
  context.drawImage(media, 0, 0, sampleCanvas.width, sampleCanvas.height)
  const rect = event.currentTarget.getBoundingClientRect()
  const x = Math.max(0, Math.min(sampleCanvas.width - 1, Math.floor((event.clientX - rect.left) / rect.width * sampleCanvas.width)))
  const y = Math.max(0, Math.min(sampleCanvas.height - 1, Math.floor((event.clientY - rect.top) / rect.height * sampleCanvas.height)))
  const [r, g, b] = context.getImageData(x, y, 1, 1).data
  targetColor.value = '#' + [r, g, b].map(value => value.toString(16).padStart(2, '0')).join('')
  sampling.value = false
}

function exportPng() {
  if (!renderer || !outputCanvas.value) return
  renderer.setPixelRatio(1)
  setPreviewSize(true)
  renderFrame()
  outputCanvas.value.toBlob(blob => {
    if (!blob) return
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    const baseName = sourceFile.value?.name.replace(/\.[^.]+$/, '') || 'keyed'
    link.href = url
    link.download = `${baseName}-transparent${sourceType.value === 'video' ? '-frame' : ''}.png`
    link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    setPreviewSize()
    renderFrame()
  }, 'image/png')
}

function toggleVideo() {
  const video = sourceVideo.value
  if (!video) return
  if (video.paused) video.play()
  else video.pause()
}

function seekVideo(event) {
  if (!sourceVideo.value) return
  sourceVideo.value.currentTime = Number(event.target.value)
  videoCurrentTime.value = sourceVideo.value.currentTime
}

function resetControls() {
  targetColor.value = '#00ff00'; tolerance.value = 28; softness.value = 18; choke.value = 4; spill.value = 58
}

function clearSource() {
  cancelAnimationFrame(animationFrame)
  disposeRenderer()
  if (objectUrl.value) URL.revokeObjectURL(objectUrl.value)
  objectUrl.value = ''
  sourceFile.value = null
  sourceLoaded.value = false
  sourceWidth.value = 0
  sourceHeight.value = 0
  videoDuration.value = 0
  videoCurrentTime.value = 0
  sampling.value = false
}

function disposeRenderer() {
  cancelAnimationFrame(animationFrame)
  texture?.dispose()
  material?.dispose()
  scene?.traverse(object => { object.geometry?.dispose?.() })
  renderer?.dispose()
  renderer = null; scene = null; camera = null; material = null; texture = null
}

function onDrop(event) {
  dragging.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file) loadFile(file)
}
function onDragLeave(event) { if (!event.currentTarget.contains(event.relatedTarget)) dragging.value = false }
function formatTime(seconds) { const safe = Number.isFinite(seconds) ? seconds : 0; return `${Math.floor(safe / 60)}:${Math.floor(safe % 60).toString().padStart(2, '0')}` }

watch([targetColor, tolerance, softness, choke, spill], updateUniforms)
watch(previewMode, async () => {
  if (!sourceLoaded.value) return
  const wasPlaying = sourceType.value === 'video' && sourceVideo.value && !sourceVideo.value.paused
  await nextTick()
  if (sourceType.value === 'image') onImageLoad()
  else onVideoLoad()
  if (wasPlaying) sourceVideo.value?.play()
})

onBeforeUnmount(clearSource)
</script>

<style scoped>
.keyer-page{position:relative;flex:1;min-width:0;display:flex;overflow:hidden;background:var(--app-bg);color:var(--text-primary)}
.keyer-panel{width:310px;flex-shrink:0;display:flex;flex-direction:column;border-right:1px solid var(--border);background:var(--panel-bg);overflow-y:auto}
.panel-header{padding:17px 16px;display:flex;align-items:flex-start;justify-content:space-between;border-bottom:1px solid var(--border)}
.panel-header h1{font-size:14px;font-weight:600}.panel-header p{margin-top:5px;color:var(--text-muted);font-size:10px}.live-badge{padding:4px 6px;border:1px solid #315b38;border-radius:4px;color:#70b67c;background:#142218;font:600 8px/1 'Space Grotesk',sans-serif;letter-spacing:1px}
.panel-section{padding:15px 16px;border-bottom:1px solid var(--border)}.panel-section.disabled{opacity:.48;pointer-events:none}.panel-section>p,.export-section p{margin-top:8px;color:var(--text-muted);font-size:9px;line-height:1.55;text-align:center}
.import-button,.export-button{width:100%;height:38px;display:flex;align-items:center;justify-content:center;gap:9px;border:1px solid var(--border-hover);border-radius:7px;background:var(--ctrl-bg);color:var(--text-primary);font:inherit;font-size:11px;cursor:pointer;transition:.2s}.import-button:hover{background:var(--ctrl-hover);border-color:var(--text-dim)}.import-button svg,.export-button svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.source-file{display:flex;align-items:center;gap:8px;margin-top:11px;padding:8px;border-radius:6px;background:var(--ctrl-bg);border:1px solid var(--border)}.source-type{color:#8be36f;font:600 7px/1 'Space Grotesk',sans-serif;letter-spacing:1px}.source-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--text-dim);font-size:10px}.source-file button{border:0;background:none;color:var(--text-muted);font-size:15px;cursor:pointer}
.section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;font-size:11px;color:var(--text-dim)}.reset-button{border:0;background:none;color:var(--text-muted);font:inherit;font-size:9px;cursor:pointer}.reset-button:hover{color:var(--text-primary)}
.color-control{display:grid;grid-template-columns:36px 1fr auto;align-items:center;gap:9px}.color-swatch{width:36px;height:36px;border:2px solid var(--border-hover);border-radius:8px;overflow:hidden;cursor:pointer}.color-swatch input{width:52px;height:52px;opacity:0;cursor:pointer}.color-value{display:flex;flex-direction:column;gap:4px}.color-value span{color:var(--text-muted);font-size:8px}.color-value strong{font:600 11px/1 'Space Grotesk',sans-serif}.eyedropper-button{height:32px;display:flex;align-items:center;gap:5px;padding:0 8px;border:1px solid var(--border);border-radius:6px;background:var(--ctrl-bg);color:var(--text-dim);font:inherit;font-size:8px;cursor:pointer}.eyedropper-button.active{border-color:#8be36f;color:#8be36f;background:#142218}.eyedropper-button svg{width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:1.7}
.preset-row{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-top:11px}.preset-row button{height:28px;display:flex;align-items:center;justify-content:center;gap:4px;border:1px solid var(--border);border-radius:5px;background:var(--ctrl-bg);color:var(--text-muted);font:inherit;font-size:8px;cursor:pointer}.preset-row button:hover{color:var(--text-primary);border-color:var(--border-hover)}.preset-row i{width:7px;height:7px;border-radius:50%;border:1px solid rgba(255,255,255,.35)}
.control-list{display:flex;flex-direction:column;gap:17px}.range-label{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px}.range-label>span{display:flex;flex-direction:column;gap:3px;color:var(--text-dim);font-size:10px}.range-label small{color:var(--text-muted);font-size:8px}.range-label strong{min-width:30px;padding:3px 5px;border-radius:4px;background:var(--ctrl-bg);color:var(--text-primary);font:500 9px/1 'Space Grotesk',sans-serif;text-align:center}.range-control input{width:100%;height:3px;appearance:none;border-radius:2px;background:var(--border-hover);outline:none}.range-control input::-webkit-slider-thumb{width:12px;height:12px;appearance:none;border:2px solid var(--panel-bg);border-radius:50%;background:#d8d8d8;box-shadow:0 0 0 1px var(--border-hover);cursor:pointer}
.export-section{margin-top:auto}.export-button{border-color:#a8e835;background:#baff35;color:#080808;font-weight:600}.export-button:hover:not(:disabled){background:#c8ff61}.export-button:disabled,.import-button:disabled{opacity:.35;cursor:not-allowed}
.keyer-workspace{flex:1;min-width:0;display:flex;flex-direction:column;padding:18px 22px 16px;overflow:hidden;background-image:linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px);background-size:36px 36px}
.empty-workspace{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--text-muted);cursor:pointer}.empty-icon{width:88px;height:88px;display:grid;place-items:center;margin-bottom:20px;border:1px dashed var(--border-hover);border-radius:22px;background:var(--panel-bg)}.empty-icon svg{width:37px;height:37px;fill:none;stroke:var(--text-dim);stroke-width:1.15}.empty-workspace h2{color:var(--text-dim);font-size:15px;font-weight:500}.empty-workspace p{margin-top:8px;font-size:10px}.empty-tags{display:flex;gap:7px;margin-top:19px}.empty-tags span{padding:5px 8px;border:1px solid var(--border);border-radius:12px;background:var(--ctrl-bg);font-size:8px}
.workspace-header{display:flex;align-items:flex-start;justify-content:space-between;flex-shrink:0}.workspace-kicker{color:#8be36f;font:600 8px/1 'Space Grotesk',sans-serif;letter-spacing:1.5px}.workspace-header h2{max-width:600px;margin-top:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;font-weight:500}.source-meta{display:flex;gap:7px}.source-meta span{padding:5px 7px;border:1px solid var(--border);border-radius:4px;background:var(--ctrl-bg);color:var(--text-muted);font-size:8px}
.preview-toolbar{height:40px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;margin-top:12px;padding:0 8px;border:1px solid var(--border);border-bottom:0;border-radius:8px 8px 0 0;background:var(--toolbar-bg)}.view-tabs{display:flex;gap:4px}.view-tabs button{height:27px;padding:0 10px;border:0;border-radius:5px;background:transparent;color:var(--text-muted);font:inherit;font-size:9px;cursor:pointer}.view-tabs button.active{background:var(--ctrl-active);color:var(--text-primary)}.background-tabs{display:flex;align-items:center;gap:7px}.background-tabs>span{color:var(--text-muted);font-size:8px}.bg-dot{width:17px;height:17px;border:2px solid transparent;border-radius:50%;cursor:pointer}.bg-dot.active{border-color:var(--text-primary)}.bg-dot.checker{background:conic-gradient(#aaa 25%,#555 0 50%,#aaa 0 75%,#555 0);background-size:7px 7px}.bg-dot.black{background:#050505}.bg-dot.white{background:#eee}
.preview-stage{flex:1;min-height:0;display:flex;align-items:stretch;justify-content:center;gap:1px;border:1px solid var(--border);border-radius:0 0 8px 8px;overflow:hidden;background-color:#171717;background-image:linear-gradient(45deg,#222 25%,transparent 25%),linear-gradient(-45deg,#222 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#222 75%),linear-gradient(-45deg,transparent 75%,#222 75%);background-size:20px 20px;background-position:0 0,0 10px,10px -10px,-10px 0}.preview-stage.background-black{background:#050505}.preview-stage.background-white{background:#eee}.preview-stage.sampling{cursor:crosshair}.preview-pane{position:relative;flex:1;min-width:0;display:flex;align-items:center;justify-content:center;overflow:hidden;background:transparent}.source-pane{background:#050505;border-right:1px solid var(--border)}.preview-pane img,.preview-pane video,.preview-pane canvas{display:block;max-width:100%;max-height:100%;object-fit:contain}.result-pane canvas{cursor:inherit}.pane-label{position:absolute;z-index:3;left:10px;top:10px;padding:5px 7px;border-radius:4px;background:rgba(0,0,0,.68);color:#aaa;font-size:8px;pointer-events:none}.hidden-source{position:absolute!important;width:1px!important;height:1px!important;opacity:0!important;pointer-events:none}
.video-controls{height:38px;display:flex;align-items:center;gap:10px;flex-shrink:0;margin-top:7px;padding:0 10px;border:1px solid var(--border);border-radius:6px;background:var(--panel-bg)}.video-controls button{width:42px;border:0;background:none;color:var(--text-dim);font:inherit;font-size:9px;cursor:pointer}.video-controls input{flex:1;height:3px}.video-controls span{color:var(--text-muted);font:500 8px/1 'Space Grotesk',sans-serif}
.workspace-hint{height:24px;display:flex;align-items:center;gap:7px;flex-shrink:0;color:var(--text-muted);font-size:8px}.status-dot{width:5px;height:5px;border-radius:50%;background:#71b67b;box-shadow:0 0 8px rgba(113,182,123,.5)}
.drop-overlay{position:absolute;inset:10px;z-index:100;display:grid;place-items:center;border:2px dashed #8be36f;border-radius:14px;background:color-mix(in srgb,var(--app-bg) 94%,transparent);pointer-events:none}.drop-overlay>div{display:flex;flex-direction:column;align-items:center;gap:8px}.drop-overlay strong{font-size:15px}.drop-overlay span{color:var(--text-dim);font-size:10px}
@media(max-width:900px){.keyer-panel{width:270px}.keyer-workspace{padding:14px}.source-meta{display:none}.preview-stage{flex-direction:column}.source-pane{border-right:0;border-bottom:1px solid var(--border)}}
</style>
