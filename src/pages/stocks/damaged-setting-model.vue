<style>
  .damaged-setting-model .modal-body {
    padding: 0 !important;
    min-height: 10rem;
  }
</style>
<template>
  <v-modal v-model="showModel" class="damaged-setting-model"
           @ok="saveUnitModel"
           @close="close">
    <template slot="modal-header">
      <h5 class="modal-title">报损类型设置</h5>
      <button type="button" class="close" @click.prevent.stop="close">
        <span>&times;</span>
      </button>
    </template>
    <template slot="modal-body" class="p-0">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="input-group">
            <input class="form-control" placeholder="请输入报损类型">
            <div class="input-group-btn">
              <button class="btn btn-secondary">
                <i class="material-icons">delete</i>
              </button>
            </div>
          </div>
        </li>
<!--最后一个文本框填了内容，自动在增加一行-->
      </ul>
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
