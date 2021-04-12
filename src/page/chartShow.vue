<template>
  <div>
    <div class="header">图表展示</div>
    <div v-if="!historyList.length" class="no-data">
      <div class="main">
        <div style="margin-bottom:20px">尚未有检测记录</div>
      <el-button type="primary" @click="$router.push('/manage')">去检测</el-button>
      </div>
    </div>
    <div v-else>
      <div ref="chart" style="width: 1000px; height: 400px"></div>
    <div v-for="(item,index) in historyList" :key="index"></div>
    </div>
  </div>
</template>

<script>
// import echarts from "echarts"
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["historyList"]),
    ruleResults() {
      let data =[];
      let res = ["isExpand", "isNotFull","glueRemove","pulpIntact","rootBranch","candalMissing","SeparationEquipment","isBisNotBendend","glueSeal","plubClose"];
      for (let i of res) {
        let tmp = this.historyList.filter((item) => {
          // console.log(item.rules,'')
          return item.rules[i];
        }).length;
        data.push(tmp)
      }
      return data;
    },
  },
  activated() {
    // console.log(echarts)
  // console.log(this.ruleResults)
    if(this.historyList.length) {
      let mychart = this.$echarts.init(this.$refs.chart);
    var option = {
      title: {
        text: "各规则统计次数",
      },
      tooltip: {},
      legend: {
        data: ["次数"],
      },
      xAxis: {
        data: ["超充","欠充",'黏胶去除','浆水完好无损','根管分支','根管缺失',"器械分离",'根管是否不弯曲','胶水是否封口','牙髓封闭'],
         axisLabel:{
                    rotate:30,
                    interval:0
                },
      },
      yAxis: {},
      series: [
        {
          name: "次数",
          type: "bar",
          data:this.ruleResults
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    mychart.setOption(option);
    }
  },
};
</script>

<style scoped lang="less">
.no-data {
  background-color:#eee;
  height: 100vh;
  text-align: center;
  /* display: flex; */
  overflow: hidden;
  .main {
    margin-top:300px;
  }
}
.header {
  height: 100px;
  line-height: 100px;
  padding: 10px 20px;
  background-color: #64d575;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
</style>
