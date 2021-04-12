<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #64D575;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;"  router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-menu-item index="history"><i class="el-icon-document"></i>历史记录
						<!-- <template slot="title"></template> -->
						<!-- <el-menu-item index="userList">用户列表</el-menu-item>
						<el-menu-item index="shopList">商家列表</el-menu-item>
						<el-menu-item index="foodList">食品列表</el-menu-item>
						<el-menu-item index="orderList">订单列表</el-menu-item>
						<el-menu-item index="adminList">管理员列表</el-menu-item> -->
					</el-menu-item>
					<el-menu-item index="chartShow">
						<i class="el-icon-document"></i>图表展示
					</el-menu-item>
                    <el-menu-item index="profile">
						<i class="el-icon-document"></i>统计
					</el-menu-item>

				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{

	}
</style>
