import { createApp } from 'vue'
import { defaultConfig, plugin } from '@formkit/vue'
import App from './App.vue'
import config from '@/formkit.config'

createApp(App)
  .use(plugin, defaultConfig(config))
  .mount('#app')

