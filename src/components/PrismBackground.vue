<template>
  <div ref="containerRef" class="prism-container" aria-hidden="true"></div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Mesh, Program, Renderer, Triangle } from 'ogl'

const props = defineProps({
  height: { type: Number, default: 3.5 },
  baseWidth: { type: Number, default: 5.5 },
  animationType: { type: String, default: 'rotate' },
  glow: { type: Number, default: 1 },
  offset: { type: Object, default: () => ({ x: 0, y: 0 }) },
  noise: { type: Number, default: 0.5 },
  transparent: { type: Boolean, default: true },
  scale: { type: Number, default: 3.6 },
  hueShift: { type: Number, default: 0 },
  colorFrequency: { type: Number, default: 1 },
  hoverStrength: { type: Number, default: 2 },
  inertia: { type: Number, default: 0.05 },
  bloom: { type: Number, default: 1 },
  suspendWhenOffscreen: { type: Boolean, default: false },
  timeScale: { type: Number, default: 0.5 },
})

const containerRef = ref(null)
let cleanup = () => {}

onMounted(() => {
  const container = containerRef.value
  if (!container) return

  const H = Math.max(0.001, props.height)
  const BASE_HALF = Math.max(0.001, props.baseWidth) * 0.5
  const GLOW = Math.max(0, props.glow)
  const NOISE = Math.max(0, props.noise)
  const SCALE = Math.max(0.001, props.scale)
  const TS = Math.max(0, props.timeScale)
  const HOVSTR = Math.max(0, props.hoverStrength)
  const INERT = Math.max(0, Math.min(1, props.inertia))
  const dpr = Math.min(2.5, window.devicePixelRatio || 1)

  const renderer = new Renderer({ dpr, alpha: props.transparent, antialias: false })
  const gl = renderer.gl
  gl.disable(gl.DEPTH_TEST)
  gl.disable(gl.CULL_FACE)
  gl.disable(gl.BLEND)
  Object.assign(gl.canvas.style, {
    position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block',
  })
  container.appendChild(gl.canvas)

  const vertex = `
    attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
  `

  const fragment = `
    precision highp float;
    uniform vec2 iResolution;
    uniform float iTime;
    uniform float uHeight;
    uniform float uBaseHalf;
    uniform mat3 uRot;
    uniform int uUseBaseWobble;
    uniform float uGlow;
    uniform vec2 uOffsetPx;
    uniform float uNoise;
    uniform float uSaturation;
    uniform float uHueShift;
    uniform float uColorFreq;
    uniform float uBloom;
    uniform float uCenterShift;
    uniform float uInvBaseHalf;
    uniform float uInvHeight;
    uniform float uMinAxis;
    uniform float uPxScale;
    uniform float uTimeScale;

    vec4 tanh4(vec4 x) {
      vec4 e2x = exp(2.0 * x);
      return (e2x - 1.0) / (e2x + 1.0);
    }
    float rand(vec2 co) {
      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    float sdOctaAnisoInv(vec3 p) {
      vec3 q = vec3(abs(p.x) * uInvBaseHalf, abs(p.y) * uInvHeight, abs(p.z) * uInvBaseHalf);
      float m = q.x + q.y + q.z - 1.0;
      return m * uMinAxis * 0.5773502691896258;
    }
    float sdPyramidUpInv(vec3 p) {
      return max(sdOctaAnisoInv(p), -p.y);
    }
    mat3 hueRotation(float a) {
      float c = cos(a), s = sin(a);
      mat3 W = mat3(0.299,0.587,0.114, 0.299,0.587,0.114, 0.299,0.587,0.114);
      mat3 U = mat3(0.701,-0.587,-0.114, -0.299,0.413,-0.114, -0.300,-0.588,0.886);
      mat3 V = mat3(0.168,-0.331,0.500, 0.328,0.035,-0.500, -0.497,0.296,0.201);
      return W + U * c + V * s;
    }
    void main() {
      vec2 f = (gl_FragCoord.xy - 0.5 * iResolution.xy - uOffsetPx) * uPxScale;
      float z = 5.0;
      float d = 0.0;
      vec3 p;
      vec4 o = vec4(0.0);
      mat2 wob = mat2(1.0);
      if (uUseBaseWobble == 1) {
        float t = iTime * uTimeScale;
        float c0 = cos(t);
        wob = mat2(c0, cos(t + 33.0), cos(t + 11.0), c0);
      }
      for (int i = 0; i < 100; i++) {
        p = vec3(f, z);
        p.xz = p.xz * wob;
        p = uRot * p;
        vec3 q = p;
        q.y += uCenterShift;
        d = 0.1 + 0.2 * abs(sdPyramidUpInv(q));
        z -= d;
        o += (sin((p.y + z) * uColorFreq + vec4(0.0, 1.0, 2.0, 3.0)) + 1.0) / d;
      }
      o = tanh4(o * o * (uGlow * uBloom) / 1e5);
      vec3 col = o.rgb;
      col += (rand(gl_FragCoord.xy) - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
      float L = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = clamp(mix(vec3(L), col, uSaturation), 0.0, 1.0);
      if (abs(uHueShift) > 0.0001) col = clamp(hueRotation(uHueShift) * col, 0.0, 1.0);
      gl_FragColor = vec4(col, o.a);
    }
  `

  const iResBuf = new Float32Array(2)
  const offsetPxBuf = new Float32Array(2)
  const rotBuf = new Float32Array(9)
  const program = new Program(gl, {
    vertex,
    fragment,
    uniforms: {
      iResolution: { value: iResBuf }, iTime: { value: 0 }, uHeight: { value: H },
      uBaseHalf: { value: BASE_HALF }, uUseBaseWobble: { value: 1 },
      uRot: { value: new Float32Array([1,0,0, 0,1,0, 0,0,1]) }, uGlow: { value: GLOW },
      uOffsetPx: { value: offsetPxBuf }, uNoise: { value: NOISE },
      uSaturation: { value: props.transparent ? 1.5 : 1 }, uHueShift: { value: props.hueShift || 0 },
      uColorFreq: { value: Math.max(0, props.colorFrequency || 1) },
      uBloom: { value: Math.max(0, props.bloom || 1) }, uCenterShift: { value: H * 0.25 },
      uInvBaseHalf: { value: 1 / BASE_HALF }, uInvHeight: { value: 1 / H },
      uMinAxis: { value: Math.min(BASE_HALF, H) }, uPxScale: { value: 1 },
      uTimeScale: { value: TS },
    },
  })
  const mesh = new Mesh(gl, { geometry: new Triangle(gl), program })

  const resize = () => {
    renderer.setSize(container.clientWidth || 1, container.clientHeight || 1)
    iResBuf[0] = gl.drawingBufferWidth
    iResBuf[1] = gl.drawingBufferHeight
    offsetPxBuf[0] = (props.offset?.x || 0) * dpr
    offsetPxBuf[1] = (props.offset?.y || 0) * dpr
    program.uniforms.uPxScale.value = 1 / ((gl.drawingBufferHeight || 1) * 0.1 * SCALE)
  }
  const ro = new ResizeObserver(resize)
  ro.observe(container)
  resize()

  const setMat3FromEuler = (yaw, pitch, roll, out) => {
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cx = Math.cos(pitch), sx = Math.sin(pitch)
    const cz = Math.cos(roll), sz = Math.sin(roll)
    out[0] = cy*cz + sy*sx*sz; out[1] = cx*sz; out[2] = -sy*cz + cy*sx*sz
    out[3] = -cy*sz + sy*sx*cz; out[4] = cx*cz; out[5] = sy*sz + cy*sx*cz
    out[6] = sy*cx; out[7] = -sx; out[8] = cy*cx
    return out
  }

  let raf = 0
  const t0 = performance.now()
  let yaw = 0, pitch = 0, roll = 0, targetYaw = 0, targetPitch = 0
  const pointer = { x: 0, y: 0, inside: true }
  const onMove = event => {
    pointer.x = Math.max(-1, Math.min(1, (event.clientX - innerWidth * 0.5) / (innerWidth * 0.5)))
    pointer.y = Math.max(-1, Math.min(1, (event.clientY - innerHeight * 0.5) / (innerHeight * 0.5)))
    pointer.inside = true
  }
  const onLeave = () => { pointer.inside = false }

  if (props.animationType === 'hover') {
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('blur', onLeave)
    program.uniforms.uUseBaseWobble.value = 0
  } else if (props.animationType === '3drotate') {
    program.uniforms.uUseBaseWobble.value = 0
  }

  const render = now => {
    const time = (now - t0) * 0.001
    program.uniforms.iTime.value = time
    if (props.animationType === 'hover') {
      targetYaw = (pointer.inside ? -pointer.x : 0) * 0.6 * HOVSTR
      targetPitch = (pointer.inside ? pointer.y : 0) * 0.6 * HOVSTR
      yaw += (targetYaw - yaw) * INERT
      pitch += (targetPitch - pitch) * INERT
      roll += (0 - roll) * 0.1
      program.uniforms.uRot.value = setMat3FromEuler(yaw, pitch, roll, rotBuf)
    } else if (props.animationType === '3drotate') {
      const t = time * TS
      program.uniforms.uRot.value = setMat3FromEuler(t * 0.4, Math.sin(t * 0.5) * 0.6, Math.sin(t * 0.3) * 0.5, rotBuf)
    } else {
      program.uniforms.uRot.value = setMat3FromEuler(0, 0, 0, rotBuf)
    }
    renderer.render({ scene: mesh })
    raf = requestAnimationFrame(render)
  }

  let io = null
  const start = () => { if (!raf) raf = requestAnimationFrame(render) }
  const stop = () => { if (raf) cancelAnimationFrame(raf); raf = 0 }
  if (props.suspendWhenOffscreen) {
    io = new IntersectionObserver(entries => entries.some(entry => entry.isIntersecting) ? start() : stop())
    io.observe(container)
  }
  start()

  cleanup = () => {
    stop()
    ro.disconnect()
    io?.disconnect()
    window.removeEventListener('pointermove', onMove)
    window.removeEventListener('mouseleave', onLeave)
    window.removeEventListener('blur', onLeave)
    if (gl.canvas.parentElement === container) container.removeChild(gl.canvas)
  }
})

onBeforeUnmount(() => cleanup())
</script>

<style scoped>
.prism-container { position: relative; width: 100%; height: 100%; }
</style>
