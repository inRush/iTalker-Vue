<template>
  <div class="home-wrapper">
    <loading :radius="30" :color="'#000'">
    </loading>
  </div>
</template>

<script>
import Loading from 'components/loading';

export default {
  components: {
    Loading,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">

</style>

