import Vue from 'vue'
import Vuex from 'vuex'
import special from './special';
import classify from './classify'
Vue.use(Vuex)

 const store = new Vuex.Store({
     modules:{
         special,
         classify
     }
})

export default store;