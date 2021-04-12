<template>
  <div>
    <div class="header">历史记录</div>
    <div class="container">
      <div v-if="!historyList.length" class="no-data">
      <div class="main">
        <div style="margin-bottom:20px">尚未有检测记录</div>
      <el-button type="primary" @click="$router.push('/manage')">去检测</el-button>
      </div>
    </div>
      <div v-else>
        <div class="text-des">
        <div>
          共检测<span>{{ totalNum }}</span
          >次
        </div>
        <div style="margin-left: 20px">
          合格率为: <span>{{ (qualifyNum / totalNum).toFixed(1) * 100 }}%</span>
        </div>
      </div>
      <div class="img-list">
        <div
          v-for="(item, index) in historyList"
          :key="index"
          class="item"
          @click="showDialog(index)"
        >
          <div
            class="status"
            :style="{ backgroundColor: item.score ? '#64d575' : 'red' }"
          >
            {{ item.score ? "合格" : "不合格" }}
          </div>
          <div class="img-item">
            <img :src="'/static/teeth/' + item.name" />
          </div>
          <div
            style="width: 150px; padding-left: 15px; font-size: 10px"
            class="text-overflow"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      </div>
    </div>
    <el-dialog title="检测结果" :visible.sync="visible" width="60%" >
      <detection-detail
        :imgDetail="historyList[imgIndex]"
        :showBack="false"
        class="detail"
      ></detection-detail>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import detectionDetail from "./homeComponents/detectionDetail";
// import DetectionDetail from './homeComponents/detectionDetail.vue';
export default {
  components: {
    detectionDetail,
  },
  data() {
    return {
      visible: false,
      imgIndex: "",
    };
  },
  computed: {
    ...mapState(["historyList"]),
    ...mapGetters(["totalNum", "qualifyNum"]),
  },
  methods: {
    ...mapMutations(["saveHistoryList"]),
    showDialog(index) {
      console.log(index);
      this.visible = true;
      this.imgIndex = index;
    },
  },
};
</script>

<style scoped lang="less">
.text-des {
  display: flex;
  padding: 10px;
  font-size: 20px;
  color: #666;
  span {
    font-size: 25px;
    padding: 10px;
    color: #64d575;
  }
}
.status {
  position: absolute;
  top: 0px;
  right: 10px;
  width: 50px;
  height: 20px;
  color: #fff;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  // border-radius: 10px;
}
.container {
  // margin-top: 20px;
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
.img-list {
  display: flex;
  flex-wrap: wrap;
}
.item {
  position: relative;
}
.img-item {
  width: 150px;
  height: 150px;
  padding: 10px;
  display: flex;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.text-overflow {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.item:hover {
  color: #64d575;
  opacity: 0.5;
  cursor: pointer;
}
.no-data {
  background-color:#eee;
  height: 100vh;
  text-align: center;
  /* display: flex; */
  overflow: hidden;
  .main {
    margin-top:200px;
  }
}
.detail {
  overflow: scroll;
}
</style>
