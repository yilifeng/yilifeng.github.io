<template>
  <div class="info" style="margin-top: 5%">
    <transition
      :duration="{ enter: 2500, leave: 1500 }"
      enter-active-class="animated fadeInRight">
      <div class="cont" v-if="show">
        <!--<h1 style="margin-top: 35px; text-align: center; font-size: 25px; color: red">工作经历</h1>-->
        <a-line style="margin-top: 35px;" title="工作经历"></a-line>
        <template v-for="item in profiles">
          <el-col :span="12" :xs="24" :key="item.name">
            <el-card class="item" :body-style="{ padding: '0px'}">
              <img :src="item.photo" height="150" width="200" alt="">
              <div style="padding: 14px;">
                <span>{{item.name}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ item.dateTime }}</time>
                  <el-tooltip placement="top">
                    <div style="width: 200px" slot="content" v-html="item.content">{{item.content}}</div>
                    <el-button type='text'>工作详情<i class="el-icon-info"></i></el-button>
                  </el-tooltip>
                </div>
                <nobr style="font-size: 12px">技术：</nobr>
                <template v-for="skill in item.skills">
                  <el-tag :key="skill" type="success" size="mini">{{skill}}</el-tag>&nbsp;&nbsp;
                </template>
              </div>
            </el-card>
          </el-col>
        </template>
      </div>
    </transition>
  </div>
</template>
<script>
import Line from '@/components/Line.vue'
export default {
  components: {
    'a-line': Line
  },
  data () {
    return {
      show: false,
      currentDate: new Date(),
      profiles: [
        {
          name: '上海淘米网络科技有限公司',
          photo: '../../static/img/taomee.jpg',
          skills: ['c/c++', 'php', 'Linux', 'nginx', 'js'],
          content: '在手游支撑部门，负责手游登陆系统、支付系统的API接入工作；<br/>商品管理系统维护工作；<br/>维护支付中转及兑换码发货服务；<br/>维护资源更新(cdn)服务器端业务。',
          position: 'Linux开发工程师(运维性质)',
          dateTime: '2015.07——2016.06'
        },
        {
          name: '中软国际',
          photo: '../../static/img/chinasoft.jpg',
          skills: ['c/c++', 'xml', 'Linux'],
          content: '华为业务群，服务器管理软件开发，RestFulAPI性质的服务器接口。',
          position: '开发工程师',
          dateTime: '2016.07——2017.06'
        },
        {
          name: '西安雷风电子科技有限公司',
          photo: '../../static/img/leifeng.jpg',
          skills: ['python', 'Linux', 'js', 'vue', 'c'],
          content: '云桌面终端部署相关开发(pxe);<br/>服务器端程序开发(python);<br/>服务器管理平台的相关开发(vue);<br/>终端系统的开发与维护(Linux相关);<br/>Linux客户端程序的开发。',
          position: '研发工程师',
          dateTime: '2017.08——今天'
        },
        {
          name: '待定（如果合适将长期就职）',
          photo: '../../static/img/other.jpg',
          skills: ['待定'],
          content: '吃苦耐劳;<br/>学习能力强;<br/>敢于挑战;<br/>喜欢钻研技术。',
          github: '研发工程师',
          dateTime: '希望长期稳定'
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
    width: 70%;
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
  .el-card {
    background: transparent;
    width: 90%;
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
