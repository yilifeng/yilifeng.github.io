<template>
  <el-row style="display: flex;align-items: center; justify-content: space-around;padding-bottom: 15px; margin-top: 20px; margin-bottom: 10px;">
    <hr style="width: 45%;height:1px;border:none;border-top:1px solid #E8E8E8; margin-right: 0px;"/>
    <span id="line-text">{{ title }}</span>
    <hr style="width: 42%;height:1px;border:none;border-top:1px solid #E8E8E8; margin-left: 0px;"/>
  </el-row>
</template>

<script>
export default {
  name: 'line.vue',
  props: [
    'title'
  ]
}
</script>

<style scoped>
  #line-text {
    width: 100px;
    border: 1px solid #E8E8E8;
    background-color: #E8E8E8;
    border-radius: 15px;
    text-align: center;
  }
</style>
