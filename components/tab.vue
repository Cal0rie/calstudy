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
				
			};
		},
		methods:{
			index(){
				
			},
			message(){
				
			},
			me(){
				
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
