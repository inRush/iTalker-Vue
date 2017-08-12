<template>
  <div class="multipart-input-wrapper">
    <div class="input-item" v-for="(input,index) in inputs" :key="input.hint">
      <div class="icon">
        <i class="fa" :class="getIcon(input.icon)"></i>
      </div>
      <div class="input">
        <input ref="inputs" @input='handleInput' :data-key='input.key' :type="input.type" @focus="handleFocus(index)">
        <span class="hint" :class="{'active':currentIndex === index || haveContent(input.key)}">{{input.hint}}</span>
      </div>
      <div v-show="index != 0" class="split"></div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    inputs: {
      type: Array,
    },
  },
  methods: {
    getIcon(icon) {
      return `fa-${icon}`;
    },
    handleFocus(index) {
      this.currentIndex = index;
    },
    handleInput(event) {
      const key = event.target.getAttribute('data-key');
      const value = event.target.value;
      this.$emit('inputChange', key, value);
      this.inputValue[key] = value;
    },
    haveContent(key) {
      const content = this.inputValue[key];
      return content && content !== '';
    },
  },
  data() {
    return {
      currentIndex: -1,
      inputValue: {},
    };
  },
  watch: {
    inputs() {
      const inputs = this.$refs.inputs;
      inputs[0].focus();
      for (let i = 0; i < inputs.length; i += 1) {
        inputs[i].value = null;
      }
      this.inputValue = {};
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import '../../common/scss/variables.scss';

.multipart-input-wrapper {
  border-radius: 3px;
  background: rgba(255, 255, 255, 1);
  .input-item {
    position: relative;
    width: $input-width;
    height: $input-height;
    padding: 0 15px;
    font-size: $font-size-medium-x;
    .icon {
      position: absolute;
      line-height: $input-height;
      color: $color-text-accent;
    }
    .input {
      position: relative;
      margin-left: 25px;
      line-height: $input-height;
      .hint {
        position: absolute;
        left: 5px;
        font-size: $font-size-medium;
        color: $color-text-second;
        transition: all 0.3s;
        &.active {
          color: $color-text-primary;
          transform: scale(0.8) translate3d(-10px, -25px, 0);
        }
      }
      input {
        position: absolute;
        height: $input-height / 2;
        width: $input-width - 15;
        top: $input-height / 4 - 2;
        font-size: $font-size-medium-x;
        border: none;
        outline: none;
        background: none;
        background-color: #fff !important;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px #fff inset;
        }
      }
    }
    .split {
      height: 1px;
      width: $input-width - 20;
      margin-left: 20px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>

