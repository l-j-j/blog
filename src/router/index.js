import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import programme from '../pages/Programme'

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
      name:'programme',
      component:programme
    }
  ]
})
