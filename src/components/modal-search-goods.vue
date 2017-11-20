<style>
  .page-search-goods tr td {
    font-size: 1rem;
  }

  .page-search-goods .modal-body {
    padding: 0;
  }

  .page-search-goods .search-table {
    height: 20rem;
    position: relative;
  }

</style>
<template>
  <v-modal v-model="show" cancelBtnText="取消" okBtnText="确定" class="page-search-goods"
           @cancel="cancel"
           @ok="select"
           @hotKey_prev.native="up"
           @hotKey_next.native="down"
           @hotKey_enter.native="select"
           @hotKey_cancel.native="cancel">
    <template slot="modal-header">
      <div class="input-group">
        <input type="text" class="form-control" v-model="key" placeholder="商品名称/拼音首字母/条码">
        <div class="input-group-btn">
          <button class="btn btn-secondary" type="button">搜索商品</button>
        </div>
      </div>
    </template>
    <template slot="modal-body">

      <div class="search-table">
        <v-dataTable headHeight="30px" cellHeight="30px" :data="items" v-model="activeIndex" :noDataMsg="noDataMsg">
          <template slot="colgroup">
            <col style="width: 70%">
            <col style="width: 15%">
            <col style="width: 15%">
          </template>
          <template slot="thead">
            <tr>
              <th style="width: 70%" class="text-left">商品名称</th>
              <th style="width: 15%" class="text-right">售价</th>
              <th style="width: 15%" class="text-right">库存</th>
            </tr>
          </template>
          <template slot="tbody" slot-scope="props">
            <td class="text-left" style="width: 45%">{{props.cell.id + props.cell.name}}</td>
            <td class="text-right">{{props.cell.netPrice}}</td>
            <td class="text-right">{{parseFloat(props.cell.quantity.toFixed(3))}}</td>
          </template>

        </v-dataTable>
      </div>

    </template>
  </v-modal>
</template>
<script type="text/ecmascript-6">
  import {debounce} from '../utils/function'

  export default {
    props: ['keyword', 'search'],
    data() {
      return {
        activeIndex: null,
        show: false,
        items: [],
        key: '',
        noDataMsg: '没有找到您要的商品',
        ajax: debounce(this.getGoods, 200),
        serverApi: false //是否访问服务端接口
      }
    },
    watch: {
      search(newVal){
        newVal && (this.show = true)
      },
      keyword(newVal) {
        this.key = newVal;
        if (newVal === null || newVal === '' || newVal === 'undefined') {
          this.show = false;
        }
      },
      show(newVal, oldVal) {
        if (newVal === true && oldVal === false) {
          if(!this.key){
            setTimeout(function () {
              $(this.$el).find('input').focus()
            }.bind(this),200)
          }
        } else {
        }
      },
      key(newVal) {
        console.info('watch:keyword');
        if (newVal) {
          this.ajax();
        }
      }
    },
    created() {
      this.key = this.keyword;
      this.key && this.getGoods();
    },
    methods: {
      /**
       * 获取本地/远程的商品资料
       */
      getGoods() {

        let url = 'goods/list/' + this.key;
        if (this.serverApi) {
          url = 'http://192.168.200.192:3233/' + url;
        }
        this.$http.get(url).then(function (response) {
          if (response.status !== 200) {
            throw new Error(response)
          }
          if (response.data.data === undefined) {
            throw new Error(response);
          }
          if (response.data.data.length === 0) {
            if (this.serverApi) {
              this.$emit('noFindGoods');
              this.serverApi = false;
            } else {
              console.warn('本地没有找到此商品');
              this.serverApi = true;
              this.getGoods();
            }
            return
          }
          this.items = response.data.data;
          this.activeIndex = 0;

          if (response.data.data.length === 1) {
            this.search && this.select()
          } else {
            this.show = true;
          }
        }.bind(this), function (response) {
          throw new Error(JSON.stringify(response));
        }.bind(this));

      },


      /**
       * 选择商品
       */
      select() {
        if(this.items.length===0 || !this.items[this.activeIndex]){
          this.cancel();
        }
        this.$emit('selectGoods', this.items[this.activeIndex]);
      },

      /**
       * 取消
       */
      cancel() {
        this.$emit('cancel');
      },
      close() {
        this.activeIndex = null;
        this.items = [];
        this.show = false;
      },
      up() {
        this.activeIndex = this.activeIndex - 1
      },
      down() {
        this.activeIndex = this.activeIndex + 1
      }
    },
    beforeDestroy() {
      this.tbody = null;
    }
  }
</script>
