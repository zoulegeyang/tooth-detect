import Vue from 'vue'
import Vuex from 'vuex'
import {getAdminInfo} from '@/api/getData'

Vue.use(Vuex)

const state = {
	adminInfo: {
		avatar: 'default.jpg'
  },
  historyList:[],
  // {name:"2F6184FD-79E6-4B94-8AE3-95E4A77E0AE8.png",score:false,rules:{isExpand:false,isNotfull:true,glueRemove:false,pulpIntact:true,rootBranch:true,candalMissing:true,SeparationEquipment:true,isBisNotBendend:true,glueSeal:true,plubClose:true}},

  tableData:[
    {personName:'ff1',name:'xxxy',totalNum:10,qulify:'50%',isExpand:4,isNotFull:6,glueRemove:0,pulpIntact:0,rootBranch:0,candalMissing:0,SeparationEquipment:0,isBisNotBendend:0,glueSeal:0,plubClose:0},
    {personName:'ff2',name:'xxxy',totalNum:10,qulify:'50%',isExpand:4,isNotFull:6,glueRemove:0,pulpIntact:0,rootBranch:0,candalMissing:0,SeparationEquipment:0,isBisNotBendend:0,glueSeal:0,plubClose:0},
    {personName:'ff3',name:'xxxy',totalNum:10,qulify:'50%',isExpand:4,isNotFull:6,glueRemove:0,pulpIntact:0,rootBranch:0,candalMissing:0,SeparationEquipment:0,isBisNotBendend:0,glueSeal:0,plubClose:0},
    {personName:'ff4',name:'xxxy',totalNum:10,qulify:'50%',isExpand:4,isNotFull:6,glueRemove:0,pulpIntact:0,rootBranch:0,candalMissing:0,SeparationEquipment:0,isBisNotBendend:0,glueSeal:0,plubClose:0},
  ]
}
const getters = {
  totalNum(state) {
    return state.historyList.length;
  },
  qualifyNum(state) {
    return state.historyList.filter(item=>{
      return item.score;
    }).length;
  }
}
const mutations = {
	saveAdminInfo(state, adminInfo){
		state.adminInfo = adminInfo;
  },
  saveHistoryList(state,payload) {
    state.historyList.push(payload);
    // let index = state.historyList.findIndex(item=>{
    //   return item.name == payload.name;
    // })
    let name = localStorage.getItem('username');
    let index = state.tableData.findIndex(item=>{
      return item.personName == name;
    })
    let qulifyCount = state.historyList.filter(item=>{
      return item.score
    }).length;
    let data ={personName:localStorage.getItem('username'),name:payload.name,totalNum:state.historyList.length,qulify:(qulifyCount/state.historyList.length).toFixed(1)*100+'%'};
      let res = ["isExpand", "isNotFull","glueRemove","pulpIntact","rootBranch","candalMissing","SeparationEquipment","isBisNotBendend","glueSeal","plubClose"];
      for (let i of res) {
        let tmp = state.historyList.filter((item) => {
          // console.log(item.rules,'')
          return item.rules[i];
        }).length;
        // data.push(tmp)
        data[i]=tmp;
      }
      console.log(index,data);
    if(index!=-1) {
      state.tableData.pop()
      state.tableData.push(data)
    }else {


      state.tableData.push(data)
    }
  },
  saveTableData(state,payload) {
    state.tableData.push(payload)
  }
}

const actions = {
	async getAdminData({commit}){
		try{
			const res = await getAdminInfo()
			if (res.status == 1) {
				commit('saveAdminInfo', res.data);
			}else{
				throw new Error(res)
			}
		}catch(err){
			console.log('您尚未登陆或者session失效')
		}
	}
}

export default new Vuex.Store({
  state,
  getters,
	actions,
	mutations,
})
