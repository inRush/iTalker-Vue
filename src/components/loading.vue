<template>
  <div class="loading-circle">
    <svg :width="radius" :height="radius" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="progress-bar" r="50" cx="50" cy="50" fill="transparent" :stroke-dasharray="dashArray" :style="circleStyle"></circle>
    </svg>
    <slot></slot>
  </div>
</template>


<script>

export default {
  props: {
    color: {
      type: String,
      default: '#eee',
    },
    radius: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      dashArray: Math.PI * 100,
    };
  },
  computed: {
    circleStyle() {
      return {
        stroke: this.color,
      };
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
.loading-circle {
  position: relative;
  circle {
    stroke-width: 8px;
    stroke-linecap: round;
    transform-origin: center;
    &.progress-bar {
      animation: dash 2s linear infinite;
    }
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 150%;
    transform: rotate(0deg) scale(0.9);
  }
  50% {
    stroke-dashoffset: 300%;
    transform: rotate(-360deg) scale(0.9);
  }
  100% {
    stroke-dashoffset: 150%;
    transform: rotate(-720deg) scale(0.9);
  }
}
</style>

