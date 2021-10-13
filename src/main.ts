import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * Plugins
 */
import '@/plugins/firebase'
import head from '@/plugins/vueuse-head'
import i18n from '@/plugins/vue-i18n'
import pinia from '@/plugins/pinia'

/**
 * Styles
 */
import 'mosha-vue-toastify/dist/style.css'
import 'virtual:windi.css' // windicss demon
import '@/assets/sass/main.sass'

/**
 * PWA
 */
import { useRegisterSW } from 'virtual:pwa-register/vue'
useRegisterSW()

/**
 * init app
 */
createApp(App)
  .use(pinia)
  .use(i18n)
  .use(router)
  .use(head)
  .mount('#app')
