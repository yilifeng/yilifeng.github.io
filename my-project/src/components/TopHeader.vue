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
        <el-submenu index="1">
          <template slot="title">点击展开</template>
          <el-menu-item index="1"><router-link to="/index/About" style=" text-decoration: none;">About</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/index/Blog" style=" text-decoration: none;">Blog</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="/index/Demo" style=" text-decoration: none;">Demo</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="/index/Home" style=" text-decoration: none;">Home</router-link></el-menu-item>
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
        <el-menu-item index="3"><router-link to="/index/Demo" style=" text-decoration: none;">Demo</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/index/Home" style=" text-decoration: none;">Home</router-link></el-menu-item>
      </el-menu>
    </div>
    <div style="float: right; position: fixed; right: 5px">
      <i class="el-icon-edit"></i>
      <el-button round>按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'showAside'
  ],
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
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
    }
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
