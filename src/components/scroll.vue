<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>


<script>
import BScroll from 'better-scroll';

export default {
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    click: {
      type: Boolean,
      default: true,
    },
    data: {
      type: Array,
      default: null,
    },
    listenScroll: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
      });
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos);
        });
      }
    },
    enable() {
      if (this.scroll) { this.scroll.enable(); }
    },
    disable() {
      if (this.scroll) { this.scroll.disable(); }
    },
    refresh() {
      if (this.scroll) { this.scroll.refresh(); }
    },
    scrollTo(...args) {
      if (this.scroll) { this.scroll.scrollTo(...args); }
    },
    scrollToElement(...args) {
      if (this.scroll) { this.scroll.scrollToElement(...args); }
    },

  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh();
      }, 20);
    },
  },
};
</script>

<style lang="scss">

</style>
