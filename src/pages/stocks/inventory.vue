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
          <button type="button" class="btn"
                  :class="{
                  'btn-dark':$route.query.type !=='deficit' || $route.query.type!=='profit',
                  'btn-outline-dark':$route.query.type ==='deficit' || $route.query.type==='profit'
                  }"
                  @click.prevent.stop="$router.replace('')">全部</button>
          <button type="button" class="btn"
                  :class="{
                  'btn-dark':$route.query.type==='profit',
                  'btn-outline-dark':$route.query.type!=='profit'
                  }"
                  @click.prevent.stop="$router.replace({path:'list',query:{ type: 'profit' }})">盘盈</button>
          <button type="button" class="btn"
                  :class="{
                  'btn-dark':$route.query.type==='deficit',
                  'btn-outline-dark':$route.query.type!=='deficit'
                  }"
                  @click.prevent.stop="$router.replace({path:'list',query:{ type: 'deficit' }})">盘亏</button>
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
          <col style="width: 50%">
          <col style="width: 25%">
          <col style="width: 15%">
        </template>
        <template slot="thead">
          <th style="width: 10%" class="text-center">盘点时间</th>
          <th style="width: 50%">标题</th>
          <th style="width: 25%">操作人</th>
          <th style="width: 15%">操作</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td class="text-center"><small>2017-11-12<br>08:09:12</small></td>
          <td>某某某商品、某某某商品、某某某商品等125件商品<span class="badge badge-success">赢</span></td>
          <td><small class="text-muted">朱芳芳</small></td>
          <td><router-link :to="{path:'detail',query:{id:props.index}}">详情</router-link> </td>
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
    <damagedSettingModel v-model="showDamagedSettingModel"></damagedSettingModel>
  </div>
</template>
<script>
  import damagedSettingModel from './damaged-setting-model.vue'

  export default {
    components: {
      damagedSettingModel
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
        showDamagedSettingModel:false
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
