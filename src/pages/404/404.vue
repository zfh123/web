<template>
  <div class="error-page window-height bg-light">
    <div class="error-code bg-primary">
      404
    </div>
    <div class="error-card shadow-4 bg-white">

      <p class="caption text-center"><span class="grey-5 material-icons mr-3">error_outline</span> 哎呀. 这里啥都没...</p>
      <p class="text-center">
        <button class="btn btn-outline-primary btn-lg mr-3" @click="goBack" v-if="canGoBack">
          <span class="material-icons">keyboard_arrow_left</span>返回
        </button>
        <button class="btn btn-primary btn-lg" @click="goBack">
          <span class="material-icons">home</span>首页
        </button>
      </p>
    </div>
  </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {
        canGoBack: window.history.length > 1
      }
    },
    methods: {
      goBack() {
        window.history.go(-1)
      }
    }
  }
</script>
<style>
  .error-code {
    text-align: center;
    height: 50vh;
    font-size: 30vmax;
    color: rgba(255, 255, 255, .2);
  }

  .error-card {
    border-radius: 2px;
    margin-top: -50px;
    width: 80vw;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding: 25px;
  }

  .error-card > i {
    font-size: 5rem
  }
</style>
