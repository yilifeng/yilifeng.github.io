<template>
  <el-row style="margin-top: 10px">
    <el-col :span="5"><div class="grid-content bg-purple">
      <aside-aside name="qwert"></aside-aside>
    </div></el-col>
    <el-col :span="19">
      <el-row>
        <el-button v-if="!showBlogAdd" :onclick="add">添加</el-button>
      </el-row>
      <el-row>
        <blog-add v-if="showBlogAdd"></blog-add>
        <blog-add v-if="showBlogList"></blog-add>
        <blog-add v-if="showBlogShow"></blog-add>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex'
import Aside from '@/components/Aside'
import BlogAdd from '@/dialog/BlogAdd'
import BlogList from '@/dialog/BlogList'
import BlogShow from '@/dialog/BlogShow'
export default {
  components: {
    'aside-aside': Aside,
    'blog-add': BlogAdd,
    'blog-list': BlogList,
    'blog-show': BlogShow
  },
  data () {
    return {
      editorContent: '',
      showAside: true,
      showBlogAdd: false,
      showBlogList: true,
      showBlogShow: false
    }
  },
  methods: {
    ...mapActions([
      'createUser'
    ]),
    getContent () {
      alert(this.editorContent)
    },
    add () {
      this.showBlogAdd = true
    }
  }
}
</script>

<style scoped>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    position: absolute;
    line-height: 100%;
  }
  .bg-purple {
    background: #d3dce6;
  }
  /*.bg-purple-light {*/
    /*background: #e5e9f2;*/
  /*}*/
</style>
