<template>
  <div class="clip-wrapper">
    <image-clip :image="image"></image-clip>
  </div>
</template>


<script>
import ImageClip from 'components/imageClip';
import Img from 'common/js/img';

export default {
  data() {
    return {
      image: Img.women,
    };
  },
  components: {
    ImageClip,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
.clip-wrapper {
  background: #000;
  position: fixed;
  z-index: 20;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

