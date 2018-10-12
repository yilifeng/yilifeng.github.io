// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'

import App from './App'
import router from './router'

// css
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/font-awesome.css'
import '../static/css/animate.css'

// js
import * as actions from './util/actions'
import ManagerUnit from '@/components/ManagerUnit' // 自定义的组件

// 第三方插件
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(ElementUI)

// 自定义全局组件
Vue.use(ManagerUnit)
Vue.component('manager-unit', ManagerUnit)

Vue.config.productionTip = false

const store = new Vuex.Store({
  actions
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  http: { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
})
