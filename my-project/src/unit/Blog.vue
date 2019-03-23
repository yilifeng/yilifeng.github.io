<template>
  <el-row style="margin-top: 10px">
    <el-col :span="5"><div class="grid-content bg-purple">
      <aside-aside name="qwert"></aside-aside>
    </div></el-col>
    <el-col :span="19">
      <el-row>
        <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
          <el-tab-pane label="列表" name="first">
            <blog-list v-if="showBlogList" @childControl="getChildData"></blog-list>
            <blog-show v-else :contentId="contentId" :title="title" @childControl="getChildData"></blog-show>
          </el-tab-pane>
          <el-tab-pane label="添加" name="second">
            <blog-add></blog-add>
          </el-tab-pane>
        </el-tabs>
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
import Login from '@/dialog/login'
export default {
  components: {
    'aside-aside': Aside,
    'blog-add': BlogAdd,
    'blog-list': BlogList,
    'blog-show': BlogShow,
    'login': Login
  },
  data () {
    return {
      activeName2: 'first',
      showAside: true,
      showBlogAdd: false,
      showBlogList: true,
      showBlogShow: false,
      contentId: '',
      title: ''
    }
  },
  methods: {
    ...mapActions([
      'createUser',
      'loginInfo'
    ]),
    getChildData (id, title) {
      console.log('---------', id, title)
      this.contentId = id
      this.title = title
      if (this.showBlogList === true) {
        this.showBlogList = false
      } else {
        this.showBlogList = true
      }
    },
    handleClick (tab) {
      console.log(tab)
      if (tab.name === 'second') {
        this.loginInfo()
          .then((response) => {
            console.log(response)
            if (!response.loginsucc) {
              this.$nextTick(() => {
                console.log(this.$refs)
              })
            }
          })
      }
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
</style>
