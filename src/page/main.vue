<template>
  <div id="main" @touchmove.prevent>
    <m-header :portrait="portrait" :title="title" :background="headerBg" icon='search'></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <float-button @click="floatButtonClick" class="float-button" :class="{'show':!isHide,'switch':isSwitch}"></float-button>
    <bottom-tab :tabs="tabs" @select="tabSelect" ref="tabs"></bottom-tab>
  </div>
</template>

<script>
import BottomTab from 'components/bottomTab';
import FloatButton from 'components/floatButton';
import mHeader from 'components/header';
import Img from 'common/js/img';
import Lang from 'lang/lang';
import Icon from 'common/js/icon';
import { mapGetters } from 'vuex';

export default {
  name: 'main',
  created() {
    // if (!this.user) {
    //   this.$router.push('/');
    // }
  },
  data() {
    return {
      tabs: {
        Home: {
          target: 'home',
          icon: Icon.home,
          title: Lang.homePage.title,
        },
        Group: {
          target: 'group',
          icon: Icon.group,
          title: Lang.groupPage.title,
        },
        Contact: {
          target: 'contact',
          icon: Icon.idCard,
          title: Lang.contactPage.title,
        },
      },
      currentTab: '',
      portrait: Img.portrait,
      headerBg: Img.headerBg,
    };
  },
  methods: {
    tabSelect(key) {
      this.currentTab = key;
    },
    floatButtonClick() {
      this.$router.push('/login');
    },
  },
  watch: {
  },
  computed: {
    title() {
      const pathName = this.$route.name;
      if (pathName !== 'Home' && pathName !== 'Group' && pathName !== 'Contact') {
        return;
      }
      this.currentTab = pathName;
      return this.tabs[pathName].title;
    },
    isHide() {
      return this.title === 'Home';
    },
    isSwitch() {
      return this.title === 'Group';
    },
    ...mapGetters([
      'user',
    ]),
  },
  components: {
    BottomTab,
    mHeader,
    FloatButton,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import '../common/scss/variables.scss';

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

.account {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
