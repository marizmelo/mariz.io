import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import Work from '@/pages/Work'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/work/:id',
      name: 'Work',
      component: Work
    }
  ]
})
