<style scoped>
  .clock {
    border-radius: 3px;
    text-align: center;
  }

  .date {
    display: inline-block;
    font-size: 14px;
  }

  .date .day {
    font-size: 12px;

  }

  .date .week span:last-child {
    margin-left: 5px;

  }

  .time {
    display: inline-block;
    letter-spacing: 0.05em;
    font-size: 35px;
    line-height: 35px;
    text-align: right;
    padding: 0;
    font-weight: 300;
  }
</style>
<template>
  <div class="clock">
    <div class="date hidden-xs">
      <div class="day" v-text="day"></div>
      <div class="week">
        <span v-text="todayWeek"></span>
        <span v-text="hours"></span>
      </div>
    </div>
    <div class="time" v-html="time"></div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        time: '00:00',
        day: '',
        week: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        todayWeek: '',
        hours: '  ',
        hour: '',
        timeId: null
      }
    },
    watch: {
      hour(newVal) {
        console.info('computed hour');
        if (newVal < 6) {
          this.hours = "凌晨";
        } else if (newVal < 9) {
          this.hours = "早上"
        } else if (newVal < 12) {
          this.hours = "上午"
        } else if (newVal < 14) {
          this.hours = "中午"
        } else if (newVal < 17) {
          this.hours = "下午"
        } else if (newVal < 19) {
          this.hours = "傍晚"
        } else {
          this.hours = "晚上"
        }
      }
    },
    created() {
      this.updateTime();
      this.timeId = setInterval(this.updateTime, 1000);
    }
    ,
    methods: {
      updateTime() {

        let cd = new Date()
        this.todayWeek = this.week[cd.getDay()]
        this.hour = cd.getHours();
        this.time = this.zeroPadding(cd.getHours(), 2) + (cd.getSeconds() % 2 == 0 ? '<span>:</span>' : '<span style="color: transparent">:</span>') + this.zeroPadding(cd.getMinutes(), 2);
        this.day = cd.getFullYear() + '年' + this.zeroPadding(cd.getMonth() + 1, 2) + '月' + this.zeroPadding(cd.getDate(), 2) + '日 ';
        cd = null;
      }
      ,
      zeroPadding(num, digit) {
        let zero = '';
        for (let i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      }
    },
    beforeDestroy() {
      this.timeId && window.clearInterval(this.timeId)
    }
  }
</script>
