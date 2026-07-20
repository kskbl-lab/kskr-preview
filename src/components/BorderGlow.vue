<template>
  <div
    ref="cardRef"
    class="border-glow-card"
    :style="glowStyle"
    @pointermove="handlePointerMove"
    @pointerleave="handlePointerLeave"
  >
    <span class="edge-light"></span>
    <div class="border-glow-inner"><slot /></div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  edgeSensitivity: { type: Number, default: 24 },
  glowColor: { type: String, default: '82 100 62' },
  backgroundColor: { type: String, default: '#101011' },
  borderRadius: { type: Number, default: 18 },
  glowRadius: { type: Number, default: 28 },
  glowIntensity: { type: Number, default: 0.82 },
  coneSpread: { type: Number, default: 22 },
  colors: { type: Array, default: () => ['#baff35', '#786dff', '#36d6ff'] },
  fillOpacity: { type: Number, default: 0.18 },
})

const cardRef = ref(null)
const parseHsl = value => {
  const match = value.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/)
  return match ? { h: +match[1], s: +match[2], l: +match[3] } : { h: 82, s: 100, l: 62 }
}

const glowStyle = computed(() => {
  const { h, s, l } = parseHsl(props.glowColor)
  const color = opacity => `hsl(${h}deg ${s}% ${l}% / ${Math.min(opacity * props.glowIntensity, 100)}%)`
  const colors = props.colors.length ? props.colors : ['#baff35']
  return {
    '--card-bg': props.backgroundColor,
    '--edge-sensitivity': props.edgeSensitivity,
    '--border-radius': `${props.borderRadius}px`,
    '--glow-padding': `${props.glowRadius}px`,
    '--cone-spread': props.coneSpread,
    '--fill-opacity': props.fillOpacity,
    '--glow-color': color(100), '--glow-color-60': color(60), '--glow-color-40': color(40),
    '--glow-color-25': color(25), '--glow-color-10': color(10),
    '--gradient-one': colors[0], '--gradient-two': colors[Math.min(1, colors.length - 1)],
    '--gradient-three': colors[Math.min(2, colors.length - 1)],
  }
})

function handlePointerMove(event) {
  const card = cardRef.value
  if (!card) return
  card.classList.add('is-hovered')
  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const cx = rect.width / 2
  const cy = rect.height / 2
  const dx = x - cx
  const dy = y - cy
  const kx = dx === 0 ? Infinity : cx / Math.abs(dx)
  const ky = dy === 0 ? Infinity : cy / Math.abs(dy)
  const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1)
  let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90
  if (angle < 0) angle += 360
  card.style.setProperty('--edge-proximity', (edge * 100).toFixed(3))
  card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`)
}

function handlePointerLeave() {
  const card = cardRef.value
  if (!card) return
  card.style.setProperty('--edge-proximity', '0')
  card.classList.remove('is-hovered')
}
</script>

<style scoped>
.border-glow-card {
  --edge-proximity:0; --cursor-angle:45deg;
  --color-sensitivity:calc(var(--edge-sensitivity) + 10);
  position:relative; display:grid; isolation:isolate;
  border:1px solid rgb(255 255 255 / 12%);
  border-radius:var(--border-radius); background:var(--card-bg);
  overflow:visible; transform:translate3d(0,0,.01px);
}
.border-glow-card::before,.border-glow-card::after,.edge-light {
  content:""; position:absolute; inset:0; border-radius:inherit;
  pointer-events:none; transition:opacity .24s ease-out; z-index:-1;
}
.border-glow-card:not(.is-hovered)::before,.border-glow-card:not(.is-hovered)::after,.border-glow-card:not(.is-hovered)>.edge-light {
  opacity:0; transition:opacity .55s ease-in-out;
}
.border-glow-card::before {
  padding:1px;
  background:conic-gradient(from var(--cursor-angle),transparent 0 34%,var(--gradient-one) 43%,var(--gradient-two) 50%,var(--gradient-three) 57%,transparent 66%);
  mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  mask-composite:exclude;
  opacity:clamp(0,calc((var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),1);
}
.border-glow-card::after {
  background:radial-gradient(circle at 50% 50%,var(--gradient-one),transparent 66%);
  opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.2);
  mix-blend-mode:soft-light;
}
.edge-light {
  inset:calc(var(--glow-padding) * -1); z-index:-2;
  mask-image:conic-gradient(from var(--cursor-angle) at center,black 3%,transparent 12%,transparent 88%,black 97%);
  opacity:clamp(0,calc((var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),1);
  mix-blend-mode:plus-lighter;
}
.edge-light::before {
  content:""; position:absolute; inset:var(--glow-padding); border-radius:inherit;
  box-shadow:inset 0 0 0 1px var(--glow-color),inset 0 0 8px var(--glow-color-40),0 0 3px var(--glow-color-60),0 0 12px var(--glow-color-40),0 0 28px var(--glow-color-25),0 0 48px var(--glow-color-10);
}
.border-glow-inner { position:relative; display:flex; min-width:0; min-height:0; overflow:hidden; border-radius:inherit; z-index:1; }
</style>
