<template>
  <div class="wrapper">
    <div class="zc">
      <el-form label-width="80px" class="from" :model="form" :rules="newRules">
        <el-form-item label="IP" prop="ip">
          <el-input v-model="form.ip"></el-input>
        </el-form-item>
        <el-form-item label="机房">
          <el-input v-model="form.door"></el-input>
        </el-form-item>
        <el-form-item label="编号">
          <el-input v-model="form.num"></el-input>
        </el-form-item>
        <el-form-item label="宽带">
          <el-input v-model="form.width"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.status">
            <el-radio label="1">空闲</el-radio>
            <el-radio label="0">已售</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item class="select">
          <el-button @click="add()" type="primary" round>注册</el-button>
          <el-button @click="back()" type="primary" round>返回</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="updata">
      <el-form label-width="80px" class="from">
        <el-form-item label="IP">
          <el-input v-model="form.ip"></el-input>
        </el-form-item>
        <el-form-item label="机房">
          <el-input v-model="form.door"></el-input>
        </el-form-item>
        <el-form-item label="宽带">
          <el-input v-model="form.width"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.status">
            <el-radio label="1">空闲</el-radio>
            <el-radio label="0">已售</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item class="select">
          <el-button @click="xiugai()" type="primary" v-if="isAdmin!='2'" round>修改</el-button>
          <el-button @click="back()" type="primary" round>返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
import cd from "../../common/js/cd";

export default {
  components: {},
  props: {},
  data() {
    return {
      isAdmin: "",
      form: {
        ip: "",
        door: "",
        num: "",
        width: "",
        status: ""
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    add() {
      var data = this.form;
      this.$http({
        url: API.addDevice,
        method: "get",
        params: data
      }).then(d => {
        if (d.data.code == -1) {
          cd.callback(this, d);
        }
        if (d.data.code == 0) {
          console.log(d);
          this.$message({
            message: d.data.info,
            type: "success"
          });      
            this.$router.replace("/home/device");
        } else {
          this.$message({
            message: d.data.info,
            type: "warning"
          });
        }
      });
    },
    xiugai() {
      var id = this.$route.params.id;
      var ip = this.form.ip;
      var door = this.form.door;
      var num = this.form.num;
      var width = this.form.width;
      var status = this.form.status;
      this.$http({
        url: API.updateDevice,
        method: "get",
        params: {
          id,
          ip,
          door,
          num,
          width,
          status
        }
      }).then(d => {
        if (d.data.code == 0) {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          console.log(this.form);
          this.$router.push("/home/device");
        }
      });
    },
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.isAdmin = localStorage.getItem("isAdmin");
    var zc = document.querySelector(".zc");
    var updata = document.querySelector(".updata");
    var id = this.$route.params.id;
    if (id == 0) {
      updata.style.display = "none";
    } else {
      zc.style.display = "none";
    }
    this.$http({
      url: API.findDevice,
      method: "get"
    }).then(d => {
      // console.log(d)
      this.arr = d.data.data;
      var arr = this.arr;
      for (var i = 0; i < arr.length; i++) {
        if (id == arr[i].id) {
          this.form = arr[i];
        }
      }
      // console.log(this.arr)
    });
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.wrapper {
  width: 1000px;
}

.select {
  text-align: center;
}
</style>
