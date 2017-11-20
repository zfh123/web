<style>
  .online-store-goods-batch-model .modal-body {
    padding: 0;
  }

  .online-store-goods-batch-model .modal-body > .row > .col-3 {
    border-right: 1px solid #ddd;

  }

  .online-store-goods-batch-model .modal-body > .row > .col-9 {
    overflow-x: hidden;
    overflow-y: auto;
    height: 280px;
  }

  .online-store-goods-batch-model .modal-body > .row > .col-9 .col {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .online-store-goods-batch-model .modal-body > .row > .col-9 .col:first-child {
    border-right: 1px solid #ddd;
    height: 280px;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
<template>
  <v-modal v-model="showModel" class="online-store-goods-batch-model"
           @ok="save"
           @close="close">
    <template slot="modal-header">
      <h5 class="modal-title">批量设置</h5>
      <button type="button" class="close" @click.prevent.stop="close">
        <span>&times;</span>
      </button>
    </template>
    <template slot="modal-body">
      <div class="row no-gutters">
        <div class="col-3">
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item"
               :class="{'active':type=='sales'}"
               @click.prevent.stop="type='sales'">上下架</a>
            <a href="#" class="list-group-item"
               :class="{'active':type=='price'}"
               @click.prevent.stop="type='price'">网店售价</a>
          </div>
        </div>
        <div class="col-9">
          <h5 class="p-3 m-0" v-show="type !='import'">
            当前选择了<span class="text-danger" v-show="!toggle">45</span>
            <span class="text-danger" v-show="toggle">222345</span>个商品
          </h5>
          <div class="list-group list-group-flush" v-show="type !='import'">
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col-8">
                  <h5 class="mb-1 text-primary">所有云店商品</h5>
                  <small>开启此项，将会修改云店的全部商品。</small>
                </div>
                <div class="col-4 text-right">
                  <v-switch size="md" color="blue" v-model="toggle"></v-switch>
                </div>
              </div>
            </div>
            <div v-show="type=='sales'" class="list-group-item">
              <div class="row align-items-center">
                <div class="col-8">
                  <h5 class="mb-1 text-primary">商品状态</h5>
                  <small>这里设置商品的上下架状态。</small>
                </div>
                <div class="col-4 text-right">
                  <v-switch size="md" color="blue" v-model="toggle2" openName="上架" closeName="下架"></v-switch>
                </div>
              </div>
            </div>
            <div v-show="type=='price'" class="list-group-item">
              <label class="row align-items-center">
                <div class="col-12">
                  <div class="input-group">
                    <div class="input-group-addon">
                      <input type="radio" name="aaa">
                    </div>
                    <div class="input-group-addon">门店售价 ×</div>
                    <input class="form-control" type="number">
                    <div class="input-group-addon">%</div>
                  </div>
                </div>
              </label>
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
        toggle2: false
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
