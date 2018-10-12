/**
 * Created by jumo on 2017/12/26.
 * 创建/编辑群组
 */

<template>
  <el-dialog :title='title' :visible.sync='dialogFormVisible' @close='onClose'>
    <el-form :model='form' ref='dialogform' :rules='rules2' status-icon size="mini" label-position="top">
      <el-form-item label='群组名称' prop="groupname" :label-width='formLabelWidth' :required="true">
        <el-input v-model='form.groupname' auto-complete='off'></el-input>
      </el-form-item>
      <el-form-item label='群组类型' prop="type" :label-width='formLabelWidth' :required="true">
        <el-select v-model='form.type' placeholder='群组类型' :disabled="editFlag">
          <el-option
            v-for="item in [{label: '终端群组', value: 'host'}, {label: '桌面群组', value: 'desk'}, {label: '用户群组', value: 'user'}]"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label='将群组嵌套到以下群组内' :label-width='formLabelWidth' v-if="versionCtrl === '2'">
        <el-select v-model='form.parent' placeholder='群组类型' clearable>
          <el-option
            v-for="item in allgroups"
            :key="item.groupname"
            :label="item.groupname"
            :value="item.groupname">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot='footer' class='dialog-footer'>
      <el-button size="mini" type='primary' @click='onSubmit'>确定</el-button>
      <el-button size="mini" type="danger" v-if="editFlag" @click='onRemove'>删除</el-button>
      <el-button size="mini" plain v-else @click='dialogFormVisible = false'>取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'group-dialog',
  data () {
    return {
      title: '群组管理',
      dialogFormVisible: false,
      allgroups: [],
      form: {
        groupname: '',
        groupid: '',
        type: ''
      },
      rules2: {
        groupname: [
          { pattern: /^[a-zA-Z_0-9]{4,30}$/, trigger: 'blur', message: '群组名要求字母数字下划线, 长度为4-30字符' }
        ]
      },
      formLabelWidth: '120px',
      editFlag: false
    }
  },
  methods: {
    ...mapActions([
      'queryGroups',
      'updateGroup',
      'createGroup'
    ]),
    open () {
      this.queryGroups()
        .then((groups) => {
          this.allgroups = groups
        })
      this.dialogFormVisible = true
    },
    create () {
      this.editFlag = false
      this.open()
    },
    edit (item) {
      this.editFlag = true
      this.form = {...item}
      this.open()
    },
    onClose () {
      this.$refs.dialogform.resetFields()
    },
    onSubmit () {
      this.$refs.dialogform.validate()
        .then(() => {
          if (this.editFlag) {
            this.updateGroup(this.form)
          } else {
            this.createGroup(this.form)
          }
        })
        .then(() => {
          this.dialogFormVisible = false
        })
        .catch(() => {
          this.$message.error('请检查输入内容正确后再提交!')
        })
    }
  }
}
</script>

<style scoped>

</style>
