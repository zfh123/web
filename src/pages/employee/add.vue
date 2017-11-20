<style scoped>
  .member-add {
    margin: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .setting-footer {
    background-color: #fff;
    border-top: 1px solid #ddd;
  }
</style>
<template>
  <div class="member-add m-3">
    <form>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">员工编号</div>
          <input class="form-control" placeholder="请输入编号。如1001">
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">登录密码</div>
          <input class="form-control" placeholder="登录密码" v-model="memberMobile">
        </div>
      </div>
      <hr>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">员工姓名</div>
          <input class="form-control" placeholder="姓名" v-model="memberName">
          <select class="custom-select form-control full-width">
            <option selected>请选择性别</option>
            <option value="1">男性</option>
            <option value="1">女性</option>
          </select>

        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">员工手机</div>
          <input class="form-control" placeholder="手机" v-model="memberMobile">
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">员工生日</div>
          <flat-pickr
            v-model="date"
            placeholder="Select date"
            :config="config"
            :required="true"
            class="form-control bg-white"
            name="date">
          </flat-pickr>
        </div>
      </div>
      <div class="form-group">
        <textarea rows="10" class="form-control" placeholder="备注"></textarea>
      </div>
    </form>
    <div class="setting-footer d-flex p-3">
      <button type="button" class="btn btn-md w-25 btn-primary">保存</button>
      <button type="button" class="ml-auto mr-2 btn btn-secondary  btn-md w-25">取消</button>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['keyword'],
    data() {
      return {
        memberName: '',
        memberMobile: '',
        date: new Date(),
        // Get more form https://chmln.github.io/flatpickr/options/
        config: {
          wrap: true, // set wrap to true when using 'input-group'
          altInput: false,
          dateFormat: "Y-m-d",
          enableTime: false,
          locale: this.$flatpickrLang
        },
      }
    },
    watch: {},
    created() {

    },
    mounted() {
      if (this.keyword && this.keyword.length === 11) {
        this.memberMobile = this.keyword;
      } else {
        this.memberName = this.keyword;
      }
      setTimeout(function () {
        $('.modal-member-add input:eq(1)').focus()
      }, 0)
    },
    methods: {
      memberRegister(callback) {
        this.$http.post('/api-server/member/' + this.memberMobile, {
          mobile: this.memberMobile,
          nickname: this.memberName
        }).then(function (response) {
          if (response.status !== 200) {
            throw new Error(response)
          }
          if (response.data === undefined) {
            throw new Error(response)
          }
          typeof callback === 'function' && callback(response.data)
        }.bind(this), function (response) {
          throw new Error(JSON.stringify(response));
        }.bind(this));
      },
    }
  }
</script>
