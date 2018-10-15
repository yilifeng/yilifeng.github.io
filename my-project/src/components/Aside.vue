<template>
  <el-row>
    <br/>
    <el-col>
      <i class="el-icon-date"></i>
      <span>{{ name }}</span>
      <br/>
    </el-col>
    <el-col>
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

</style>
