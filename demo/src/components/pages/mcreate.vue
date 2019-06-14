<template>
  <div class="wrapper">
    <div class="zc">
      <el-form label-width="80px" class="from" :model="form" :rules="newuserRules">
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="form.pass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.againpass"></el-input>
        </el-form-item>
        <el-form-item label="属性">
          <el-input v-model="form.prop"></el-input>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.time" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-button @click="add()" type="primary" round>注册</el-button>
        <el-button @click="back()" type="primary" round>返回</el-button>
      </el-form>
    </div>
    <div class="updata">
      <el-form label-width="80px" class="from">
        <el-form-item label="账号">
          <el-input v-model="form.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pass" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="属性">
          <el-input v-model="form.prop"></el-input>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.time" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-button @click="xiugai()" type="primary" round>修改</el-button>
        <el-button @click="back()" type="primary" round>返回</el-button>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
import cd from "../../common/js/cd";
import reg from '../../common/js/reg'
export default {
  components: {},
  props: {},
  data() {
    return {
      form: {
        name: "",
        pass: "",
        againpass: "",
        prop: "",
        time: ""
      },
      arr: [],
      newuserRules: {
        name: [
          {
            require: true,
            message: "账号错误",
            trigger: "blur"
          },
          {
            min: 6,
            message: "账号不少于6位",
            trigger: "blur"
          },
          {
            pattern: /^[a-zA-Z]\w{6,16}$/,
            message: "请输入字母开头6到16位字母或数字的账号"
          }
        ],
        pass: [
          {
            require: true,
            message: "密码错误",
            trigger: "blur"
          },
          {
            min: 6,
            message: "密码不少于6位",
            trigger: "blur"
          },
          {
            pattern: /^[a-zA-Z0-9]{6,16}$/,
            message: "请输入6到16位字母或数字的密码"
          }
        ],
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    add() {
      if(!reg.checkEmpty(this.form)){
        this.$message({
          message:'缺少必填参数',
          type:'warning'
        })
        return;
      }
      if(!reg.checkName(this.form.name)){
        this.$message({
          message:'账号填写错误',
          type:'warning'
        })
        return
      }
      if(!reg.checkPass(this.form.pass)){
        this.$message({
          message:'密码填写错误',
          type:'warning'
        })
        return;
      }
      if (this.form.pass != this.form.againpass) {
        this.$message({
          message: "密码不一致，请重新输入",
          type: "warning"
        });
        return;
      }
      var data = this.form;
      this.$http({
        url: API.addManage,
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
          this.$router.push("/home/manage");
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
      var prop = this.form.prop;
      var time = this.form.time;
      this.$http({
        url: API.updateManage,
        method: "get",
        params: {
          id,
          prop,
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
          this.$router.push("/home/manage");
        }
      });
    },
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {
    var zc = document.querySelector(".zc");
    var updata = document.querySelector(".updata");
    var id = this.$route.params.id;
    if (id == 0) {
      updata.style.display = "none";
    } else {
      zc.style.display = "none";
    }
    this.$http({
      url: API.findManage,
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
