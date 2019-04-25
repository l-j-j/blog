import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import programme from '../pages/Programme'
import note from '../pages/Note'
import resource from '../pages/Resource'
import other from '../pages/Other'
import detail from '../pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/programme',
      name:'编程文章',
      component:programme
    },
    {
      path:'/note',
      name:'学习笔记',
      component:note
    },
    {
      path:'/resource',
      name:'学习资源',
      component:resource
    },
    {
      path:'/other',
      name:'其他',
      component:other
    },
    {
      path:'/detail/:type/:id',
      name:'detail',
      component:detail
    }
  ]
})
