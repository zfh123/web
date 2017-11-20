<style scoped>
  .page-goods {

  }

  .table-warp2 {
    height: calc(100vh - 148px);
    position: relative;
    background-color: #fff;
  }

</style>
<template>
  <div class="page-goods">
    <div class="row no-gutters p-2">
      <div class="col">
        <button type="button" class="btn btn-outline-primary" @click.stop="editing=false;showCatalogueModel = true">新增</button>
        <button type="button" class="btn btn-outline-primary">复制门店分类</button>
        <small>您可以通过分类设置商品在云店的售价</small>
      </div>


    </div>
    <hr class="m-0">
    <div class="table-warp2 container-fluid">
      <div class="row pt-2 pb-2 align-items-center bg-grey-3" style="border-bottom: 1px solid #ddd">
        <div class="col"><strong>分类名称</strong></div>
        <div class="col-2"><strong>禁用</strong></div>
        <div class="col-2"><strong>操作</strong></div>
      </div>
      <template v-for="item in items">
        <div class="row pt-2 pb-2 align-items-center" style="border-bottom: dashed 1px #ddd">
          <div class="col" v-text="item.name"></div>
          <div class="col-2">禁用</div>
          <div class="col-2">
            <a href="#" class="mr-2" @click.prevent.stop="editing=true;showCatalogueModel=true">编辑</a>
            <a href="#" @click.prevent.stop="showRefundGoods=true">删除</a>
          </div>
        </div>
        <template v-for="it in item.child">
          <div class="row pt-2 pb-2 align-items-center" style="border-bottom: dashed 1px #ddd">
            <div class="col">
              <span class="ml-5" v-text="it.name"></span>
            </div>
            <div class="col-2">禁用</div>
            <div class="col-2">
              <a href="#" class="mr-2" @click.prevent.stop="editing=true;showCatalogueModel=true">编辑</a>
              <a href="#" @click.prevent.stop="showRefundGoods = true">删除</a>
            </div>
          </div>
        </template>
      </template>
    </div>
    <addCatalogue v-model="showCatalogueModel" :editing="editing" :data="active"></addCatalogue>
  </div>
</template>
<script>
  import addCatalogue from './catalogue-add-model.vue'
  export default {
    components: {addCatalogue},
    data() {
      return {
        items: [{
          name: "分类名称1",
          id: 123456,
          show: true,
          order: 1,
          child: [
            {name: "子分类名称1", "id": 123456, "show": true, order: 1},
            {name: "子分类名称2", "id": 123456, "show": true, order: 1}
          ]
        }, {
          name: "分类名称2",
          id: 1234567,
          show: true,
          order: 1
        }],
        active:null,
        editing: false,
        showCatalogueModel:false
      }
    },
    computed: {},
    watch: {},
    created() {

    },
    mounted() {

    },
    methods: {
      saveCatalogueModel(props) {


      }
    },
    beforeDestroy() {
    }
  }
</script>
