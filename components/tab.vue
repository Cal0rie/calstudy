<template>
	<view class='tab'>
		<view class='tabbar'>首页</view>
		<view class='tabbar'>消息</view>
		<view class='tabbar'>我</view>
	</view>
</template>

<script>
	export default {
		name:"tab",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
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
