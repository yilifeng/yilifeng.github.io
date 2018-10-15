<template>
  <el-row style="margin-top: 10px">
    <el-col :span="left_size"><div class="grid-content bg-purple">
      <aside-aside name="qwert"></aside-aside>
    </div></el-col>
    <el-col :span="right_size"><div class="grid-content bg-purple-light">
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    </div></el-col>
  </el-row>
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
      left_size: 6,
      right_size: 18
    }
  }
}
</script>

<style scoped>
  .bg-purple {
    background: #d3dce6;
  }
</style>
