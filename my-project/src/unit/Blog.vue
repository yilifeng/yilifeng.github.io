<template>
  <el-form :model="form" ref="form" label-width="100px" :rules="rule">
    <el-form-item label="姓    名" prop="username">
      <el-input type="text" v-model="form.username" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密    码" prop="password">
      <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input type="password" v-model="form.password2" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="create">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    var validate = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('此项为必填项'))
      } else if (rule.field === 'password2' && value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: ''
      },
      rules: {
        username: [
          { pattern: /^[a-zA-Z_][a-zA-Z_0-9]{5,29}$/, trigger: 'blur', message: '用户名仅支持字母数字下划线, 长度为6-30字符, 不能以数字开头' },
          { validator: validate, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'createUser'
    ]),
    create () {
      let res = this.createUser(this.form)
      console.log('create res:')
      console.log(res)
    },
    resetForm () {
      this.$refs.resetFields()
    }
  }
}
</script>
