<style scoped>

</style>
<template>
  <v-modal v-model="showModel" class="unit-model"
           @ok="saveUnitModel"
           @close="close">
    <template slot="modal-header">
      <h5 class="modal-title" v-text="editing?'修改广告':'新增广告'"></h5>
      <button type="button" class="close" @click.prevent.stop="close">
        <span>&times;</span>
      </button>
    </template>
    <template slot="modal-body">
      <div class="form-row">
        <div class="col">
          <div class="form-group">
            <div class="input-group">
              <label class="input-group-addon">广告名称</label>
              <input class="form-control">
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <label class="input-group-addon">显示顺序</label>
              <input class="form-control"placeholder="请输入数字" type="number">
            </div>
          </div>
          <div class="list-group">
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col-8">
                  <h5 class="mb-1 text-primary">广告文件</h5>
                  <small>支持格式：图片（PNG,GIF,JPG,BMP）视频（MP4）</small>
                </div>
                <div class="col-4 text-right">
                  <button class="btn btn-outline-primary">选择文件</button>
                </div>
                <div class="col-12 mt-2">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509970809464&di=4aa669a52c91a06ff7bfb1854a81391c&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130531%2F12167069_094833224366_2.jpg" alt="广告预览" class="img-fluid">
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
