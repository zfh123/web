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
        <button type="button" class="btn btn-outline-primary" @click.prevent.stop="$router.push('add')">新增会员
        </button>
      </div>
      <div class="col-2 pl-1">
        <select class="form-control">
          <option>所有等级</option>
        </select>
      </div>
      <div class="col-4 pl-1">
        <div class="input-group">
          <input class="form-control" placeholder="卡号/姓名/手机号">
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
          <col style="width: 35%">
          <col style="width: 10%">
          <col style="width: 12%">
          <col style="width: 15%">
          <col style="width: 28%">
        </template>
        <template slot="thead">
          <th style="width: 35%">会员</th>
          <th style="width: 10%" class="text-right">余额</th>
          <th style="width: 12%" class="text-right">积分</th>
          <th style="width: 15%" class="text-right">累计消费</th>
          <th style="width: 28%" class="text-center">操作</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td>
            <div><span class="badge badge-warning pt-1 mr-1">钻石会员</span><span class="mr-1">朱芳芳</span><small>13488888888</small></div>
            <div class="text-muted">15367575656856</div>
          </td>

          <td class="text-right">1.5</td>
          <td class="text-right">12</td>
          <td class="text-right">12345.5</td>
          <td class="text-center">
            <a href="#" class="btn btn-sm btn-link">历史</a>
            <a href="#" class="btn btn-sm btn-link">对账</a>
            <a href="#" class="btn btn-sm btn-link">编辑</a>
            </td>
        </template>
        <template slot="tfooter">
          <div class="row p-2 bg-grey-4">
            <div class="col pt-2">
              共2345位会员
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
