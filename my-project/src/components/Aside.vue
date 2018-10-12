<template>
  <div>
    <br/>
    <div>
      <i class="el-icon-date"></i>
      <span>{{ name }}</span>
    </div>
    <br/>
    <div>
      <a-line title="menus"></a-line>
    </div>
  </div>
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
