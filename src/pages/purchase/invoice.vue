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
        <button type="button" class="btn btn-outline-primary" @click.stop="$router.push('/purchase/invoice/add')">新增
        </button>
      </div>
      <div class="col text-right">
        <select class="custom-select">
          <option selected>全部经手人</option>
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
          <input class="form-control" placeholder="供货商名称">
          <div class="input-group-btn">
            <button class="btn btn-secondary" type="button">搜索</button>
          </div>
        </div>
      </div>
    </div>
    <hr class="m-0">
    <div class="table-warp container-fluid">
      <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg" footHeight="50px">
        <template slot="colgroup">
          <col style="width: 40%">
          <col style="width: 13%">
          <col style="width: 12%">
          <col style="width: 15%">
          <col style="width: 15%">
        </template>
        <template slot="thead">
          <th style="width: 40%">单据名称</th>
          <th style="width: 13%" class="text-right">金额</th>
          <th style="width: 12%" class="text-center">创建时间</th>
          <th style="width: 15%">经手人</th>
          <th style="width: 15%">操作</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td>
            <h5>某某某批发部</h5>
            <small>哇哈哈矿泉水\哇哈哈矿泉水等3件商品</small>
          </td>
          <td class="text-right">1055.00</td>
          <td class="text-center">2017 6-8<br>12:23:65</td>
          <td>刘芳</td>
          <td>
            <a href="#" class="btn btn-link" @click.prevent.stop="showRefundGoods=true">明细</a>
            <a href="#" class="btn btn-link" @click.prevent.stop="showRefundGoods=true">作废</a>
          </td>
        </template>
        <template slot="tfooter">
          <div class="row p-2 bg-grey-4">
            <div class="col pt-2">
              共2345个单据，总金额：￥234.6
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
        showAddModel: false,
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
