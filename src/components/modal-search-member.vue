<style>
  .model-member .modal-body {
    padding: 0;
  }

  .model-member .member-table {
    height: 50vh;
    position: relative;
  }
</style>
<template>
  <div class="model-member"
       @hotKey_prev="prev"
       @hotKey_next="next"
       @hotKey_快捷会员.stop="showBuyer = true"
       @hotKey_确定="memberChange"
       @hotKey_取消="showBuyer = false"
  >
    <v-modal v-model="showBuyer"
             modalTitle="会员..."
             @ok="memberChange"

    >
      <template slot="modal-body">
        <div class="m-2">
          <input class="form-control" placeholder="请输入会员手机或姓名" v-model="memberMobile" required>
        </div>
        <div class="member-table">
          <v-dataTable headHeight="30px" cellHeight="30px" :data="memberItems" v-model="active" :noDataMsg="noDataMsg">
            <template slot="colgroup">
              <col style="width: 40%">
              <col style="width: 30%">
              <col style="width: 15%">
              <col style="width: 15%">
              <!--<col style="width: 8%">-->
            </template>
            <template slot="thead">
              <tr>
                <th style="width: 40%" class="text-left">姓名/卡号</th>
                <th style="width: 30%" class="text-right">手机</th>
                <th style="width: 15%" class="text-right">积分</th>
                <th style="width: 15%" class="text-right">余额</th>
              </tr>
            </template>
            <template slot="tbody" slot-scope="props">
              <td class="text-left" style="width: 45%">
                <span class="badge badge-warning"
                      v-text="props.cell.level"></span><span v-text="props.cell.nickname"></span>
                <div v-text="props.cell.cardNo"></div>
              </td>
              <td class="text-right">{{props.cell.mobile}}</td>
              <td class="text-right">{{props.cell.integral}}</td>
              <td class="text-right">{{props.cell.money.toFixed(1)}}</td>
            </template>
          </v-dataTable>
        </div>

      </template>
      <template slot="modal-footer">
        <button class="btn btn-link" @click="showBuyer=false">取消</button>
        <button class="btn btn-primary" @click="memberChange" v-show="memberItems.length>0">选择会员</button>
        <button class="btn btn-success" v-if="memberItems.length===0 && memberMobile" @click="memberAdd">添加会员</button>

      </template>
    </v-modal>
  </div>

</template>
<script>
  import {mapState, mapActions} from 'vuex'
  import {debounce} from '../utils/function'

  export default {
    data() {
      return {
        showBuyer: false,
        memberMobile: '',
        memberItems: [],
        timeId: null,
        active: null,
        noDataMsg:'请输入会员手机或姓名',
        ajax: debounce(this.getUserList, 200)
      }
    },
    computed: {
      ...mapState({cart: state => state.cart, member: state => state.member})
    },
    watch: {
      showBuyer(newVal, oldVal) {
        if (oldVal === true && newVal === false) {
          this.memberMobile = ''
          this.memberItems = []
          return
        }
        if (newVal === true) {
          window.setTimeout(function () {
            $('.model-member input').focus();
          }, 100)
        }
      },
      memberMobile(newVal) {
        if (!newVal) {
          this.memberItems = [];
          this.noDataMsg = '请输入会员手机或姓名';
          return
        }else{
          this.noDataMsg = '没有找到该会员！<br>注册一个？';
        }
        this.ajax()

      }
    },
    methods: {
      /**
       * 前一个
       */
      prev() {
        this.active = this.active - 1;
      },

      /**
       * 后一个
       */
      next() {
        this.active = this.active + 1;
      },
      getUserList() {
        this.$http.get('member/list/' + this.memberMobile).then(function (response) {
          if (response.status !== 200) {
            throw new Error(response)
          }
          if (response.data.data === undefined) {
            throw new Error(response)
          }
          this.memberItems = response.data.data;
          this.active = this.memberItems.length>0?0:null
        }.bind(this), function (response) {
          throw new Error(JSON.stringify(response));
        }.bind(this));
      },
      memberAdd() {
        this.$router.push('/member/add/'+ this.memberMobile)
      },
      /**
       * 选择了会员
       */
      memberChange() {
        if (this.memberItems.length === 0) {
          this.memberMobile && this.memberAdd();
          return
        }
        this.showBuyer = false;
        this.memberMobile = '';
      },
      /**
       * 清除了当前的会员
       */
      memberClear() {
      }
    },
    beforeDestroy() {

    }
  }
</script>
