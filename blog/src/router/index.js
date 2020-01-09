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
    children:[
      {
        path: "/",
        redirect: '/list'
      },
      {
        path: '/list',
        name: 'list',
        component: resolve => require(["@/views/articleList"], resolve),
      },
      {
        path: '/detail',
        name: 'detail',
        component: resolve => require(["@/views/articleDetail/articleMd"], resolve),
      },
      {
        path: '/edit',
        name: 'edit',
        component: resolve => require(["@/views/editMd"], resolve),
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
