<template>
  <div class="loading-button-wrapper" @click="buttonClick()">
    <div class="button-main">{{text}}</div>
    <div class="loading-view"></div>
  </div>
</template>


<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
  methods: {
    buttonClick(event) {
      this.$emit('click', event);
    },
    startLoading() {

    },
    stopLoading() {

    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import '../../common/scss/variables.scss';

.loading-button-wrapper {
  .button-main {
    width: $loading-button-width;
    height: $loading-button-height;
    line-height: $loading-button-height;
    border-radius: $loading-button-height / 2;
    background-color: rgba(255, 255, 255, 0.5);
    color: #000;
    text-align: center;
    font-size: $font-size-medium;
  }
}
</style>

