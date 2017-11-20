<template>
  <audio :src="src" autoplay @ended="ended" @player="player" @onload="play"></audio>
</template>
<script>
  export default {
    data() {
      return {
        src: null,
        maxCount: 1,
        playCount: 0
      }
    },
    computed: {},
    watch: {
      playCount(newVal) {
        if (newVal === this.maxCount) {
          this.src = ''
          this.paused()
        } else {
          this.play()
        }
      }
    },
    created() {
      this.src = this.getSrc(this.msgType)
    },
    mounted() {
      this.play()
    },
    methods: {
      getSrc(type) {
        this.playCount = 0;
        switch (type) {
          case "newOrder":
            this.src = this.$appConfig.newOrder;
            break;
          case "warning":
            this.src = this.$appConfig.warning;
            break;
          case "notification":
            this.src = this.$appConfig.notification;
            break;
          case "online":
            this.src = this.$appConfig.online;
        }
      },
      player(e) {
        if (!e.params && !e.params.type) {
          throw new Error('播放声音组建错误：缺少参数')
        }
        e.params.type && this.getSrc(e.params.type);
        e.params.maxCount = e.params.count || 1;
        this.play()
      },
      play() {

        this.$el.play();

      },
      paused() {
        this.$el.pause()
      },
      ended() {
        this.playCount++
      }
    }
  }
</script>
