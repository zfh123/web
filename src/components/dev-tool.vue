<template>
  <div class="text-xs-center" style="display: none !important">
  <v-bottom-sheet v-model="showDev">
    <v-btn slot="activator" class="purple" dark>Click me</v-btn>
    <v-card class="dev-tool elevation-0 py-5 grey lighten-3" @hotKey_system___showDev="showDev=true">
      <v-card-text>
        <v-btn outline class="indigo--text" @click.stop="playAudio">播放声音</v-btn>
        <v-btn outline class="indigo--text" @click.stop="ShowDevTools">ShowDevTools</v-btn>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showDev: false
      }
    },
    methods: {
      /**
       * 播放申请
       * @param type 可选值：newOrder warning notification
       * @param count int 播放次数，默认1
       */
      playAudio(type, count) {
        type = type || 'newOrder';


      }
    }
  }
</script>
