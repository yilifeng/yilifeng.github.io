import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import About from '@/unit/About'
import Blog from '@/unit/Blog'
import Demo from '@/unit/Demo'
import Home from '@/unit/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      redirect: '/index/About'
    },
    {
      path: '/index',
      component: index,
      redirect: '/index/About',
      children: [
        {path: 'About', component: About},
        {path: 'Blog', component: Blog},
        {path: 'Demo', component: Demo},
        {path: 'Home', component: Home}
      ]
    }
  ]
})
