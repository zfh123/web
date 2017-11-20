<style scoped>
  .page-level {

  }

  .table-warp {
    height: calc(100vh - 148px);
    position: relative;
    background-color: #fff;
  }

</style>
<template>
  <div class="page-level">
    <div class="row no-gutters p-2  justify-content-end">
      <div class="col-8">
        <div class="input-group">
          <select class="custom-select">
            <option selected>所有类型</option>
            <option value="1">登录</option>
            <option value="1">销售</option>
            <option value="1">销售退货</option>
            <option value="1">采购入库</option>
            <option value="1">采购退货</option>
          </select>
          <select class="custom-select">
            <option selected>所有员工</option>
            <option value="1">mj001</option>
            <option value="1">mj002</option>
          </select>
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
    <div class="table-warp container-fluid">
      <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg">
        <template slot="colgroup">
          <col style="width: 20%">
          <col style="width: 15%">
          <col style="width: 15%">
          <col style="width: 50%">
        </template>
        <template slot="thead">
          <th style="width:20%">操作人</th>
          <th style="width:15%" class="text-center">时间</th>
          <th style="width:15%" class="text-center">类型</th>
          <th style="width:50%">描述</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td>朱芳芳(mg001)</td>
          <td class="text-center">2017-08-08<br>06:06:06</td>
          <td class="text-center">登录</td>
          <td>
            登录了POS收银客户端
          </td>
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
