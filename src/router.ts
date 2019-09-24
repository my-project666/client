import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('@/views/home/index.vue'),
      children:[
         {
           path:"/shopCar",
           component:()=> import('./views/home/navPage/shopCar.vue')
         },
         {
           path:"/special",
           component:()=> import ('./views/home/navPage/special.vue')
         },
        
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    }
  ]
})
