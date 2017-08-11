<template>
  <div id="app" @touchmove.prevent>
    <m-header :portrait="portrait" :title="title" :background="headerBg" icon='search'></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <float-button @click="floatButtonClick()" class="float-button" :class="{'show':!isHide,'switch':isSwitch}"></float-button>
    <tab :tabs="tabs" @tabClick="tabClick"></tab>
    <account-page class="account" :link="accountLink" :title="accountTitle" :inputs="inputs" v-show="showFlag" :background="accountBg"></account-page>
  </div>
</template>

<script>
import Tab from 'components/tab/tab';
import mHeader from 'components/header/header';
import FloatButton from 'components/floatButton/floatButton';
import AccountPage from 'components/accountPage/accountPage';
import Img from 'common/img/img';
import Lang from './lang/lang';

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
      inputs: [
        {
          key: 'phone',
          icon: 'phone',
          hint: '电话',
          type: 'phone',
        },
        {
          key: 'password',
          icon: 'key',
          hint: '密码',
          type: 'password',
        },
      ],
      title: Lang.homeTitle,
      showFlag: false,
      portrait: Img.portrait,
      headerBg: Img.headerBg,
      accountBg: Img.accountBg,
      accountTitle: Lang.accountTitle,
      accountLink: Lang.accountLink,
    };
  },
  methods: {
    tabClick(title) {
      this.title = title;
    },
    floatButtonClick() {
      this.showFlag = true;
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
    AccountPage,
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

.account {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
