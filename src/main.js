import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import "../static/element-#12d968/index.css"
// import 'element-ui/lib/theme-default/index.css'
// import '../static/css/theme-green/index.css';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/tooltip';
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
