<style scoped>
.page-invoice-add-header{
  border-bottom: 1px solid #ddd;
}
  .page-invoice-add-body{
    position: relative;
    height: calc(100vh - 220px);
  }
  .page-invoice-add-footer{
    overflow: hidden;
  }
</style>
<template>
  <div class="page-invoice-add">
    <div class="page-invoice-add-header bg-white p-2">
      <div class="form-row">
        <div class="col-6">
          <div class="input-group">
            <div class="input-group-addon">进货单号</div>
            <input class="form-control" placeholder="进货单号">
          </div>
        </div>
        <div class="col-6">
          <div class="input-group">
            <div class="input-group-addon">进货时间</div>
            <flat-pickr
              v-model="date"
              placeholder="Select date"
              :config="config"
              :required="true"
              class="form-control bg-white"
              name="date">
            </flat-pickr>
          </div>
        </div>

      </div>
    </div>
    <div class="page-invoice-add-body">
      <v-dataTable headHeight="33px" :data="items" v-model="active" :noDataMsg="noDataMsg">
        <template slot="colgroup">
          <col style="width: 35%">
          <col style="width: 18%">
          <col style="width: 12%">
          <col style="width: 20%">
          <col style="width: 15%">
        </template>
        <template slot="thead">
          <th style="width: 35%">品名</th>
          <th style="width: 18%">分类</th>
          <th style="width: 12%" class="text-right pr-4">售价</th>
          <th style="width: 20%">供应商</th>
          <th style="width: 15%" class="text-center">数量</th>
        </template>
        <template slot="tbody" slot-scope="props">
          <td>
            <div>哇哈哈矿泉水</div>
            <small class="text-muted">6921734971029</small>
          </td>
          <td>
            <small>休闲零食 > 饼干</small>
          </td>
          <td class="text-right pr-4">1.5</td>
          <td><select class="form-control">
            <option>请选择供应商</option>
          </select></td>
          <td class="text-center">
            <div class="input-group">
              <input type="number" class="form-control" placeholder="数量">
              <span class="input-group-addon">箱</span>
            </div>
          </td>
          <!--
          确定退款的商品，添加红色删除线
          有退款的商品，隐藏退款按钮，显示取消按钮
          -->
        </template>
      </v-dataTable>
    </div>
    <div class="page-invoice-add-footer p-2 bg-blue-2">
      <div class="row align-items-center">
        <div class="col-4">
          <input class="form-control full-height" id="store-plucode" placeholder="条形码/店内码/拼音码/品名">
        </div>
        <div class="col-5">
          <div class="row">
            <div class="col text-center">
              <h2>0.00</h2>
              <div>总金额</div>
            </div>
            <div class="col text-center">
              <h2>0.00</h2>
              <div>总售价</div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <button class="btn btn-primary btn-block btn-lg full-height" @click="$router.push('../invoice/')">保存进货单</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        date: new Date(),
        // Get more form https://chmln.github.io/flatpickr/options/
        config: {
          wrap: true, // set wrap to true when using 'input-group'
          altInput: false,
          dateFormat: "Y-m-d",
          enableTime: false,
          locale: this.$flatpickrLang
        },
        active: null,
        items: Array(30),
        noDataMsg: '您还没有挂单',
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
