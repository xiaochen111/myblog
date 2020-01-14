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
    component: resolve => require(["@/views/home"], resolve),
  },
  {
    path: '/index',
    component: resolve => require(["@/views/index"], resolve),
    children:[
      {
        path: "/",
        redirect: '/list'
      },
      {
        path: '/list',
        component: resolve => require(["@/views/articleList"], resolve),
        meta: { requireAuth: true },
      },
      {
        path: '/listDb',
        component: resolve => require(["@/views/articleDbList"], resolve),
        meta: { requireAuth: true },
      },
      {
        path: '/detail',
        component: resolve => require(["@/views/articleDetail/articleMd"], resolve),
        meta: { requireAuth: true },
      },
      {
        path: '/detailDb',
        component: resolve => require(["@/views/articleDbDetail/article"], resolve),
        meta: { requireAuth: true },
      },
      {
        path: '/edit',
        component: resolve => require(["@/views/editMd"], resolve),
        meta: { requireAuth: true },
      }
    ]
  },
  {
    path: '/login',
    component: resolve => require(["@/views/login"], resolve),
  },
]

const router = new VueRouter({
  routes
})


let firstEnter = true;

router.beforeEach((to, from, next)=>{
  const store = router.app.$options.store;
  console.log(store)
  if (to.meta && to.meta.requireAuth && firstEnter) {
      store.dispatch('getUser').then(code=>{
        console.log(code)
        if(code == 1){
          firstEnter = false;
          next()
        }else{
          console.log('获取个人信息失败')
          next('/login')
        }
      })
  } else{
    next()
  }
})

export default router
