<style scoped>

</style>
<template>
  <v-modal v-model="showModel" class="unit-model"
           @ok="saveUnitModel"
           @close="close">
    <template slot="modal-header">
      <h5 class="modal-title" v-text="editing?'修改会员等级':'新增会员等级'"></h5>
      <button type="button" class="close" @click.prevent.stop="close">
        <span>&times;</span>
      </button>
    </template>
    <template slot="modal-body">
      <div class="form-row">
        <div class="col-3">
          <img src="http://big5.made-in-china.com/images/common/empty_mid.png" class="img-fluid pr-4">
        </div>
        <div class="col-9">
          <div class="form-group">
            <div class="input-group">
              <label class="input-group-addon">等级名称</label>
              <input class="form-control">
            </div>

          </div>
          <div class="form-group">
            <div class="input-group">
              <label class="input-group-addon">等级折扣</label>
              <input class="form-control" placeholder="例如：8.5折填写85">
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="list-group">
            <div class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-8">
                  <h5 class="mb-1 text-primary">自动升级</h5>
                  <small>每当会员累计获得的积分达到设定值时，自动升级会员</small>
                </div>
                <div class="col-4 text-right">
                  <v-switch size="md" color="blue" v-model="toggle"></v-switch>
                </div>
              </div>

            </div>
            <div class="list-group-item list-group-item-action" v-show="toggle">
              <div class="row align-items-center">
                <div class="col-8">
                  <h5 class="mb-1 text-primary">升级所需积分</h5>
                  <small>请输入自动升级所需的积分</small>
                </div>
                <div class="col-4 text-right">
                  <div class="input-group">
                    <input class="form-control" placeholder="例如：10000">
                    <label class="input-group-addon">分</label>
                  </div>
                </div>
              </div>
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
      editing: {
        type: Boolean,
        default: null
      },
      value: {
        type: Boolean,
        default: null
      },
      unit: {}
    },
    data() {
      return {
        toggle: !0,
        showModel: false
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
      saveUnitModel(props) {
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
