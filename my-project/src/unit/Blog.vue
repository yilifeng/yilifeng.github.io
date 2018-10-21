<template>
  <el-row style="margin-top: 10px">
    <el-col :span="5"><div class="grid-content bg-purple">
      <aside-aside name="qwert"></aside-aside>
    </div></el-col>
    <el-col :span="19"><div class="grid-content bg-purple-light">

    </div></el-col>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex'
import Aside from '@/components/Aside'
export default {
  components: {
    'aside-aside': Aside
  },
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
      showAside: true,
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

<style scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
  }
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
