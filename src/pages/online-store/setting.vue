<style scoped>

</style>
<template>
  <div class="p-3 online-store-setting">
    <div class="list-group">
      <div class="list-group-item">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">云店营业状态</h5>
            <small>系统会同步设置美团、微信、饿了么的状态。</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle" openText="营业" closeText="打烊"></v-switch>
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
                  class="form-control bg-white"

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
                  class="form-control bg-white"

                  name="date">
                </flat-pickr>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="list-group-item">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">启用云店会员价</h5>
            <small>启用后，云店商品也支持会员价，可以给不同等级的会员分别定价</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
          </div>
        </div>
      </div>
      <div class="list-group-item">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">起送金额</h5>
            <small>只有大于此金额的，才可以下单购买</small>
          </div>
          <div class="col-4 text-right">
            <div class="input-group">
              <input class="form-control">
              <span class="input-group-addon">公里</span>
            </div>
          </div>
        </div>
      </div>
      <div class="list-group-item">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">配送范围</h5>
            <small>设置后，只有此范围内的买家才可以进行购买，建议不超过5公里</small>
          </div>
          <div class="col-4 text-right">
            <div class="input-group">
              <input class="form-control">
              <span class="input-group-addon">公里</span>
            </div>
          </div>
        </div>
      </div>
      <div class="list-group-item">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">配送费</h5>
            <small>配送费支持分时段设置哦</small>
          </div>
          <div class="col-4 text-right">
            <div class="input-group">
              <span class="input-group-addon">07:00 - 22:00</span>
              <input class="form-control">
              <span class="input-group-addon">元</span>
            </div>
            <div class="input-group mt-1">
              <span class="input-group-addon">22:00 - 07:00</span>
              <input class="form-control">
              <span class="input-group-addon">元</span>
            </div>
          </div>
        </div>
      </div>
      <div class="list-group-item">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">免配送费</h5>
            <small>设置为"0"，则代表不免配送费</small>
          </div>
          <div class="col-4 text-right">
            <div class="input-group">
              <span class="input-group-addon">订单金额满</span>
              <input class="form-control" value="0">
              <span class="input-group-addon">元</span>
            </div>
          </div>
        </div>
      </div>
      <div class="list-group-item">
        <div class="row align-items-center">
          <div class="col-8">
            <h5 class="mb-1 text-primary">自行配送</h5>
            <small>如果您有自行配送人员，请开启本功能</small>
          </div>
          <div class="col-4 text-right">
            <v-switch size="md" color="blue" v-model="toggle"></v-switch>
            <div class="input-group">
              <span class="input-group-addon">配送员姓名</span>
              <input class="form-control">
            </div>
            <div class="input-group mt-1">
              <span class="input-group-addon">配送员手机</span>
              <input class="form-control">
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
        toggle:false,
        startTime: '07:00',
        // Get more form https://chmln.github.io/flatpickr/options/
        startTimeConfig: {
          enableTime: true,
          noCalendar: true,
          time_24hr: true,
          defaultHour: 7,
          defaultMinute: 0,
          locale: this.$flatpickrLang
        },
        endTime: '23:30',
        endTimeConfig: {
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
    methods: {
      showMenu(e) {

      }
    },
    beforeDestroy() {

    }
  }
</script>
