<template>
  <div id="app" @touchmove.prevent>
    <m-header :portrait="portrait" :title="title" :background="headerBg" icon='search'></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <float-button class="float-button" :class="{'show':!isHide,'switch':isSwitch}"></float-button>
    <tab :tabs="tabs" @tabClick="tabClick"></tab>
  </div>
</template>

<script>
import Tab from 'components/tab/tab';
import mHeader from 'components/header/header';
import portrait from 'common/img/default_portrait.jpg';
import headerBg from 'common/img/bg_src_morning.jpg';
import FloatButton from 'components/floatButton/floatButton';

export default {
  name: 'app',
  data() {
    return {
      tabs: [
        {
          target: '/home',
          icon: 'home',
          title: 'Home',
        },
        {
          target: '/group',
          icon: 'group',
          title: 'Group',
        },
        {
          target: '/contact',
          icon: 'id-card-o',
          title: 'Contact',
        },
      ],
      title: 'Home',
      portrait,
      headerBg,
    };
  },
  methods: {
    tabClick(title) {
      this.title = title;
    },
  },
  computed: {
    isHide() {
      return this.title === 'Home';
    },
    isSwitch() {
      return this.title === 'Group';
    },
  },
  components: {
    Tab,
    mHeader,
    FloatButton,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import './common/scss/variables.scss';

.float-button {
  position: absolute;
  right: 15px;
  bottom: 0;
  transition: transform 0.5s;
  &.show {
    transform: translate3d(0, -($tab-height + 15px), 0) rotate(360deg);
  }
  &.switch {
    transform: translate3d(0, -($tab-height + 15px), 0) rotate(-360deg);
  }
}
</style>
