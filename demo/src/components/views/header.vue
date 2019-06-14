<template>
  <div class="header">
    <div class="yonghu">
      <img
        class="image"
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2229346952,2661940409&fm=27&gp=0.jpg"
        alt
      >
      <span class="who">{{name}}</span>
      <el-button @click="logout()" class="logout" type="primary" plain>退出登录</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from '../../common/js/API'

export default {
  components: {},
  props: {},
  data() {
    return {
      name: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    logout() {
      this.$http({
        url: API.logout
      }).then(d => {
        // console.log(d);
        this.$message({
          message: d.data.info,
          type: "success"
        });
        this.$router.replace("/login");
        
      });
    }
  },
  mounted() {
    this.name = localStorage.getItem("username");
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.yonghu {
  float: right;

  .image {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    border-radius: 50%;
  }

  .logout {
    margin-right: 20px;
  }

  .who {
    display: inline-block;
    width: 100px;
    font-size: 15px;
    text-align: center;
    margin: 0 10px;
  }
}
</style>
