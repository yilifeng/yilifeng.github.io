<template>
  <el-row>
    <el-col style="width: 96%; margin-left: 2%">
      <el-row type="flex" class="row-bg" justify="center" align="middle" style="height:50px">
        <i class="fa fa-user-circle-o fa-lg" style="color:#555f6c; margin-left: 16px">
          <div style="float: right">&nbsp;&nbsp;{{ userInfo.name }}</div>
        </i><br/>
        <div style="margin-left: 55%">
          <el-button
            type="text"
            style="color: #555f6c"
            v-if="userInfoVisible"
            icon="el-icon-arrow-up"
            @click="foldUserInfo">
          </el-button>
          <el-button
            type="text"
            style="color: #555f6c"
            v-else
            icon="el-icon-arrow-down"
            @click="foldUserInfo">
          </el-button>
        </div>
      </el-row>
      <div>
        <el-row v-if="userInfoVisible" type="flex" class="row-bg" justify="start" style="height:55px; margin-left: -17%;">
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :offset="4">
            <div class="text-yahei" style="padding-bottom: 4px;">登录时间：</div>
            <div class="text-yahei" style="padding-bottom: 4px;padding-top: 4px">上次登录：</div>
          </el-col>
          <el-col :xs="14" :sm="14" :md="14" :lg="14">
            <div class="text-yahei" style="padding-bottom: 4px;padding-left: 5px; float: left;">{{ userInfo.loginTime }}</div>
            <div class="text-yahei" style="padding-bottom: 4px;padding-top: 4px;padding-left: 5px; float: left">{{ userInfo.lastLogin }}</div>
          </el-col>
        </el-row>
      </div>
      <div>
        <calendar :events="calendar1.events" :lunar="calendar1.lunar" :value="calendar1.value" :begin="calendar1.begin" :end="calendar1.end" :weeks="calendar1.weeks" :months="calendar1.months" @select="calendar1.select"></calendar>
      </div>
      <i class="el-icon-date"></i>
      <span>{{ name }}</span>
      <br/>
    </el-col>
    <el-col>
      <a-line title="menus"></a-line>
      <br/>
      <p>aaaaaa</p>
      <br/>
    </el-col>
  </el-row>
</template>

<script>
import Line from '@/components/Line'
import Calendar from '@/less/calendar/calendar.vue'
export default {
  name: 'Aside.vue',
  components: {
    'a-line': Line,
    'calendar': Calendar
  },
  props: [
    'name'
  ],
  mounted: function () {
    var myDate = new Date()
    this.calendar1.value = [myDate.getFullYear(), myDate.getMonth(), myDate.getDay()]
    this.userInfo.loginTime = myDate.getFullYear() + '-' + myDate.getMonth() + '-' + myDate.getDay() + ' ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds()
  },
  data () {
    return {
      userInfoVisible: true,
      userInfo: {
        name: 'yilifeng',
        userId: '123456',
        lastLogin: '2018-10-20 20:10:10',
        loginTime: ''
      },
      calendar1: {
        value: [2018, 2, 16], // 默认日期
        lunar: true, // 显示农历
        weeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        events: {
          // '2018-10-14': '$408', '2018-10-15': '$460', '2018-10-16': '$500'
        },
        select (value) {
          console.log(value.toString())
        }
      }
    }
  },
  methods: {
    foldUserInfo () {
      if (this.userInfoVisible) {
        this.userInfoVisible = false
      } else {
        this.userInfoVisible = true
      }
    }
  }
}
</script>

<style scoped>

</style>
