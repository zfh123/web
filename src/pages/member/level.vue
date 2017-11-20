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
        <button type="button" class="btn btn-outline-primary" @click.stop="editing=false;showLevelModel = true">新增等级
        </button>
      </div>


    </div>
    <hr class="m-0">
    <div class="table-warp container-fluid">
      <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg">
        <template slot="colgroup">
          <col style="width: 27%">
          <col style="width: 13%">
          <col style="width: 40%">
          <col style="width: 15%">
        </template>
        <template slot="thead">
          <th style="width: 27%">等级名称</th>
          <th style="width: 13%" class="text-right">折扣</th>
          <th style="width: 40%">规则</th>
          <th style="width: 15%" class="text-center">操作</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td><img src="http://big5.made-in-china.com/images/common/empty_mid.png" class="img-fluid w-25 mr-2">银卡会员</td>
          <td class="text-right">9折</td>
          <td>满<span class="text-red">10000</span>分升级</td>
          <td class="text-center">
            <a href="#" class="btn btn-link" @click.prevent.stop="editing=true;showLevelModel=true">修改</a>
          </td>
        </template>
      </v-dataTable>
    </div>
    <addLevel v-model="showLevelModel" :editing="editing" :data="active"></addLevel>
  </div>
</template>
<script>
  import addLevel from './level-add-model.vue'

  export default {
    components: {addLevel},
    data() {
      return {
        active: null,
        items: Array(30),
        noDataMsg: '您还没有挂单',
        editing: false,
        showLevelModel: false,
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
