<template>
  <el-form>
    <el-form-item v-for="item in contents" v-bind:key="item">
      <el-button type="text" @click="showContent" style="float: left">{{item.title}}</el-button>
      <div style="float: left">
        <el-row>
          <el-col>作者:{{item.author}}</el-col>
          <el-col>作者:{{item.author}}</el-col>
        </el-row>
      </div>
      <hr/>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      editorContent: '',
      contents: []
    }
  },
  methods: {
    ...mapActions([
      'queryArticles'
    ]),
    getContent () {
      alert(this.editorContent)
    },
    showContent () {
      console.log('showcontent')
      console.log(this.contents)
    }
  },
  mounted () {
    this.queryArticles()
      .then((res) => {
        console.log('get articles res:' + res)
        console.log(res.data)
        console.log(res.data[0].title)
        this.contents = res.data
      })
  }
}
</script>

<style scoped>
 .content {
   float: left;
   margin-left: 5%
 }
</style>
