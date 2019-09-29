import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path:'/',
        redirect:"/homePage"
    },
    {
      path: '/',
      name: 'home',
      component: ()=>import('./views/home/index.vue'),
      children:[
        {
          path:'/homePage',
          name:'homePage',
          component:()=>import('./components/homePage.vue')
        },
        {
          path:'/my',
          name:'my',
          component:()=>import('./components/my.vue')
        },
        {
           path:"/shopCar",
           component:()=> import('./views/home/navPage/shopCar.vue')
         },
         {
           path:"/special",
           component:()=> import ('./views/home/navPage/special.vue')
         },
         {
           path:'/classification',
           component:()=>import('./components/classification.vue')
         }
      ]
    },
    {
       path:'/specialDl/:id',
       component:()=> import('./views/home/specialDl.vue')
    },
    {
       path:'/classifyNik/:id',
       component:()=> import('./views/home/classifyNik.vue')
    },
    {
       path:'/shops/:id',
       component:()=> import('./views/home/shops.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')

    },
    {
      path:'/homeNavse/:id?',
      component:()=>import('./components/homePages/homeNav.vue')
    },
    {
      path:'/shangPin/:id?',
      component:()=>import('./components/homePages/shangPin.vue')
    },
    {
      path:'/newGoods/:id?',
      component:()=>import('./components/homePages/newGoods.vue')
    },
    {
      path:'/tuijians',
      component:()=>import('./components/homePages/tuijians.vue')
    }
  ]
})
