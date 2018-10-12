<template>
  <el-table
    :data="tableData"
    style="width: 100%; text-align: left"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="日期">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.refresh()
  },
  methods: {
    ...mapActions([
      'queryTest'
    ]),
    refresh () {
      console.log('refresh!')
      this.queryTest()
        .then((data) => {
          console.log(data)
          for (let i = 0; i < data.length; i++) {
            let oneData = {}
            oneData.date = data[i].createdAt
            oneData.name = data[i].name
            oneData.address = data[i].objectId
            this.tableData.push(oneData)
          }
          console.log('table data')
          console.log(this.tableData)
        })
    },
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  },
  data () {
    return {
      tableData: []
    }
  }
}
</script>
