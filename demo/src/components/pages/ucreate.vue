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
        <el-form-item label="电话" prop="tel">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="身份证号" prop="idx">
          <el-input v-model="form.idx"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.des"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker v-model="form.time" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item class="select">
          <el-button @click="add()" type="primary" round>发布</el-button>
          <el-button @click="back()" type="primary" round>返回</el-button>
        </el-form-item>
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
        <el-form-item label="电话">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex" :disabled="true">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.idx" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.des"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker v-model="form.time" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item class="select">
          <el-button @click="xiugai()" type="primary" round>修改</el-button>
          <el-button @click="back()" type="primary" round>返回</el-button>
        </el-form-item>
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
        tel: "",
        email: "",
        sex: "",
        idx: "",
        des: "",
        time: ""
      },
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
        tel:[
          {
            require:true,
            message:'电话错误',
            trigger:'blur'
          },
          {
            min:11,
            message:'电话不少于11位',
            trigger:'blur'
          },
          {
            pattern:/^1[3456789]\d{9}$/,
            message:'请输入正确的电话号码'
          }
        ],
        email:[
          {
            pattern:/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
            message:'请输入正确的邮箱'
          }
        ],
        idx:[
          {
            pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            message:'请输入正确的身份证号'
          }
        ]
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
      if(!reg.checkTel(this.form.tel)){
        this.$message({
          message:'电话号码填写错误',
          type:'warning'
        })
        return;
      }
      if(!reg.checkEmail(this.form.email)){
        this.$message({
          message:'邮箱填写错误',
          type:'warning'
        })
        return
      }
      if(!reg.checkIdx(this.form.idx)){
         this.$message({
          message:'身份证号填写错误',
          type:'warning'
        })
        return
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
        url: API.addUser,
        method: "get",
        params: data
      }).then(d => {
        // console.log(d)
        if (d.data.code == -1) {
          cd.callback(this, d);
        }
        if (d.data.code == 0) {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          this.$router.push("/home/user");
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
      var tel = this.form.tel;
      var email = this.form.email;
      var des = this.form.des;
      var time = this.form.time;
      this.$http({
        url: API.updateUser,
        method: "get",
        params: {
          id,
          tel,
          email,
          des,
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
          this.$router.push("/home/user");
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
      url: API.findUser,
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

.select {
  text-align: center;
}
</style>
