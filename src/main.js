import { createApp }    from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App             from './App.vue'
import PluginPreview   from './views/PluginPreview.vue'
import VideoConverter  from './views/VideoConverter.vue'
import PngCropper      from './views/PngCropper.vue'
import Compressor      from './views/Compressor.vue'
import ChromaKeyer     from './views/ChromaKeyer.vue'
import './style.css'

const routes = [
  { path: '/',        component: PluginPreview  },
  { path: '/convert', component: VideoConverter },
  { path: '/png-crop', component: PngCropper    },
  { path: '/compress', component: Compressor    },
  { path: '/keyer',    component: ChromaKeyer   },
]

const router = createRouter({
  history: createWebHashHistory('/kskr-preview/'),
  routes,
})

createApp(App).use(router).mount('#app')
