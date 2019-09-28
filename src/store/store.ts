import Vue from 'vue'
import Vuex from 'vuex'
import special from './special';
import classify from './classify';
import shops from './goodShop';
import regest from './regest';
// import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

 const store = new Vuex.Store({
     modules:{
         special,
         classify,
         shops,
         regest
     },
    //  plugins: [createLogger()]
})

export default store;