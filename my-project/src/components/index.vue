<template>
  <el-container style="height: 100%">
    <el-header>
      <top-header
        v-on:transferAside="getAside"
        :aside="showAside">
      </top-header>
    </el-header>

    <el-container style="margin-top: 50px">
      <el-main>
        <div id="content">
          <slot name="content"></slot>
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import TopHeader from '@/components/TopHeader'

export default {
  name: 'index',
  components: {
    'top-header': TopHeader
  },
  data () {
    return {
      showAside: true,
      moreView: this.getWidth()
    }
  },
  methods: {
    getWidth () {
      if (document.body.offsetWidth < 650) {
        return false
      } else {
        return true
      }
    },
    getAside (aside) {
      console.log('show aside')
      console.log(aside)
      this.showAside = aside
      this.moreView = true
    }
  }
}
</script>

<style scoped>
  .el-header {
    min-width: 300px;
    width:100%;
    position:fixed;
    top:0;
    left:0;
    background-color: white;
    z-index:9999;
    color: #333;
    text-align: center;
    line-height: 60px
  }

  .el-main {
    min-width: 80%;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
