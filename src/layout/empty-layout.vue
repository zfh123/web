<style>
  .page-layout-empty .navbar{
    padding-top: 0 !important;
    padding-left: 0 !important;
    padding-bottom: 0 !important;
  }
  .page-layout-empty .navbar h3{
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    top: 0;
    bottom: 0;
    line-height: 3.7rem;
    z-index:0
  }
  .page-layout-empty .navbar a.navbar-brand{
    padding: 0 1.3rem;
    line-height: 3.8rem;
    border-right:1px solid #1e88e5;
    background-color: rgba(0,0,0,0.15);
    position: relative;
    z-index:1
  }
  .page-layout-empty .navbar a.navbar-brand:hover{
    background-color: rgba(0,0,0,0.25);
  }
  .page-layout-empty .navbar .navbar-nav{
    position: relative;
    z-index: 1;
  }
</style>
<template>
  <div class="page-layout-empty" :class="!$root.transition?'disabled-transitions':''">
    <router-view></router-view>
  </div>
</template>
<script>

  export default {
    created() {

    }
  }
</script>
