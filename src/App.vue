<template>
  <div class="app" :class="['theme-' + currentTheme, { 'is-workspace': workspaceOpen }]">
    <TopBar
      :currentTheme="currentTheme"
      :currentRoute="currentRoute"
      :workspaceOpen="workspaceOpen"
      :workspaceTitle="currentModule?.title || ''"
      @set-theme="setTheme"
      @home="showHome"
    />

    <main class="app-stage">
      <Transition name="landing">
        <div v-if="!workspaceOpen" class="landing-page">
          <div class="landing-prism">
            <PrismBackground
              animationType="rotate"
              :timeScale="0.42"
              :height="3.5"
              :baseWidth="5.5"
              :scale="3.95"
              :noise="0.035"
              :glow="0.76"
              :bloom="0.86"
              :suspendWhenOffscreen="false"
            />
          </div>

          <section class="hero" aria-labelledby="hero-title">
            <div class="hero-vignette"></div>
            <div class="hero-grid"></div>

            <div class="hero-meta hero-meta-left">MEDIA TOOLKIT · 2026</div>
            <div class="hero-meta hero-meta-right">CREATE / PROCESS / DELIVER</div>

            <div class="hero-copy">
              <span class="hero-eyebrow"><i></i> ONE WORKSPACE · EVERY FRAME</span>
              <h1 id="hero-title">Framen<span>Lab</span></h1>
              <p class="hero-manifesto">Create. Process. Deliver.</p>
              <p class="hero-subtitle">一站式媒体处理平台</p>
              <button class="hero-action" type="button" @click="scrollToModules">
                <span>进入功能模块</span>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M7 14l5 5 5-5"/></svg>
              </button>
            </div>

            <div class="hero-foot">
              <span>FRAMENLAB / MEDIA WORKSPACE</span>
              <span class="hero-scroll-mark"><i></i> SCROLL TO EXPLORE</span>
            </div>
          </section>

          <section ref="modulesSection" class="modules-section" aria-labelledby="modules-title">
            <div class="modules-heading">
              <div>
                <span class="section-kicker">WORKSPACE MODULES</span>
                <h2 id="modules-title">选择你的工具</h2>
                <p>模块栏可持续横向扩展，所有工具共用同一个工作空间。</p>
              </div>
              <div class="rail-controls" aria-label="模块横向滚动">
                <button type="button" aria-label="向左滚动" @click="scrollModules(-1)">←</button>
                <button type="button" aria-label="向右滚动" @click="scrollModules(1)">→</button>
              </div>
            </div>

            <div ref="modulesTrack" class="modules-track">
              <BorderGlow
                v-for="module in modules"
                :key="module.path"
                class="module-glow"
                :glowColor="module.glowColor"
                :colors="[module.accent, '#ffffff', module.glowSecondary]"
                :edgeSensitivity="8"
                :glowRadius="30"
                :glowIntensity="0.72"
                :style="{ '--module-accent': module.accent }"
              >
                <button class="module-card" type="button" @click="openModule(module.path)">
                  <span class="module-card-top">
                    <span class="module-number">{{ module.number }}</span>
                    <span class="module-arrow">↗</span>
                  </span>
                  <span class="module-icon" aria-hidden="true">
                    <svg v-if="module.icon === 'preview'" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2.5"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                    <svg v-else-if="module.icon === 'convert'" viewBox="0 0 24 24"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="m16 10 6-3v10l-6-3M6 12h6m-2-2 2 2-2 2"/></svg>
                    <svg v-else-if="module.icon === 'crop'" viewBox="0 0 24 24"><path d="M7 3v14a2 2 0 0 0 2 2h12M3 7h14a2 2 0 0 1 2 2v12"/></svg>
                    <svg v-else-if="module.icon === 'keyer'" viewBox="0 0 24 24"><path d="m14 3 7 7-9 9H5v-7l9-9Z"/><path d="m8 9 7 7M4 21h16"/></svg>
                    <svg v-else viewBox="0 0 24 24"><path d="M8 3H3v5m13-5h5v5M8 21H3v-5m13 5h5v-5M3 3l6 6m12-6-6 6M3 21l6-6m12 6-6-6"/></svg>
                  </span>
                  <span class="module-content">
                    <small>{{ module.english }}</small>
                    <strong>{{ module.title }}</strong>
                    <span>{{ module.description }}</span>
                  </span>
                  <span class="module-enter">打开工具 <i></i></span>
                </button>
              </BorderGlow>

              <div class="module-card module-card-future" aria-label="未来模块占位">
                <span class="future-plus">+</span>
                <strong>MORE MODULES</strong>
                <span>为后续功能预留的扩展位</span>
              </div>
            </div>

            <div class="modules-footer">
              <span>05 ACTIVE MODULES</span>
              <i></i>
              <span>EXTENDABLE WORKSPACE SYSTEM</span>
            </div>
          </section>
        </div>
      </Transition>

      <Transition name="workspace">
        <div v-if="workspaceOpen" class="workspace-shell">
          <div class="page-content">
            <router-view />
          </div>
        </div>
      </Transition>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BorderGlow from './components/BorderGlow.vue'
import PrismBackground from './components/PrismBackground.vue'
import TopBar from './components/TopBar.vue'

const modules = [
  { number: '01', title: '插件预览', english: 'PLUGIN PREVIEW', description: '实时预览图像效果与参数调整', path: '/', icon: 'preview', accent: '#b9ff38', glowColor: '82 100 62', glowSecondary: '#6aff8a' },
  { number: '02', title: '视频转换', english: 'VIDEO CONVERTER', description: '批量导入视频转为序列帧和 GIF', path: '/convert', icon: 'convert', accent: '#786dff', glowColor: '246 100 72', glowSecondary: '#b96cff' },
  { number: '03', title: 'PNG 裁剪器', english: 'PNG CROPPER', description: '自动移除图片周围的透明像素', path: '/png-crop', icon: 'crop', accent: '#ff784a', glowColor: '18 100 64', glowSecondary: '#ffba55' },
  { number: '04', title: '压缩器', english: 'MEDIA COMPRESSOR', description: '批量压缩 MP4 和 PNG 序列帧', path: '/compress', icon: 'compress', accent: '#36d6ff', glowColor: '191 100 65', glowSecondary: '#5a8cff' },
  { number: '05', title: '智能抠像', english: 'CHROMA KEYER', description: '一键抠除绿幕或指定颜色背景', path: '/keyer', icon: 'keyer', accent: '#45ffc7', glowColor: '162 100 64', glowSecondary: '#45a3ff' },
]

const currentTheme = ref('dark')
const router = useRouter()
const route = useRoute()
const currentRoute = computed(() => route.path)
const currentModule = computed(() => modules.find(module => module.path === route.path) || modules[0])
const workspaceOpen = ref(route.path !== '/')
const modulesSection = ref(null)
const modulesTrack = ref(null)

watch(() => route.path, path => {
  if (path !== '/') workspaceOpen.value = true
})

function setTheme(theme) { currentTheme.value = theme }
function navigate(path) { router.push(path) }

async function openModule(path) {
  if (route.path !== path) await router.push(path)
  workspaceOpen.value = true
}

async function showHome() {
  workspaceOpen.value = false
  if (route.path !== '/') await router.push('/')
}

function scrollToModules() {
  modulesSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function scrollModules(direction) {
  modulesTrack.value?.scrollBy({ left: direction * 360, behavior: 'smooth' })
}
</script>

<style>
.theme-dark {
  --app-bg:#080808; --topbar-bg:#0d0d0d; --sidebar-bg:#0d0d0d; --sidenav-bg:#0c0c0c;
  --panel-bg:#0a0a0a; --canvas-bg:#080808; --toolbar-bg:#0a0a0a; --ctrl-bg:#111;
  --ctrl-hover:#151515; --ctrl-active:#1a1a1a; --border:#1e1e1e; --border-hover:#333;
  --text-primary:#e0e0e0; --text-dim:#888; --text-muted:#444; --upload-bg:rgba(10,10,10,.85);
  --grid-line:rgba(255,255,255,.015); --scrollbar:#222; --logo-rest:#444;
  --sn-accent:rgba(255,255,255,.9); --sn-glow:rgba(255,255,255,.06);
}
.theme-gray {
  --app-bg:#2e2e2e; --topbar-bg:#242424; --sidebar-bg:#272727; --sidenav-bg:#252525;
  --panel-bg:#252525; --canvas-bg:#2e2e2e; --toolbar-bg:#242424; --ctrl-bg:#333;
  --ctrl-hover:#3a3a3a; --ctrl-active:#404040; --border:#3a3a3a; --border-hover:#555;
  --text-primary:#f0f0f0; --text-dim:#aaa; --text-muted:#777; --upload-bg:rgba(30,30,30,.9);
  --grid-line:rgba(255,255,255,.04); --scrollbar:#444; --logo-rest:#777;
  --sn-accent:rgba(255,255,255,.9); --sn-glow:rgba(255,255,255,.08);
}
.theme-light {
  --app-bg:#f0f0f0; --topbar-bg:#fff; --sidebar-bg:#f8f8f8; --sidenav-bg:#f5f5f5;
  --panel-bg:#fafafa; --canvas-bg:#e8e8e8; --toolbar-bg:#f5f5f5; --ctrl-bg:#ebebeb;
  --ctrl-hover:#e0e0e0; --ctrl-active:#d8d8d8; --border:#ddd; --border-hover:#aaa;
  --text-primary:#111; --text-dim:#555; --text-muted:#999; --upload-bg:rgba(240,240,240,.9);
  --grid-line:rgba(0,0,0,.04); --scrollbar:#ccc; --logo-rest:#aaa;
  --sn-accent:rgba(0,0,0,.85); --sn-glow:rgba(0,0,0,.06);
}
</style>

<style scoped>
.app { width:100vw; height:100vh; display:flex; flex-direction:column; overflow:hidden; background:var(--app-bg); }
.app-stage { position:relative; flex:1; min-height:0; overflow:hidden; }

.landing-page { position:absolute; inset:0; overflow-y:auto; overflow-x:hidden; background:#050506; color:#f5f5f1; scroll-behavior:smooth; }
.landing-page::-webkit-scrollbar { width:5px; }
.landing-page::-webkit-scrollbar-thumb { background:#292929; border-radius:8px; }
.hero { position:relative; z-index:1; min-height:calc(100vh - 52px); display:grid; place-items:center; overflow:hidden; isolation:isolate; border-bottom:1px solid rgba(255,255,255,.1); }
.landing-prism { position:fixed; inset:52px 0 0; z-index:0; pointer-events:none; opacity:.94; filter:saturate(1.06) contrast(1.28); }
.hero-vignette { position:absolute; inset:0; z-index:-3; background:radial-gradient(circle at 50% 47%, transparent 0 27%, rgba(4,4,6,.14) 54%, #050506 91%), linear-gradient(180deg,rgba(5,5,7,.08),rgba(5,5,7,.58)); }
.hero-grid { position:absolute; inset:0; z-index:-2; opacity:.24; background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px); background-size:72px 72px; mask-image:linear-gradient(to bottom,transparent,black 28%,black 73%,transparent); }
.hero::before { content:""; position:absolute; inset:40px 5.2%; border-top:1px solid rgba(255,255,255,.15); pointer-events:none; }
.hero-meta { position:absolute; top:62px; font:600 9px/1 'Space Grotesk',sans-serif; letter-spacing:2.2px; color:rgba(255,255,255,.48); }
.hero-meta-left { left:5.2%; }.hero-meta-right { right:5.2%; }
.hero-copy { width:min(1080px,90vw); display:flex; flex-direction:column; align-items:center; text-align:center; transform:translateY(-1vh); }
.hero-eyebrow { display:flex; align-items:center; gap:10px; margin-bottom:25px; color:#c1ff3b; font:650 10px/1 'Space Grotesk',sans-serif; letter-spacing:3.1px; }
.hero-eyebrow i { width:5px; height:5px; border-radius:50%; background:currentColor; box-shadow:0 0 16px currentColor; }
.hero h1 { margin:0; font:700 clamp(66px,10.2vw,154px)/.82 'Space Grotesk',sans-serif; letter-spacing:-.075em; color:#f6f6f2; text-shadow:0 10px 60px rgba(0,0,0,.42); }
.hero h1 span { color:rgba(255,255,255,.58); font-weight:500; }
.hero-manifesto { margin:28px 0 0; font:italic 500 clamp(21px,2.2vw,34px)/1.1 'Space Grotesk',sans-serif; letter-spacing:-.03em; color:rgba(255,255,255,.92); }
.hero-subtitle { margin:13px 0 0; font-size:14px; letter-spacing:5px; color:rgba(255,255,255,.52); }
.hero-action { display:flex; align-items:center; gap:38px; margin-top:42px; padding:0 14px 0 25px; height:52px; border:0; border-radius:28px; background:#baff35; color:#0b0b0b; font:700 11px/1 'Space Grotesk',sans-serif; letter-spacing:1.1px; cursor:pointer; box-shadow:0 0 34px rgba(186,255,53,.2); transition:transform .25s,box-shadow .25s; }
.hero-action:hover { transform:translateY(-3px); box-shadow:0 0 45px rgba(186,255,53,.34); }
.hero-action svg { width:28px; height:28px; padding:7px; border-radius:50%; background:rgba(0,0,0,.1); fill:none; stroke:currentColor; stroke-width:1.7; }
.hero-foot { position:absolute; left:5.2%; right:5.2%; bottom:28px; display:flex; justify-content:space-between; color:rgba(255,255,255,.32); font:600 8px/1 'Space Grotesk',sans-serif; letter-spacing:1.8px; }
.hero-scroll-mark { display:flex; align-items:center; gap:9px; }.hero-scroll-mark i { width:25px; height:1px; background:currentColor; }

.modules-section { position:relative; z-index:1; min-height:600px; padding:82px 5.2% 54px; background:radial-gradient(circle at 78% 5%,rgba(91,65,255,.14),transparent 27%),linear-gradient(180deg,rgba(8,8,9,.7),rgba(8,8,9,.82)); }
.modules-heading { display:flex; align-items:flex-end; justify-content:space-between; gap:30px; margin-bottom:34px; }
.section-kicker { color:#baff35; font:650 9px/1 'Space Grotesk',sans-serif; letter-spacing:2.7px; }
.modules-heading h2 { margin:12px 0 10px; font-size:clamp(28px,3.2vw,46px); line-height:1; letter-spacing:-2px; }
.modules-heading p { margin:0; max-width:530px; color:rgba(255,255,255,.42); font-size:12px; line-height:1.7; letter-spacing:.4px; }
.rail-controls { display:flex; gap:8px; }.rail-controls button { width:42px; height:42px; border:1px solid rgba(255,255,255,.16); border-radius:50%; background:rgba(255,255,255,.03); color:#fff; font-size:17px; cursor:pointer; transition:.2s; }.rail-controls button:hover { background:#baff35; color:#080808; border-color:#baff35; }
.modules-track { display:grid; grid-auto-flow:column; grid-auto-columns:minmax(268px,23vw); gap:14px; overflow-x:auto; padding:38px 34px 46px; margin:-36px -34px -24px; scroll-snap-type:x mandatory; scrollbar-width:thin; scrollbar-color:#333 transparent; }
.module-glow { min-height:330px; scroll-snap-align:start; transition:transform .68s cubic-bezier(.16,1,.3,1),filter .68s cubic-bezier(.16,1,.3,1); will-change:transform; }
.module-glow:hover,.module-glow.is-hovered { transform:translate3d(0,-10px,0) scale(1.012); filter:brightness(1.04); }
.module-card { width:100%; min-height:330px; display:flex; flex-direction:column; padding:20px; border:0; border-radius:inherit; background:linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.018)); color:#fff; text-align:left; cursor:pointer; overflow:hidden; position:relative; font-family:inherit; transition:background .58s cubic-bezier(.16,1,.3,1); }
.module-card::after { content:""; position:absolute; left:0; right:0; bottom:0; height:3px; background:var(--module-accent); transform:scaleX(.18); transform-origin:left; transition:transform .35s; }
.module-card:hover,.module-glow.is-hovered .module-card { background:linear-gradient(145deg,color-mix(in srgb,var(--module-accent) 11%,#151515),#0c0c0d); }.module-card:hover::after,.module-glow.is-hovered .module-card::after { transform:scaleX(1); }
.module-card-top { display:flex; justify-content:space-between; color:rgba(255,255,255,.36); font:600 9px/1 'Space Grotesk',sans-serif; letter-spacing:1.5px; }.module-arrow { width:28px;height:28px;display:grid;place-items:center;border:1px solid rgba(255,255,255,.14);border-radius:50%;font-size:13px;transition:.25s; }.module-card:hover .module-arrow { color:#080808;background:var(--module-accent);border-color:var(--module-accent);transform:rotate(45deg); }
.module-icon { width:52px;height:52px;display:grid;place-items:center;margin-top:34px;border-radius:14px;background:color-mix(in srgb,var(--module-accent) 12%,transparent);color:var(--module-accent); }.module-icon svg { width:25px;height:25px;fill:none;stroke:currentColor;stroke-width:1.55;stroke-linecap:round;stroke-linejoin:round; }
.module-content { display:flex;flex-direction:column;margin-top:29px; }.module-content small { color:var(--module-accent);font:650 8px/1 'Space Grotesk',sans-serif;letter-spacing:1.7px; }.module-content strong { margin-top:9px;font-size:21px;letter-spacing:-.5px; }.module-content>span { margin-top:9px;color:rgba(255,255,255,.4);font-size:11px;line-height:1.55; }
.module-enter { display:flex;align-items:center;gap:9px;margin-top:auto;color:rgba(255,255,255,.64);font-size:10px;letter-spacing:.6px; }.module-enter i { width:27px;height:1px;background:currentColor;transition:width .25s; }.module-card:hover .module-enter i { width:48px; }
.module-card-future { scroll-snap-align:start;align-items:center;justify-content:center;border:1px dashed rgba(255,255,255,.15);background:transparent;color:rgba(255,255,255,.28);cursor:default;text-align:center; }.module-card-future::after { display:none; }.module-card-future:hover { border-color:rgba(255,255,255,.22);background:rgba(255,255,255,.018); }.future-plus { width:48px;height:48px;display:grid;place-items:center;border:1px solid rgba(255,255,255,.16);border-radius:50%;font-size:25px;font-weight:200; }.module-card-future strong { margin-top:18px;font:600 10px/1 'Space Grotesk',sans-serif;letter-spacing:1.6px; }.module-card-future>span:last-child { margin-top:9px;font-size:10px; }
.modules-footer { display:flex;align-items:center;gap:16px;margin-top:22px;color:rgba(255,255,255,.24);font:600 8px/1 'Space Grotesk',sans-serif;letter-spacing:1.5px; }.modules-footer i { flex:1;height:1px;background:rgba(255,255,255,.09); }

.workspace-shell { position:absolute;inset:0;display:flex;overflow:hidden;min-height:0;background:var(--app-bg); }
.page-content { flex:1;display:flex;overflow:hidden;min-height:0; }

.landing-enter-active,.landing-leave-active { transition:opacity .52s ease,transform .62s cubic-bezier(.65,0,.25,1); }.landing-enter-from { opacity:0;transform:scale(1.025); }.landing-leave-to { opacity:0;transform:translateY(-9%) scale(.92); }
.workspace-enter-active { transition:opacity .5s .16s ease,transform .62s .1s cubic-bezier(.16,1,.3,1); }.workspace-leave-active { transition:opacity .24s ease,transform .3s ease; }.workspace-enter-from { opacity:0;transform:translateY(26px) scale(.985); }.workspace-leave-to { opacity:0;transform:translateY(18px); }

@media (max-width:800px) {
  .hero-meta-right,.hero-foot span:first-child { display:none; }.hero h1 { font-size:18vw; }.hero-subtitle { letter-spacing:2px; }.modules-section { padding-inline:22px; }.modules-track { grid-auto-columns:minmax(255px,78vw); }.modules-heading { align-items:flex-start; }.modules-heading p { max-width:70vw; }
}
@media (prefers-reduced-motion:reduce) { .landing-enter-active,.landing-leave-active,.workspace-enter-active,.workspace-leave-active { transition-duration:.01ms; }.hero-action,.module-card { transition:none; } }
</style>
