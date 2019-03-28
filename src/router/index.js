import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/detail'
import ShopCar from '@/components/shopcar'
import NowBuy from '@/components/nowbuy'
import NowPay from '@/components/nowPay'
import User from '@/components/user'
import Place from '@/components/place'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Detail/:id?',
      name:'Detail',
      component:Detail
    },
    {
    path:'/shopcar',
      name:'ShopCar',
      component:ShopCar
    },
    {
      path:'/nowbuy',
      name:'NowBuy',
      component:NowBuy
    },
    {
      path:'/nowpay',
      name:'NowPay',
      component:NowPay
    }
    ,
    {
      path:'/user',
      name:'User',
      component:User
    },
    {
      path:'/place',
      name:'Place',
      component:Place
    }
  ]
})
