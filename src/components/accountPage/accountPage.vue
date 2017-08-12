<template>
  <div class="account-wrapper">
    <mask-image :isBg="true" :image="background" :opacity="0.5" :isMask="true"></mask-image>
    <div class="content">
      <div class="title">{{title}}</div>
      <multipart-input @inputChange="inputChange" :inputs="inputs" class="message-input"></multipart-input>
      <div class="go-register" @click="link.callback">
        <a>{{link.text}}</a>
      </div>
      <loading-button :text='loadingButton.text' class="submit" @click="loadingButtonClick"></loading-button>
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
      type: Object,
    },
    background: {
      type: String,
    },
    loadingButton: {
      type: Object,
    },
    pagekey: {
      type: String,
    },
  },
  methods: {
    inputChange(k, v) {
      this.inputValue[`${this.pagekey}_${k}`] = v;
    },
    loadingButtonClick() {
      this.loadingButton.callback(this.inputValue);
    },
  },
  data() {
    return {
      bgColor: '#1572fc',
      inputValue: {},
    };
  },
  watch: {
    inputs() {
      this.inputValue = {};
    },
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

.account-wrapper {
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

