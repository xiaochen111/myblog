import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    redirect: '/home',
  },  
  {
    path: '/home',
    name: 'home',
    component: resolve => require(["@/views/home"], resolve),
  },
  {
    path: '/index',
    name: 'index',
    component: resolve => require(["@/views/index"], resolve),
  },
]

const router = new VueRouter({
  routes
})

export default router
