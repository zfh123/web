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
        <button type="button" class="btn btn-outline-primary" @click.stop="$router.push('add')">新增</button>
        <button type="button" class="btn btn-outline-primary"@click.stop="$router.push('import')">导入</button>
      </div>
      <div class="col-6 text-right">
        <select class="custom-select">
          <option selected>启用</option>
          <option value="1">禁用</option>
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
    <div class="table-warp2">
      <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg" footHeight="50px">
        <template slot="colgroup">
          <col style="width: 40%">
          <col style="width: 15%">
          <col style="width: 10%">
          <col style="width: 10%">
          <col style="width: 15%">
          <col style="width: 10%">
        </template>
        <template slot="thead">
          <th style="width: 40%">品名</th>
          <th style="width: 15%">分类</th>
          <th style="width: 10%" class="text-right">进价</th>
          <th style="width: 10%" class="text-right">售价</th>
          <th style="width: 15%" class="text-right">库存</th>
          <th style="width: 10%" class="text-center">操作</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td>哇哈哈矿泉水<span class="badge badge-info ml-1">6932456789234</span></td>
          <td><small>休闲食品</small></td>
          <td class="text-right">1.5</td>
          <td class="text-right">1.5</td>
          <td class="text-right">1.5瓶</td>
          <td class="text-center">
            <a href="#" class="btn btn-link" @click.prevent.stop="showRefundGoods=true">编辑</a>

          </td>
          <!--
          确定退款的商品，添加红色删除线
          有退款的商品，隐藏退款按钮，显示取消按钮
          -->
        </template>
        <template slot="tfooter">
          <div class="row p-2 bg-grey-4">
            <div class="col pt-2">
              共2345个商品
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
        showImport:false
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
