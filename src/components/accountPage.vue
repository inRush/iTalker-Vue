<template>
  <div class="account-wrapper">
    <mask-bg :image="background" :mask-opacity="0.5"></mask-bg>
    <div class="content">
      <div class="title">{{title}}</div>
      <multipart-input @inputChange="inputChange" :inputs="inputs" class="message-input"></multipart-input>
      <div class="go-register" @click="link.callback">
        <a>{{link.text}}</a>
      </div>
      <loading-button ref="loadingBtn" :text='loadingButton.text' class="submit" @click="loadingButtonClick"></loading-button>
    </div>
  </div>
</template>


<script>
import MultipartInput from 'components/multipartInput';
import LoadingButton from 'components/lodingButton';
import MaskBg from 'components/maskBg';

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
  },
  methods: {
    inputChange(k, v) {
      this.inputValue[k] = v;
    },
    loadingButtonClick() {
      this.$refs.loadingBtn.startLoading();
      this.loadingButton.callback(this.inputValue, () => {
        this.$refs.loadingBtn.stopLoading();
      });
    },
  },
  data() {
    return {
      bgColor: '#1572fc',
      inputValue: {},
    };
  },
  components: {
    MultipartInput,
    LoadingButton,
    MaskBg,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import '../common/scss/variables.scss';

.account-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
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
      position: fixed;
      left: 50%;
      bottom: 20px;
      margin-left: -($loading-button-width / 2);
    }
  }
}
</style>

