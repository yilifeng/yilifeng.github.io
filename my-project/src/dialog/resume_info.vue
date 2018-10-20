<template>
  <div class="info" style="margin-top: 5%">
    <transition
      :duration="{ enter: 2500, leave: 1500 }"
      enter-active-class="animated fadeInUp">
      <el-row  class="cont" v-if="show">
        <el-col :span="15"><div class="grid-content bg-purple">
          <h1 style="margin-top: 35px; text-align: center; font-size: 25px; color: red">基本信息</h1>
          <img class="avatar" src="../../static/img/photo.jpg" alt="">
          <h3>益立锋</h3>
          <p>毕业于西安理工大学，计算机科学与技术专业</p>
          <p>工作四年,服务器端开发三年,web开发一年</p>
        </div></el-col>
        <el-col class="state" :span="6"><div class="grid-content bg-purple-light">
          <template v-for="item in states">
            <el-row :key="item.icon">
              <div class="iconBox">
                <i class="iconfont iconSet" :class="item.icon"></i>
              </div>
              <p v-text="item.val"></p>
            </el-row>
          </template>
        </div></el-col>
      </el-row>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      states: [
        {icon: 'icon-nianling', val: '年龄/28'},
        {icon: 'icon-xueli', val: '学历/本科'},
        {icon: 'icon-icon-', val: '坐标/西安'},
        {icon: 'icon-zhiwei', val: '状态/在职'}
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
    margin: 20px auto;
    background-color: rgba(233, 225, 225, .3);
    border-radius: 25px;
    .avatar {
      width: 220px;
      height: 280px;
      border-radius: 80px;
      margin-top: 30px;
    }
    .state {
      padding: 20px 10px 50px;
      .iconBox {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        border: 1px solid rgba(9, 92, 49, .5);
        margin: 5px auto;
        background-color: rgba(13, 73, 87, 0.4);
        &:hover {
          background-color: rgba(13, 73, 87, 0.8);
        }
        .iconSet {
          font-size: 3rem;
          line-height: 80px;
          color: rgba(220, 228, 220, 0.7);
          &:hover {
            font-size: 3.5rem;
            color: rgba(220, 228, 220, 1);
          }
        }
      }
    }
  }
}
</style>
