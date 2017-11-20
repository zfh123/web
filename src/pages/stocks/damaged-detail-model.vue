<style>
  .damaged-detail-model .modal-body{
    padding: 0 !important;
  }
  .damaged-detail-model .table-warp {
    height: 25rem;
    position: relative;
  }
  .damaged-info{

  }
</style>
<template>
  <v-modal v-model="showModel" class="damaged-detail-model"
           @ok="saveUnitModel"
           @close="close">
    <template slot="modal-header">
      <h5 class="modal-title">朱芳芳（2017-08-08 ）报损详情</h5>
      <button type="button" class="close" @click.prevent.stop="close">
        <span>&times;</span>
      </button>
    </template>
    <template slot="modal-body" class="p-0">
      <div class="row damaged-info p-2">
        <div class="col-6">提交人：朱芳芳</div>
        <div class="col-6">提交时间：2017-08-08 08:08:08</div>
        <div class="col-12">
          <hr class="mt-2">
          <p>一些备注一些备注一些备注一些备注一些备注一些备注一些备注一些备注一些备注一些备注一些备注一些备注一些备注</p>
        </div>
      </div>
      <div class="table-warp">
        <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg">
          <template slot="colgroup">
            <col style="width: 60%">
            <col style="width: 20%">
            <col style="width: 20%">
          </template>
          <template slot="thead">
            <th style="width: 60%">商品名称</th>
            <th style="width: 20%" class="text-right">报损数量</th>
            <th style="width: 20%" class="text-right">报损金额</th>
          </template>
          <template slot="tbody" slot-scope="props">
            <td>
              某某某某某某商品<span class="badge badge-info ml-1">6932456789234</span>
            </td>
            <td class="text-right">12</td>
            <td class="text-right">23.0</td>
          </template>
        </v-dataTable>

      </div>
    </template>
      <template slot="modal-footer">
        <button type="button" class="btn btn-primary" @click.prevent.stop="close">关闭</button>
      </template>
  </v-modal>
</template>
<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: null
      }
    },
    data() {
      return {
        showModel: false,
        active: null,
        items: Array(30),
        noDataMsg: '您还没有挂单'
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
      saveUnitModel(props) {
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
