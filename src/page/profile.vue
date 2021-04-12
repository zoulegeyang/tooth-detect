<template>
  <div>
    <div class="header">统计</div>
    <div class="container">
      <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="personName"
      label="姓名"
      >
    </el-table-column>

     <el-table-column
      prop="totalNum"
      label="总测次数"
      width="90">
    </el-table-column>
     <el-table-column
      prop="qulify"
      label="合格率"
      width="90">
    </el-table-column>
    <el-table-column
      prop="isExpand"
      label="超充次数"
      width="90">
    </el-table-column>
    <el-table-column
      prop="isNotFull"
      label="欠充次数"
      width="90">
    </el-table-column>
    <el-table-column
      prop="glueRemove"
      label="黏胶是否去除"
      width="90">
    </el-table-column>
    <el-table-column
      prop="pulpIntact"
      label="浆水是否完整"
      width="90">
    </el-table-column>
    <el-table-column
      prop="rootBranch"
      label="根管分支"
      width="90">
    </el-table-column>
    <el-table-column
      prop="candalMissing"
      label="根管缺失"
      width="90">
    </el-table-column>
    <el-table-column
      prop="SeparationEquipment"
      label="器械分离"
      width="90">
    </el-table-column>
    <el-table-column
      prop="glueSeal"
      label="胶水是否封口"
      width="90">
    </el-table-column>
    <el-table-column
      prop="plubClose"
      label="牙髓封闭"
      width="90">
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
      let res = ["isExpand", "isNotFull","glueRemove","pulpIntact","rootBranch","candalMissing","SeparationEquipment","isBisNotBendend","glueSeal","plubClose"];

// {name:'xxxy',totalNum:10,qulify:'50%',isExpand:4,isNotFull:6},
import {mapState} from "vuex"
export default {
  computed: {
    ...mapState(['tableData'])
  },
  data() {
    return {
    }
  },
  mounted () {
    console.log(this.tableData);
  },
}
</script>

<style scoped lang="less">
.header {
  height: 100px;
  line-height: 100px;
  padding: 10px 20px;
  background-color: #64d575;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
.container {
  padding:20px;
}
</style>
