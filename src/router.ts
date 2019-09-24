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
      component: ()=>import('./views/home/index.vue'),
      children:[
        {
          path:'/homePage',
          name:'homePage',
          component:()=>import('./components/homePage.vue')
        },
        {
          path:'/classification',
          name:'classification',
          component:()=>import('./components/classification.vue')
        },
        {
          path:'/my',
          name:'my',
          component:()=>import('./components/my.vue')
        },
        {
          path:'/ShoppingCart',
          name:"ShoppingCart",
          component:()=>import('./components/ShoppingCart.vue')
        },
        // {
        //   path:'/special',
        //   name:'special',
        //   component:()=>import('./components/special.vue')
        // },
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
