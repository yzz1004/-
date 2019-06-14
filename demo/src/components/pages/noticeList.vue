<template>
  <div class="wrapper">
    <div class="wrap">
      <el-button @click="goCreate()" type="success" v-if="isAdmin!='2'" round class="btn">新建</el-button>
      <el-table :data="tableData" stripe style="width: 950px" class="table_wrap">
        <el-table-column prop="date" type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="tit" label="题目" width="230"></el-table-column>
        <el-table-column label="注册时间">
          <template slot-scope="scope">
            <span>{{scope.row.time|filterTime}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="ck(scope.row.id)" type="primary" round>查看</el-button>
            <el-button @click="sc(scope.row.id)" type="danger" v-if="isAdmin!='2'" round>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
      tableData: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    auto() {
      this.$http({
        url: API.findNews,
        method: "get"
      }).then(d => {
        // console.log(d)
        if (d.data.code == -1) {
          cd.callback(this, d);
        }
        this.tableData = d.data.data;
      });
    },
    goCreate() {
      this.$router.push("/home/notice/create/" + "0");
    },
    ck(n) {
      this.$router.push("/home/notice/create/" + n);
    },
    sc(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            url: API.delNews,
            method: "get",
            params: {
              id: id
            }
          }).then(d => {
            console.log(d);
            if (d.data.code == -1) {
              cd.callback(this, d);
            }
            if (d.data.code == 0) {
              this.$message({
                message: d.data.info,
                type: "success"
              });
              this.auto();
            }
          });
        })
        .catch(() => {
          this.$message({
            message: "已取消删除",
            type: "info"
          });
        });
    }
  },
  mounted() {
    this.isAdmin=localStorage.getItem('isAdmin')
    this.auto();
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.btn {
  margin-bottom: 20px;
}
</style>
