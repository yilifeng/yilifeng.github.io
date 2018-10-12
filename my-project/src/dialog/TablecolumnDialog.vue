/**
 *  选择显示列
 */

<template>
  <el-dialog title='请选择需要显示的列' :visible.sync='dialogFormVisible'>
    <el-form size="mini">
      <el-form-item>
        <el-button type="info" @click="handleDefaultColumn">恢复默认</el-button>
      </el-form-item>
      <el-row>
        <el-col :span="8"
                v-for="i of [0, 1, 2]"
                :key="i">
          <el-form-item v-for="(item, index) in form.slice(i * colsize, (i + 1) * colsize)"
                        :key="index">
            <el-checkbox v-model="item.visible"
                        :label="item.label">
            </el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- <div slot='footer' class='dialog-footer'>
      <el-button @click='dialogFormVisible = false'>取 消</el-button>
      <el-button type='primary' @click='dialogFormVisible = false'>确 定</el-button>
    </div> -->
  </el-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'tablecolumn-dialog',
  data () {
    return {
      dialogFormVisible: false,
      form: [],
      colsize: 10,
      formLabelWidth: '120px'
    }
  },
  methods: {
    ...mapActions([
      'getHostColumns',
      'getDesktopColumns',
      'getClouddiskColumns',
      'getSnapshotColumns',
      'getUserColumns',
      'getParentdiskColumns'
    ]),
    handleDefaultColumn () {
      switch (this.$parent.unitName) {
        case '终端管理':
          this.getHostColumns()
          break
        case '桌面管理':
          this.getDesktopColumns()
          break
        case '云盘管理':
          this.getClouddiskColumns()
          break
        case '快照管理':
          this.getSnapshotColumns()
          break
        case '用户管理':
          this.getUserColumns()
          break
        case '镜像管理':
          this.getParentdiskColumns()
          break
        default:
          break
      }
      this.dialogFormVisible = false
    },
    open (cols) {
      this.form = cols
      this.colsize = Math.ceil(this.form.length / 3)
      this.dialogFormVisible = true
    }
  }
}
</script>

<style scoped>

</style>
