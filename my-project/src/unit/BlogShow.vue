<template>
  <div class="grid-content bg-purple-light">
    <el-row>
      <div id="editor"></div>
    </el-row>
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
    getContent () {
      alert(this.editorContent)
    }
  },
  mounted () {
    this.editor = new Editor('#editor')
    this.editor.create()
  }
}
</script>

<style scoped>

</style>
