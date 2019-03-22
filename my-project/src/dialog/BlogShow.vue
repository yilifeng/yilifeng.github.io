<template>
  <div class="grid-content bg-purple-light">
    <el-button @click="showContent">test</el-button>
    <p>{{content}}</p>
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
  props: [
    'content'
  ],
  data () {
    return {
      editorContent: ''
    }
  },
  methods: {
    ...mapActions([
      'createUser'
    ]),
    showContent () {
      alert(this.content)
      this.$emit('childControl')
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
