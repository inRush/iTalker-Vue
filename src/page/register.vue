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
import Code from '@/api/code';
import * as Color from 'common/js/color';
import Register from '@/api/register';


export default {
  data() {
    return {
      view: {
        bg: Img.registerBg,
        title: Lang.registerPage.title,
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
          {
            key: 'name',
            icon: Icon.user,
            hint: Lang.common.name,
            type: 'text',
          },
        ],
        button: {
          text: Lang.registerPage.loadingButton,
          callback: this.register,
        },
        link: {
          text: Lang.registerPage.link,
          callback: this.pageSwitch,
        },
      },
    };
  },
  methods: {
    pageSwitch() {
      this.$router.push('/login');
    },
    register(inputValue, done) {
      const { password, phone, name } = inputValue;
      Register(phone, password, name).then((res) => {
        const data = res.data;
        if (data.code === Code.SUCCEED) {
          this.$mb.show(Lang.registerPage.success, Color.info);
          setTimeout(() => {
            this.$router.push('/login');
          }, 1500);
        } else if (data.code === Code.ERROR_PARAMETERS_EXIST_ACCOUNT) {
          this.$mb.show(Lang.registerPage.faild_AccountExist, Color.error);
        } else if (data.code === Code.ERROR_PARAMETERS_EXIST_NAME) {
          this.$mb.show(Lang.registerPage.faild_AccountNameExist, Color.error);
        } else {
          this.$mb.show(Lang.commion.unknowErr, Color.error);
        }
        done();
      }).catch(() => {
        this.$mb.show(Lang.registerPage.faild_FormatErr, Color.error);
        done();
      });
    },
  },
  components: {
    AccountPage,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">

</style>

