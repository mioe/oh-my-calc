import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: localStorage.getItem('i18n') || 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages,
})

export default i18n
