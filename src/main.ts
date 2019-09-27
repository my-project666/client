import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './font_1430724_oygfnszafw/iconfont.css'
import './font_1431326_dppaqw2ep9s/iconfont.css'
import './font_t3tj7rby5q/iconfont.css'
import './font_x7hvq6s9jem/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
