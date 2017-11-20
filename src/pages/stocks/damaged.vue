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
      <div class="col-7">
        <div class="btn-group">
          <button type="button" class="btn btn-dark" @click.prevent.stop="$router.replace('list')">报损记录</button>
          <button type="button" class="btn btn-outline-dark" @click.prevent.stop="$router.replace('goods')">报损统计</button>
          <button type="button" class="btn btn-outline-dark" @click.prevent.stop="showDamagedSettingModel=true">报损设置</button>

        </div>

      </div>
      <div class="col-5 pl-1">
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
          </flat-pickr>          <div class="input-group-btn">
            <button class="btn btn-secondary" type="button">搜索</button>
          </div>
        </div>
      </div>
    </div>
    <hr class="m-0">
    <div class="table-warp2">
      <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg" footHeight="50px">
        <template slot="colgroup">
          <col style="width: 10%">
          <col style="width: 35%">
          <col style="width: 15%">
          <col style="width: 15%">
          <col style="width: 10%">
          <col style="width: 15%">
        </template>
        <template slot="thead">
          <th style="width: 10%" class="text-center">报损时间</th>
          <th style="width: 35%">门店</th>
          <th style="width: 15%" class="text-right">报损金额</th>
          <th style="width: 15%" class="text-center">报损人</th>
          <th style="width: 10%">操作</th>
          <th style="width: 15%">备注</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td class="text-center"><small>2017-11-12<br>08:09:12</small></td>
          <td>某某某门店</td>
          <td class="text-right">23.0</td>
          <td class="text-center">朱芳芳</td>
          <td><a href="#" @click.prevent.stop="showDamagedDetailModel=true">详情</a> </td>
          <td class="text-muted">一些备注</td>
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
    <damagedSettingModel v-model="showDamagedSettingModel"></damagedSettingModel>
    <damagedDetailModel v-model="showDamagedDetailModel"></damagedDetailModel>
  </div>
</template>
<script>
  import damagedSettingModel from './damaged-setting-model.vue'
  import damagedDetailModel from './damaged-detail-model.vue'

  export default {
    components: {
      damagedSettingModel,damagedDetailModel
    },
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
        showDamagedSettingModel:false,
        showDamagedDetailModel:false
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
