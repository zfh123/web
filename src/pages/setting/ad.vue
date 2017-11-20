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
    <div class="row no-gutters p-2">
      <div class="col">
        <button type="button" class="btn btn-outline-primary" @click.stop="editing=false;showAdModel = true">新增广告
        </button>
      </div>


    </div>
    <hr class="m-0">
    <div class="table-warp container-fluid">
      <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg">
        <template slot="colgroup">
          <col style="width: 10%">
          <col style="width: 45%">
          <col style="width: 15%">
          <col style="width: 15%">
          <col style="width: 15%">
        </template>
        <template slot="thead">
          <th style="width: 10%">顺序</th>
          <th style="width: 45%">广告名称</th>
          <th style="width: 15%">类型</th>
          <th style="width: 15%" class="text-center">添加时间</th>
          <th style="width: 15%" class="text-center">操作</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td>1</td>
          <td>一个广告名称而已</td>
          <td>图片</td>
          <td class="text-center">2017-08-08<br>08:08:08</td>
          <td class="text-center">
            <a href="#" class="btn btn-link" @click.prevent.stop="editing=true;showAdModel=true">修改</a>
            <a href="#" class="btn btn-link">删除</a>
          </td>
        </template>
      </v-dataTable>
    </div>
    <addModel v-model="showAdModel" :editing="editing" :data="active"></addModel>
  </div>
</template>
<script>
  import addModel from './ad-add-model.vue'

  export default {
    components: {addModel},
    data() {
      return {
        active: null,
        items: Array(30),
        noDataMsg: '您还没有挂单',
        editing: false,
        showAdModel: false,
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
