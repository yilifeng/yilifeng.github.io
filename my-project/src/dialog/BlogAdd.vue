<template>
  <div class="grid-content bg-purple-light">
    <el-form ref="form" :model="form">
      <el-form-item label="标题：">
        <el-input v-model="contentTitle"></el-input>
      </el-form-item>
      <div id="editorElem" style="text-align:left"></div>
    </el-form>
    <div slot="footer" class="dialog-footer" style="margin-top: 10px">
      <el-button @click="clearForm">取 消</el-button>
      <el-button type="primary" @click="makeshow">提交</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Editor from 'wangeditor'
import 'wangeditor/release/wangEditor.min.css'
export default {
  data () {
    return {
      editorContent: '',
      editorTextContent: '',
      contentTitle: '',
      userInfo: ''
    }
  },
  methods: {
    ...mapActions([
      'createUser',
      'loginInfo',
      'createContent'
    ]),
    makeshow () {
      console.log(this.editorContent)
      console.log(this.editorTextContent)
      console.log(this.contentTitle)
      this.loginInfo()
        .then((res) => {
          console.log('loginInfo')
          console.log(res)
          this.userInfo = res
          console.log(this.userInfo)
          let param = {
            content: this.editorContent,
            authorId: this.userInfo.userid,
            author: this.userInfo.loginuser,
            title: this.contentTitle,
            abstr: this.editorTextContent.substring(0, 100)
          }
          console.log(param)
          // this.createContent(param)
        })
    },
    clearForm () {
      this.editorContent = ''
      this.editorTextContent = ''
      this.contentTitle = ''
    }
  },
  mounted () {
    var editor = new Editor('#editorElem')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
      console.log(editor.$textElem[0].innerText)
      this.editorTextContent = editor.$textElem[0].innerText
    }

    editor.customConfig.uploadImgShowBase64 = true
    editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024
    editor.customConfig.uploadImgMaxLength = 5

    editor.create()
  }
}
</script>

<style scoped>

</style>
