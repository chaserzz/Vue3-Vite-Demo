import { createRouter, createWebHashHistory , createWebHistory} from "vue-router"
const router = createRouter({
  history: createWebHashHistory(),  //创建hash类型的路由   //createWebHistory 创建history类型的路由,
  routes:[
    {
      path: '/base',
      name: "Base",
      component: () => import ("../baseUse/toDoList.vue")
    },
    {
      path:'/vuex',
      name: "Vuex",
      component: () => import ("../vueX/demo.vue")
    },
    {
      path:'/axios',
      name: "Axios",
      component: () => import ("../axios/index.vue")
    },
    {
      path:"/eventbus",
      component: () => import ("../eventBus/views/index.vue")
    }
  ]
})

router.beforeEach((to,form,next) => {
  //对/的路径进行重定向
  if(to.fullPath === "/"){
    to.fullPath = "/base"
   next()
  }else{
    next()
  }
})

export default router