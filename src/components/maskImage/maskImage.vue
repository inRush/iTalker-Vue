<template>
  <div class="mask-image-wrapper" :class="{'bg':isBg} " :style='sizeStyle'>
    <div class="image" :style="imgStyle"></div>
    <div v-show="isMask" class="mask" :style="maskStyle"></div>
  </div>
</template>


<script>
import Color from 'common/js/color';

export default {
  props: {
    image: {
      type: String,
    },
    color: {
      type: String,
      default: '#000',
    },
    opacity: {
      type: Number,
      default: 0.3,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    isBg: {
      type: Boolean,
      default: false,
    },
    isMask: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      imgStyle: {
        'background-image': `url(${this.image})`,
      },
      maskStyle: {
        'background-color': `rgba(${Color.hexToRgb(this.color).join(',')},${this.opacity})`,
      },
      sizeStyle: {
        width: this.width,
        height: this.height,
      },
    };
  },
  watch: {
    image() {
      this.imgStyle = {
        'background-image': `url(${this.image})`,
      };
    },
    color() {
      this.maskStyle = {
        'background-color': `rgba(${Color.hexToRgb(this.color).join(',')},${this.opacity})`,
      };
    },
    width() {
      this.sizeStyle.width = this.width;
    },
    height() {
      this.sizeStyle.height = this.height;
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
.mask-image-wrapper {
  position: relative;

  &.bg,
  .image,
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>


