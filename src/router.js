import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './Views/Home'
// @ts-ignore
import Trigraphs from './Views/Trigraphs'
// @ts-ignore
import Digraphs from './Views/Digraphs'



Vue.use(Router)



export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/trigraphs',
      name: 'trigraphs',
      component: Trigraphs
    }, 
    {
      path: '/digraphs', 
      name: 'digraphs', 
      component: Digraphs
    }
  ]
})