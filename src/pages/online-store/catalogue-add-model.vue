<style scoped>



</style>
<template>
  <v-modal v-model="showModel" class="catalogue-model"
           @ok="saveCatalogueModel"
           @close="close">
    <template slot="modal-header">
      <h5 class="modal-title" v-text="editing?'修改分类':'新增分类'"></h5>
      <button type="button" class="close" @click.prevent.stop="close">
        <span>&times;</span>
      </button>
    </template>
    <template slot="modal-body">
      <div class="form-group">
        <label class="col-form-label">分类名称</label>
        <input class="form-control">
      </div>
      <div class="form-group">
        <label class="col-form-label">所属分类</label>
        <select class="form-control" required>
          <option value="0">作为主分类</option>
          <option value="1">分类 One</option>
          <option value="2">分类 Two</option>
          <option value="3">分类 Three</option>
        </select>
      </div>
      <div class="form-group">
        <label class="col-form-label">分类排序</label>
        <input class="form-control" type="number" placeholder="请输入数字">
      </div>
      <div class="form-group">
        <label class="col-form-label">分类折扣</label>
        <div class="input-group">
          <input class="form-control" type="number" placeholder="请输入数字">
          <div class="input-group-addon">%</div>
        </div>
        <p class="form-text text-muted">导入门店商品时，会按此折扣为云店设置商品售价</p>
      </div>
      <div class="form-group" v-if="editing">
        <label class="col-form-label">分类状态</label>
        <select class="form-control" required>
          <option value="">启用</option>
          <option value="1">禁用</option>
        </select>
      </div>
    </template>
  </v-modal>
</template>
<script>
  export default {
    props:{
      editing: {
        type: Boolean,
        default: null
      },
      value:{
        type: Boolean,
        default: null
      },
      unit:{}
    },
    data() {
      return {
        showModel:false
      }
    },
    computed: {

    },
    watch: {
      value(newVal){
        this.showModel = newVal;

      }
    },
    created() {

      this.showModel = this.value;
    },
    mounted() {

    },
    methods: {
      saveCatalogueModel(props) {
        this.close()
      },
      close(){
        this.$emit('input', false);
        this.$emit('close');
      }
    },
    beforeDestroy() {
    }
  }
</script>
