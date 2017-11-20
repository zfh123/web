<style>
  .online-store-refund-model .modal-body {
    padding: 0;
  }
  .online-store-refund-model .order-goods-list{
    height: 350px;
    position: relative;
  }
</style>
<template>
  <v-modal v-model="showModel" class="online-store-refund-model"
           @ok="save"
           @close="close">
    <template slot="modal-header">
      <h5 class="modal-title">退款申请<span class="badge badge-warning ml-2">订单号：2435344366547457</span></h5>
      <button type="button" class="close" @click.prevent.stop="close">
        <span>&times;</span>
      </button>
    </template>
    <template slot="modal-body">
      <div class="order-detaile">
        <div class="row p-2">
          <div class="col-6">时 &nbsp;&nbsp; 间：2017-08-09 08:08:08</div>
          <div class="col-6 text-right">买家：朱芳芳<span class="ml-2 badge badge-secondary">13488888888</span></div>
          <div class="col-12">
            <div>收货人：朱芳芳<span class="ml-2 badge badge-secondary">13488888888</span></div>
            <div>地 &nbsp;&nbsp; 址：浙江省杭州市拱墅区沈半路198号</div>
          </div>
        </div>
      </div>
      <div class="order-goods-list">
        <v-dataTable headHeight="33px" :data="items" v-model="active">
          <template slot="colgroup">
            <col style="width: 65%">
            <col style="width: 10%">
            <col style="width: 12%">
            <col style="width: 15%">
          </template>
          <template slot="thead">
            <th style="width: 65%">退款商品</th>
            <th style="width: 10%" class="text-right">数量</th>
            <th style="width: 10%" class="text-right">售价</th>
            <th style="width: 15%" class="text-right">小计</th>
          </template>
          <template slot="tbody" slot-scope="props">
            <td>某某某商品名称</td>
            <td class="text-right">2</td>
            <td class="text-right">12.0</td>
            <td class="text-right">24.0</td>
          </template>
          <template slot="tfooter">
            <div class="row p-2 bg-grey-4">
              <div class="col pt-2">
                共2345位会员
              </div>
              <div class="col">
                <ul class="pagination justify-content-end m-0">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">上一页</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item active"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">下一页</a>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </v-dataTable>
      </div>
    </template>
    <template slot="modal-footer">
      <h3 class="mb-0 mr-auto">
        退款总计：<span class="text-danger">￥2345.00</span>
      </h3>
      <button class="btn btn-outline-primary" @click.stop="close">同意退款</button>
      <button class="btn btn-primary" @click.stop="close">拒绝退款</button>
    </template>
  </v-modal>
</template>
<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: null
      },
      unit: {}
    },
    data() {
      return {
        showModel: false,
        items: Array(30),
        active:null

      }
    },
    computed: {},
    watch: {
      value(newVal) {
        this.showModel = newVal;

      }
    },
    created() {

      this.showModel = this.value;
    },
    mounted() {

    },
    methods: {
      save() {
        this.close()
      },
      close() {
        this.$emit('input', false);
        this.$emit('close');
      }
    },
    beforeDestroy() {
    }
  }
</script>
