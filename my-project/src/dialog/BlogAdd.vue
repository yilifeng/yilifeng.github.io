<template>
  <div class="grid-content bg-purple-light">
    <div id="editorElem" style="text-align:left"></div>
    <div slot="footer" class="dialog-footer">
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
      editorContent: ''
    }
  },
  methods: {
    ...mapActions([
      'createUser'
    ]),
    makeshow () {
      console.log(this.editorContent)
    }
  },

  mounted () {
    var editor = new Editor('#editorElem')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
  }
}
</script>

<style scoped>

</style>
