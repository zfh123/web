<style scoped>
  .page-layout-manage > header{
    height: 57px;
  }
  .page-manage-body {
    position: relative;
    height: calc(100vh - 99px);
    overflow: auto;
  }

  .page-manage-title {
    position: absolute;
    left: 16.66667%;
    top: .7rem;
  }

  header.navbar .navbar-nav a {
    font-size: 1.2rem;
  }

  .dropdown {
    cursor: pointer;
  }
  .navbar-nav-scroll a{
    border-bottom: 2px solid transparent;

  }
  .navbar-nav-scroll a.active {
    border-bottom-color: #fff;
  }
  .help-panel {
    z-index: 1040;
    top: 57px;
    height: calc(100vh - 57px);
    width: 50vw;
    left: 100%;
    transition: all 0.3s;
    overflow-x: hidden;
    overflow-y: auto;
    border-left: 1px solid #bdbdbd;
    outline: none;
    background-color: #fff;
  }
  .help-panel.open {
    left: 50%
  }
  .help-list{
    height: calc(100% - 165px);
    overflow-x: hidden;
    overflow-y: auto;
  }
  .help-list h6{
    font-weight: 700;
  }
</style>
<template>
  <div class="page-layout-manage bg-grey-2 " @click.stop="showPersonalMenu=false;showStoreMenu=false">
    <header class="navbar navbar-expand navbar-dark flex-column flex-md-row fixed-top bg-primary">
      <div class="navbar-brand mr-4">
        <img src="/assets/images/logo.png" width="33.5" height="33.5"/>
        <h5 class="dropdown  d-inline-block " :class="{'show':showStoreMenu}">
          <span class="dropdown-toggle ml-2 text-white" @click.prevent.stop="showStoreMenu=!showStoreMenu">
            某某某门店
          </span>
          <div class="dropdown-menu dropdown-menu-right" :class="{show:showStoreMenu}">
            <a class="dropdown-item active" href="//">某某某门店1</a>
            <a class="dropdown-item" href="/">某某某门店2</a>
          </div>
        </h5>
      </div>

      <div class="navbar-nav-scroll">
        <ul class="navbar-nav bd-navbar-nav flex-row">
          <li class="nav-item">
            <router-link class="nav-link "
                         to="/"
                         :class="{'active':$route.name.indexOf('manage_default') !==-1,}">概况
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">销售</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="/goods"
                         :class="{'active':$route.name.indexOf('manage_goods') !==-1}">商品
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/stocks"
                         :class="{'active':$route.name.indexOf('manage_stocks') !==-1,}">库存
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/member"
                         :class="{'active':$route.name.indexOf('manage_member') !==-1,}">会员
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">营销
            </a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/employee"
                         :class="{'active':$route.name.indexOf('manage_employee') !==-1,}">员工
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/purchase"
                         :class="{'active':$route.name.indexOf('manage_purchase') !==-1,}">货品
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/online-store"
                         :class="{'active':$route.name.indexOf('manage_online_store') !==-1,}">云店
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/finance"
                         :class="{'active':$route.name.indexOf('manage_finance') !==-1,}">财务
            </router-link>
          </li>
        </ul>
      </div>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown" :class="{'show':showPersonalMenu}">
          <a class="nav-item nav-link dropdown-toggle mr-md-2" href="#"
             @click.prevent.stop="showPersonalMenu=!showPersonalMenu">
            朱芳芳
          </a>
          <div class="dropdown-menu dropdown-menu-right" :class="{show:showPersonalMenu}">
            <router-link class="dropdown-item" to="/setting/account">账号管理</router-link>
            <router-link class="dropdown-item" to="/passport/login-out">退出登录</router-link>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/setting"><i class="material-icons">settings</i></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent.stop="helpPanel=!helpPanel"><i class="material-icons">help</i></a>
        </li>
      </ul>
    </header>
    <div class="row no-gutters" style="padding-top: 57px">
      <div class="col-12">
        <nav>
          <ol class="breadcrumb mb-0">
            <template v-for="(nav,index) in $route.matched">
              <li class="breadcrumb-item" :class="{active:index===$route.matched.length}">
                <a href="#" @click.prevent.stop="$router.push(nav.path==''?'/':nav.path)" v-if="index!==$route.matched.length-1" v-text="nav.meta.title"></a>
                <template v-if="index===$route.matched.length-1">
                  {{$route.meta.title}}
                </template>
              </li>
            </template>
          </ol>
        </nav>
        <hr class="m-0">
      </div>
      <div class="col-2 bg-white">
        <leftMenu></leftMenu>
      </div>

      <div class="col-10 page-manage-body">
        <router-view></router-view>
      </div>
    </div>
    <div class="help-panel fixed-top"  :class="{open:helpPanel}" @mouseleave="helpPanel=false">
      <div class="modal-header">
        <h5 class="m-0">使用帮助 </h5>
        <button class="btn btn-sm btn-info float-right">人工客服</button>
      </div>
      <div class="alert alert-warning m-3">
        了解这些技巧，能有效的提高您的效率。<br>如需进一步帮助，可使用"人工客服"或致电4006699008获取
      </div>
      <ol class="help-list m3">
        <li v-for="i in 20">
          <h6>一些标题一些标题一些标题一些标题一些标题</h6>
          <p>一些内容一些内容一些内容一些内容一些内容一些内容一些内容一些内容一些内容一些内容一些内容一些内容一些内容一些内容一些内容一些内容一些内容一些内容一些内容</p>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
  import leftMenu from '../pages/left-menu.vue'

  export default {
    components: {leftMenu},

    data() {
      return {
        showPersonalMenu: false,
        showStoreMenu: false,
        helpPanel:false
      }
    },
    watch: {
      "$route"(v) {
        console.info(v)
      }
    },
    created() {
      console.info(this.$route.matched)
    },
    methods: {
      aaaa(e) {
        debugger
      }
    },
    beforeDestroy() {
    }
  }
</script>
