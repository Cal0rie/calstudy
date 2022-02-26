<template>
	<!-- 这里是学生端底栏 -->
	<view class='tab'>
		<view @tap='index' class='tabbar'>首页</view>
		<view @tap='message' class='tabbar'>消息</view>
		<view @tap='me' class='tabbar'>我</view>
		  
	</view> 
</template>

<script>
	export default {
		name:"tab",
		data() {
			return {
				selectedIndex: 0, // 标记
				//showselected: false, // 是否在页面使用tarBar
				tabBar: {
									list: [{
											"pagePath": "pages/index/index",
											"text": "首页"
										}, {
											"pagePath": "pages/team/team",
											"text": "消息"
										}, {
											"pagePath": "pages/promotion/promotion",
											"text": "我"
										}
									]
								},
			};
		},
		methods:{
			index(){
				console.log(1);
				uni.navigateTo({
					url:'@/pages/student/index'
				})
			},
			message(){
				uni.navigateTo({
					
					url:'@/pages/student/message'
				})
			},
			me(){
				uni.navigateTo({
					url:'../pages/student/me'
				})
			},
		}
	}
</script>

<style scoped>
.tab{
	height: 100rpx;
	width: 100%;
	position: fixed;	/* 相对屏幕定位 */
	bottom :0;
	left: 0;
	display: flex;
	align-content: center;
}
.tabbar{
	float: left;
	width: 32.583%;
	color :#000000;
	background-color: white;
	text-align: center;
	height: 100rpx;
	line-height: 100rpx;
	font-size: 40rpx;
	border-style: solid;
}
</style>
