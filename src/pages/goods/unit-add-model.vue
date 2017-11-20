<style scoped>

</style>
<template>
    <v-modal v-model="showModel" class="unit-model"
             @ok="saveUnitModel"
             @close="close">
      <template slot="modal-header">
        <h5 class="modal-title" v-text="editing?'修改单位':'新增单位'"></h5>
        <button type="button" class="close" @click.prevent.stop="close">
          <span>&times;</span>
        </button>
      </template>
      <template slot="modal-body">
        <div class="form-group">
          <label class="col-form-label">单位名称</label>
          <input class="form-control">
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
