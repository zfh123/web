<style scoped>
  .page-warning-order .col-6:nth-child(odd){
    border-right: 1px solid  #e9ecef;
  }
  .good-list{
    height: calc(100vh - 154px);
  }
</style>
<template>
  <div class="page-warning-order">
    <div class="row no-gutters p-2">
      <div class="col-6 text-center pb-2">
        <button type="button" class="btn btn-outline-primary" @click.stop="editing=false;showLevelModel = true">以下商品一键进货
        </button>
      </div>
      <div class="col-6 text-center pb-2">
        <button type="button" class="btn btn-outline-primary" @click.stop="editing=false;showLevelModel = true">以下商品下载进货单
        </button>
        <!--
        下载的excel格式，默认保存的文件名为：门店名称 + 日期
        进货数量一栏默认为：库存上限 - 当前库存
        商品名称	条码/店内码）	进货数量	单位	进价	 现有库存
        -->
      </div>
      <div class="col-6 good-list">
        <v-dataTable headHeight="33px" :data="items" v-model="active">
          <template slot="colgroup">
            <col style="width: 65%">
            <col style="width: 10%">
            <col style="width: 12%">
            <col style="width: 15%">
          </template>
          <template slot="thead">
            <th style="width: 65%">商品名称</th>
            <th style="width: 10%" class="text-right">数量</th>
            <th style="width: 10%" class="text-right">单价</th>
            <th style="width: 15%" class="text-right">小计</th>
          </template>
          <template slot="tbody" slot-scope="props">
            <td>某某某商品名称</td>
            <td class="text-right">2</td>
            <td class="text-right">12.0</td>
            <td class="text-right">24.0</td>
          </template>
        </v-dataTable>
      </div>
      <div class="col-6 good-list">
        <v-dataTable headHeight="33px" :data="items" v-model="active">
          <template slot="colgroup">
            <col style="width: 65%">
            <col style="width: 10%">
            <col style="width: 12%">
            <col style="width: 15%">
          </template>
          <template slot="thead">
            <th style="width: 65%">商品名称</th>
            <th style="width: 10%" class="text-right">数量</th>
            <th style="width: 10%" class="text-right">单价</th>
            <th style="width: 15%" class="text-right">小计</th>
          </template>
          <template slot="tbody" slot-scope="props">
            <td>某某某商品名称</td>
            <td class="text-right">2</td>
            <td class="text-right">12.0</td>
            <td class="text-right">24.0</td>
          </template>
        </v-dataTable>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: Array(30),
        active:null
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
