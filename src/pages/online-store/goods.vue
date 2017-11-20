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
      <div class="col-3">
        <button type="button" class="btn btn-outline-primary" @click.stop="$router.push('goods/import')">添加商品</button>
        <button type="button" class="btn btn-outline-primary"@click.stop="showGoodsBatch=true">批量操作</button>
      </div>
      <div class="col-5 text-right">
        <select class="custom-select">
          <option selected>全部</option>
          <option>上架</option>
          <option value="1">下架</option>
        </select>
        <select class="custom-select">
          <option selected>全部分类</option>
        </select>
        <select class="custom-select">
          <option selected>全部供应商</option>
        </select>
      </div>
      <div class="col-4 pl-1">
        <div class="input-group">
          <input class="form-control" placeholder="条码/名称/简拼">
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
          <col style="width: 50%">
          <col style="width: 10%">
          <col style="width: 10%">
          <col style="width: 10%">
          <col style="width: 10%">
        </template>
        <template slot="thead">
          <th style="width: 50%"><label class="form-check-label"><input type="checkbox" class="form-check-input"> 商品名称</label></th>
          <th style="width: 10%" class="text-right">门店售价</th>
          <th style="width: 10%" class="text-right">云店售价</th>
          <th style="width: 10%" class="text-center">状态</th>
          <th style="width: 10%" class="text-center">操作</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td><label class="form-check-label"><input type="checkbox" class="form-check-input"> 某某某某某某商品名称<span class="badge badge-info ml-1">6932456789234</span></label></td>
          <td class="text-right">11.5</td>
          <td class="text-right">13.5</td>
          <td class="text-center">在售</td>
          <td class="text-center">
            <a href="#" class="btn btn-link" @click.prevent.stop="showEditGoods=true">编辑</a>
          </td>
          <!--
          确定退款的商品，添加红色删除线
          有退款的商品，隐藏退款按钮，显示取消按钮
          -->
        </template>
      </v-dataTable>
    </div>
    <goodsBatchModel v-model="showGoodsBatch"></goodsBatchModel>
    <editGoodsModel v-model="showEditGoods"></editGoodsModel>

  </div>
</template>
<script>
  import goodsBatchModel from './goods-batch-model.vue'
  import editGoodsModel from './goods-edit-model.vue'

  export default {
    components: {goodsBatchModel,editGoodsModel},
    data() {
      return {
        active: null,
        items: Array(30),
        noDataMsg: '您还没有挂单',
        showGoodsBatch:false,
        showEditGoods:false
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
