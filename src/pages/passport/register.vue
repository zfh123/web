<style scoped>
  .page-register{box-shadow: 0px 0px 3px rgba(0,0,0,.5);width: 800px;position: relative}
  .page-register > .row > .col-7{
    height: 100vh;
  }
</style>
<template>
  <div class="container  page-register">
    <div class="row">
      <div class="col-5 bg-blue text-center text-white">
        <img width="72" class="mt-5 pt-5" src="/assets/images/logo.png"/><br>
        <div class="text-white">免费注册</div>
        <hr class="mt-2 mb-2">
        <div class="text-blue-2">完全免费，收银就是这么简单</div>
        <div class="text-blue-2 mt-2"><i class="material-icons">local_phone</i>4006699008</div>
        <div class="copyright">物恋科技</div>
      </div>
      <div class="col-7 pt-5">

        <ul class="nav nav-pills nav-fill step step-arrow">
          <li class="nav-item" :class="{active:step=='step-1'}">
            <a>注册门店账号</a>
          </li>
          <li class="nav-item" :class="{active:step=='step-2'}">
            <a>完善店铺信息</a>
          </li>
        </ul>
        <div v-show="step=='step-1'">
          <div class="pt-3">
            <div class="form-group">
              <label>手机号码</label>
              <div class="input-group">
                <input class="form-control" v-model="store.mobile" autofocus placeholder="请输入手机号">
                <div class="input-group-btn">
                  <button class="btn  btn-outline-primary" type="button" :disabled="store.mobile.length!==11">获取验证码
                  </button>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>短信验证码</label>
              <input type="password" class="form-control" v-model="store.mobileCode" placeholder="短信验证码" required>
            </div>
            <div class="form-group">
              <label>账号密码</label>
              <input type="text" class="form-control" v-model="store.password" placeholder="请输入密码" required>
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-md" @click="step='step-2'">下一步</button>
              <button class="btn btn-link btn-md" @click="back">取消注册</button>
            </div>
          </div>
        </div>
        <div v-show="step=='step-2'">
          <div class="pt-3 pb-3">
            <div class="form-group">
              <label>工商注册名</label>
              <input class="form-control" v-model="store.fullName" autofocus placeholder="请输入营业执照上的注册名称" required>
            </div>
            <div class="form-group">
              <label>字号</label>
              <input type="password" class="form-control" v-model="store.nickName" placeholder="请输入招牌/门头上的名称，门店简称"
                     required>
            </div>
            <div class="form-group">
              <label>联系电话</label>
              <input class="form-control" v-model="store.tel" placeholder="请输入门店的联系电话/手机" required>
            </div>
            <div class="form-group">
              <label>联系地址</label>
              <div class="form-row">
                <div class="col-4">
                  <select class="custom-select d-block" required>
                    <option value="">请选择省</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-4">
                  <select class="custom-select d-block" required>
                    <option value="">请选择市</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-4">
                  <select class="custom-select" required>
                    <option value="">请选择区县</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>详细地址</label>
              <input class="form-control" v-model="store.tel" placeholder="请输入街道/门牌号" required>
            </div>
            <div class="form-group">
              <label>上传营业执照</label>
              <label class="form-control custom-file">
                <input type="file" id="file2" class="custom-file-input">
                <span class="custom-file-control"></span>
              </label>
            </div>
            <hr>
            <div class="form-group">
              <button class="btn btn-primary btn-md" @click="register">免费注册</button>
              <button class="btn btn-link btn-md" @click="step='step-1'">上一步</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions} from 'vuex'
  import {USER_LOGIN} from '@/store/user'

  export default {
    name: "page-register",
    components: {},
    data() {
      return {
        pageName: "免费注册",
        provinceOptions: [{label: '请选择', value: ''}, {label: '浙江省', value: '1'}],
        cityOptions: [{label: '请选择', value: ''}, {label: '杭州市', value: '1'}],
        countyOptions: [{label: '请选择', value: ''}, {label: '拱墅区', value: '1'}],
        timeId: null,
        step: 'step-1',
        store: {
          mobile: '',
          mobileCode: '',
          password: '',
          province: '',
          city: '',
          county: '',
          address: '',
          fullName: '',
          nickName: '',
          tel: ''
        }
      }
    },
    watch: {},
    computed: {
      ...mapState({user: state => state.user})
    },
    created() {
    },
    mounted() {
    },
    methods: {
      ...mapActions([USER_LOGIN]),
      toggleKioskMode() {
        this.$root.toggleKioskMode()
      },
      back() {
        this.$router.back()
      },
      checkUploadFile(files) {
        if (files.length > 0) {
          let file = files[0];
          if (file.type.indexOf('image/') < 0) {
            this.$root.$emit('toasts', {
              timeout: 2000,
              top: true,
              context: 'error',
              mode: 'vertical',
              text: '营业执照只允许上传图片！',
              show: true
            });
            return
          }

          if (file.size > 5000 * 1024) {
            this.$root.$emit('toasts', {
              timeout: 2000,
              top: true,
              context: 'error',
              mode: 'vertical',
              text: '上传的图片不能大于5M！',
              show: true
            });
            return
          }


        }
      },
      register(e) {
        this.USER_LOGIN({
          token: 1234567
        });
        this.$router.replace('/default');
      }
    },
    beforeDestroy() {

    }
  }
</script>
<style scoped>
  .page-register .absolute-top-right {
    position: absolute;
    right: .5rem;
    top: .5rem
  }

  .page-register .absolute-top-left {
    position: absolute;
    left: .5rem;
    top: .5rem
  }

  .page-register .link {
    color: #757575;
    line-height: 40px;
    text-decoration: none;
  }

  .page-register .link:hover {
    color: #01579b;
    line-height: 40px;
    text-decoration: none;
  }

  .page-register .custom-select {
    width: 100%;
  }

  .copyright {
    position: absolute;
    bottom: 2rem;
    width: 100%;
    left: 0;
    text-align: center;
  }

  .step {
    counter-reset: flag;
  }

  .step li {
    position: relative;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }

  .step li a {
    padding: 10px 15px;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }

  .step li a:before {
    content: counter(flag);
    counter-increment: flag;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }

  .step li a:after {
    content: "";
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }

  .step-arrow {
    margin: 0;
  }

  .step-arrow.unhover li a:hover,
  .step-arrow.unhover li a:focus {
    background-color: #f6f6f6;
    color: #444444;
  }

  .step-arrow.unhover li a:hover:before,
  .step-arrow.unhover li a:focus:before {
    background-color: #d2d2d2;
    color: #ffffff;
  }

  .step-arrow.unhover li:not(:last-child) a:hover:after,
  .step-arrow.unhover li:not(:last-child) a:focus:after {
    background-color: #f6f6f6;
  }

  .step-arrow li {
    padding-right: 20px;
  }

  .step-arrow li:last-child {
    padding-right: 0;
  }

  .step-arrow li:nth-child(n+2) a {
    margin-left: -20px;
    border-radius: 0;
  }

  .step-arrow li:not(:last-child) a:after {
    position: absolute;
    top: 0px;
    right: -1px;
    width: 40px;
    height: 40px;
    transform: scale(0.707) rotate(45deg);
    z-index: 1;
    background-color: #f6f6f6;
    border-radius: 0 5px 0 50px;
    border-top: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
    box-sizing: content-box;
  }

  .step-arrow li:not(:last-child) a:hover:after {
    background-color: #00b8f5;
  }

  .step-arrow li a {
    border-radius: 0;
    color: #444444;
    background-color: #f6f6f6;
    display: block;
  }

  .step-arrow li a:hover {
    background-color: #00b8f5;
    color: #ffffff;
  }

  .step-arrow li a:hover:before {
    background: #ffffff;
    color: #00b8f5;
  }

  .step-arrow li a:before {
    position: absolute;
    z-index: 2;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 20px;
    left: 1rem;
    font-weight: bold;
    font-size: 1rem;
    overflow: hidden;
    top: 10px;
    background: #d2d2d2;
    color: #ffffff;
  }

  .step-arrow li.active a:before {
    background: #ffffff;
    color: #00b8f5;
  }

  .step-arrow li.active a:after {
    background-color: #00b8f5;
  }

  .step-arrow li.active a,
  .step-arrow li.active a:hover {
    background-color: #00b8f5;
    color: #ffffff;
  }

  .step-arrow li.active a:before,
  .step-arrow li.active a:hover:before {
    background-color: #ffffff;
    color: #00b8f5;
  }

  .step-arrow li.active a:after,
  .step-arrow li.active a:hover:after {
    background-color: #00b8f5 !important;
  }

</style>
