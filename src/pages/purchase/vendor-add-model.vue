<style scoped>

</style>
<template>
    <v-modal v-model="showModel" class="unit-model"
             size="lg"
             @ok="saveUnitModel"
             @close="close">
      <template slot="modal-header">
        <h5 class="modal-title" v-text="editing?'修改供应商':'新增供应商'"></h5>
        <button type="button" class="close" @click.prevent.stop="close">
          <span>&times;</span>
        </button>
      </template>
      <template slot="modal-body">
        <div class="form-row">
          <div class="col-6">
            <div class="form-group row">
              <label class="col-3 control-label text-right">名称</label>
              <div class="col-9">
                <input type="text" id="supplierName" class="form-control" tabindex="1"
                       placeholder="供应商名称(必填)"
                       required>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group row">
              <label class="col-3 control-label text-right">联系人</label>
              <div class="col-9">
                <input type="text" class="form-control" tabindex="1"
                       placeholder="供应商联系人">
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group row">
              <label class="col-3 control-label text-right">电话/手机</label>
              <div class="col-9">
                <input type="text" class="form-control" id="tel" tabindex="1"
                       placeholder="供应商联系方式">
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group row">
              <label class="col-3 control-label text-right">联系地址</label>
              <div class="col-9">
                <input type="text" class="form-control"
                       tabindex="1" placeholder="供应商地址">
              </div>
            </div>
          </div>
          <div class="col-12">
            <textarea type="text" class="form-control" placeholder="备注"></textarea>
          </div>
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
      saveUnitModel(props) {
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
