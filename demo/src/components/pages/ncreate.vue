<template>
  <div class="wrapper">
    <div class="zc">
      <el-form label-width="80px" class="from">
        <el-form-item label="题目">
          <el-input v-model="form.tit"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea" v-model="form.con"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.time" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-button @click="add()" type="primary" round>注册</el-button>
        <el-button @click="back()" type="primary" round>返回</el-button>
      </el-form>
    </div>
    <div class="updata">
      <el-form label-width="80px" class="from">
        <el-form-item label="题目">
          <el-input v-model="form.tit"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea" v-model="form.con"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.time" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-button @click="xiugai()" type="primary" v-if="isAdmin!='2'" round>修改</el-button>
        <el-button @click="back()" type="primary" round>返回</el-button>
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
      isAdmin:'',
      form: {
        tit: "",
        con: "",
        time: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    add() {
      var data = this.form;
      this.$http({
        url: API.addNews,
        method: "get",
        params: data
      }).then(d => {
        // console.log(d);
        if (d.data.code == -1) {
          cd.callback(this, d);
        }
        if (d.data.code == 0) {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          this.$router.push("/home/notice");
        }
        if (d.data.code == 4) {
          this.$message({
            message: d.data.info,
            type: "warning"
          });
        }
      });
    },
    xiugai() {
      var id = this.$route.params.id;
      var tit = this.form.tit;
      var con = this.form.con;
      var time = this.form.time;
      this.$http({
        url: API.updateNews,
        method: "get",
        params: {
          id,
          tit,
          con,
          time
        }
      }).then(d => {
        if (d.data.code == -1) {
          cd.callback(this, d);
        }
        if (d.data.code == 0) {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          console.log(this.form);
          this.$router.push("/home/notice");
        }
      });
    },
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.isAdmin=localStorage.getItem('isAdmin')
    var zc = document.querySelector(".zc");
    var updata = document.querySelector(".updata");
    var id = this.$route.params.id;
    if (id == 0) {
      updata.style.display = "none";
    } else {
      zc.style.display = "none";
    }
    this.$http({
      url: API.findNews,
      method: "get"
    }).then(d => {
      // console.log(d)
      if (d.data.code == -1) {
        cd.callback(this, d);
      }
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

.from {
  text-align: center;
}
</style>
