import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
//import Item from '@/page/Item'
//import Score from '@/page/Score'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home,
    children: [/*{
      path: 'item',
      component: Item
    }, {
      path: '/score',
      component: Score
    }*/]
  }]
})
