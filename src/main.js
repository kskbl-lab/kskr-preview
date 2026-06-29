import { createApp }    from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App             from './App.vue'
import PluginPreview   from './views/PluginPreview.vue'
import VideoConverter  from './views/VideoConverter.vue'
import './style.css'

const routes = [
  { path: '/',        component: PluginPreview  },
  { path: '/convert', component: VideoConverter },
]

const router = createRouter({
  history: createWebHashHistory('/kskr-preview/'),
  routes,
})

createApp(App).use(router).mount('#app')
