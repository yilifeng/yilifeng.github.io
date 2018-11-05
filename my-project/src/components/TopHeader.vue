<template>
  <div id="header">
    <div style="width: 10%; float: left">
      <el-button
        type="info"
        icon="el-icon-star-on"
        style="border-radius: 47%; margin-left: 5%; width: 45px"
        @click="asideVisiable">
      </el-button>
    </div>
    <div style="min-width:200px; width: 50%;margin-left: 5%;float: left">
      <el-menu
        v-if="getWidth()"
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        style="margin-left: 20%; width: 70%"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="0">
          <template slot="title">点击展开</template>
          <el-menu-item index="1"><router-link to="/index/About" style=" text-decoration: none;">About</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/index/Blog" style=" text-decoration: none;">Blog</router-link></el-menu-item>
        </el-submenu>
      </el-menu>
      <el-menu
        v-else
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect">
        <el-menu-item index="1"><router-link to="/index/About" style=" text-decoration: none;">About</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/index/Blog" style=" text-decoration: none;">Blog</router-link></el-menu-item>
      </el-menu>
    </div>
    <div style="float: right; position: fixed; right: 5px">
      <!--<i class="el-icon-edit"></i>-->
      <div v-if="showLoginBtn">
        <login title="登陆"></login>
      </div>
      <div v-if="!showLoginBtn">
        <personal-centre title="个人中心"> </personal-centre>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/dialog/login'
import PersonalCentre from '@/dialog/personalCentre'
import { mapActions } from 'vuex'
export default {
  components: {
    'login': Login,
    'personal-centre': PersonalCentre
  },
  props: [
    'showAside'
  ],
  data () {
    return {
      activeIndex: '1',
      showLoginBtn: true
    }
  },
  methods: {
    ...mapActions([
      'getCookie',
      'loginInfo'
    ]),
    getWidth () {
      if (document.body.offsetWidth < 650) {
        return true
      } else {
        return false
      }
    },
    asideVisiable () {
      if (this.showAside === true) {
        this.showAside = false
      } else {
        this.showAside = true
      }
      console.log('showAside')
      console.log(this.showAside)
      this.$emit('transferAside', this.showAside)
    },

    clock () {
      console.log('ggggggggggggggg')
      console.log(this.showLoginBtn)
      this.loginInfo()
        .then((cookies) => {
          console.log('in clock')
          console.log(cookies)
          if (cookies.loginsucc) {
            console.log('login succ')
            this.showLoginBtn = false
          } else {
            this.showLoginBtn = true
          }
        })
    }
  },
  mounted () {
    setInterval(this.clock, 10000)
  }
}
</script>

<style scoped>
</style>

<style>
  ul.el-menu--horizontal>.el-menu-item.is-active{
    border-bottom: 2px solid transparent;
  }
  ul.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
    border-bottom: 2px solid transparent;
  }
</style>
