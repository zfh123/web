<style scoped>

  body {
    background: #666570; /*-webkit-gradient(linear, 0 0, 0 top, from(#666570), to(#474653));*/
  }

  .page-layout-default li.nav-item{
    padding-top: .3rem;
  }
.right-menu{
  z-index:99999999;
  top:53px;
  height: calc(100vh - 53px);
  width: 50vw;
  left:100%;
  transition: all 0.3s;
  overflow-x: hidden;
  overflow-y: auto;
  border-left: 1px solid #bdbdbd;
  outline: none;
}
.right-menu.open{
  left:50%
}
.right-menu .nav-link{
  border-radius: 0 !important;
}
  .right-menu-list{
    height: calc(100% - 70px);
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
<template>
  <div class="page-layout-default">
    <!--头部标题栏/-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary " @dblclick.stop="toggleFullscreen">
      <a class="navbar-brand align-middle d-block" href="#" @click.prevent.stop="$router.replace('/default')">
        <img src="/assets/images/logo.png" width="30" height="30"/>
        <span v-text="$root.softName"></span>

      </a>
      <div class="navbar-nav-scroll">
        <ul class="navbar-nav bd-navbar-nav flex-row">
          <li>
            <span class="ml-1 mr-2 text-white">|</span>
            <span class="text-white" v-text="pageName"></span>
          </li>
        </ul>
      </div>

      <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <li>
          <keep-alive>
            <clock class="text-grey-3 ml-3"></clock>
          </keep-alive>
        </li>
        <li class="nav-item">
          <span class="pl-4 pr-4 text-white"></span>
        </li>

        <li class="nav-item">
          <div class="nav-link text-light-green pl-1 pr-1">
            <i class="material-icons">wifi</i>
          </div>
        </li>
        <li class="nav-item">
          <a class="btn btn-link text-white" href="#" @click.prevent.stop="rightMenu=!rightMenu">
            <i class="material-icons">notifications_none</i>
            <span class="badge badge-danger">1</span>

          </a>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'setting'}" class="btn btn-link text-white" href="#" >
            <i class="material-icons">settings</i>
          </router-link>
        </li>
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
    <!--/头部标题栏-->

    <!--程序主体/-->
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <!--/程序主体-->
    <div class="fixed-top right-menu bg-grey-4" :class="{open:rightMenu}" @mouseleave="rightMenu=false">
      <nav class="nav nav-pills nav-fill border border-primary mt-2 mb-2 ml-4 mr-4">
        <div class="nav-item nav-link" :class="{active:notifications=='today'}" @click.prevent.stop="notifications='today'">今天</div>
        <div class="nav-item nav-link" :class="{active:notifications=='all'}" @click.prevent.stop="notifications='all'">消息</div>
      </nav>
      <hr class="mt-2 mb-2">
      <div class="right-menu-list pl-2 pr-2 " v-show="notifications=='today'">
        <div class="card mb-2">
          <div class="card-header">
           线上订单
            <a href="#" class="float-right">更多</a>
          </div>
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">美团外卖订单<span class="badge badge-danger pt-1">待发货</span></h5>
                <small>1分钟前</small>
              </div>
              <p class="mt-1 mb-1"><b>西文东苑</b>的<b>张先生</b>购买了3件商品</p>
              <span>订单金额：￥33.0元</span>
              <span class="ml-2">配送费：5.0元</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">物恋便利订单<span class="badge badge-danger pt-1">待接单</span></h5>
                <small class="text-muted">1分钟前</small>
              </div>
              <p class="mt-1 mb-1"><b>西文东苑</b>的<b>张先生</b>购买了3件商品</p>
              <span>订单金额：￥33.0元</span>
              <span class="ml-2">配送费：5.0元</span>            </a>
          </div>

        </div>
        <div class="card mb-2">
          <div class="card-header">
            采购通知
            <a href="#" class="float-right">更多</a>
          </div>
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">自动入库</h5>
                <small>1分钟前</small>
              </div>
              <p class="mt-1 mb-1">您7月3日采购的￥3200商品已经完成入库</p>
              <span>配送员：张小飞</span>
              <span class="ml-2">电话：13333333333</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">订单状态提醒</h5>
                <small class="text-muted">1分钟前</small>
              </div>
              <p class="mt-1 mb-1">7月2号采购的￥1233.50元的订单已经开始拣货</p>
              <span>拣货员：王东</span>
               </a>
          </div>

        </div>
      </div>
      <div class="right-menu-list pl-2 pr-2 " v-show="notifications=='all'">
        <h5>今天</h5>
        <div class="card mb-2">
          <div class="card-header">
            线上订单
            <a href="#" class="float-right">更多</a>
          </div>
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">美团外卖订单<span class="badge badge-danger pt-1">待发货</span></h5>
                <small>1分钟前</small>
              </div>
              <p class="mt-1 mb-1"><b>西文东苑</b>的<b>张先生</b>购买了3件商品</p>
              <span>订单金额：￥33.0元</span>
              <span class="ml-2">配送费：5.0元</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">物恋便利订单<span class="badge badge-danger pt-1">待接单</span></h5>
                <small class="text-muted">1分钟前</small>
              </div>
              <p class="mt-1 mb-1"><b>西文东苑</b>的<b>张先生</b>购买了3件商品</p>
              <span>订单金额：￥33.0元</span>
              <span class="ml-2">配送费：5.0元</span>            </a>
          </div>

        </div>
        <h5>昨天</h5>
        <div class="card mb-2">
          <div class="card-header">
            采购通知
            <a href="#" class="float-right">更多</a>
          </div>
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">自动入库</h5>
                <small>1分钟前</small>
              </div>
              <p class="mt-1 mb-1">您7月3日采购的￥3200商品已经完成入库</p>
              <span>配送员：张小飞</span>
              <span class="ml-2">电话：13333333333</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">订单状态提醒</h5>
                <small class="text-muted">1分钟前</small>
              </div>
              <p class="mt-1 mb-1">7月2号采购的￥1233.50元的订单已经开始拣货</p>
              <span>拣货员：王东</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import clock from '../widget/clock/clock.vue';

  export default {
    name: "app-main",
    components: {clock},
    data() {
      return {
        showdefaultMenu: false,
        showRightMenu: false,
        right: null,
        timerID: null,
        pageName: '收银台',
        softMenu: [
          {
            label: '收银台',
            value: '收银台',
            icon: 'shopping_cart',
            backgroundColor: '#3f51b5',

          }, {
            label: '线上订单',
            value: '线上订单',
            icon: 'speaker_phone',
            backgroundColor: '#8bc34a'
          }, {
            label: '退货',
            value: '退货',
            icon: 'screen_share',
            backgroundColor: '#2196f3',
          }, {
            label: '会员',
            value: '会员',
            icon: 'contact_mail',
            backgroundColor: '#00bcd4',
            divider: true
          }, {
            label: '库存',
            value: '库存',
            icon: 'local_shipping',
            backgroundColor: '#03a9f4'
          }, {
            label: '盘点',
            value: '盘点',
            icon: 'phonelink',
            backgroundColor: '#4caf50'
          }, {
            label: '交接班',
            value: '交接班',
            icon: 'thumbs_up_down',
            backgroundColor: '#009688'
          }, {
            label: '报表',
            value: '报表',
            icon: 'equalizer',
            backgroundColor: '#cddc39'
          },
          {
            label: '系统设置',
            value: '系统设置',
            icon: 'settings',
            backgroundColor: '#006064'
          },
          {
            label: '使用帮助',
            value: '使用帮助',
            icon: 'help',
            backgroundColor: '#006064'
          }],
        rightMenu:false,
        notifications:'today',
        timeId: null
      }
    },
    computed: {},
    watch: {

    },
    created() {

    },
    mounted() {
    },
    methods: {
      showMenu() {
        this.showdefaultMenu = !this.showdefaultMenu
      },
      toggleFullscreen() {
        this.$appFrame.window.toggleKioskMode()
      },
      close() {
        this.$appFrame.window.close()
      }
    },
    beforeDestroy() {
    }
  }
</script>
