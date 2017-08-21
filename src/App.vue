<template>
  <div id="app" @touchmove.prevent>
    <mask-bg :mask-opacity="opacity" v-show="showFlag"></mask-bg>
    <router-view></router-view>
    <message-box ref="mb"></message-box>
  </div>
</template>

<script>
import Vue from 'vue';
import { loadToken } from 'common/js/store';
import MaskBg from 'components/maskBg';
import Img from 'common/js/img';
import { mapGetters, mapMutations } from 'vuex';
import MessageBox from 'components/messageBox';

export default {
  name: 'app',
  data() {
    return {
      background: Img.activityBg,
      timer: {},
      opacity: 0.9,
    };
  },
  computed: {
    showFlag() {
      return this.$route.fullPath === '/';
    },
    ...mapGetters([
      'user',
    ]),
  },
  methods: {
    ...mapMutations({
      setUser: 'SET_USER',
    }),
  },
  created() {
    const token = loadToken();
    if (!token) {
      this.$router.push('/main/clip');
    } else {
      // this.timer = setInterval(() => {
      //   if (this.opacity <= 0) {
      //     clearInterval(this.timer);
      //     this.$router.push('/main/home');
      //   } else {
      //     this.opacity = (this.opacity - 0.005).toFixed(3) * 1;
      //   }
      // }, 30);
    }
  },
  mounted() {
    this.$nextTick(() => {
      Vue.prototype.$mb = this.$refs.mb;
    });
  },
  components: {
    MaskBg,
    MessageBox,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
