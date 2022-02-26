<template>
	<view id="all">
		<view class="title">个人成绩</view>
		<u-collapse :value="['2']">
		<u-collapse-item class='wd' 
		title='软件版本'
		 >
		 <text>beta1.0.0</text>
		 </u-collapse-item>
		</u-collapse>
	</view>
	
</template>

<script>
	export default {
		components:{
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	#all{
		margin-top:40rpx;
		margin-left:30rpx;
		margin-right:30rpx;
		display:flex;
		flex-direction: column;
	}
	.wd{

	}
.title {
			margin-top: 60rpx;
			margin-left: 60rpx;
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 60rpx;
		}
</style>
