import Vue from 'vue'
import Vuex from 'vuex'
import special from './special'
Vue.use(Vuex)

 const store = new Vuex.Store({
     modules:{
         special
     }
})

export default store;