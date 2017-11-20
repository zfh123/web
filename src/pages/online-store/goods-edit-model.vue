<style>


</style>
<template>
  <v-modal v-model="showModel" class="online-store-goods-edit-model"
           @ok="save"
           @close="close">
    <template slot="modal-header">
      <h5 class="modal-title">修改商品</h5>
      <button type="button" class="close" @click.prevent.stop="close">
        <span>&times;</span>
      </button>
    </template>
    <template slot="modal-body">
      <div class="form-row">
        <div class="col-3">
          <img src="http://big5.made-in-china.com/images/common/empty_mid.png" class="img-fluid">
        </div>
        <div class="col-9">
          <div class="mb-2">
            <strong>商品名称</strong><span class="ml-2">某某某商品名称</span>
          </div>
          <div class="mb-2">
            <strong>商品条码</strong><span class="ml-2">6921734971029</span>
          </div>
          <div class="mb-2">
            <strong>门店分类</strong><span class="ml-2">办公用品</span>
          </div>
          <div>
            <strong>门店售价</strong><span class="ml-2">12.5</span>
          </div>
        </div>
        <div class="col-12">
          <div class="input-group mt-3">
            <span class="input-group-addon">云店售价</span>
            <input class="form-control">
            <span class="input-group-addon w-25">毛利：100%</span>
          </div>
          <div class="input-group mt-3">
            <span class="input-group-addon">云店分类</span>
            <select class="custom-select" required>
              <option value="">请选择</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div class="input-group-btn w-25">
              <button class="btn btn-secondary btn-block" type="button" @click.prevent.stop="showCatalogueModel=true">添加分类
              </button>
            </div>
          </div>
          <div class="input-group mt-3">
            <span class="input-group-addon">商品状态</span>
              <div  class="form-control justify-content-end">
                <v-switch size="md" color="blue" v-model="toggle" openName="上架" closeName="下架"></v-switch>
              </div>
          </div>
        </div>
      </div>
    </template>
  </v-modal>
</template>
<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: null
      }
    },
    data() {
      return {
        type: 'sales',
        showModel: false,
        toggle: false,
      }
    },
    computed: {},
    watch: {
      value(newVal) {
        this.showModel = newVal;

      }
    },
    created() {

      this.showModel = this.value;
    },
    mounted() {

    },
    methods: {
      save() {
        this.close()
      },
      close() {
        this.$emit('input', false);
        this.$emit('close');
      }
    },
    beforeDestroy() {
    }
  }
</script>
