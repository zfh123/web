<style scoped>
  .data-table {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }

  .table {
    margin-bottom: 0;
  }

  th {
    padding-top: 0;
    padding-bottom: 0;
  }

  td {
    word-break: break-all;
    font-size: 16px;
    vertical-align: middle;
  }

  .table-body {
    overflow: auto;
    position: relative;
  }

  .table-page {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    overflow: auto;
  }
  .table-body tr:first-child td{
    border-top: none;
  }
  .table-body tr.active td {
    background-color: #ffe8a1;
  }
  .table-footer{
    border-top:1px solid #ddd;
    overflow: hidden;
  }
</style>
<template>
  <div class="data-table">
    <table class="table table-sm" v-if="!hideHeader">
      <thead :style="headStyle">
      <slot name="thead">
        <tr>
          <th>自定义列标题</th>
        </tr>
      </slot>
      </thead>
    </table>
    <div class="table-body" :style="bodyStyle">
      <table class="table table-hover table-sm">
        <colgroup>
          <slot name="colgroup">

          </slot>
        </colgroup>
        <tbody>
        <tr v-for="(cell,index) in data" :style="cellStyle" :class="{active:index===value}"
            @click.stop="setValue(index)">
          <slot name="tbody" :cell="cell" :index="index">
            <td>{{index}}</td>
          </slot>
        </tr>
        <slot name="no-data">
          <tr v-if="data.length===0">
            <td class="text-warning text-center" v-html="noDataMsg"></td>
          </tr>
        </slot>
        </tbody>
      </table>
    </div>
    <div class="table-footer" v-if="footHeight!==null" :style="pageStyle">
      <slot name="tfooter">

      </slot>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      hideHeader:{
        type: Boolean,
        default: false
      },
      headHeight: {
        type: String,
        default: null
      },
      cellHeight: {
        type: String,
        default: null
      },
      footHeight: {
        type: String,
        default: null
      },
      data: {
        type: Array,
        default: []
      },
      noDataMsg: {
        type: String,
        default: '没有找到您要的数据'
      },
      value: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        tbody: null,
        table: null
      };
    },
    computed: {
      cellStyle() {
        return this.cellHeight === null ? '' : `height:${this.cellHeight}`;
      },
      headStyle() {
        return this.headHeight === null ? '' : `line-height:${this.headHeight}`;
      },
      bodyStyle() {
        let height = '100%';
        if(!this.hideHeader){
          if(this.headHeight !== null){
            height = `${height} - ${this.headHeight} - 3px`;
          }else{
            height = `${height} - 50px`;
          }
        }

        if(this.footHeight !== null){
          height = `${height} - ${this.footHeight }  + 1px`;
        }

        return `height:calc(${height})`;
      },
      pageStyle() {
        return this.footHeight === null ? '' : `height:${this.footHeight}`;
      }
    },
    watch: {
      /**
       * 监听当前索引，检查是否超出范围
       */
      value(newVal) {
        if (newVal === null) return
        this.checkData(this.data)
        setTimeout(function () {
          this.setActive(newVal)
        }.bind(this), 100)

      },
      /**
       * 监听数据的变化,检查是否需要修改当前索引
       * 当items发生变化时，如果当前的activeIndex超出items的length，重新赋值
       */
      data(newVal) {
        this.checkData(newVal)
      },
    },
    methods: {
      /**
       * 通用的检查数据方法
       * @param data
       */
      checkData(data) {
        if (data.length > 0) {
          if (this.value >= data.length) {
            this.$emit('input', data.length - 1);
          }
          if (this.value < 0) {
            this.$emit('input', 0);
          }
        } else {
          this.$emit('input', null);
        }
      },
      /**
       * 设置当前选中的索引值
       * @param index
       */
      setValue(index) {
        this.$emit('input', index);
      },
      /**
       * 滚动到当前索引位置
       * @param index
       */
      setActive(index) {
        if (index < 0 || index === null) {
          return
        }
        if (this.data.length === 0) {
          return
        }

        if (index === this.data.length) {
          index = this.data.length - 1;
        }
        this.tbody = this.tbody || $(this.$el).find('.table-body');
        if (this.tbody.length === 0) {
          console.warn('找不到 body');
          return;
        }

        this.table = this.table || this.tbody.find('table');
        if (this.table.length === 0) {
          console.warn('找不到 table');
          return;
        }
        let tbodyHeight = this.tbody.outerHeight(),
          scrollTop = this.tbody.scrollTop(),
          tableHeight = this.table.outerHeight();

        if (tbodyHeight >= tableHeight) {
          return
        }

        let tr = this.table.find('tr').eq(index),
          trHeight = tr.outerHeight(),
          trPosition = tr.position().top;

        if (trPosition === 0) {
          return;
        }

        if (trPosition < 0) {
          console.info('position.top < 0',scrollTop, trPosition);
          this.tbody.stop().animate({scrollTop: scrollTop + trPosition}, 150);
        } else {
          console.info('position.top > 0');
          if (trPosition + trHeight > tbodyHeight) {
            console.info('position.top + height > tableHeight');
            this.tbody.stop().animate({scrollTop: scrollTop + trPosition + trHeight - tbodyHeight}, 150);
          }
        }
        trPosition = null;
        trHeight = null;
        tr = null;
        tableHeight = null;
        scrollTop = null;
        tbodyHeight = null;


      }
    },
    created() {
       this.data.length > 0 && this.value === null && this.setValue(0)
    },
    mounted() {
      this.setActive(this.value);
    },
    beforeDestroy() {
      this.tbody = null;
      this.table = null;
    }
  };
</script>
