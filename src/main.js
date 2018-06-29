import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/rem.js'
import './sass/reset.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
