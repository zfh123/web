<style scoped>
  .vue-switch {
    position: relative;
    display: inline-block;
    width: 5rem;
    height: 2.2rem;
    line-height: 2.2rem;
    border-radius: 2.2rem;
    background-color: #d5d5d5;
    cursor: pointer;
    transition: all 0.21s ease;
    user-select: none;
    overflow: hidden;
    transform: rotate(0deg);
    text-align: left;
  }

  .vue-switch span {
    font-size: 1rem;
    color: #222;
  }
  .vue-switch span:first-child {
    margin-left: .5rem;
  }
  .vue-switch span:last-child {
    float: right;
    margin-right: .5rem;
  }

  .vue-switch::after {
    position: absolute;
    content: '';
    width: 1.85rem;
    height: 1.85rem;
    border-radius: 1.8rem;
    background-color: #fff;
    left: 0.2rem;
    top: 0.2rem;
    cursor: pointer;
    transition: left 0.23s ease, width 0.23s ease, background-color 0.23s ease;
  }

  .vue-switch:active::after {
    width: 2.2rem;
  }

  .vue-switch.on {
    background-color: #d33;
    border-color: #d33;
  }

  .vue-switch.on.c-blue {
    background-color: #3091f2;
    border-color: #3091f2;
  }

  .vue-switch.on.c-orange {
    background-color: #f60;
    border-color: #f60;
  }

  .vue-switch.on.c-green {
    background-color: #0c6;
    border-color: #0c6;
  }

  .vue-switch.on:active::after {
    left: 2.6rem;
  }

  .vue-switch.on::after {
    left: 3rem;
  }

</style>
<template>
  <div :class="className" @click.stop="change">
    <span v-show="value">{{ openName }}</span>
    <span v-show="!value">{{ closeName }}</span>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        default: true
      },
      // sm小 md中 lg大
      size: {
        type: String,
        default: 'md中'
      },
      // blue red green orange
      color: {
        type: String,
        default: 'red'
      },
      openValue: {
        default: true
      },
      closeValue: {
        default: false
      },
      openName: {
        type: String,
        default: '是'
      },
      closeName: {
        type: String,
        default: '否'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      click:{
        type:Function,
        default:null
      }
    },
    computed: {
      className() {
        let {
          value,
          openValue,
          closeValue,
          size,
          color,
          disabled
        } = this;
        return {
          'vue-switch': true,
          'on': value === openValue,
          'z-disabled': disabled,
          ['s-' + size]: true,
          ['c-' + color]: true
        };
      }
    },
    methods: {
      change() {
        let {
          disabled,
          value,
          openValue,
          closeValue
        } = this;
        if (!disabled) {

          if (openValue === value) {
            this.$emit('input', closeValue);
          } else {
            this.$emit('input', openValue);
          }
          this.$emit('click');
        }
      }
    }
  }
</script>
