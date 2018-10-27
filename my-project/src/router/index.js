import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import About from '@/unit/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      redirect: '/index/Blog'
    },
    {
      path: '/index',
      component: index,
      redirect: '/index/Blog',
      children: [
        {path: 'About', component: About}
      ]
    }
  ]
})
