<template>
  <el-main style="min-width: 80%">
    <el-aside  v-if="showAside" style="min-width: 15%">
      <aside-aside name="qwert"></aside-aside>
    </el-aside>
    <div id="content">
      <slot name="content"></slot>
      <router-view></router-view>
    </div>
  </el-main>
</template>

<script>
import Aside from '@/components/Aside'
export default {
  name: 'index',
  components: {
    'aside-aside': Aside
  },
  data () {
    return {
      showAside: true
    }
  },
  methods: {
    getAside (aside) {
      this.showAside = aside
      this.moreView = true
    }
  }
}
</script>

<style scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    position: absolute;
    line-height: 100%;
  }
</style>
