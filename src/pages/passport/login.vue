<style  scoped>
  .page-login{box-shadow: 0px 0px 3px rgba(0,0,0,.5);width: 800px}
  .page-login > .row > .col-7{
    height: 100vh;
  }
</style>
<template>
  <div class="container page-login bg-white">
    <div class="row">
      <div class="col-5 text-center bg-blue text-white" style="position: relative;">
        <img width="72" class="mt-5 pt-5" src="/assets/images/logo.png"/><br>
        <div>零售宝</div>
        <hr class="mt-2 mb-2">
        <div class="text-blue-2">为新零售量身定制</div>
        <div class="text-blue-2 mt-2"><i class="material-icons">phone</i>4006699008</div>
        <div class="copyright">物恋科技</div>
      </div>
      <div class="col-7">
        <form class="pt-5 mt-3">
          <div class="form-group">
            <label>用户名/手机号码</label>
            <input class="form-control" v-model="username" placeholder="请输入用户名/手机号码" autofocus required>
          </div>
          <div class="form-group">
            <label>登录密码</label>
            <input type="password" class="form-control" v-model="password" placeholder="请输入密码" required>
          </div>
          <div class="form-row">
            <div class="col-6">
              <div class="form-check">
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">记住登录</span>
                </label>
              </div>
            </div>
            <div class="col-6 text-right">
              <button class="btn btn-primary btn-md" @click="login" type="button">登录</button>
            </div>
          </div>
          <div class="form-row">
            <div class="col-6">
              <router-link to="/passport/register" class="link">免费注册</router-link>

            </div>
            <div class="col-6 text-right">
              <a class="link" href="http://wlw-b2c-temp.oss-cn-hangzhou.aliyuncs.com/soft/webview.apk">找回密码</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'

  import {mapState, mapActions} from 'vuex'
  import {USER_LOGIN} from '@/store/user'
  import store from '../../store/'

  export default {
    name: "page-login",
    components: {},
    data() {
      return {
        modal: false,
        pageName: "登录",
        valid: false,
        username: '',
        password: '',
        rememberPassword: false,
        timeId: null,
        active: 0,
        showChangeStore: false // 如果有多个门店
      }
    },
    watch: {},
    computed: {
      ...mapState({user: state => state.user}),
    },
    created() {
    },
    mounted() {
    },
    methods: {
      ...mapActions([USER_LOGIN]),
      autofocus(type) {
        if (!this.username) {
          return type === 'username' ? true : false
        }
        if (!this.password) {
          return type == 'password' ? true : false
        }
      },
      login() {
        // 同步提交
        this.showChangeStore = true;
        let loginData = {
          token: 1234567
        }
        if (this.username) {
          loginData.isBoss = true
        }
        store.commit('USER_LOGIN', loginData);
        store.commit('BUSINESS_UPDATE', {
          id: '57100001'
        });
        this.$router.replace('/');
      }

    },
    beforeDestroy() {

    }

  }
</script>
<style scoped>


  .page-login .link {
    color: #757575;
    line-height: 40px;
    text-decoration: none;
  }

  .page-login .link:hover {
    color: #01579b;
    line-height: 40px;
    text-decoration: none;
  }

  .page-login .absolute-top-right {
    position: absolute;
    right: .5rem;
    top: .5rem
  }

  .copyright {
    position: absolute;
    bottom: 2rem;
    width: 100%;
    left: 0;
    text-align: center;
  }
</style>
