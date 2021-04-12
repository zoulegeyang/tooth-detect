<template>
  <div>
    <div class="header">根管治疗后台管理系统</div>
    <div class="container" v-if="!finishedDetection">
      <div class="center">
        <input type="file" class="file" ref="file" @change="showImg" />
        <!-- <div style="width: 100%"> -->

        <!-- </div> -->
        <div class="upload" @click="upLoadfile">
          <i class="el-icon-plus" v-if="!fileName"></i>
          <div v-else style="width:100%;">
              <div v-for="item in imgList" :key="item.name" style="width:100%;overflow:hidden;height:100%;">
            <img style="width:100%;" :src='"/static/teeth/"+item.name' alt="" v-if="item.name==fileName"/>
          </div>
          </div>
        </div>
      </div>
      <div class="center" style="text-align: center; color: #666" v-if="!fileName">
        先上传图片
      </div>
      <div class="center">
        <el-button type="primary" :loading="isLoading" :disabled="!Boolean(fileName)" @click="startDetection">{{
          buttonMessage
        }}</el-button>
      </div>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>
    <HomeDetail class="detail" v-else :imgDetail="imgList[imgIndex]" @back="handleBack"/>
  </div>
</template>

<script>
import HomeDetail from "./homeComponents/detectionDetail"
import {mapMutations} from 'vuex'
export default {
  components: {
    HomeDetail,
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      isLoading: false,
      buttonMessage: "点击开始检测",
      fileName: "",
      imgIndex:undefined, //用来表示当前哪个图片被选中了 好给子组件传这个图片的参数
      imgList: [
        {name:"2F6184FD-79E6-4B94-8AE3-95E4A77E0AE8.png",score:false,rules:{isExpand:false,isNotfull:true,glueRemove:false,pulpIntact:true,rootBranch:true,candalMissing:true,SeparationEquipment:true,isBisNotBendend:true,glueSeal:true,plubClose:true}},
        {name:"B9265079-0BB4-49B9-A28D-C7EF9D6477D8.png",score:true,rules:{isExpand:false,isNotfull:false,glueRemove:false,pulpIntact:false,rootBranch:false,candalMissing:false,SeparationEquipment:false,isBisNotBendend:false,glueSeal:false,plubClose:false}},
        {name:"CA2A4E7F-7973-488C-AC4B-3CE1977AA56D.png",score:true,rules:{isExpand:false,isNotfull:false,glueRemove:false,pulpIntact:false,rootBranch:false,candalMissing:false,SeparationEquipment:false,isBisNotBendend:false,glueSeal:false,plubClose:false}},
        {name:"QQ20201123-134701@2x.png",score:true,rules:{isExpand:false,isNotfull:false,glueRemove:false,pulpIntact:false,rootBranch:false,candalMissing:false,SeparationEquipment:false,isBisNotBendend:false,glueSeal:false,plubClose:false}}
      ],
      finishedDetection:false,
    };
  },
  methods: {
    ...mapMutations(['saveHistoryList']),
    handleBack() {
      this.finishedDetection = false;
      this.buttonMessage = '点击开始检测',
      this.isLoading = false;
      this.fileName = '';
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    upLoadfile() {
      this.$refs.file.click();
    },
    showImg() {
    //   console.log(this.$refs.file.files[0].name);
      this.fileName = this.$refs.file.files[0].name;
      this.imgIndex = this.imgList.findIndex((item)=>{
        return item.name == this.fileName;
      })
    //   this.url = "../assets/teeth/" + this.fileName;
    //   console.log(this.url);
    },
    startDetection() {
        this.isLoading = true;
        this.buttonMessage = '正在开始检测...'
        setTimeout(() =>{
          this.finishedDetection = true;
          this.saveHistoryList(this.imgList[this.imgIndex]); // 将该图片对象放到历史订单里
        },2000)
    }
  },
};
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
.padding {
  padding: 10px 20px;
}
.detail {
}
.file {
  // opacity: 0;
  // visibility: hidden;
  display: none;
}
.upload {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  // font-size: px;
  border: 1px dashed #ddd;
  font-size: 30px;
  font-weight: normal;
  overflow: hidden;
}
.center {
  // width:200px;
  // position: relative;
  // left:50%;
  // transform: translate(-50%);
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.img {
  width: 100%;
}
</style>
