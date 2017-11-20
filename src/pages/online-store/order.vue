<style scoped>
  .page-goods {

  }

  .table-warp {
    height: calc(100vh - 148px);
    position: relative;
    background-color: #fff;
  }

</style>
<template>
  <div class="page-goods">
    <div class="row no-gutters p-2">

      <div class="col">
        <select class="custom-select">
          <option>全部来源</option>
          <option>门店</option>
          <option>微信</option>
          <option>美团</option>
          <option>饿了么</option>
        </select>
        <select class="custom-select">
          <option>全部订单</option>
        </select>
        <select class="custom-select">
          <option>支付状态</option>
        </select>
      </div>
      <div class="col-4">
        <div class="input-group">
          <div class="input-group-addon">
            时间
          </div>
          <flat-pickr
            v-model="date"
            placeholder="选择时间"
            :config="config"
            :required="true"
            class="form-control bg-white"
            name="date">
          </flat-pickr>
        </div>
      </div>
      <div class="col-3 pl-1">
        <div class="input-group">
          <input class="form-control" placeholder="订单号/买家手机">
          <div class="input-group-btn">
            <button class="btn btn-secondary" type="button">搜索</button>
          </div>
        </div>
      </div>
    </div>
    <hr class="m-0">
    <div class="table-warp container-fluid">
      <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg">
        <template slot="colgroup">
          <col style="width: 25%">
          <col style="width: 10%">
          <col style="width: 10%">
          <col style="width: 25%">
          <col style="width: 20%">
          <col style="width: 10%">
        </template>
        <template slot="thead">
          <th style="width: 25%">订单号</th>
          <th style="width: 10%">来源</th>
          <th style="width: 10%">状态</th>
          <th style="width: 25%">买家</th>
          <th style="width: 20%" class="text-right">订单金额</th>
          <th style="width: 10%" class="text-center">操作</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td>442435344366547457</td>
          <td>美团</td>
          <td>已完成</td>
          <td>朱芳芳<span class="ml-2 text-muted">1388888888</span></td>
          <td class="text-right">1.5</td>
          <td class="text-center">
            <a href="#" class="btn btn-link" @click.prevent.stop="showOrderDetail=true">详情</a>
          </td>
          <!--
          确定退款的商品，添加红色删除线
          有退款的商品，隐藏退款按钮，显示取消按钮
          -->
        </template>
      </v-dataTable>
    </div>
    <orderDetailModel v-model="showOrderDetail"></orderDetailModel>
  </div>
</template>
<script>
  import orderDetailModel from './order-detail-model.vue'

  export default {
    components: {orderDetailModel},
    data() {
      return {
        active: null,
        items: Array(30),
        noDataMsg: '您还没有挂单',
        date: new Date(),
        // Get more form https://chmln.github.io/flatpickr/options/
        config: {
          locale: this.$flatpickrLang,
          mode: "range",
          maxDate: "today",
          dateFormat: "Y-m-d",
          defaultDate: ["2017-10-10", "2017-10-20"]
        },
        showOrderDetail:false
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
