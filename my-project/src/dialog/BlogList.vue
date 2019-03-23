<template>
  <el-table
    :data="contents"
    style="width: 100%">
    <el-table-column>
      <template slot-scope="scope">
        <el-col :span="24" style="margin-top: -35px">
          <el-button type="text" @click="showContent(scope.row.contentId, scope.row.title)" style="float: left">
            <p style="font-size: 20px">{{scope.row.title}}</p>
          </el-button>
        </el-col>
        <el-col :span="4" style="text-align: left; color: #e4b9b9; margin-top: -15px">作者:{{scope.row.author}}</el-col>
        <el-col :span="5" style="text-align: left; color: #e4b9b9; margin-top: -15px">创作时间:{{scope.row.createTime}}</el-col>
      </template>
    </el-table-column>
  </el-table>
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
    showContent (id, title) {
      this.$emit('childControl', id, title)
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
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
