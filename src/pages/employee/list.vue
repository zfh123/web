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
        <button type="button" class="btn btn-outline-primary" @click.prevent.stop="$router.push('add')">新增员工
        </button>
      </div>
      <div class="col-2 pl-1">
        <select class="form-control">
          <option>所有状态</option>
          <option>正常</option>
          <option>禁用</option>
        </select>
      </div>
      <div class="col-4 pl-1">
        <div class="input-group">
          <input class="form-control" placeholder="工号/姓名/手机号">
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
          <col style="width: 15%">
          <col style="width: 20%">
          <col style="width: 15%">
          <col style="width: 20%">
          <col style="width: 20%">
        </template>
        <template slot="thead">
          <th style="width: 15%">工号</th>
          <th style="width: 20%">姓名</th>
          <th style="width: 15%">手机</th>
          <th style="width: 20%" class="text-center">最近登录</th>
          <th style="width: 20%" class="text-center">操作</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td>
           1001
          </td>
          <td>朱芳芳</td>
          <td>13488888888</td>
          <td class="text-center"><small>2017-11-12<br>07:08:22</small></td>
          <td class="text-center">
            <a href="#" class="btn btn-sm btn-link">编辑</a>
            <a href="#" class="btn btn-sm btn-link">禁用</a>
          </td>
        </template>
        <template slot="tfooter">
          <div class="row p-2 bg-grey-4">
            <div class="col pt-2">
              共2345位员工
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
