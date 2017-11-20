<style scoped>
  .page-goods {

  }

  .table-warp2 {
    height: calc(100vh - 203px);
    position: relative;
    background-color: #fff;
  }

  .pagination {
    border-radius: 0 !important;
  }

</style>
<template>
  <div class="page-goods">
    <div class="row no-gutters p-2">
      <div class="col-3">
        <button class="btn btn-secondary" type="button" @click.stop="$router.back()">返回</button>
      </div>
    </div>
    <hr class="m-0">
    <div class="p-2 goods-detail">
      <div class="row no-gutters">
        <div class="col-4 text-truncate">商品名称：<span class="ml-2 text-primary">某某某某某某某某某某某某某某某某商品名称</span></div>
        <div class="col-2"><span class="badge badge-info">6932456789234</span></div>
        <div class="col-3">当前库存<span class="ml-2 text-primary">34</span></div>
        <div class="col-3">采购进货<span class="ml-2 text-primary">34</span></div>
        <div class="col">销售<span class="ml-2 text-primary">34</span></div>
        <div class="col">报损<span class="ml-2 text-primary">34</span></div>
        <div class="col">采购退货<span class="ml-2 text-primary">34</span></div>
        <div class="col">调拨<span class="ml-2 text-primary">34</span></div>
      </div>
    </div>
    <div class="table-warp2">
      <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg" footHeight="50px">
        <template slot="colgroup">
          <col style="width: 20%">
          <col style="width: 15%">
          <col style="width: 15%">
          <col style="width: 15%">
          <col style="width: 45%">
        </template>
        <template slot="thead">
          <th style="width: 20%" class="text-center">操作时间</th>
          <th style="width: 15%" class="text-center">变动类型</th>
          <th style="width: 15%" class="text-right">库存变动</th>
          <th style="width: 15%" class="text-right">校正库存</th>
          <th style="width: 45%">备注</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td class="text-center">2017-11-12<br>08:09:12</td>
          <td class="text-center">采购</td>
          <td class="text-right">+100</td>
          <td class="text-right">105</td>
          <td>-</td>
        </template>
        <template slot="tfooter">
          <div class="row p-2 bg-grey-4">
            <div class="col pt-2">
              共2345条记录，1/100页
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
  </div>
</template>
<script>


  export default {
    components: {
      flatPickr
    },
    data() {
      return {
        active: null,
        items: Array(30),
        noDataMsg: '您还没有挂单',
        showImport:false,
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
