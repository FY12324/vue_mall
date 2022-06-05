import Vue from 'vue'
import Router from 'vue-router'
import Navigate from '@/components/Navigate'
import Kind from '@/components/Kind'
import Details from '@/components/Details'
import Shopcart from '@/components/Shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Navigate', component: Navigate },
    { path: '/Details', name: 'Details', component: Details },
    { path: '/Navigate', name: 'Navigate', component: Navigate },
    { path: '/shopcart', name: 'Shopcart', component: Shopcart },
    { path: '/Kind', name: 'Kind',component: Kind , },
    { path: '/Details', name: 'Details', component: Details }

  ]
})
