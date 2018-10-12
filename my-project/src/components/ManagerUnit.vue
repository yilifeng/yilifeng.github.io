<template>
  <div>
    <div class="title">
      <span style="margin-left: 20px">{{unitName}}</span>
      <el-button-group>
        <el-button v-for="(item, index) in titleButtons"
                   :key="index"
                   type="text"
                   size="mini"
                   @click="emit(item.event)">
          &nbsp;{{ item.text }}&nbsp;
        </el-button>
      </el-button-group>
    </div>
    <el-container>
      <el-aside v-if="groupType && isfold === false" width="210px">
        <el-card :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix" align="middle">
            <el-button size="small" class="violet" @click="handleCreateGroup">创建群组</el-button>
          </div>
          <div class="text item">
            <div style="font-size: 13px; border-bottom:1px solid #DCDCDC;padding-top: 10px;padding-bottom: 10px;text-align:center;padding-left: 10px;padding-right: 10px">
              <el-row>
                <span>
                {{groupType}}
                </span>
                <a href="javascript:void(0)">
                  <i class="el-icon-d-arrow-left" @click="foldGroup()" style="font-size: small;float: right;padding-top: 5px;"></i>
                </a>
              </el-row>
            </div>
            <el-tree
              :data="data4"
              :props="defaultProps"
              node-key="id"
              show-checkbox
              default-expand-all
              empty-text="无群组信息"
              style="font-size: 5px;"
              :expand-on-click-node="false"
              :render-content="renderContent">
            </el-tree>
          </div>
        </el-card>
      </el-aside>
      <el-aside v-if="groupType && isfold === true" width="30px">
        <el-card :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix" align="middle" style="margin-bottom: 5px;">
            <a href="javascript:void(0)">
              <i class="el-icon-d-arrow-right" @click="foldGroup()" style="font-size: small;float: right;padding-top: 15%;"></i>
            </a>
          </div>
          <div class="text item" style="font-size: 13px;margin-left: 7px;margin-right: 12px;margin-top: 12px">
            <el-col>{{groupType}}</el-col>
            <el-row>&nbsp;</el-row>
          </div>
        </el-card>
      </el-aside>
      <el-main>
        <div id="tablecontent">
          <div class="margin-left:20px;">
            <el-row id="button-group" style="border: red">
              <el-col :xs="24" :sm="24" :md="21" :lg="21">
              <el-button-group v-if="buttonGroup1">
                <el-button v-for="(item, index) in buttonGroup1"
                           :type="item.type?item.type:'primary'"
                           size="small"
                           :key="index"
                           v-if="item.visible == true"
                           @click="emit(item.event)">
                  {{item.text }}
              </el-button>
              </el-button-group>
              <!--<el-dropdown trigger="click" style="margin-left:20px;" v-if="buttonList1">-->
                <!--<el-button type="primary" size="small">-->
                  <!--{{buttonList1[0].name}}-->
                  <!--<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i>-->
                <!--</el-button>-->
                <!--<el-dropdown-menu slot="dropdown">-->
                  <!--<el-dropdown-item v-for="(buttonItem, buttonIndex) in buttonList1[0].buttons" style="text-align:center">-->
                    <!--<el-button type="text"-->
                               <!--size="small"-->
                               <!--:key="buttonIndex"-->
                               <!--@click="emit(buttonItem.event)">-->
                      <!--{{buttonItem.text }}-->
                      <!--</el-button>-->
                  <!--</el-dropdown-item>-->
                <!--</el-dropdown-menu>-->
              <!--</el-dropdown>-->
              <!--<el-dropdown trigger="click" style="margin-left:20px;" v-if="buttonList2">-->
                <!--<el-button type="primary" size="small">-->
                  <!--{{buttonList2[0].name}}-->
                  <!--<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i>-->
                <!--</el-button>-->
                <!--<el-dropdown-menu slot="dropdown">-->
                  <!--<el-dropdown-item v-for="(buttonItem, buttonIndex) in buttonList2[0].buttons" style="text-align:center">-->
                    <!--<el-button type="text"-->
                               <!--size="small"-->
                               <!--:key="buttonIndex"-->
                               <!--@click="emit(buttonItem.event)">-->
                      <!--{{buttonItem.text }}-->
                      <!--</el-button>-->
                  <!--</el-dropdown-item>-->
                <!--</el-dropdown-menu>-->
              <!--</el-dropdown>-->
              <!--<el-dropdown trigger="click" style="margin-left:20px;" v-if="buttonList3">-->
                <!--<el-button type="primary" size="small">-->
                  <!--{{buttonList3[0].name}}-->
                  <!--<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i>-->
                <!--</el-button>-->
                <!--<el-dropdown-menu slot="dropdown">-->
                  <!--<el-dropdown-item v-for="(buttonItem, buttonIndex) in buttonList3[0].buttons" style="text-align:center">-->
                    <!--<el-button type="text"-->
                               <!--size="small"-->
                               <!--:key="buttonIndex"-->
                               <!--@click="emit(buttonItem.event)">-->
                      <!--{{buttonItem.text }}-->
                      <!--</el-button>-->
                  <!--</el-dropdown-item>-->
                <!--</el-dropdown-menu>-->
              <!--</el-dropdown>-->
              <el-button-group style="margin-left:20px;" v-if="buttonGroup2">
                <el-button v-for="(item, index) in buttonGroup2"
                           :type="item.type?item.type:'primary'"
                           size="small"
                           :key="index"
                           v-if="item.visible == true"
                           @click="emit(item.event)">
                  &nbsp;{{item.text }}
              </el-button>
              </el-button-group>
              <el-button v-for="(item, index) in button"
                         :type="item.type?item.type:'primary'"
                         size="small"
                         :key="index"
                         v-if="item.visible == true"
                         @click="emit(item.event)"
                         style="margin-left:20px;">
                {{item.text }}
              </el-button>
              </el-col>
              <el-col :xs="24" :sm="24" :md="3" :lg="3" style="text-align:right;padding-right: 20px; margin-top: -5px">
                <el-button size="small" type="success" @click="emit('refresh')">
                  刷新
                  <i class="fa fa-refresh"></i>
                </el-button>

              </el-col>
            </el-row>

            <div style="margin-bottom: 15px"></div>

            <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                      max-height="100%"
                      height=640
                      border-
                      @selection-change="handleSelectionChange"
                      stripe
                      border
                      empty-text=" "
                      tooltip-effect="dark">

              <el-table-column v-if="selectable"
                               align="center"
                               type="index">
              </el-table-column>
              <el-table-column v-if="selectable"
                               type="selection">
              </el-table-column>

              <el-table-column v-for="(item, index) in columns"
                               show-overflow-tooltip
                               :key="index"
                               :prop="item.prop"
                               :label="item.label"
                               v-if="item.visible == true && item.prop != 'installed_softs'"
                               :formatter="item.formatter == undefined?null:item.formatter"
                               :width="item.width == undefined?null:item.width"
                               :min-width="item.width == undefined?null:item.width"
                               :sortable="item.sortable == undefined?true:item.sortable"
                               :align="item.align == undefined?'left':item.align">
              </el-table-column>

              <el-table-column v-for="(item, index) in columns"
                               :key="index"
                               :prop="item.prop"
                               :label="item.label"
                               v-if="item.visible == true && item.prop == 'installed_softs'"
                               :formatter="item.formatter == undefined?null:item.formatter"
                               :width="item.width == undefined?null:item.width"
                               :min-width="item.width == undefined?null:item.width"
                               :sortable="item.sortable == undefined?true:item.sortable"
                               :align="item.align == undefined?'left':item.align">
                <template scope="scope">
                  <el-tooltip placement="top">
                    <div slot="content" v-html="showSoftInfo(item.tooltiptext(scope.row))">{{showSoftInfo(item.tooltiptext(scope.row))}}</div>
                    <el-button type="text">{{item.formatter(scope.row)}}</el-button>
                  </el-tooltip>
                </template>
              </el-table-column>

              <el-table-column v-if="inlineIcons"
                               label="操作"
                               :render-header="renderHeader"
                               align="center">
                <template scope="scope">
                  <i v-for="(item, index) in inlineIcons"
                     :key="index"
                     :class="[item.icon, item.type]"
                     @click="emit(item.event, scope.row)">&nbsp;&nbsp;&nbsp;
                  </i>
                </template>
              </el-table-column>

            </el-table>
            <div class="block">
              <el-pagination
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40, 100]"
                :page-size="pageSize"
                @size-change="handleSizeChange"
                align="center"
                layout="sizes,total, prev, pager, next, jumper"
                :total="tableData.length">
              </el-pagination>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
    <tablecolumn-dialog ref='tablecolumn_dlg'>
    </tablecolumn-dialog>
    <group-dialog ref='group_dlg'>
    </group-dialog>
  </div>
</template>

<script>
import '../assets/css/grouptree.css'
import GroupDialog from '@/dialog/GroupDialog'
import TablecolumnDialog from '@/dialog/TablecolumnDialog'
import ElAside from '../../node_modules/element-ui/packages/aside/src/main'
export default {
  name: 'manager-unit',
  components: {
    ElAside,
    'group-dialog': GroupDialog,
    'tablecolumn-dialog': TablecolumnDialog
  },
  props: [
    'unitName',
    'titleButtons',
    'columns',
    'tableData',
    'buttonGroup1',
    'buttonGroup2',
    // 'buttonList1',
    // 'buttonList2',
    // 'buttonList3',
    'button',
    'groupType',
    'groupData',
    'groupButtons',
    'groupIcons',
    'inlineButtons',
    'inlineIcons',
    'selectable',
    'maxHeight'
  ],
  data () {
    return {
      isfold: true,
      isCollapse: true,
      currentPage: 1,
      pageSize: 10,
      data4: [{
        id: 1,
        label: '全部群组',
        children: [{
          id: 5,
          label: '文学院',
          children: [{
            id: 6,
            label: 'A楼'
          }, {
            id: 7,
            label: 'B楼'
          }, {
            id: 8,
            label: 'C楼',
            children: [{
              id: 9,
              label: '1层'
            }, {
              id: 10,
              label: '2层'
            }, {
              id: 11,
              label: '3层'
            }]
          }]
        }, {
          id: 2,
          label: '商学院'
        }, {
          id: 3,
          label: '法学院'
        }, {
          id: 4,
          label: '未分组'
        }]
      }]
    }
  },
  watch: {
    isCollapse () {
      console.log(this.isCollapse)
    }
  },
  methods: {
    expand_menu (val) {
      if (this.isCollapse) {
        this.isCollapse = false
        console.log(this.isCollapse)
      } else {
        this.isCollapse = true
        console.log(this.isCollapse)
      }
    },
    handleSelectionChange (val) {
      this.emit('selectionChange', val)
    },
    emit (eventName, row) {
      this.$emit('event', eventName, row)
    },
    handleSearch () {
      alert('这是一个查询按钮')
    },
    handleConfig () {
      this.$refs.tablecolumn_dlg.open(this.columns)
      // this.$refs.tablecolumn_dlg.form = this.columns
    },
    renderHeader (createElement, { _self }) {
      return createElement(
        'i',
        [
          createElement('i', {
            'class': {
              'fa fa-search': true,
              warning: true
            },
            on: { click: this.handleSearch }
          }
          ),
          createElement('span', {
            style: {
              'padding-left': '10px'
            }
          }
          ),
          createElement('i', {
            'class': {
              'fa fa-cog': true
            },
            on: { click: this.handleConfig }
          }
          )
        ]
      )
    },
    renderContent (createElement, { node, data, store }) {
      if (node.label === '全部群组' || node.label === '未分组') {
        return createElement('span', {
          style: {
            'flex': '1',
            'display': 'flex',
            'justify-content': 'space-between',
            'font-size': '14px',
            'padding-right': '8px'
          }
        }, [
          createElement('span', {
            attrs: {
              type: 'text'
            },
            on: { click: this.handleConfigaaaaa }
          }, node.label)
        ])
      } else {
        return createElement('span', {
          style: {
            'flex': '1',
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'space-between',
            'font-size': '14px',
            'padding-right': '8px'
          }
        }, [
          createElement('span', {
            attrs: {
              type: 'text'
            },
            on: { click: this.handleConfigaaaaa }
          }, node.label),
          createElement('span', [
            createElement('el-button', {
              attrs: {
                type: 'text',
                size: 'mini'
              },
              on: {
                click: () => {
                  this.$confirm('此操作将永久删除该群组, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                  }).then(() => {
                    this.deleteGroup(node)
                  }).catch(() => {
                    this.$message({
                      type: 'info',
                      message: '已取消删除'
                    })
                  })
                }
              }
            }, '删除'),
            createElement('el-button', {
              attrs: {
                type: 'text',
                size: 'mini'
              },
              on: {
                click: () => {
                  this.$refs.group_dlg.edit(data)
                }
              }
            }, '编辑')
          ])
        ])
      }
    },
    handleCreateGroup () {
      this.$refs.group_dlg.create()
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
    },
    handleSizeChange (pageSize) {
      this.pageSize = pageSize
    },
    foldGroup: function () {
      if (this.isfold === true) {
        this.isfold = false
      } else {
        this.isfold = true
      }
    },
    showSoftInfo: function (softs) {
      let softsStr = ''
      for (let i = 0; i < softs.length; i++) {
        softsStr = softsStr + softs[i] + '<br/>'
      }
      return softsStr
    }
  },
  computed: {
    // columns: {
    //   get: function () {
    //     return this.$store.state[this.unitName].columns
    //   },
    //   set: function (value) {
    //     this.$store.commit(`${this.unitName}/setTableColumns`, value)
    //   }
    // },
    // tableData: {
    //   get () {
    //     return this.$store.state[this.unitName].tableData
    //   },
    //   set (value) {
    //     this.$store.commit(`${this.unitName}/setTableData`, value)
    //   }
    // },
    // groupData: {
    //   get () {
    //     return this.$store.state[this.unitName].groupData
    //   },
    //   set (value) {
    //     this.$store.commit(`${this.unitName}/setGroupData`, value)
    //   }
    // }
  }
}
</script>

<style scoped>
  #button-group {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    align-content: space-between;
    padding-top: 20px;
  }

  #tablecontent {
    box-sizing: border-box;
    margin-left:20px;
    height: 100%;
    border:1px solid #DCDCDC;
    background-color: #fff;
  }

  #icon-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    padding-bottom: 15px;
    font-family: "Microsoft YaHei";
    color:#1E90FF;
    font-weight:500;
  }

  .el-table {
    text-align:center;
  }
  .el-table td, .el-table th {
    padding: 1px;
  }

  .el-card {
    border:1px solid #DCDCDC;
  }

  .el-menu {
    border-bottom:1px solid #DCDCDC;
    border-right:0px solid #DCDCDC;
  }
  .el-menu-item {
    padding: 0px;
  }

  #icon-group i {
    cursor: pointer;
    font-size: 14px;
    text-shadow: 1px 1px 1px #DDDDDD;
  }

  .el-button-group {
    margin-left:20px;
    margin-right:1px
  }

  #icon-group i:hover {
    transform: translate(-1px, -1px);
    -webkit-transform: translate(-1px, -1px);
    -moz-transform: translate(-1px, -1px);
    -o-transform: translate(-1px, -1px);
    -ms-transform: translate(-1px, -1px);
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 500px;
    min-height: 400px;
  }

  .violet {
    align-items: center;
    color:#fff;
    background-color:#9B30FF;
    border-color:#9B30FF;
  &:focus {
     background:#9F79EE;
     border-color:#9F79EE;
     color:#fff
   }
  &:hover {
     background:#9F79EE;
     border-color:#9F79EE;
     color:#fff
   }
  }
  .el-main {
    padding: 0px;
  }
  .clearfix {
    align-items: center;
  }
</style>
<style>
  .el-card__body{
    padding:0px
  }
  div.el-col.el-col-24.el-col-xs-24.el-col-sm-24.el-col-md-21.el-col-lg-21{
    margin-top: -5px;
  }
  button.el-button.el-button--text.el-button--mini{
    color: #555f6c;
  }
  button.el-button.el-button--text.el-button--mini:hover{color: #1e90ff}
  i.fa.fa-search.warning{
    margin-left: -15px;
  }
  .el-table.el-table--fit.el-table--striped.el-table--border.el-table--fluid-height.el-table--enable-row-transition{
    border-left: 0px;
    border-right: 0px;
  }
</style>
