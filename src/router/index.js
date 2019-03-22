import Vue from 'vue'
import Router from 'vue-router'
import Vhome from '../components/Vhome'
import Vnote from '../components/Vnote'

Vue.use(Router)

export default new Router({
  // 消除 url中的 #
  mode: 'history',
  routes: [
    // 设置路由和目标组件
    {
      path: '/',
      name: 'Home',
      component: Vhome
    },
    {
      path: '/note',
      name: 'note',
      component: Vnote
    }
  ]
})
