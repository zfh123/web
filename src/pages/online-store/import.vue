<style scoped>
  .page-goods {

  }

  .page-import-main {
  }

  .error-list {
    height: calc(100vh - 380px);
    overflow-y: auto;
    position: relative;
  }

</style>
<template>
  <div class="page-import-main">
    <div class="row no-gutters bg-white">
      <div class="col-6">
        <button class="btn btn-outline-primary m-2" type="button" @click.stop="$router.back()">取消</button>
        <button class="btn btn-primary" type="button">确定导入</button>
        <small></small>
      </div>
      <div class="col-12">
        <hr class="m-0">
      </div>
    </div>
    <div class="card m-3">
      <div class="card-body pb-3">
        <div class="form-row">
          <div class="col-6">
            <label class="m-0 input-group ">
              <div class="input-group-addon">
                <input type="checkbox" aria-label="Checkbox for following text input">
              </div>
              <span class="input-group-addon">添加时间</span>
              <flat-pickr
                v-model="date"
                placeholder="选择时间"
                :config="config"
                :required="true"
                class="form-control bg-white"
                name="date">
              </flat-pickr>
            </label>
          </div>
          <div class="col-6">
            <label class="m-0 input-group ">
              <div class="input-group-addon">
                <input type="checkbox" aria-label="Checkbox for following text input">
              </div>
              <span class="input-group-addon">销售时间</span>
              <flat-pickr
                v-model="date"
                placeholder="选择时间"
                :config="config"
                :required="true"
                class="form-control bg-white"
                name="date">
              </flat-pickr>
            </label>
          </div>
          <div class="col-6 mt-2">
            <div class="input-group">
              <span class="input-group-addon">门店分类</span>
              <select class="custom-select" required>
                <option value="0">分类1</option>
                <option value="1">分类2</option>
              </select>
            </div>
          </div>
          <div class="col-6 mt-2">
            <div class="input-group">
              <div class="input-group-addon">
                导入到
              </div>
              <select class="custom-select">
                <option>自动创建云店分类</option>
                <option>云店分类1</option>
                <option>云店分类12</option>
                <option>云店分类13</option>
              </select>
            </div>
          </div>
          <div class="col-12 mt-2">
            <div class="input-group">
              <input class="form-control" placeholder="条码/名称/简拼">
              <div class="input-group-btn">
                <button class="btn btn-secondary" type="button">搜索</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mx-3">
      <h5 class="card-header">
        商品预览
      </h5>
      <div class="error-list">
        <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg" footHeight="50px">
          <template slot="colgroup">
            <col style="width: 50%">
            <col style="width: 30%">
            <col style="width: 15%">
          </template>
          <template slot="thead">
            <th style="width: 50%">品名</th>
            <th style="width: 30%">分类</th>
            <th style="width: 15%">门店售价</th>
          </template>
          <template slot="tbody" slot-scope="props">
            <td>哇哈哈矿泉水<span class="badge badge-info ml-1">6932456789234</span></td>
            <td>商品分类名称</td>
            <td>￥12.30</td>
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


  </div>

</template>
<script>
  export default {
    data() {
      return {
        active: null,
        items: Array(30),
        noDataMsg: '没有找到符合条件的商品',
        catalogueType: false,
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
