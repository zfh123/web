<style scoped>
  .page-goods {

  }

  .page-import-main {
  }

  .error-list {
    height: calc(100vh - 380px);
    overflow-y: auto;
    position: relative;
  }

</style>
<template>
  <div class="page-import-main card m-3">
    <div class="card-body p-3">
      <div class="form-row">
        <div class="form-group col-12">
          <button type="button" class="btn btn-outline-primary">下载商品导入模板</button>
          <small>请按照《商品导入模板》要求填写</small>
        </div>
        <div class="form-group col-8">
          <label class="custom-file w-100">
            <input type="file" id="file" class="custom-file-input" required>
            <span class="custom-file-control"></span>
          </label>
        </div>
        <div class="form-group col-4">
          <label class="input-group ">
            <div class="input-group-addon">
              <input type="checkbox" aria-label="Checkbox for following text input">
            </div>
            <span class="input-group-addon w-100">覆盖已有商品</span>
          </label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-8">
          <div class="input-group">
            <span class="input-group-addon">选择门店</span>
            <select class="custom-select" required>
              <option value="0">门店一</option>
              <option value="1">门店二</option>
            </select>
          </div>
        </div>
        <div class="form-group col">
          <button class="btn btn-primary btn-block" @click="startImport" :disabled="importing">开始导入</button>
        </div>
      </div>
      <div class="progress">
        <div class="progress-bar bg-success" :style="{width:progress+'%'}"></div>
      </div>
      <div class="card mt-3">
        <div class="card-header">
          <span class="pt-2">导入失败商品</span>
          <a href="#" class="float-right">下载失败数据</a>
        </div>
        <div class="error-list">
          <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg" :hideFooter="true">
            <template slot="colgroup">
              <col style="width: 70%">
              <col style="width: 30%">
            </template>
            <template slot="thead">
              <th style="width: 70%">品名</th>
              <th style="width: 30%">错误原因</th>
            </template>
            <template slot="tbody" slot-scope="props">
              <td>哇哈哈矿泉水</td>
              <td>缺少售价</td>
            </template>
          </v-dataTable>

        </div>
      </div>
    </div>

  </div>

</template>
<script>
  export default {
    data() {
      return {
        active: null,
        items: Array(30),
        noDataMsg: '恭喜您，目前导入正常',
        editing: false,
        showUnitModel: false,
        importing: false,
        progress: 0,
        timeId: null
      }
    },
    computed: {},
    watch: {},
    created() {

    },
    mounted() {

    },
    methods: {
      startImport() {
        this.importing = true;
        this.progress = 0;
        this.timeId = setInterval(function () {
          if (this.progress === 100) {
            this.importing = false;
            clearInterval(this.timeId)
          }
          this.progress++;
        }.bind(this), 100);


      }
    },
    beforeRouteLeave(to, from, next) {
      if (this.importing) {
        alert('批量导入还未完成，请不要退出')
        next(false);
        return
      }
      next()

    },
    beforeDestroy() {
    }
  }
</script>
