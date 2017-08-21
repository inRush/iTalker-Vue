<template>
  <div class="mask-bg-wrapper">
    <div class="image" :style="imgStyle"></div>
    <div v-show="mask" class="mask" :style="maskStyle"></div>
  </div>
</template>


<script>
import { hexToRgb } from 'common/js/color';

export default {
  props: {
    image: {
      type: String,
    },
    maskColor: {
      type: String,
      default: '#000',
    },
    maskOpacity: {
      type: Number,
      default: 0.3,
    },
    mask: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      imgStyle: {
        'background-image': `url(${this.image})`,
      },
      maskStyle: {
        'background-color': `rgba(${hexToRgb(this.maskColor).join(',')},${this.maskOpacity})`,
      },
    };
  },
  watch: {
    maskOpacity(newOpacity) {
      this.maskStyle['background-color'] = `rgba(${hexToRgb(this.maskColor).join(',')},${newOpacity})`;
    },
    maskColor(newColor) {
      this.maskStyle['background-color'] = `rgba(${hexToRgb(newColor).join(',')},${this.maskOpacity})`;
    },
    image(newImage) {
      this.maskStyle['background-image'] = `url(${newImage})`;
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
.mask-bg-wrapper {
  .image,
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  .image {
    background-color: #fff;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>


