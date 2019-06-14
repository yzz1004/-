<template>
  <div class="device">
    <div class="wrap">
      <el-button @click="goCreate()" type="success" v-if="isAdmin!='2'" round class="btn">新建</el-button>
      <el-table :data="tableData" stripe style="width: 950px" class="table_wrap">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="ip" label="IP" width="100"></el-table-column>
        <el-table-column prop="door" label="机房" width="100"></el-table-column>
        <el-table-column prop="num" label="编号" width="150"></el-table-column>
        <el-table-column prop="width" label="宽带" width="80"></el-table-column>
        <el-table-column label="状态" width="100">
          <template slot-scope="scope">
            <span>{{scope.row.status=="1"?"空闲":"已出售"}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="ck(scope.row.id)" type="primary" round>查看</el-button>
            <el-button
              @click="gm(scope.row.id)"
              type="primary"
              round
              :disabled="scope.row.status=='0'"
              v-if="isAdmin=='2'"
            >购买</el-button>
            <el-button @click="sc(scope.row.id)" type="danger" round v-if="isAdmin!='2'">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <router-view></router-view>
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
      tableData: [],
      isAdmin: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    auto() {
      this.$http({
        url: API.findDevice,
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
      this.$router.push("/home/device/create/" + "0");
    },
    ck(n) {
      this.$router.push("/home/device/create/" + n);
    },
    gm(id) {
      this.$http({
        url: API.updateDevice,
        params: {
          id: id,
          status: "0"
        }
      }).then(d => {
        if (d.data.code == -1) {
          cd.callback(this, d);
        }
        if (d.data.isok) {
          this.$message({
            message: "购买成功",
            type: "success"
          });
          this.auto();
        } else {
          this.$message({
            message: "购买失败，请重试",
            type: "warning"
          });
        }
      });
    },
    sc(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            url: API.delDevice,
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
    this.isAdmin = localStorage.getItem("isAdmin");
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
