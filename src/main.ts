import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './font_1430724_oygfnszafw/iconfont.css'
import './font_1431326_dppaqw2ep9s/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
