<style scoped>
  .page-goods {

  }

  .table-warp2 {
    height: calc(100vh - 148px);
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
      <div class="col-2">
        <select class="form-control">
          <option selected>全部</option>
          <option value="1">进货</option>
          <option value="1">销售</option>
          <option value="1">报损</option>
          <option value="1">盘点</option>
          <option value="1">编辑库存</option>
          <option value="1">门店调拨</option>
        </select>
      </div>
      <div class="col-2 pl-1">
        <select class="form-control">
          <option selected>全部</option>
          <option value="1">入库</option>
          <option value="1">出库</option>
        </select>
      </div>
      <div class="col-4 pl-1">
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
      <div class="col-4 pl-1">
        <div class="input-group">
          <input class="form-control" placeholder="条码/名称/简拼">
          <div class="input-group-btn">
            <button class="btn btn-secondary" type="button" @click.stop="$router.push('goods')">搜索</button>
          </div>
        </div>
      </div>
    </div>
    <hr class="m-0">
    <div class="table-warp2">
      <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg" footHeight="50px">
        <template slot="colgroup">
          <col style="width: 35%">
          <col style="width: 20%">
          <col style="width: 15%">
          <col style="width: 15%">
          <col style="width: 15%">
        </template>
        <template slot="thead">
          <th style="width: 35%">商品名称</th>
          <th style="width: 20%" class="text-center">操作时间</th>
          <th style="width: 15%" class="text-center">变动类型</th>
          <th style="width: 15%" class="text-right">库存变动</th>
          <th style="width: 15%" class="text-right">校正库存</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td>某某某某某某商品<span class="badge badge-info ml-1">6932456789234</span></td>
          <td class="text-center">2017-11-12<br>08:09:12</td>
          <td class="text-center">采购</td>
          <td class="text-right">+100</td>
          <td class="text-right">105</td>
        </template>
        <template slot="tfooter">
          <div class="row p-2 bg-grey-4">
            <div class="col pt-2">
              共2345个商品，1/100页
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

    data() {
      return {
        active: null,
        items: Array(30),
        noDataMsg: '您还没有挂单',
        showImport:false,
        date: new Date(),
        // Get more form https://chmln.github.io/flatpickr/options/
        config: {
          locale: this.$flatpickrLang,
          mode: "range",
          maxDate: "today",
          dateFormat: "Y-m-d",
          defaultDate: ["2017-10-10", "2017-10-20"]
        },
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
