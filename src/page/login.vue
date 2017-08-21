<template>
  <div class="login-wrapper">
    <account-page :loading-button="view.button" :link="view.link" :title="view.title" :inputs="view.inputs" :background="view.bg"></account-page>
  </div>
</template>


<script>
import Img from 'common/js/img';
import Lang from 'lang/lang';
import Icon from 'common/js/icon';
import AccountPage from 'components/accountPage';
import Login from '@/api/login';
import Code from '@/api/code';
import * as Color from 'common/js/color';
import { mapMutations } from 'vuex';
import { saveToken } from 'common/js/store';

export default {
  data() {
    return {
      view: {
        bg: Img.loginBg,
        title: Lang.loginPage.title,
        inputs: [
          {
            key: 'phone',
            icon: Icon.phone,
            hint: Lang.common.phone,
            type: 'phone',
          },
          {
            key: 'password',
            icon: Icon.key,
            hint: Lang.common.password,
            type: 'password',
          },
        ],
        button: {
          text: Lang.loginPage.loadingButton,
          callback: this.login,
        },
        link: {
          text: Lang.loginPage.link,
          callback: this.pageSwitch,
        },
      },
      isLogin: false,
    };
  },
  methods: {
    pageSwitch() {
      this.$router.push('/register');
    },
    login(inputValue, done) {
      if (this.isLogin) {
        done();
        return;
      }
      // 解构出密码和电话号码
      const { password, phone } = inputValue;
      // 进行登录操作
      Login(phone, password).then((res) => {
        // 获取数据
        const data = res.data;
        // 判断是否成功
        if (data.code === Code.SUCCEED) {
          // 设置vuex中的user
          this.setUser(data.result.user);
          // 保存Token到本地
          saveToken(data.result.token);
          this.isLogin = true;
          this.$mb.show(Lang.loginPage.success, Color.info, 1500);
          done();
          // 延迟跳转到主页中
          setTimeout(() => {
            this.$router.push('/main/home');
          }, 2000);
        } else {
          this.$mb.show(Lang.loginPage.faild_AccountErr, Color.error);
          done();
        }
      }).catch(() => {
        this.$mb.show(Lang.loginPage.faild_FormatErr, Color.error);
        done();
      });
    },
    ...mapMutations({
      setUser: 'SET_USER',
    }),
  },
  components: {
    AccountPage,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">

</style>

