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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    children: [
      {
        path: '',
        component: Topics,
      },
      {
        path: 'detail',
        component: Topic
      }
    ]
  },
  {
    path: '/Account/CallBack',
    name: 'CallBack',
    meta:{
      layout:'redirect'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/CallBack.vue')
  },
  {
    path: '/Account/SilentRenew',
    name: 'SilentRenew',
    meta:{
      layout:'redirect'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/SilentRenew.vue')
  },
  {
    path: '/Account/SignInCheck',
    name: 'SignInCheck',
    meta:{
      layout:'redirect'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/SignInCheck.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
