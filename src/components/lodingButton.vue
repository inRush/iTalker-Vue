<template>
  <div class="loading-button-wrapper" @click="buttonClick()">
    <div class="button-main" :class="{'loading':loading}">{{text}}</div>
    <div class="loading-view" v-show="loading">
      <loading :radius="loadingSize"></loading>
    </div>
  </div>
</template>


<script>
import Loading from 'components/loading';

export default {
  props: {
    text: {
      type: String,
    },
  },
  data() {
    return {
      loadingSize: 36,
      loading: false,
    };
  },
  methods: {
    buttonClick(event) {
      if (this.loading) return;
      this.$emit('click', event);
    },
    startLoading() {
      this.loading = true;
    },
    stopLoading() {
      this.loading = false;
    },
  },
  components: {
    Loading,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import '../common/scss/variables.scss';


.loading-button-wrapper {
  position: relative;
  .button-main {
    width: $loading-button-width;
    height: $loading-button-height;
    line-height: $loading-button-height;
    border-radius: $loading-button-height / 2;
    background-color: rgba(255, 255, 255, 0.5);
    color: #000;
    text-align: center;
    font-size: $font-size-medium;
    font-weight: bold;
    &.loading {
      background: none;
      color: #fff;
      pointer-events: none;
    }
  }

  .loading-view {
    position: absolute;
    top: ($loading-button-height - 36) / 2;
    left: ($loading-button-width - 36) / 2;
  }
}
</style>

