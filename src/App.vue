<template>
  <div id="app" @touchmove.prevent>
    <m-header :portrait="portrait" :title="title" :background="headerBg" icon='search'></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <float-button @click="floatButtonClick" class="float-button" :class="{'show':!isHide,'switch':isSwitch}"></float-button>
    <tab :tabs="tabs" @tabClick="tabClick" ref="tabs"></tab>
    <account-page class="account" :loading-button="accountPage.button" :pagekey="accountPage.pagekey" :link="accountPage.link" :title="accountPage.title" :inputs="accountPage.inputs" v-show="showFlag" :background="accountPage.bg"></account-page>
  </div>
</template>

<script>
import Tab from 'components/tab/tab';
import mHeader from 'components/header/header';
import FloatButton from 'components/floatButton/floatButton';
import AccountPage from 'components/accountPage/accountPage';
import Img from 'common/js/img';
import View from 'common/js/view';
import Lang from 'lang/lang';

export default {
  name: 'app',
  created() {
    this.accountPage = this.loginPage;
    this.currentTab = this.tabs.home.key;
  },
  data() {
    return {
      tabs: View.app.tabs,
      title: Lang.homePage.title,
      showFlag: false,
      portrait: Img.portrait,
      headerBg: Img.headerBg,
      loginPage: {
        pagekey: 'login',
        bg: Img.accountBg,
        title: Lang.accountPage.login.title,
        inputs: View.loginPage.inputs,
        button: {
          text: Lang.accountPage.login.loadingButton,
          callback: this.login,
        },
        link: {
          text: Lang.accountPage.login.link,
          callback: this.accountPageSwitch,
        },
      },
      registerPage: {
        pagekey: 'register',
        bg: Img.accountBg,
        title: Lang.accountPage.register.title,
        inputs: View.registerPage.inputs,
        button: {
          text: Lang.accountPage.register.loadingButton,
          callback: this.register,
        },
        link: {
          text: Lang.accountPage.register.link,
          callback: this.accountPageSwitch,
        },
      },
      accountPage: {},
      currentAccountPage: 'login',
      currentTab: '',
    };
  },
  methods: {
    tabClick(key) {
      this.title = this.tabs[key].title;
      this.currentTab = key;
    },
    floatButtonClick() {
      this.showFlag = true;
    },
    accountPageSwitch() {
      if (this.currentAccountPage === 'login') {
        this.accountPage = this.registerPage;
        this.currentAccountPage = 'register';
      } else if (this.currentAccountPage === 'register') {
        this.accountPage = this.loginPage;
        this.currentAccountPage = 'login';
      }
    },
    login(inputValue) {
      console.log(inputValue);
    },
    register(inputValue) {
      console.log(inputValue);
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
