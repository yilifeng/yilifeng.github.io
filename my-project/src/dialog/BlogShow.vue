<template>
  <div class="grid-content bg-purple-light">
    <el-button @click="showContent">返回</el-button>
    <el-button @click="updateIt(title, contentId)">修改</el-button>
    <el-button @click="refresh">刷新</el-button>
    <br/>
    <h1>{{title}}</h1>
    <div v-html="this.contentValue"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: [
    'contentId',
    'title'
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
    },
    updateIt (title, contentId) {
      this.$emit('editControl', title, contentId)
    },
    refresh () {
      this.queryBlog()
    },
    queryBlog () {
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
  },
  mounted () {
    this.queryBlog()
  }
}
</script>

<style scoped>

</style>
