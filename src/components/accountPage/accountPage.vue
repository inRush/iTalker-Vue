<template>
  <div class="login-wrapper">
    <mask-image :isBg="true" :image="background" :opacity="0.5" :isMask="true"></mask-image>
    <div class="content">
      <div class="title">{{title}}</div>
      <multipart-input :inputs="inputs" class="message-input"></multipart-input>
      <div class="go-register">
        <a>{{link}}</a>
      </div>
      <loading-button text='登录' class="submit"></loading-button>
    </div>
  
  </div>
</template>


<script>
import MultipartInput from 'components/multipartInput/multipartInput';
import LoadingButton from 'components/loadingButton/lodingButton';
import MaskImage from 'components/maskImage/maskImage';

export default {
  props: {
    title: {
      type: String,
    },
    inputs: {
      type: Array,
    },
    link: {
      type: String,
    },
    background: {
      type: String,
    },
    logingButton: {
      type: Object,
    },
  },
  data() {
    return {
      bgColor: '#1572fc',
    };
  },
  components: {
    MultipartInput,
    LoadingButton,
    MaskImage,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import '../../common/scss/variables.scss';

.login-wrapper {
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    .title {
      color: #fff;
      font-size: 35px;
      margin: 55px 15px 35px 15px;
      opacity: 0.8;
    }
    .message-input {
      margin: 0 15px;
    }
    .go-register {
      float: right;
      margin-top: 10px;
      margin-right: 10px;
      color: #fff;
      font-weight: 700;
      font-size: $font-size-medium;
    }
    .submit {
      position: absolute;
      bottom: 0;
      left: 50%;
      bottom: 20px;
      margin-left: -($loading-button-width / 2);
    }
  }
}
</style>

