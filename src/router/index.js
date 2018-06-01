import Vue from 'vue'
import VueRouter from 'vue-router'

import  Home from '../pages/Home/Home'
import  GoodGoogs from '../pages/GoodGoogs/GoodGoogs'
import  Classify from '../pages/Classify/Classify'
import  ShopCart from '../pages/ShopCart/ShopCart'
import  Profile from '../pages/Profile/Profile'
import Search from '../components/Search/Search'
import Login from '../pages/Login/Login'
import PasswordLogin from '../components/loginType/PasswordLogin/PasswordLogin'
import PhoneLogin from '../components/loginType/PhoneLogin/PhoneLogin'
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/goodgoogs',
      component: GoodGoogs,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/classify',
      component:Classify,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/shopcart',
      component:ShopCart,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/login',
      component:Login,
      children:[
        {
          path:'/login/passwordLogin',
          component:PasswordLogin
        },
        {
          path:'/login/phoneLogin',
          component:PhoneLogin
        }
      ]
    },
    {
      path:'/login',
      redirect:'/login/passwordLogin'
    }
  ]
})
