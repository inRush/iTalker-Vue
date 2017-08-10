<template>
  <div class="header-wrapper" :style="bgStyle">
    <div class="portrait">
      <img :src="portrait" alt="">
    </div>
    <div class="title">{{title}}</div>
    <div class="icon">
      <i class="fa" :class="getIcon(icon)"></i>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    portrait: {
      type: String,
    },
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    background: {
      type: String,
    },
  },
  methods: {
    getIcon(icon) {
      return `fa-${icon}`;
    },
  },
  created() {

  },
  data() {
    return {
      bgStyle: {
        'background-image': `url(${this.background})`,
      },
    };
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import '../../common/scss/variables.scss';

.header-wrapper {
  height: $header-heigh;
  position: relative;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  .portrait {
    position: absolute;
    left: 10px;
    top: ($header-heigh - $portrait-size)/2;
    img {
      width: $portrait-size;
      height: $portrait-size;
      border-radius: 50%;
    }
  }
  .title {
    width: 100%;
    line-height: $header-heigh;
    text-align: center;
    color: #fff;
  }
  .icon {
    position: absolute;
    right: 15px;
    top: $header-heigh / 2 - 5px;
    color: #fff;
  }
}
</style>

