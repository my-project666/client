import Vue from 'vue'
import Vuex from 'vuex'
import special from './special';
import classify from './classify';
import shops from './goodShop'
Vue.use(Vuex)

 const store = new Vuex.Store({
     modules:{
         special,
         classify,
         shops
     }
})

export default store;