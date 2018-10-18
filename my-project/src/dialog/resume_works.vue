<template>
  <div class="info" style="margin-top: 8%">
    <transition
      :duration="{ enter: 2500, leave: 1500 }"
      enter-active-class="animated fadeInRight">
      <div class="cont" v-if="show">
        <h1 style="margin-top: 35px; text-align: center; font-size: 25px; color: red">工作经历</h1>
        <template>
          <el-col :span="10" v-for="item in profiles" :key="item" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../static/img/taomee.jpg" height="200" width="200" alt="">
              <div style="padding: 14px;">
                <span>{{item.name}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-tooltip placement="top">
                    <div style="width: 200px" slot="content">{{item.content}}</div>
                    <el-button type='text'>详细信息<i class="el-icon-info"></i></el-button>
                  </el-tooltip>
                </div>
              </div>
            </el-card>
          </el-col>
        </template>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      currentDate: new Date(),
      profiles: [
        {
          name: '电商代理商城(learn)',
          skills: 'vue vue-cli vue-router vuex axios qiniu echart element-ui mavon-editor',
          content: '这个代理商城项目有完整的前后端页面，基本实现了商城的所有功能，用户登录注册，状态管理，商品分类展示搜索，用户购买、发货，后端页面也完全实现了网站整体设置，用户统计，购买统计，商品管理、用户管理、订单管理等的功能！',
          github: 'https://github.com/lyttonlee/learn'
        },
        {
          name: '电商代理商城服务端(express-server)',
          skills: 'node express mongoose mongodb3.4 express-promise-router async/await语法',
          content: '这是代理商城项目的服务端，express框架,数据库为mongodb3.4,使用async/await语法，使用express-promise-router统一捕获error，七牛云作为图片存储空间，开发中用到RoBo 3T,postman等工具，功能也完全响应代理商城客户端!',
          github: 'https://github.com/lyttonlee/express-server-for-learn'
        },
        {
          name: 'MarkDown文章编辑器',
          skills: 'electron vue vue-cli vue-router axios qiniu nedb element-ui mavon-editor',
          content: '本软件只要配置七牛云信息,文章中插入的图片将自动上传至用户的七牛云空间，软件使用nedb本地数据库，使用electron打包为各平台的应用!',
          github: 'https://github.com/lyttonlee/md-editor'
        },
        {
          name: '火焰纹章if人物升级模拟',
          skills: 'electron vue vue-cli element-ui',
          content: '这是一个辅助Demo，可以看成是火焰纹章if这款游戏的小插件，功能就是模拟游戏人物升级时的能力提升（因为是随机数成长，每次提升的能力都不一样），得出期望数值，虽然没啥意义，但很能体现程序员思维，会去实现某些无聊的日常小需求!',
          github: 'https://github.com/lyttonlee/if'
        }
      ]
    }
  },
  methods: {
    timeout () {
      setTimeout(() => {
        this.show = true
      }, 1000)
    }
  },
  mounted () {
    this.timeout()
  }
}
</script>

<style lang="less" scoped>
@import '../less/index.less';
.info {
  .info;
  .cont {
    .cont;
    width: 90%;
    .item {
      background-color: rgba(59, 123, 13, 0.2);
      padding: 10px;
      border-radius: 15px;
      margin: 10px auto;
      @media screen and (max-width: 768px) {
        padding: 5px;
        margin: 5px auto;
      }
      &:hover {
        border-radius: 25px;
        background-color: rgba(10, 135, 87, 0.3);
      }
      p {
        text-align: left;
        text-indent: 28px;
        font-size: 1.1rem;
        line-height: 1.2;
        @media screen and (max-width: 768px) {
          text-indent: 12px;
          font-size: 0.7rem;
          line-height: 1.1;
        }
      }
    }
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    height: 50%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
}
</style>
