<template>
  <div class="tab" :class="getPosition()">
    <router-link tag="div" :to="tab.target" v-for="tab in tabs" :key="tab.title" class="tab-item" @click.native="tabClick(tab.title)">
      <div class="icon">
        <i class="fa" :class="icon(tab.icon)"></i>
      </div>
      <div class="title">{{tab.title}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
    },
    position: {
      type: String,
      default: 'bottom',
    },
  },

  methods: {
    icon(icon) {
      return 'fa-'.concat(icon);
    },
    getPosition() {
      if (this.position === 'top') {
        return 'top';
      }
      return 'bottom';
    },
    tabClick(title) {
      this.$emit('tabClick', title);
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import '../../common/scss/variables.scss';
.bottom {
  bottom: 0;
  left: 0;
}

.top {
  top: 0;
  left: 0;
}

.tab {
  display: flex;
  position: absolute;
  width: 100%;
  height: $tab-height;
  background: #fff;
  box-shadow: 0px -3px 10px #eee;
  .tab-item {
    flex: 1;
    text-align: center;
    .title,
    .icon {
      transition: transform .3s;
    }
    .title {
      line-height: 15px;
      color: $color-text-second;
      font-size: $font-size-small;
      transform: scale(.9);
    }
    .icon {
      margin-top: 8px;
      line-height: 20px;
      font-size: $font-size-large;
      color: $color-text-second;
    }
    &.router-link-active {
      .title {
        color: $color-text-primary;
        transform: scale(1);
      }
      .icon {
        color: $color-text-primary;
        transform: translate3d(0, -2px, 0);
      }
    }
  }
}
</style>
