<template>
  <div class="info" style="margin-top: 8%">
    <transition
      :duration="{ enter: 2500, leave: 1500 }"
      enter-active-class="animated fadeInDown">
      <div class="cont"  v-if="show">
        <!--<h1 style="margin-top: 35px; text-align: center; font-size: 25px; color: red">请联系我</h1>-->
        <el-col :span="10">
          <el-col :span="3" style="margin-left: 25%">
            <h2 style="margin: 0 auto;width: 30px; line-height: 24px; margin-top: 100%;">自我评价</h2>
          </el-col>
          <template v-for="item in appraise" style="margin-left: 5%">
            <el-col :span="2" :key="item">
              <div :key="item" style="margin: 0 auto;width: 20px; line-height: 24px; border-right: 1px solid #ff00ff"><p>{{item}}</p></div>
            </el-col>
          </template>
        </el-col>
        <el-col :span="10" style="margin-top: 5%">
          <el-form>
            <el-form-item label="兴趣爱好：">
              <template v-for="item in tags">
                <el-tag :key="item" type="success" size="small">{{item}}</el-tag>&nbsp;&nbsp;
              </template>
            </el-form-item>
          </el-form>
          <a-line style="margin-top: 30%" title="联系我">联系我</a-line>
          <el-form style="text-align: left; margin-left: 30%">
            <el-form-item label="电话：" style="margin-bottom: 0">{{phone}}</el-form-item>
            <el-form-item label="邮箱：" style="margin-bottom: 0">{{email}}</el-form-item>
          </el-form>
        </el-col>
        <div class="acount">
          <el-row>
            <template v-for="item in accounts">
              <el-col :span="3" :key="item.class">
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
import Line from '@/components/Line.vue'
export default {
  components: {
    'a-line': Line
  },
  data () {
    return {
      show: false,
      appraise: ['为人诚恳，待人真诚，具有良好的团队合作精神和沟通能力', '学习能力强，具备独立分析解决问题的能力', '强烈的自我驱动力,只喜欢优雅的代码'],
      tags: ['读书', '跑步', '打游戏', '尝试新事物'],
      phone: '18629338048',
      email: '746733042@qq.com',
      accounts: [
        {class: 'icon-GitHub', link: 'https://github.com/yilifeng'}
        // {class: 'icon-cnblogs', link: 'https://www.cnblogs.com/bigmoon/'}
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
      width: 60%;
      margin: 10px auto;
      margin-top: 45%;
      margin-left: 60%;
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
