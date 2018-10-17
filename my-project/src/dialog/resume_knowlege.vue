<template>
  <div class="info" style="margin-top: 8%">
    <transition
      :duration="{ enter: 2500, leave: 1500 }"
      leave-active-class="animated fadeOutRight"
      enter-active-class="animated fadeInLeft">
      <el-form class="cont" v-if="show">
        <h1 style="margin-top: 35px; text-align: center; font-size: 25px; color: red">专业技能</h1>
        <template v-for="skill in skills">
          <el-row :gutter="20" :key="skill.name">
            <el-col :span="8">
              <div class="left" :style="{backgroundColor: `${skill.background}`}">
                <h2>{{skill.name}}</h2>
              </div>
            </el-col>
            <el-col :span="16">
              <el-row class="right" :gutter="10">
                <template v-for="child in skill.child">
                  <el-col :span="12" :key="child.name">
                    <el-form-item :label="child.name">
                      <el-progress :text-inside="true" :stroke-width="18" :percentage=child.level :color=child.color></el-progress>
                    </el-form-item>
                  </el-col>
                </template>
              </el-row>
            </el-col>
          </el-row>
        </template>
      </el-form>
    </transition>
  </div>
</template>
<script>
export default {
  // let randomcolor = rgba()
  data () {
    return {
      show: false,
      skills: [
        {
          name: '前端',
          background: 'rgba(29, 218, 61, 0.2)',
          child: [
            {name: 'Vue', background: 'rgba(29, 218, 61, 0.2)', level: 70},
            {name: 'VueRouter', background: 'rgba(29, 218, 61, 0.2)', level: 70},
            {name: 'Vuex', background: 'rgba(29, 218, 61, 0.2)', level: 70},
            {name: 'axios', background: 'rgba(29, 218, 61, 0.2)', level: 70}
          ]
        },
        {
          name: '服务端',
          background: 'rgba(211, 184, 30, 0.2)',
          child: [
            {name: 'NodeJs', background: 'rgba(211, 184, 30, 0.2)', level: 90},
            {name: 'mongoose', background: 'rgba(211, 184, 30, 0.2)', level: 90},
            {name: 'express', background: 'rgba(211, 184, 30, 0.2)', level: 90},
            {name: 'ES6', background: 'rgba(211, 184, 30, 0.2)', level: 90}
          ]
        },
        {
          name: '工具',
          background: 'rgba(232, 13, 24, 0.2)',
          child: [
            {name: 'Git', background: 'rgba(232, 13, 24, 0.2)', level: 80},
            {name: 'WebPack', background: 'rgba(232, 13, 24, 0.2)', level: 80},
            {name: 'Ubuntu', background: 'rgba(232, 13, 24, 0.2)', level: 80},
            {name: 'VS Code', background: 'rgba(232, 13, 24, 0.2)', level: 80}
          ]
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
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        console.log(this.skills[i].child[j])
        if (this.skills[i].child[j].level < 60) {
          this.skills[i].child[j].color = 'red'
        } else if (this.skills[i].child[j].level >= 60 && this.skills[i].child[j].level < 75) {
          this.skills[i].child[j].color = '#5e5e5e'
        } else if (this.skills[i].child[j].level >= 75 && this.skills[i].child[j].level < 85) {
          this.skills[i].child[j].color = 'blue'
        } else if (this.skills[i].child[j].level >= 85) {
          this.skills[i].child[j].color = 'green'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../less/index.less';
.info {
  .info;
  .cont {
    .cont;
    .left {
      margin: 10px auto;
      width: 100%;
      height: 160px;
      // background-color: rgba(211, 184, 30, 0.2);
      line-height: 160px;
      border-radius: 50%;
    }
    .right {
      height: 70px;
      // background-color: rgba(232, 13, 24, 0.2);
      line-height: 70px;
      margin-top: 20px;
    }
  }
}
</style>
