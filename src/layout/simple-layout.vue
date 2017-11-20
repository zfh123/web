<style>

</style>
<template>
  <div class="page-layout-simple">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary " @dblclick.stop="toggleFullscreen">
      <a class="navbar-brand align-middle d-block" href="#" @click.prevent.stop="back">
        <span class="material-icons">chevron_left</span>返回
      </a>
      <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <li class="nav-item">
          <span class="pl-4 text-white"></span>
        </li>
        <li class="nav-item">
          <a class="btn btn-link text-white" href="#">
            <i class="material-icons">remove</i>
          </a>
        </li>
        <!--
        <li class="nav-item">
          <a class="btn nav-item nav-link" href="#">
            <i class="material-icons">crop_3_2</i>
          </a>
        </li>
        -->
        <li class="nav-item">
          <a class="btn btn-link text-white" href="#" @click.prevent.stop="close">
            <i class="material-icons">clear</i>
          </a>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>

  export default {
    created() {

    },
    aaa:{
      back(){
        debugger
        if(this.$route.path==''){

        }else{
          $router.back()
        }
      }
    }
  }
</script>
