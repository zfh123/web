<style scoped>
  .page-goods {
    position: relative;
  }

  .page-goods .page-goods-main {
    height: calc(100vh - 162px);
    overflow-y: auto;
    overflow-x: hidden;
  }

  .page-goods .page-goods-main .img-fluid {
    max-height: 130px;
  }


  .more-config .form-control,
  .more-config .custom-select,
  .more-config .input-group-addon {
    border: none;
    border-radius: 0;
    background-color: #fff;
  }

  .more-config .col-2,
  .more-config .col-3,
  .more-config .col-4 {
    border-right: 1px solid #ddd;
  }

  .setting-footer {
    background-color: #fff;
    border-top: 1px solid #ddd;
  }
</style>
<template>
  <div class="page-goods">
    <div class="page-goods-main">
      <div class="card m-3">
        <div class="card-body">
          <div class="form-group">
            <label class="col-form-label">商品条码/店内码</label>
            <div class="input-group">
              <input class="form-control" v-model="pluCode" placeholder="请输入商品条码或店内码">
              <div class="input-group-btn">
                <button class="btn btn-secondary" type="button">生成条码</button>
                <!--
                生成的条码：6位，条码只允许：2-6位 或 8-20位
                2-6位的当做店内码
                -->
              </div>
            </div>
            <small class="form-text text-muted">如果没有条码，您可以输入2-6位以下的数字作为店内码使用</small>
          </div>
          <div class="form-row" v-show="pluCode!=''">
            <div class="col-3">
              <img src="http://big5.made-in-china.com/images/common/empty_mid.png" class="img-fluid">
            </div>
            <div class="col-9">
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">品名</span>
                  <input class="form-control">
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">规格</span>
                  <input class="form-control">
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">分类</span>
                  <select class="custom-select" required>
                    <option value="">请选择</option>
                    <option value="1">One</option>
                    <option value="2" disabled>Two</option>
                    <option value="2"> -- Two</option>
                    <option value="2"> -- Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div class="input-group-btn">
                    <button class="btn btn-secondary" type="button" @click.prevent.stop="showCatalogueModel=true">添加分类</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group col-12">
              <div class="input-group">
                <span class="input-group-addon">进价</span>
                <input class="form-control">
                <span class="input-group-addon">售价</span>
                <input class="form-control">
                <span class="input-group-addon w-25">毛利：100%</span>
              </div>
            </div>
            <div class="form-group col-12">
              <div class="input-group">
                <span class="input-group-addon">库存</span>
                <input class="form-control">
                <span class="input-group-addon">单位</span>
                <select class="custom-select" required>
                  <option value="">请选择</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div class="input-group-addon w-25">
                  20元/箱
                  <a href="#" class="ml-auto" @click.prevent.stop="showUnitModel=true">添加单位</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="pluCode!=''" class="list-group ml-3 mr-3  mb-3">
        <div class="list-group-item list-group-item-action">
          <div class="row align-items-center">
            <div class="col-8">
              <h5 class="mb-1 text-primary">电子秤商品</h5>
              <small>设置为"电子秤商品"后，商品信息才可以被导出或同步到电子秤中。</small>
            </div>
            <div class="col-4 text-right">
              <v-switch size="md" color="blue" v-model="scalesConfig"></v-switch>
            </div>
          </div>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="row align-items-center">
            <div class="col-8">
              <h5 class="mb-1 text-primary">贵重商品</h5>
              <small>设置为"贵重商品"后，在收银员交接班时可以方便的进行核对和交接。</small>
            </div>
            <div class="col-4 text-right">
              <v-switch size="md" color="blue" v-model="costlyConfig"></v-switch>
            </div>
          </div>
        </div>
      </div>
      <div v-show="pluCode!=''" class="card ml-3 mr-3  mb-3">
        <div class="card-header bg-white">
          <div class="row">
            <div class="col-8">
              <h5 class="mb-1 text-primary">更多包装</h5>
              <small>在这里您 可以为此商品设置其他包装规格的价格。</small>
            </div>
            <div class="col-4 text-right">
              <v-switch size="md" color="blue" v-model="moreConfig" @click="scrollBottom"></v-switch>
            </div>
          </div>
        </div>

        <div class="card-body more-config" v-show="moreConfig">
          <table class="border-0 table table-bordered m-0 ">
            <thead>
            <tr>
              <th style="width:20%">包装单位</th>
              <th style="width:15%">包装数量</th>
              <th style="width:15%">售价</th>
              <th>包装码</th>
              <th style="width:8%"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><select class="custom-select" required>
                <option value="">请选择</option>
                <option value="1">箱</option>
                <option value="2">盒</option>
                <option value="3">提</option>
              </select></td>
              <td>
                <label class="input-group m-0">
                  <input class="form-control" value="1">
                  <span class="input-group-addon">瓶</span>
                </label>
              </td>
              <td><input class="form-control" value="12.5"></td>
              <td><input class="form-control" placeholder="选填"></td>
              <td>
                <button class="btn btn-link btn-block" type="button"><i class="material-icons">delete_forever</i>
                </button>
              </td>
            </tr>
            </tbody>
          </table>


        </div>
      </div>
      <div v-show="pluCode!=''" class="card ml-3 mr-3  mb-3">
        <div class="card-header bg-white">
          <div class="row">
            <div class="col-8">
              <h5 class="mb-1 text-primary">扩展功能</h5>
              <small>管理保质期，库存预警。</small>
            </div>
            <div class="col-4 text-right">
              <v-switch size="md" color="blue" v-model="otherConfig" @click="scrollBottom"></v-switch>
            </div>
          </div>
        </div>

        <div class="card-body pb-0" v-show="otherConfig">
          <div class="row">
            <div class="form-group col-6">
              <div class="input-group">
                <span class="input-group-addon">生产日期</span>
                <input class="form-control">
              </div>
            </div>

            <div class="form-group col-6">
              <div class="input-group">
                <span class="input-group-addon">库存上限</span>
                <input class="form-control">
              </div>
            </div>
            <div class="form-group col-6">
              <div class="input-group">
                <span class="input-group-addon">保 质 期</span>
                <input class="form-control">
                <span class="input-group-addon">天</span>
              </div>
            </div>
            <div class="form-group col-6">
              <div class="input-group">
                <span class="input-group-addon">库存下限</span>
                <input class="form-control">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="pluCode!=''" class="card ml-3 mr-3  mb-3">
        <div class="card-header bg-white">
          <div class="row">
            <div class="col-8">
              <h5 class="mb-1 text-primary">会员功能</h5>
              <small>您可以为此商品设置会员价,如果启用了云店会员，折扣也会对云店商品生效。</small>
            </div>
            <div class="col-4 text-right">
              <v-switch size="md" color="blue" v-model="memberConfig" @click="scrollBottom"></v-switch>
            </div>
          </div>
        </div>

        <div class="card-body pb-0" v-show="memberConfig">
          <div class="row align-items-center">
            <div class="form-group col-12">
              <div class="input-group">
                <span class="input-group-addon">普通会员</span>
                <input class="form-control">
                <span class="input-group-addon">折</span>
              </div>
            </div>
            <div class="form-group col-12">
              <div class="input-group">
                <span class="input-group-addon">银卡会员</span>
                <input class="form-control">
                <span class="input-group-addon">折</span>
              </div>
            </div>
            <div class="form-group col-12">
              <div class="input-group">
                <span class="input-group-addon">金卡会员</span>
                <input class=" form-control">
                <span class="input-group-addon">折</span>
              </div>
            </div>
            <div class="form-group col-12">
              <div class="input-group">
                <span class="input-group-addon">铂金会员</span>
                <input class="form-control">
                <span class="input-group-addon">折</span>
              </div>
            </div>
            <div class="form-group col-12">
              <div class="input-group">
                <span class="input-group-addon">钻石会员</span>
                <input class="form-control">
                <span class="input-group-addon">折</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="setting-footer d-flex p-3">
      <button type="button" class="btn btn-md w-25 btn-primary">保存</button>
      <button type="button" class="ml-auto mr-2 btn btn-secondary  btn-md w-25">取消</button>
    </div>
    <addUnit v-model="showUnitModel" :editing="false" :data="null"></addUnit>
    <addCatalogue v-model="showCatalogueModel" :editing="false" :data="null"></addCatalogue>
  </div>
</template>
<script>
  import addCatalogue from './catalogue-add-model.vue'
  import addUnit from './unit-add-model.vue'
  export default {
    components: {addUnit,addCatalogue},
    data() {
      return {
        pageGoodsMain: null,
        scalesConfig: 0,
        costlyConfig: 0,
        moreConfig: 0,
        otherConfig: 0,
        memberConfig: 0,
        pluCode: '',
        showCatalogueModel:false,
        showUnitModel:false
      }
    },
    computed: {},
    watch: {},
    created() {

    },
    mounted() {
      this.pageGoodsMain = $('.page-goods-main')
    },
    methods: {
      scrollBottom() {
        setTimeout(function () {
          this.pageGoodsMain.animate({scrollTop: this.pageGoodsMain[0].scrollHeight}, 300);
        }.bind(this), 0)
      }
    },
    beforeDestroy() {
    }
  }
</script>
