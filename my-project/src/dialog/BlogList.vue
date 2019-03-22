<template>
  <el-row>
    <el-card class="box-card" shadow="hover" v-for="item in contents" v-bind:key="item">
      <el-col :span="24" style="margin-top: -35px">
        <el-button type="text" @click="showContent(item.contentId)" style="float: left">
          <p style="font-size: 20px">{{item.title}}</p>
        </el-button>
      </el-col>
      <el-col :span="4" style="text-align: left; color: #e4b9b9; margin-top: -15px">作者:{{item.author}}</el-col>
      <el-col :span="5" style="text-align: left; color: #e4b9b9; margin-top: -15px">创作时间:{{item.createTime}}</el-col>
    </el-card>
  </el-row>
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
      'queryArticles',
      'queryOneContent'
    ]),
    getContent () {
      alert(this.editorContent)
    },
    showContent (id) {
      console.log('showcontent')
      console.log(id)
      this.queryOneContent({'contentId': id})
        .then((res) => {
          console.log(res)
        })
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
