<template>
  <div class="wrapper">
    <v-header class="header">header</v-header>
    <v-main class="main">main</v-main>
  </div>
</template>

<script type="text/ecmascript-6">
import vHeader from "../views/header";
import vMain from "../views/main";

export default {
  components: {
    vHeader,
    vMain
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .header {
    height: 80px;
    line-height: 80px;
    position: relative;
    background-color: #b3c0d1;
    border-bottom: 1px solid #333;
  }

  .main {
    flex: 1;
    display: flex;
  }
}
</style>
