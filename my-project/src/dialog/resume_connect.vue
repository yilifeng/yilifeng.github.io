<template>
  <div class="info" style="margin-top: 8%">
    <transition
      :duration="{ enter: 2500, leave: 1500 }"
      enter-active-class="animated fadeInDown">
      <div class="cont"  v-if="show">
        <h1 style="margin-top: 35px; text-align: center; font-size: 25px; color: red">请联系我</h1>
        <el-col :span="10">
          <el-col :span="3" style="margin-left: 30%">
            <h2 style="margin: 0 auto;width: 20px; line-height: 24px">自我评价</h2>
          </el-col>
          <template v-for="item in appraise">
            <el-col :span="2" :key="item">
              <div :key="item" style="margin: 0 auto;width: 20px; line-height: 24px; border: 1px solid #737373"><p>{{item}}</p></div>
            </el-col>
          </template>
        </el-col>
        <el-col :span="10">
          <template v-for="item in tags">
            <el-tag :key="item" type="info">{{item}}</el-tag>&nbsp;&nbsp;&nbsp;&nbsp;
          </template>
          <div class="contact">
            <h2>联系我</h2>
            <el-form>
              <el-form-item label="电话：">
                <a>{{phone}}</a>
              </el-form-item>
              <el-form-item label="电话：">
                <a>{{email}}</a>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <div class="acount">
          <el-row>
            <template v-for="item in accounts">
              <el-col :span="6" :key="item.class">
                <div class="iconBox">
                  <a :href="item.link"><i class="iconfont iconSet" :class="item.class"></i></a>
                </div>
              </el-col>
            </template>
          </el-row>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      appraise: ['高效的自学能力,具备独立分析解决问题能力', '强烈的自我驱动力,只喜欢优雅的代码', '熟悉组件化开发，sf重度依耐性患者'],
      tags: ['爱读书', '爱写字', '爱喝茶', '喜欢尝试新事物'],
      phone: '18629338048',
      email: '746733042@qq.com',
      accounts: [
        {class: 'icon-GitHub', link: 'https://github.com/lyttonlee'},
        {class: 'icon-sf', link: 'https://segmentfault.com/u/siwuweihesi'},
        {class: 'icon-zhihu', link: 'https://www.zhihu.com/people/li-zai-rong-27/activities'},
        {class: 'icon-xinlang', link: 'https://weibo.com/1803573600/profile?topnav=1&wvr=6&is_all=1'}
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
a {
  text-decoration: none;
}
.info {
  .info;
  .cont {
    .cont;
    margin: 20px auto;
    background-color: rgba(233, 225, 225, .3);
    border-radius: 25px;
    padding: 30px 0;
    .acount {
      width: 30%;
      margin: 10px auto;
      .iconBox {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid rgba(9, 92, 49, .5);
        margin: 5px auto;
        background-color: rgba(13, 73, 87, 0.4);
        &:hover {
          background-color: rgba(13, 73, 87, 0.8);
        }
        .iconSet {
          font-size: 1.5rem;
          line-height: 40px;
          cursor: pointer;
          color: rgba(220, 228, 220, 0.7);
          &:hover {
            font-size: 1.8rem;
            color: rgba(220, 228, 220, 1);
          }
        }
      }
    }
  }
}
</style>
