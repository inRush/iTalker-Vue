<template>
  <div class="message-box fixed" ref="messageBox">
    <transition-group name="slide" tag="div">
      <div v-for="item in contents" :key="item.key" class="content" :style="getStyle(item.color,item.background)">{{item.content}}</div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFlag: false,
      contents: [],
    };
  },
  methods: {
    show(content, background = '#fff', color = '#fff', time = 2500) {
      if (typeof color === 'number') {
        time = color;
        color = '#fff';
      }
      this.contents.unshift({
        content, background, color, key: Math.random(),
      });
      this.timer = setTimeout(() => {
        this.contents.pop();
      }, time);
    },
    getStyle(color, background) {
      return {
        background,
        color,
      };
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
.message-box {
  width: 100%;
  z-index: 999;
  .content {
    padding: 20px;
    text-align: center;
    letter-spacing: 1px;
    line-height: 20px;
    color: inherit;
    background: #fc5050;
    transition: transform 0.5s, opacity 0.5s;
    &.slide-enter {
      transform: translate3d(0, -100%, 0);
    }
    &.slide-leave-to {
      opacity: 0;
    }
  }
  &.fixed {
    position: fixed;
  }
}
</style>

