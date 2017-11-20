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
          <div class="input-group-addon">会员卡号</div>
          <input class="form-control" placeholder="请输入卡号">
          <div class="input-group-btn">
            <button class="btn btn-secondary" type="button">生成</button>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">会员等级</div>
          <select class="custom-select form-control full-width">
            <option selected>请选择</option>
            <option value="1">普通会员</option>
            <option value="1">银卡会员</option>
            <option value="2">金卡会员</option>
            <option value="3">铂金会员</option>
            <option value="3">钻石会员</option>
          </select>
          <div class="input-group-btn">
            <button class="btn btn-secondary">添加</button>
          </div>
        </div>

      </div>
      <hr>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">会员姓名</div>
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
          <div class="input-group-addon">会员手机</div>
          <input class="form-control" placeholder="手机" v-model="memberMobile">
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">会员生日</div>
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
