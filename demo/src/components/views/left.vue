<template>
  <div class="left">
    <div class="all_list">
      <router-link to="/home/manage" active-class="select" v-if="isAdmin=='0'">管理员管理</router-link>
      <router-link to="/home/user" active-class="select" v-if="isAdmin !='2'">用户管理</router-link>
      <router-link to="/home/notice" active-class="select">通知</router-link>
      <router-link to="/home/device" active-class="select">设备管理</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: {},
  data() {
    return {
      isAdmin:''
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {
    this.isAdmin = localStorage.getItem("isAdmin");
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.left {
  width: 200px;
  background-color: #d3dce6;
}

.all_list {
  a {
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;

    &:hover {
      background: #fff;
    }
  }

  .select {
    background: #b3c0d1;
  }
}
</style>
