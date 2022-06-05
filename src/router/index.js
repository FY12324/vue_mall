import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components//views/home.vue'
import Category from '../components/views/category.vue'
import ShopCar from '../components/views/shopCar.vue'
import Register from '../components/common/Register.vue'
import Search from '../components/common/Search.vue'
import Login from '../components/common/Login.vue'

Vue.use(Router)
export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/category',
      name:'category',
      component:Category
    },
    {
      path:'/shopCar',
      name:'shopCar',
      component:ShopCar
    },
    {
      path:'/Register',
      name:'Register',
      component:Register
    },
    {
      path:'/Search',
      name:'Search',
      component:Search
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    },
  ]
})