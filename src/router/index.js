import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Diary from '@/components/Diary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/diary',
      name: 'Diary',
      component: Diary,
      params: {id: 1}
    }
  ]
})
