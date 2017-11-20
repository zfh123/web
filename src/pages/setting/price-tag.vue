<style scoped>
  .page-price-tag .container-fluid{
    height: calc(100vh - 160px);
    overflow-x: hidden;
    overflow-y: auto;
  }

  .design-area {
    border-top: 1px solid #ddd;
    min-height: 20rem;
    overflow: auto;
    position: relative;
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 3rem;
  }

  .design-item {
    position: absolute;
    top: 0rem;
    left: 0;
    right: 0;
    text-align: center;

  }

  .design-item label {
    padding-left: 1.8rem;
    padding-right: .5rem;
    margin-right: 1rem;
  }

  .design-item label .custom-control-indicator {
    margin-left: .5rem;
  }

  .design-tool .input-group {
    width: 7.5rem;
  }

  .design-card {
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    display: inline-block;
    transform-origin: 50% 0;
    transition: all 0.3s;
    position: relative;
  }

  .design-card .design-list {
    display: inline-block;
    overflow: hidden;
    outline: 1px solid #ddd;
    position: absolute;
    cursor: move;
  }

  .setting-footer {
    background-color: #fff;
    bottom: 0;
    left:16.666667%;
    right:0;
    position: fixed;
    border-top: 1px solid #ddd;
  }

  .container {
    height: calc(100vh - 12.8rem);
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
<template>
  <div class="page-price-tag ">
    <div class=" container-fluid p-3">
      <div class="list-group">
        <div class="list-group-item list-group-item-action">
          <div class="row align-items-center">
            <div class="col-8">
              <h5 class="mb-1 text-primary">价签打印机</h5>
              <small>请选择价格标签打印机。</small>
            </div>
            <div class="col-4 text-right">
              <select type="email" class="custom-select" placeholder="">
                <option value="1">请选择</option>
                <option value="1">XXX 打印机</option>
                <option value="1">XXXXX 打印机</option>
              </select>
            </div>
          </div>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="row align-items-center">
            <div class="col-8">
              <h5 class="mb-1 text-primary">价签打印机类型</h5>
              <small>请选择价格标签打印机的类型。</small>
            </div>
            <div class="col-4 text-right">
              <select type="email" class="custom-select" placeholder="">
                <option value="1">请选择</option>
                <option value="1">普通打印机</option>
                <option value="1">专用价签打印机</option>
              </select>
            </div>
          </div>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="row align-items-center">
            <div class="col-8">
              <h5 class="mb-1 text-primary">价格标签模板</h5>
              <small>设置价签模板后，您还可以进行微调。</small>
            </div>
            <div class="col-4 text-right">
              <select type="email" class="custom-select" placeholder="">
                <option value="1">请选择</option>
                <option value="1">70mm价签模板</option>
                <option value="1">80mm价签模板</option>
                <option value="1">105mm价签模板</option>
              </select>
            </div>
          </div>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="row align-items-center">
            <div class="col">
              <h5 class="mb-1 text-primary">纸张设置</h5>
              <small>请对照说明设置，单位 mm。</small>
            </div>
            <div class="col text-right">
              <div class="input-group">
                <span class="input-group-addon">纸张的宽高</span>
                <input class="form-control" placeholder="纸张宽度" v-model="size.pageWidth">
                <span class="input-group-addon">×</span>
                <input class="form-control" placeholder="0代表无限" v-model="size.pageHeight">
              </div>
              <div class="input-group mt-1">
                <span class="input-group-addon">纸张上边距</span>
                <input class="form-control" placeholder="0" v-model="size.pagePT">
                <span class="input-group-addon">纸张左边距</span>
                <input class="form-control" placeholder="0" v-model="size.pagePL">
              </div>
              <div class="input-group mt-1">
                <span class="input-group-addon">价签的宽高</span>
                <input class="form-control" placeholder="0" v-model="size.cardWidth">
                <span class="input-group-addon">×</span>
                <input class="form-control" placeholder="0" v-model="size.cardHeight">
              </div>
              <div class="input-group mt-1">
                <span class="input-group-addon">标签右边距</span>
                <input class="form-control" placeholder="0" v-model="size.cardMR">
                <span class="input-group-addon">标签下边距</span>
                <input class="form-control" placeholder="0" v-model="size.cardMB">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="design-tool mt-4 mb-2 clearfix">
        <h3 class="float-left">设计价签</h3>
        <div class="input-group ml-2 float-right">
          <div class="input-group-btn">
            <button type="button" class="btn btn-secondary" @click.stop="zoom_in">
              <i class="material-icons">zoom_in</i>
            </button>
          </div>

          <input class="form-control p-0 text-center" v-model.number="zoom">
          <div class="input-group-btn">
            <button type="button" class="btn btn-secondary" @click.stop="zoom_out">
              <i class="material-icons">zoom_out</i>
            </button>
          </div>
        </div>
        <div class="btn-group ml-auto float-right">
          <button type="button" class="btn" :disabled="!active" @click.stop.prevent="setStyle('bold')"
                  :class="boldClass">
            <i class="material-icons">format_bold</i>
          </button>
          <button type="button" class="btn" :disabled="!active" @click.stop.prevent="setStyle('italic')"
                  :class="italicClass">
            <i class="material-icons">format_italic</i>
          </button>
          <button type="button" class="btn" :disabled="!active" @click.stop.prevent="setStyle('underline')"
                  :class="underlineClass">
            <i class="material-icons">format_underlined</i>
          </button>
          <button type="button" class="btn btn-outline-secondary" :disabled="!active"
                  @click.stop.prevent="setStyle('plus')">
            <i class="material-icons">add</i>
          </button>
          <button type="button" class="btn btn-outline-secondary" :disabled="!active"
                  @click.stop.prevent="setStyle('less')">
            <i class="material-icons">remove</i>
          </button>
          <button type="button" class="btn" :disabled="!active" @click.stop.prevent="setStyle('left')"
                  :class="leftClass">
            <i class="material-icons">format_align_left</i>
          </button>
          <button type="button" class="btn" :disabled="!active" @click.stop.prevent="setStyle('right')"
                  :class="rightClass">
            <i class="material-icons">format_align_right</i>
          </button>
        </div>

      </div>
      <div class="design-area bg-grey-3">
        <div class="design-item p-2" v-show="size.cardWidth>0 && size.cardHeight > 0">
          <label class="custom-control custom-checkbox" :class="{'badge-warning rounded':active==='goodsName'}">
            <input type="checkbox" class="custom-control-input" v-model="design.goodsName.show">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">品名</span>
          </label>
          <label class="custom-control custom-checkbox" :class="{'badge-warning rounded':active==='spec'}">
            <input type="checkbox" class="custom-control-input" v-model="design.spec.show">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">规格</span>
          </label>
          <label class="custom-control custom-checkbox" :class="{'badge-warning rounded':active==='netPrice'}">
            <input type="checkbox" class="custom-control-input" v-model="design.netPrice.show">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">售价</span>
          </label>
          <label class="custom-control custom-checkbox" :class="{'badge-warning rounded':active==='vipPrice'}">
            <input type="checkbox" class="custom-control-input" v-model="design.vipPrice.show">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">会员价</span>
          </label>
          <label class="custom-control custom-checkbox" :class="{'badge-warning rounded':active==='origin'}">
            <input type="checkbox" class="custom-control-input" v-model="design.origin.show">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">产地</span>
          </label>
          <label class="custom-control custom-checkbox" :class="{'badge-warning rounded':active==='pluCode'}">
            <input type="checkbox" class="custom-control-input" v-model="design.pluCode.show">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">条码</span>
          </label>
          <label class="custom-control custom-checkbox" :class="{'badge-warning rounded':active==='uom'}">
            <input type="checkbox" class="custom-control-input" v-model="design.uom.show">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">单位</span>
          </label>
        </div>
        <div class="design-card bg-white" :style="cardStyle">
          <div class="design-list" v-for="(item,key) in design" v-if="item.show" v-text="item.text"
               :style="itemStyle(item,key)" :rel="key" :title="item.title">

          </div>
        </div>
      </div>
    </div>
    <div class="setting-footer text-center p-3">
      <button type="button" class="btn btn-primary" :disabled="!printView">打印预览</button>
    </div>
  </div>

</template>
<script>


  export default {
    data() {
      return {
        zoom: 1,
        active: '',
        size: {
          pageWidth: null,
          pageHeight: null,
          cardWidth: 80,
          cardHeight: 40,
          pagePT: 0,
          pagePL: 0,
          cardMB: 0,
          cardMR: 0,
        },
        design: {
          "goodsName": {
            "title": "品名",
            "text": "得力无线胶装笔记本",
            "width": 'auto',
            "height": 'auto',
            "left": 101,
            "top": 7,
            "size": 16,
            "bold": true,
            "underline": false,
            "italic": false,
            "align": "left",
            "show": false
          },
          "spec": {
            "title": "规格",
            "width": 'auto',
            "height": 'auto',
            "text": "A5",
            "left": 40,
            "top": 58,
            "size": 12,
            "bold": false,
            "underline": false,
            "italic": false,
            "align": "left",
            "show": false
          },
          "netPrice": {
            "title": "售价",
            "width": 'auto',
            "height": 'auto',
            "text": "1.5",
            "left": 255,
            "top": 58,
            "size": 22,
            "bold": false,
            "underline": false,
            "italic": false,
            "align": "left",
            "show": false
          },
          "vipPrice": {
            "title": "会员价",
            "width": 'auto',
            "height": 'auto',
            "text": "1.5",
            "left": 255,
            "top": 58,
            "size": 22,
            "bold": false,
            "underline": false,
            "italic": false,
            "align": "left",
            "show": false
          },
          "uom": {
            "title": "单位",
            "width": 'auto',
            "height": 'auto',
            "text": "本",
            "left": 157,
            "top": 63,
            "size": 12,
            "bold": false,
            "underline": false,
            "italic": false,
            "align": "left",
            "show": false
          },
          "origin": {
            "title": "产地",
            "width": 'auto',
            "height": 'auto',
            "text": "1.5",
            "left": 255,
            "top": 58,
            "size": 22,
            "bold": false,
            "underline": false,
            "italic": false,
            "align": "left",
            "show": false
          },
          "pluCode": {
            "title": "条码",
            "width": 'auto',
            "height": 'auto',
            "text": "6921734979865",
            "left": 35,
            "top": 88,
            "size": 12,
            "bold": false,
            "underline": false,
            "italic": false,
            "align": "left",
            "show": false
          },
          "service": {
            "title": "12358",
            "width": 'auto',
            "height": 'auto',
            "text": "监督电话：12358",
            "left": 275,
            "top": 125,
            "size": 12,
            "bold": false,
            "underline": false,
            "italic": false,
            "align": "right",
            "show": false
          }
        },
        printView: false
      }
    },
    watch: {
      design: {
        handler(val) {
          this.printView = false;
          $.each(val, function (key, item) {
            if (item.show === true) {
              this.printView = true;
              return false
            }
          }.bind(this));
          setTimeout(function () {
            let item = $('.page-price-tag .design-card .design-list'), $this = this;
            item.mousedown(function () {
              $this.active = $(this).attr('rel');
            }).resizable().draggable({
              containment: ".design-card",
              cancel: ".ui-resizable-handle",
              scroll: false,
              start: function () {
              },
              drag: function () {

              },
              stop: function (event, ui) {

              }
            });
          }.bind(this), 0)

        },
        deep: true
      }
    },
    computed: {
      designName() {
        return (this.active && this.design[this.active].title) ? this.design[this.active].title : ''
      },
      pageStyle() {
        console.info(this.size.pageWidth)
        return `width:${this.size.pageWidth}mm ;height:${this.size.pageHeight}mm;
        padding-top:${this.size.pagePT}mm;padding-left:${this.size.pagePL}mm;transform: scale(${this.zoom});`
      },
      cardStyle() {
        return `width:${this.size.cardWidth}mm;height:${this.size.cardHeight}mm;
        margin-bottom:${this.size.cardMB}mm;margin-right:${this.size.cardMR}mm;transform: scale(${this.zoom});`
      },
      underlineClass() {
        return (this.active && this.design[this.active].underline) ? 'btn-success' : 'btn-outline-secondary';
      },
      italicClass() {
        return (this.active && this.design[this.active].italic) ? 'btn-success' : 'btn-outline-secondary';

      },
      boldClass() {
        return (this.active && this.design[this.active].bold) ? 'btn-success' : 'btn-outline-secondary';
      },
      leftClass() {
        return (this.active && this.design[this.active].align === 'left') ? 'btn-success' : 'btn-outline-secondary';
      },
      rightClass() {
        return (this.active && this.design[this.active].align === 'right') ? 'btn-success' : 'btn-outline-secondary';
      }
    },
    mounted() {
    },
    methods: {
      itemStyle(item, key) {
        return `${(this.active === key ? 'outline-color: #007bff;' : '')}left:${item.left}px;top:${item.top}px;
        font-size:${item.size}px;font-weight:${item.bold ? 'bold' : '100'};
        text-decoration: ${item.underline ? 'underline' : 'none'};
        font-style: ${item.italic ? 'italic' : 'normal'};text-align:${item.align};`;
      },
      setStyle(type, data) {
        if (!this.design[this.active]) {
          return
        }
        switch (type) {
          case 'plus':
            this.design[this.active].size++;
            break;
          case 'less':
            this.design[this.active].size--;
            break;
          case 'underline':
            this.design[this.active].underline = !this.design[this.active].underline;
            break;
          case 'bold':
            this.design[this.active].bold = !this.design[this.active].bold;
            break;
          case 'italic':
            this.design[this.active].italic = !this.design[this.active].italic;
            break;
          case 'left':
          case 'right':
            this.design[this.active].align = type;
            break;
          case 'position':
            this.design[this.active].top = data.top;
            this.design[this.active].left = data.left;
            break;
        }
      },
      zoom_in() {
        this.zoom = parseFloat(window.math.eval(`${this.zoom} + 0.5`).toFixed(2))
      },
      zoom_out() {
        this.zoom = parseFloat(window.math.eval(`${this.zoom} - 0.5`).toFixed(2))
      }
    }
  }
</script>
