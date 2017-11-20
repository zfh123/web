<template>
  <div class="container-fluid p-3">
    <div class="card">
      <div class="card-header">
        <h5 class="m-0">门店资料<a class="float-right ml-4 btn-sm btn btn-outline-primary" href='#'>编辑</a></h5>
      </div>
      <div class="list-group list-group-flush">
        <div class="list-group-item">
          <div class="row align-items-center">
            <div class="col-3">
              <h6 class="m-0 text-right">工商注册名</h6>
            </div>
            <div class="col-9">
              <h6 class="text-primary m-0">杭州拱墅区千品万安商贸公司</h6>
            </div>
          </div>
        </div>
        <div class="list-group-item">
          <div class="row align-items-center">
            <div class="col-3">
              <h6 class="m-0 text-right">工商字号</h6>
            </div>
            <div class="col-9">
              <h6 class="text-primary m-0">五福便民店</h6>
            </div>
          </div>
        </div>
        <div class="list-group-item">
          <div class="row align-items-center">
            <div class="col-3">
              <h6 class="m-0 text-right">营业时间</h6>
            </div>
            <div class="col-9">
              <h6 class="text-primary m-0">24小时</h6>
            </div>
          </div>
        </div>
        <div class="list-group-item">
          <div class="row align-items-center">
            <div class="col-3">
              <h6 class="m-0 text-right">门店电话</h6>
            </div>
            <div class="col-9">
              <h6 class="text-primary m-0">0571-88888888</h6>
            </div>
          </div>
        </div>
        <div class="list-group-item">
          <div class="row align-items-center">
            <div class="col-3">
              <h6 class="m-0 text-right">门店地址</h6>
            </div>
            <div class="col-9">
              <h6 class="text-primary m-0">浙江省杭州市拱墅区杭玻路95号</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        <h5 class="m-0">账户信息</h5>
      </div>
      <div class="list-group list-group-flush">
        <div class="list-group-item">
          <div class="row align-items-center">
            <div class="col-3">
              <h6 class="m-0 text-right">门店类型</h6>
            </div>
            <div class="col-9">
              <h6 class="text-primary m-0">标准单店版<a class="ml-4 btn-sm btn btn-warning" href='#'>升级</a></h6>
              <!--
              非加盟店有以下类型：
                标准普及版
                标准连锁版
              加盟店：
                "物恋便利"加盟店
              -->
            </div>
          </div>
        </div>
        <div class="list-group-item">
          <div class="row align-items-center">
            <div class="col-3">
              <h6 class="m-0 text-right">云店</h6>
            </div>
            <div class="col-9">
              <h6 class="m-0">有效期至：<span class="ml-2 text-primary">2017-07-07 08:08:08</span> <a
                class="ml-4 btn-sm btn btn-warning" href='#'>续费</a></h6>
            </div>
          </div>
        </div>
        <div class="list-group-item">
          <div class="row align-items-center">
            <div class="col-3">
              <h6 class="m-0 text-right">手机短信</h6>
            </div>
            <div class="col-9">
              <h6 class="m-0">可用<span class="ml-2 text-primary">0</span>条 <a class="ml-4 btn-sm btn btn-warning"
                                                                             href='#'>充值</a></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        <h5 class="m-0">账户安全</h5>
      </div>
      <div class="list-group list-group-flush">
        <div class="list-group-item">
          <div class="row align-items-center">
            <div class="col-6">
              <h6 class="mb-1 text-primary">登录密码</h6>
              <small>经常的修改密码便于保证账户的安全。</small>
            </div>
            <div class="col-6 text-right">
              <button class="btn btn-outline-primary">修改密码</button>
            </div>
          </div>
        </div>
        <div class="list-group-item">
          <div class="row align-items-center">
            <div class="col-6">
              <h6 class="mb-1 text-primary">手机绑定</h6>
              <small>绑定手机有助于提高您账户的安全级别。</small>
            </div>
            <div class="col-6 text-right">
              当前绑定：<span class="ml-2 text-primary">134****8888</span><button class="ml-4 btn btn-outline-primary">更换手机</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {

    data() {
      return {
        toggle: !0,
      }
    },
    computed: {},
    watch: {},
    created() {

    },
    mounted() {

    },
    methods: {},
    beforeDestroy() {
    }
  }
</script>
