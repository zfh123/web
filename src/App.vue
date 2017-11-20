<style>
  .toast-list {
    position: fixed;
    top: 40vh;
    left: 20px;
    right: 20px;
    text-align: center;
    z-index: 1073;
  }

</style>
<template>
  <!-- Don't drop "q-app" class -->
  <div>
    <router-view/>
    <div class="toast-list">
      <template v-for="(t,index) in toastList">
        <v-toast :value="t" @close="closeToasts(index)"></v-toast>
      </template>
      <v-toast :value="toastItem" @close="closeToast"></v-toast>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    data() {
      return {
        toastList: [],
        toastItem: null
      }
    },
    methods: {
      toast(opt) {
        this.toastItem = {
          type: opt.type || 'info',
          content: opt.content,
          showClose: opt.showClose || false,
          time: opt.time || 3000
        }
      },
      toasts(opt) {
        this.toastList.push({
          type: opt.type || 'info',
          content: opt.content,
          showClose: opt.showClose || false,
          time: opt.time || 3000
        })
      },
      closeToasts(index){
        this.toastList.splice(index,1)
      },
      closeToast(){
        this.toastItem = null
      }
    },
    created() {
      Vue.prototype.$toast = this.toast;
      Vue.prototype.$toasts = this.toasts;
    }
  }
</script>

<style></style>
