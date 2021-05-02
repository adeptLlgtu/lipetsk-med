import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/welcome'
import reg from '../views/reg'
import login from '../views/login'
import order from '../views/Order'
import count from '../views/Count'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/registration',
    name: 'reg',
    component: reg
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/order',
    name: 'order',
    component: order
  },
  {
    path: '/count',
    name: 'count',
    component: count
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
