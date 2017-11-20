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
      <div class="col-4">
        <div class="btn-group">
          <button type="button" class="btn btn-outline-dark" @click.prevent.stop="$router.replace('list')">报损记录</button>
          <button type="button" class="btn btn-dark" @click.prevent.stop="$router.replace('goods')">报损统计</button>
          <button type="button" class="btn btn-outline-dark">导出</button>

        </div>

      </div>
      <div class="col-8 pl-1">
        <div class="input-group">
            <select class="custom-select">
              <option>所有门店</option>
            </select>
          <select class="custom-select">
            <option>所有类型</option>
          </select>
          <input class="form-control" placeholder="条码/名称/简拼">

          <div class="input-group-addon">
            时间
          </div>
          <flat-pickr
            v-model="date"
            placeholder="选择时间"
            :config="config"
            :required="true"
            class="form-control bg-white w-25"
            name="date">
          </flat-pickr>
          <div class="input-group-btn">
            <button class="btn btn-secondary" type="button">搜索</button>
          </div>
        </div>
      </div>
    </div>
    <hr class="m-0">
    <div class="table-warp2">
      <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg" footHeight="50px">
        <template slot="colgroup">
          <col style="width: 25%">
          <col style="width: 45%">
          <col style="width: 15%">
          <col style="width: 15%">
        </template>
        <template slot="thead">
          <th style="width: 25%">门店</th>
          <th style="width: 45%">商品名称</th>
          <th style="width: 15%" class="text-right">报损数量</th>
          <th style="width: 15%" class="text-right">报损金额</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td>某某某门店</td>
          <td>
            某某某某某某商品<span class="badge badge-info ml-1">6932456789234</span>
          </td>
          <td class="text-right">12</td>
          <td class="text-right">23.0</td>
        </template>
        <template slot="tfooter">
          <div class="row p-2 bg-grey-4">
            <div class="col pt-2">
              共2345条记录，总金额：12345.0元，1/100页
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
        showImport: false,
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
    methods: {
      showMenu(e) {

      }
    },
    beforeDestroy() {

    }
  }
</script>
