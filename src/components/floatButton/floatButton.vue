<template>
  <div class="float-wrapper" :style='style' @click="click">
    <i class="fa" :class="getIcon(icon)"></i>
  </div>
</template>


<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'group',
    },
    size: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      style: {
        width: `${this.size}px`,
        height: `${this.size}px`,
        'line-height': `${this.size}px`,
      },
    };
  },
  methods: {
    getIcon(icon) {
      return `fa-${icon}`;
    },
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import '../../common/scss/variables.scss';

.float-wrapper {
  border-radius: 50%;
  background: $color-text-accent;
  text-align: center;
  color: #fff;
  font-size: 18px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);
}
</style>

