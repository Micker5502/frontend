import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Topic from '@/components/card/Topic.vue'
import Topics from '@/components/main/Topics.vue'
Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(   '../views/About.vue')
  },
  {
    path: '/Test/UploadPicture',
    name: 'UploadPicture',
    component: () => import(   '../views/UploadPictureTesting.vue')
  },
  {
    path: '/Account/CallBack',
    name: 'CallBack',
    meta:{
      layout:'redirect'
    },
    component: () => import( '../views/CallBack.vue')
  },
  {
    path: '/Account/SilentRenew',
    name: 'SilentRenew',
    meta:{
      layout:'redirect'
    },
    component: () => import(  '../views/SilentRenew.vue')
  },
  {
    path: '/Account/SignInCheck',
    name: 'SignInCheck',
    /*meta:{
      layout:'redirect'
    },*/
    component: () => import('../views/SignInCheck.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
