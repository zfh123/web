<style scoped>
  .toast {
    min-width: 20vw;
    max-width: 100vw;
    overflow: hidden;
    transition: all .5s ease;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    transform: scale(1);
  }

  .close-toast {
    opacity: 0;
    transform: scale(0);
  }
  .toast-content{
    white-space:nowrap;

  }
</style>
<template>
    <div class="toast alert fade show" :class="toastClass" v-if="value!==null">
      <slot>
        <button type="button" class="close" @click.stop="close" v-show="value.showClose">
          <span>&times;</span>
        </button>
        <div class="toast-content" v-html="value.content" :style="value.showClose?'margin-right: 20px;':''"></div>
      </slot>
    </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: Object,
        default: {}
      },
    },
    computed: {
      toastClass() {
        return `${this.value.showClose ? ' alert-dismissible' : ''} alert-${this.value.type} ${this.closed ? 'close-toast' : ''}`
      }
    },
    watch:{
      value:{
        handler(newVal,oldval){
          if(newVal===null || !this.value.time)return;
          clearTimeout(this.timeId)
          this.timeId = setTimeout(this.autoClose, newVal.time)
        },
        deep:true
      }
    },
    data() {
      return {
        closed:false,
        timeId:null
      }
    },
    mounted() {
    },
    methods: {

      autoClose() {
        this.closed = true;
        setTimeout(function () {
          this.closed = false;
          this.$emit('close', null);
        }.bind(this), 300)

      },
      close() {
        this.closed = false;
        this.$emit('close',null);
      }
    }
  }
</script>
