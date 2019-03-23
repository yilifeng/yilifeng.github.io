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
      <el-button v-if="!isEdit" type="primary" @click="makeshow">添加</el-button>
      <el-button v-else type="primary" @click="makeshowEdit">修改</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Editor from 'wangeditor'
import 'wangeditor/release/wangEditor.min.css'
export default {
  props: [
    'isEdit'
  ],
  data () {
    return {
      editorContent: '',
      editorTextContent: '',
      contentTitle: '',
      userInfo: '',
      contentId: '',
      editor: ''
    }
  },
  methods: {
    ...mapActions([
      'createUser',
      'loginInfo',
      'createContent',
      'updateContent',
      'queryOneContent'
    ]),
    open (title, id) {
      this.contentTitle = title
      this.contentId = id

      this.queryOneContent({'contentId': id})
        .then((res) => {
          console.log(res)
          if (res.status === 0) {
            this.editor.txt.html(res.data[0].content)
          } else {
            alert('no data found!')
          }
        })
    },
    makeshow () {
      this.loginInfo()
        .then((res) => {
          console.log('loginInfo')
          console.log(res)
          this.userInfo = res
          if (this.userInfo.loginsucc === true) {
            console.log(this.userInfo)
            let param = {
              content: this.editorContent,
              authorId: this.userInfo.userid,
              author: this.userInfo.loginuser,
              title: this.contentTitle,
              abstr: this.editorTextContent.substring(0, 100)
            }
            console.log(param)
            this.createContent(param)
              .then((res) => {
                this.clearForm()
                this.$emit('afterEdit')
              })
          } else {
            alert('please login first!')
          }
        })
    },
    makeshowEdit () {
      this.loginInfo()
        .then((res) => {
          console.log('loginInfo')
          console.log(res)
          this.userInfo = res
          if (this.userInfo.loginsucc === true) {
            console.log(this.userInfo)
            let param = {
              content: this.editorContent,
              id: this.contentId
            }
            console.log(param)
            this.updateContent(param)
              .then((res) => {
                this.clearForm()
                this.$emit('afterEdit')
              })
          } else {
            alert('please login first!')
          }
        })
    },
    clearForm () {
      this.editorContent = 'aaaaaa'
      this.editorTextContent = 'aaaaaa'
      this.contentTitle = 'aaaaaa'
    },
    initEditor () {
      this.contentTitle = this.title
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
      this.editor = editor
    }
  },
  mounted () {
    this.initEditor()
  }
}
</script>

<style scoped>

</style>
