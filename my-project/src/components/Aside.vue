<template>
  <el-row>
    <el-col>
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
    console.log(myDate.getMonth())
    console.log(myDate.getDay())
    console.log(myDate.getHours())
    console.log(myDate.getMinutes())
    console.log(myDate.getSeconds())
    this.calendar1.value = [myDate.getFullYear(), myDate.getMonth(), myDate.getDay()]
    console.log(this.calendar1.value)
  },
  data () {
    return {
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
  }
}
</script>

<style scoped>

</style>
