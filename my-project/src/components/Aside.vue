<template>
  <el-row>
    <br/>
    <el-col :span="10">
      <i class="el-icon-date"></i>
      <span>{{ name }}</span>
      <br/>
    </el-col>
    <el-col :span="10">
      <a-line title="menus"></a-line>
      <br/>
      <p>aaaaaa</p>
      <br/>
    </el-col>
  </el-row>
</template>

<script>
import Line from '@/components/Line'
export default {
  name: 'Aside.vue',
  components: {
    'a-line': Line
  },
  props: [
    'name'
  ]
}
</script>

<style scoped>
  .box {
    height:100%;
    background-color: #333;
    position:absolute;
    width: 15%;
  }
</style>
