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
      <div class="row pt-2 pb-2 align-items-center bg-grey-3" style="border-bottom: 1px solid #ddd">
        <div class="col"><strong>名称</strong></div>
        <div class="col-2"><strong>操作</strong></div>
      </div>
      <template v-for="item in items">
        <div class="row pt-2 pb-2 align-items-center" style="border-bottom: dashed 1px #ddd">
          <div class="col" v-text="item.name"></div>
          <div class="col-2">
            <a href="#" class="mr-2" @click.prevent.stop="editing=true;showUnitModel=true">编辑</a>
            <a href="#" @click.prevent.stop="showRefundGoods=true">删除</a>
          </div>
        </div>
      </template>
    </div>
    <addUnit v-model="showUnitModel" :editing="editing" :data="active"></addUnit>
  </div>
</template>
<script>
  import addUnit from './unit-add-model.vue'

  export default {
    components: {addUnit},
    data() {
      return {
        items: [{
          name: "包",
          id: 123456,
          count: 1,
        }, {
          name: "箱",
          id: 1234567,
          count: 1
        }],
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
