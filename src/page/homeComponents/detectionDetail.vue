<template>
  <div class="container">
    <div class="i-container" @click="back" v-if="showBack">
      <i class="el-icon-arrow-left" ></i>
    </div>

    <div class="center">
      <div
      class="item"
      v-for="(value, key, index) in imgDetail.rules"
      :key="index"
    >
      <div class="left">{{ keyMap[key] }}:</div>
      <div class="right">
        {{ value ? "不合格" : "合格" }}
      </div>
    </div>
    <div class="item title">
      <div class="left">你的本次检测结果为:</div>
      <div class="right" :style="{color:imgDetail.score?'#82d17f':'red'}">{{ imgDetail.score ? "合格" : "不合格" }}</div>
    </div>
    </div>
  </div>
</template>

<script>
// {personName:'ff4',name:'xxxy',totalNum:10,qulify:'50%',isExpand:4,isNotFull:6,:0,:0,:0,:0,:0,:0,:0,:0},
export default {
  data() {
    return {
      keyMap: {
        isExpand: "是否超充",
        isNotfull: "是否欠充",
        glueRemove:'黏胶是否去除',
        pulpIntact:"浆水是否完好无损",
        rootBranch:'根管分支',
        candalMissing:'根管缺失',
        SeparationEquipment:'器械分离',
        isBisNotBendend:'根管是否弯曲',
        glueSeal:'胶水是否封口',
        plubClose:'胶水封闭'
      },
    };
  },
  methods: {
    back() {
      console.log('```');
      this.$emit('back');
    }
  },
  props: {
    showBack:{
      type: Boolean,
      default() {
        return true;
      }
    },
    imgDetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="less">
.container {
  height: 60vh;
  position:relative;
}
.center {
  position: absolute;
  width:100%;
  top:10px;
}
.i-container {
  width: 30px;
  height:30px;
  border-radius:15px;
  border:1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  position:relative;
  top:5px;
  left:5px;
  z-index: 99;
}
i {
  font-size: 10px;
}
.item {
  display: flex;
  align-items: center;
  margin-top: 30px;
  .left {
    flex: 1;
    text-align: right;
  }
  .right {
    flex: 1;
    text-align: left;
  }
}
.title {
  font-size: 20px;
}
</style>
