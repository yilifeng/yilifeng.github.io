<template>
  <div class="grid-content bg-purple-light">
    <el-button @click="showContent">返回</el-button>
    <div v-html="this.contentValue"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: [
    'contentId'
  ],
  data () {
    return {
      contentValue: ''
    }
  },
  methods: {
    ...mapActions([
      'queryOneContent'
    ]),
    showContent () {
      this.$emit('childControl')
    }
  },
  mounted () {
    this.queryOneContent({'contentId': this.contentId})
      .then((res) => {
        console.log(res)
        if (res.status === 0) {
          this.contentValue = res.data[0].content
        } else {
          alert('no data found!')
        }
      })
  }
}
</script>

<style scoped>

</style>
