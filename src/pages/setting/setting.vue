<template>
  <div class="container-fluid p-3">
    <div class="list-group">
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">会员生日祝福</h5>
            <small>每当会员生日时，系统自动发送祝福短信，请确保您有可用的短信</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">会员等级折扣价</h5>
            <small>单个商品是否启用不同等级的会员价格。</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">启用会员储值功能</h5>
            <small>可以给会员充值，充值的金额可以在门店进行消费</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">会员余额消费时使用密码</h5>
            <small>会员使用余额进行支付时，是否要求输入密码确认。</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">编辑会员积分、余额</h5>
            <small>收银员在进行会员新增、修改、批量导入操作，是否可以编辑会员积分、余额</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">完成收银显示找零提示</h5>
            <small>完成收银后，是否显示找零提示窗口。</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">收银金额零头处理</h5>
            <small>对最终应收金额的零头处理方式。</small>
          </div>
          <div class="col-4 text-right">
            <select type="email" class="custom-select" placeholder="">
              <option value="1">不抹零</option>
              <option value="1">四舍五入到'角'</option>
              <option value="1">四舍五入到'元'</option>
              <option value="1">抹掉零头'分'</option>
              <option value="1">抹掉零头'角'</option>
            </select>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">单个商品的最低售价</h5>
            <small>允许收银员修改单个商品价格的限制。</small>
          </div>
          <div class="col-4 text-right">
            <select type="email" class="custom-select" placeholder="">
              <option value="1">随意改</option>
              <option value="1">最多95折</option>
              <option value="1">最多9折</option>
              <option value="1">最多85折</option>
              <option value="1">最多8折</option>
              <option value="1">最多75折</option>
              <option value="1">最多7折</option>
            </select>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">整个订单最大折扣</h5>
            <small>当收银员修改了商品/订单价格时，整体优惠金额是否限制。</small>
          </div>
          <div class="col-4 text-right">
            <select type="email" class="custom-select" placeholder="">
              <option value="1">随意改</option>
              <option value="1">最多95折</option>
              <option value="1">最多9折</option>
              <option value="1">最多85折</option>
              <option value="1">最多8折</option>
              <option value="1">最多75折</option>
              <option value="1">最多7折</option>
            </select>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">可以作废已交接班的订单</h5>
            <small>已交接班过的单据，是否允许进行作废操作。</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">收银小票模板</h5>
            <small>设置后，可以对收银小票进行修改。</small>
          </div>
          <div class="col-4 text-right">
            <select type="email" class="custom-select" placeholder="">
              <option value="1">请选择</option>
              <option value="1" selected>完整版</option>
              <option value="1">精简版</option>
            </select>
            <button class="btn btn-outline-primary">编辑模板</button>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">卖出时自动打印收银小票</h5>
            <small>卖出商品时，是否需要自动打印小票。</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">退货小票模板</h5>
            <small>设置后，可以对退货小票进行修改。</small>
          </div>
          <div class="col-4 text-right">
            <select type="email" class="custom-select" placeholder="">
              <option value="1">请选择</option>
              <option value="1">完整版</option>
              <option value="1">精简版</option>
            </select>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">退货时自动打印退货小票</h5>
            <small>进行退货操作，是否需要自动打印小票</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">按进货单入库</h5>
            <small>根据进货单进行入库可以更方便对账和管理</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">入库时先选择供应商</h5>
            <small>根据进货单进行入库可以更有效的管理商品</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">入库小票模板</h5>
            <small>设置后，可以对退货小票进行修改。</small>
          </div>
          <div class="col-4 text-right">
            <select type="email" class="custom-select" placeholder="">
              <option value="1">请选择</option>
              <option value="1">完整版</option>
              <option value="1">精简版</option>
            </select>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">入库时自动打印入库单</h5>
            <small>进行入库操作，是否需要自动打印入库单</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">商品库存允许编辑</h5>
            <small>在编辑商品时，可以直接修改库存</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">门店营业时间</h5>
            <small>设置了营业时间才可以申请开通云店，营业期间才可以下单</small>
          </div>
          <div class="col-4 text-right">
            <div class="row no-gutters">
              <div class="col">
                <flat-pickr
                  v-model="startTime"
                  placeholder="请选择时间"
                  :config="startTimeConfig"
                  :required="true"
                  class="form-control"

                  name="date">
                </flat-pickr>
              </div>
              <div class="col-1 text-center">-</div>
              <div class="col">
                <flat-pickr
                  v-model="endTime"
                  placeholder="请选择时间"
                  :config="endTimeConfig"
                  :required="true"
                  class="form-control"

                  name="date">
                </flat-pickr>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {

    data() {
      return {
        toggle: !0,
        startTime: '07:00',
        // Get more form https://chmln.github.io/flatpickr/options/
        startTimeConfig: {
          wrap: true, // set wrap to true when using 'input-group'
          altInput: false,
          enableTime: true,
          noCalendar: true,
          time_24hr: true,
          defaultHour: 7,
          defaultMinute: 0,
          locale: this.$flatpickrLang
        },
        endTime: '23:30',
        endTimeConfig: {
          wrap: true, // set wrap to true when using 'input-group'
          altInput: false,
          enableTime: true,
          noCalendar: true,
          time_24hr: true,
          defaultHour: 7,
          defaultMinute: 0,
          locale: this.$flatpickrLang
        },
      }
    },
    computed: {},
    watch: {},
    created() {

    },
    mounted() {

    },
    methods: {},
    beforeDestroy() {
    }
  }
</script>
