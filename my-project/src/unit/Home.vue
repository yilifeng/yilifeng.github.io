<template>
  <div>
    <manager-unit :unitName="unitName"
                  :columns="columns"
                  :tableData="tableData"
                  :titleButtons="titleButtons"
                  :selectable="true"
                  :buttonGroup1="buttonGroup1"
                  :inlineIcons="inlineIcons"
                  :maxHeight="500"
                  @event="dispatch">
    </manager-unit>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ManagerUnit from '@/components/ManagerUnit'
export default {
  name: 'home-manager',
  components: {
    'manager-unit': ManagerUnit
  },
  data () {
    return {
      unitName: '镜像管理',
      tableData: [],
      columns: [
        {
          prop: 'date',
          label: '日期',
          visible: true
        },
        {
          prop: 'name',
          label: '姓名',
          visible: true
        },
        {
          prop: 'address',
          label: '地址',
          visible: true
        }
      ],
      buttonGroup1: [
        {
          permissionName: 'AddParentDisk',
          text: '创建镜像',
          icon: 'fa fa-plus',
          event: 'create',
          visible: true
        },
        {
          permissionName: 'EditParentDisk',
          text: '编辑镜像',
          icon: 'fa fa-edit',
          event: 'modify',
          visible: true
        },
        {
          permissionName: 'DelParentDisk',
          text: '删除镜像',
          icon: 'fa fa-edit',
          event: 'remove',
          visible: true
        }
      ],
      inlineIcons: [
        {
          permissionName: 'EditParentDisk',
          text: '编辑',
          type: 'info',
          icon: 'fa fa-pencil',
          event: 'edit'
        },
        {
          permissionName: 'DelParentDisk',
          text: '删除',
          type: 'danger',
          icon: 'fa fa-trash',
          event: 'delete'
        }
      ],
      titleButtons: [
        {
          permissionName: 'IsoManagement',
          text: '安装盘管理',
          event: 'visit_iso'
        }
      ],
      groupType: '',
      selected: []
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {
    ...mapActions([
      'queryTest',
      'deleteOneData'
    ]),
    refresh () {
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
          console.log('refresh table data')
          console.log(this.tableData)
        })
    },
    create () {
      // this.$refs.parentdisk_dlg.create()
      alert('create')
    },
    modify () {
      if (this.selected.length !== 1) {
        this.$message.error('请选择一条信息')
      } else {
        // this.$refs.parentdisk_dlg.edit(this.selected[0])
        alert('modify')
      }
    },
    remove () {
      if (this.selected.length !== 1) {
        this.$message.error('请选择一条信息')
      } else {
        this.$confirm('此操作将永久删除该镜像, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          alert('remove')
          this.deleteOneData(this.selected[0])
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    visit_iso () {
      // this.$refs.iso_dlg.open()
      alert('visit_iso')
    },
    edit (row) {
      // this.$refs.parentdisk_dlg.edit(row)
      alert('edit')
    },
    delete (row) {
      console.log('in delete')
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteOneData(row)
        alert('delete')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style scoped>
</style>
