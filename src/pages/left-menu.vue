<style scoped>
  .left-menu {
    border-right: 1px solid rgba(0, 0, 0, 0.125)
  }

  .left-menu .menu-list {
    overflow: auto;
  }

  .left-menu .list-group .list-group-item {
    border-right: none;
    border-left: none;
    font-weight: bold;
  }

  .left-menu .list-group .list-group-item:first-child,
  .left-menu .list-group .list-group-item:last-child {
    border-radius: inherit;
  }

  .left-menu .list-group .list-group-item-action {
    font-weight: 100 !important;
  }

  .child-menu {
    position: relative;
    top: -1px;
    background-color: #fff;
    font-size: .9rem;
    transition: all 0.21s ease;
  }

  .child-menu .nav-link {
    padding-left: 1rem;
    color: #000000;
  }

  .nav-link.router-link-active {
    background-color: #007bff;
    color: #fff;
  }
  .router-link-active .badge-danger{
    background-color: #fff;
    color: #dc3545;
  }
</style>
<template>
  <div class="left-menu window-height bg-grey-2">
    <div class="menu-list">
      <div class="list-group full-width">
        <template v-if="$route.name.indexOf('manage_goods') ===0">
          <router-link class="nav-link"
                       to="/goods/list">商品资料
          </router-link>
          <router-link class="nav-link"
                       to="/goods/add">新增商品
          </router-link>
          <router-link class="nav-link"
                       to="/goods/import">批量导入
          </router-link>
          <router-link class="nav-link"
                       to="/goods/catalogue">商品分类
          </router-link>
          <router-link class="nav-link"
                       to="/goods/unit">常用单位
          </router-link>
        </template>
        <template v-if="$route.name.indexOf('manage_member') ===0">
          <router-link class="nav-link"
                       to="/member/list">会员列表
          </router-link>
          <router-link class="nav-link"
                       to="/member/add">添加会员
          </router-link>
          <router-link class="nav-link"
                       to="/member/level">会员等级
          </router-link>
          <router-link class="nav-link"
                       to="/member/statistics/recharge">#2会员报表
          </router-link>
          <router-link class="nav-link"
                       to="/member/analysis">#2会员分析
          </router-link>
        </template>
        <template v-if="$route.name.indexOf('manage_stocks') ===0">
          <router-link class="nav-link"
                       to="/stocks/list">库存查询
          </router-link>
          <router-link class="nav-link"
                       to="/stocks/warning">库存告警
          </router-link>
          <router-link class="nav-link"
                       to="/stocks/change-history">变动明细
          </router-link>
          <router-link class="nav-link"
                       to="/stocks/inventory">商品盘点
          </router-link>
          <router-link class="nav-link"
                       to="/stocks/damaged">商品报损
          </router-link>
        </template>
        <template v-if="$route.name.indexOf('manage_employee') ===0">
          <router-link class="nav-link"
                       to="/employee/list">员工列表
          </router-link>
          <router-link class="nav-link"
                       to="/employee/add">添加员工
          </router-link>
          <router-link class="nav-link"
                       to="/employee/role">#2角色管理
          </router-link>
        </template>
        <template v-if="$route.name.indexOf('manage_purchase') ===0">
          <router-link class="nav-link"
                       to="/purchase/vendor">供应商
          </router-link>
          <router-link class="nav-link"
                       to="/purchase/apply">#2订货申请
          </router-link>
          <router-link class="nav-link"
                       to="/purchase/invoice">进货单
          </router-link>
          <router-link class="nav-link"
                       to="/vendor">#2进货明细
          </router-link>
          <router-link class="nav-link"
                       to="/vendor">#2供应商结算
          </router-link>
          <router-link class="nav-link"
                       to="/vendor">#2进货分析
          </router-link>
        </template>
        <template v-if="$route.name.indexOf('manage_online_store') ===0">
          <router-link class="nav-link"
                       to="/online-store/order">云店订单 <span class="badge badge-danger">9</span>
          </router-link>
          <router-link class="nav-link"
                       to="/online-store/refund">退款申请 <span class="badge badge-danger">9</span>
          </router-link>
          <router-link class="nav-link"
                       to="/online-store/goods">商品管理
          </router-link>
          <router-link class="nav-link"
                       to="/online-store/catalogue">分类管理
          </router-link>
          <router-link class="nav-link"
                       to="/online-store/setting">云店设置
          </router-link>
        </template>
        <template v-if="$route.name.indexOf('manage_setting') ===0">
          <router-link class="nav-link"
                       to="/setting/account">账户管理
          </router-link>
          <router-link class="nav-link"
                       to="/setting/setting">门店设置
          </router-link>
          <router-link class="nav-link"
                       to="/setting/price-tag">价签设置
          </router-link>
          <router-link class="nav-link"
                       to="/setting/notice">#2门店通知
          </router-link>
          <router-link class="nav-link"
                       to="/setting/screen-ads">#2副屏广告
          </router-link>
          <router-link class="nav-link"
                       to="/setting/logs">操作日志
          </router-link>
        </template>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: "leftMenu",
    data() {
      return {
        childMenu: ''
      }
    },
    computed: {},
    watch: {},
    created() {

    },
    mounted() {

    },
    methods: {
      showMenu(e) {

      }
    },
    beforeDestroy() {

    }
  }
</script>
