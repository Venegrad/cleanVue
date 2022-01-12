// Vue modules
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from "@/store"
import i18n from '@/i18n'

// Import global styles and vars
import "@/stylus/main.styl"

// Global components
import pageSection from "@/components/pageSection"
Vue.component('page-section', pageSection)

// Disable vue tips
Vue.config.productionTip = false

// Set default locale
localStorage.getItem('lang') ? i18n.locale = localStorage.getItem('lang') : i18n.locale = store.getters.getLang;

// Mount app
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')