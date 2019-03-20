<template>
  <div>
    <el-button @click="dialogFormVisible = true">{{ title }}</el-button>
    <el-dialog title="请输入用户名密码登陆" ref='dialogform' :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名：" :label-width="formLabelWidth">
          <el-input type="text" v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密  码：" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">登陆</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: [
    'title'
  ],
  data () {
    return {
      dialogFormVisible: false,
      form: {
        username: '',
        password: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    open () {
      this.dialogFormVisible = true
    },
    onSubmit () {
      this.login(this.form)
        .then((response) => {
          console.log('response:')
          console.log(response)
          if (response.code === 0) {
            alert('登陆成功')
            this.dialogFormVisible = false
          } else {
            alert(response.message)
          }
        })
    }
  }
}
</script>
