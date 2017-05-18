import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Game from '@/page/Game'
import Score from '@/page/Score'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home
  },{
    path: '/game',
    component: Game
  }, {
    path: '/score',
    component: Score
  }]
})
