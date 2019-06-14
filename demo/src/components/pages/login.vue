<template>
  <div class="wrapper">
    <div class="mask">
      <div class="con">
        <h3 class="tit">登录</h3>
        <div>
          <el-select class="select" v-model="user.type" placeholder="请选择您的角色">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="user">
          <el-input v-model="user.name" placeholder="用户名"></el-input>
        </div>
        <div class="pass">
          <el-input v-model="user.pass" placeholder="密码"></el-input>
        </div>
        <div>
          <el-button @click="login()" type="primary" plain>登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import qs from "qs";
import API from "../../common/js/API";
export default {
  components: {},
  props: {},
  data() {
    return {
      isshow: false,
      options: [
        {
          value: "0",
          label: "超级管理员"
        },
        {
          value: "1",
          label: "普通管理员"
        },
        {
          value: "2",
          label: "用户"
        }
      ],
      user: {
        name: "",
        pass: "",
        type: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    login() {
      //   console.log(this.user.type)
      var data = this.user;
      data = qs.stringify(data);
      this.$http({
        url: API.login,
        method: "post",
        data: data
      }).then(d => {
        console.log(d);
        if (d.data.code == 0) {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          localStorage.setItem("username", this.user.name);
          // 存储0- 超管 1-普管 2-用户
          localStorage.setItem("isAdmin", d.data.isAdmin);
          this.$router.replace("/home");
        } else {
          this.$message({
            message: d.data.info,
            type: "warning"
          });
        }
      });
      // this.$router.push("/home");
    }
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';
.wrapper{
  width 100vw
  height 100vh
  background:url('http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20181205/b04a913bb63a49d4996bcaeb081bd69b.gif') no-repeat
  background-size:100% 100%

}
.mask {
  mask();
  text-align: center;

  .con {
    con();
  }

  .tit {
    height: 40px;
    line-height: 50px;
    font-size: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  .select {
    width: 280px;
    margin-top: 10px;
  }

  .user, .pass {
    width: 280px;
    margin: 10px auto;
  }
}
</style>

