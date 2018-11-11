<template>
  <div class="grid-content bg-purple-light">
    <el-form ref="form" :model="form">
      <el-form-item label="标题：">
        <el-input v-model="contentTitle"></el-input>
      </el-form-item>
      <div id="editorElem" style="text-align:left"></div>
    </el-form>
    <div slot="footer" class="dialog-footer" style="margin-top: 10px">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
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
      contentTitle: ''
    }
  },
  methods: {
    ...mapActions([
      'createUser',
      'getLoginInfo'
    ]),
    makeshow () {
      console.log(this.editorContent)
      console.log(this.editorTextContent)
    }
  },
  mounted () {
    var editor = new Editor('#editorElem')
    editor.customConfig.onchange = (html, text) => {
      this.editorContent = html
      this.editorTextContent = text
    }
    editor.create()
  }
}
</script>

<style scoped>

</style>
