import Vue from 'vue'
import VueRouter from 'vue-router'

import DashBoard from '../views/DashBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/details/:id',
    name: 'Details',
    props: true,
    component: () =>
      import(/* webpackChunkName: "Details" */ '../views/Details.vue') // Lazy Loading
  }
]

const router = new VueRouter({
  mode: 'history', // Removes #
  base: process.env.BASE_URL,
  routes
})

export default router
