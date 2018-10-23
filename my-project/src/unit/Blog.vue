<template>
  <el-row style="margin-top: 10px">
    <el-col :span="5"><div class="grid-content bg-purple">
      <aside-aside name="qwert"></aside-aside>
    </div></el-col>
    <el-col :span="19" style="margin-top: 10px"><div class="grid-content bg-purple-light">
      <template>
        <el-col :span="12">
          <el-input
            placeholder="输入内容搜索"
            prefix-icon="el-icon-search">
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-button size="small" type="success" @click="emit('refresh')">
            刷新
            <i class="fa fa-refresh"></i>
          </el-button><div class="grid-content bg-purple-light"></div>
        </el-col>
      </template>
      <template v-for="item in profiles">
        <el-col :key="item" :span="5" style="margin-left: 4%; margin-top: 2%"><div class="grid-content bg-purple">
          <el-row>{{item.title}}</el-row>
          <el-row>
            <el-col>{{item.user}}</el-col>
            <el-col>{{item.links}}</el-col>
          </el-row>
        </div></el-col>
      </template>
      <el-row></el-row>
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
    return {
      showAside: true,
      form: {
        username: ''
      },
      profiles: [
        {
          title: '电商代理商城(learn)',
          user: 'vue vue-cli',
          content: '这个代理商城项目有完整的前后端页面，基本实现了商城的所有功能，用户登录注册，状态管理，商品分类展示搜索，用户购买、发货，后端页面也完全实现了网站整体设置，用户统计，购买统计，商品管理、用户管理、订单管理等的功能！',
          links: 'https://github.com/lyttonlee/learn'
        },
        {
          title: '电商代理商城服务端(express-server)',
          user: 'node express',
          content: '这是代理商城项目的服务端，express框架,数据库为mongodb3.4,使用async/await语法，使用express-promise-router统一捕获error，七牛云作为图片存储空间，开发中用到RoBo 3T,postman等工具，功能也完全响应代理商城客户端!',
          links: 'https://github.com/lyttonlee/express-server-for-learn'
        },
        {
          title: 'MarkDown文章编辑器',
          user: 'electron vue',
          content: '本软件只要配置七牛云信息,文章中插入的图片将自动上传至用户的七牛云空间，软件使用nedb本地数据库，使用electron打包为各平台的应用!',
          links: 'https://github.com/lyttonlee/md-editor'
        },
        {
          title: '火焰纹章if人物升级模拟',
          user: 'electron',
          content: '这是一个辅助Demo，可以看成是火焰纹章if这款游戏的小插件，功能就是模拟游戏人物升级时的能力提升（因为是随机数成长，每次提升的能力都不一样），得出期望数值，虽然没啥意义，但很能体现程序员思维，会去实现某些无聊的日常小需求!',
          links: 'https://github.com/lyttonlee/if'
        },
        {
          title: '火焰纹章if人物升级模拟',
          user: 'electron vue',
          content: '这是一个辅助Demo，可以看成是火焰纹章if这款游戏的小插件，功能就是模拟游戏人物升级时的能力提升（因为是随机数成长，每次提升的能力都不一样），得出期望数值，虽然没啥意义，但很能体现程序员思维，会去实现某些无聊的日常小需求!',
          links: 'https://github.com/lyttonlee/if'
        },
        {
          title: '火焰纹章if人物升级模拟',
          user: 'electron vue',
          content: '这是一个辅助Demo，可以看成是火焰纹章if这款游戏的小插件，功能就是模拟游戏人物升级时的能力提升（因为是随机数成长，每次提升的能力都不一样），得出期望数值，虽然没啥意义，但很能体现程序员思维，会去实现某些无聊的日常小需求!',
          links: 'https://github.com/lyttonlee/if'
        },
        {
          title: '火焰纹章if人物升级模拟',
          user: 'electron vue',
          content: '这是一个辅助Demo，可以看成是火焰纹章if这款游戏的小插件，功能就是模拟游戏人物升级时的能力提升（因为是随机数成长，每次提升的能力都不一样），得出期望数值，虽然没啥意义，但很能体现程序员思维，会去实现某些无聊的日常小需求!',
          links: 'https://github.com/lyttonlee/if'
        },
        {
          title: '火焰纹章if人物升级模拟',
          user: 'electron vue',
          content: '这是一个辅助Demo，可以看成是火焰纹章if这款游戏的小插件，功能就是模拟游戏人物升级时的能力提升（因为是随机数成长，每次提升的能力都不一样），得出期望数值，虽然没啥意义，但很能体现程序员思维，会去实现某些无聊的日常小需求!',
          links: 'https://github.com/lyttonlee/if'
        },
        {
          title: '火焰纹章if人物升级模拟',
          user: 'electron vue',
          content: '这是一个辅助Demo，可以看成是火焰纹章if这款游戏的小插件，功能就是模拟游戏人物升级时的能力提升（因为是随机数成长，每次提升的能力都不一样），得出期望数值，虽然没啥意义，但很能体现程序员思维，会去实现某些无聊的日常小需求!',
          links: 'https://github.com/lyttonlee/if'
        },
        {
          title: '火焰纹章if人物升级模拟',
          user: 'electron vue',
          content: '这是一个辅助Demo，可以看成是火焰纹章if这款游戏的小插件，功能就是模拟游戏人物升级时的能力提升（因为是随机数成长，每次提升的能力都不一样），得出期望数值，虽然没啥意义，但很能体现程序员思维，会去实现某些无聊的日常小需求!',
          links: 'https://github.com/lyttonlee/if'
        }
      ]
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
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
