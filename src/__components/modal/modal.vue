<style scoped>
  .show {
    display: block;
  }

  .modal-dialog {
    z-index: 1072;
  }

  .modal-backdrop {
    z-index: 1071;
  }
</style>
<template>
  <div class="modal fade" tabindex="-1" role="dialog" :class="{show:value}" ref="modal">
    <div class="modal-dialog" :class="modalSize">
      <div class="modal-content">
        <div class="modal-header" v-show="!hindHeader">
          <slot name="modal-header">
            <h5 class="modal-title" v-text="modalTitle"></h5>
            <button type="button" class="close" v-show="!hindClose" @click.prevent.stop="cancel">
              <span>&times;</span>
            </button>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer" v-show="!hindFooter">
          <slot name="modal-footer">
            <button type="button" class="btn btn-secondary" @click.prevent.stop="cancel"
                    v-text="cancelBtnText"></button>
            <button type="button" class="btn btn-primary" @click.prevent.stop="ok" v-text="okBtnText"></button>
          </slot>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade" :class="{show:value}" v-show="!hindMask"></div>
  </div>
</template>

<script>

  export default {
    props: {
      modalTitle: {
        type: String,
        default: null
      },
      cancelBtnText: {
        type: String,
        default: '取消'
      },
      okBtnText: {
        type: String,
        default: '确定'
      },
      hindHeader: {
        type: Boolean,
        default: false
      },
      hindClose: {
        type: Boolean,
        default: false
      },
      hindFooter: {
        type: Boolean,
        default: false
      },
      hindMask: {
        type: Boolean,
        default: false
      },
      value: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: null
      },
      size: {
        type: String,
        default: null
      }
    },
    data() {
      return {};
    },
    computed: {
      themeClass() {
        return type === null ? '' : `bg-${type}`
      },
      modalSize() {
        return this.size !== null ? 'modal-' + this.size : ''
      }
    },
    watch: {},
    methods: {
      close() {
        this.$emit('input', false);
        this.$emit('close');
      },
      ok() {
        this.$emit('ok');
        this.close()
      },
      cancel() {
        this.$emit('cancel');
        this.close()
      }
    },
    created() {

    },
    mounted() {

    },
    beforeDestroy() {
    }
  };
</script>
