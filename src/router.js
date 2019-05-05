import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true
      },
      children: [{
        path: '/',
        name: 'homeIndex',
        component: () => import('./views/home/Index.vue'),
        meta: {
          keepAlive: true
        }
      }, {
        path: '/category',
        name: 'homeCategory',
        component: () => import('./views/home/Category.vue'),
        meta: {
          keepAlive: true
        }
      }, {
        path: '/cart',
        name: 'homeCart',
        component: () => import('./views/home/Cart.vue'),
        meta: {
          keepAlive: false
        }
      }, {
        path: '/setting',
        name: 'homeSetting',
        component: () => import('./views/home/Setting.vue'),
        meta: {
          keepAlive: false
        }
      }]
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: () => import('./views/goodsList.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/goodsDetail/:id',
      name: 'goodsDetail',
      component: () => import('./views/goodsDetail.vue'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
