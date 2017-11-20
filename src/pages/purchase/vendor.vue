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
        <button type="button" class="btn btn-outline-primary" @click.stop="editing=false;showUnitModel = true">新增
        </button>
      </div>


    </div>
    <hr class="m-0">
    <div class="table-warp container-fluid">
      <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg" footHeight="50px">
        <template slot="colgroup">
          <col style="width: 70%">
          <col style="width: 30%">
        </template>
        <template slot="thead">
          <th style="width: 70%">名称</th>
          <th style="width: 30%">操作</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td>
            某某某批发部
          </td>

          <td>
            <a href="#" class="btn btn-link mr-2" @click.prevent.stop="editing=true;showUnitModel=true">编辑</a>
            <a href="#" class="btn btn-link" @click.prevent.stop="showRefundGoods=true">删除</a>
          </td>
        </template>
        <template slot="tfooter">
          <div class="row p-2 bg-grey-4">
            <div class="col pt-2">
              共2345家供应商
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
    <addVendor v-model="showUnitModel" :editing="editing" :data="active"></addVendor>
  </div>
</template>
<script>
  import addVendor from './vendor-add-model.vue'

  export default {
    components: {addVendor},
    data() {
      return {
        items: Array(30),
        noDataMsg: '您还没有挂单',
        editing: false,
        showUnitModel: false,
        active: null
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
