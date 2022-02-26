<template>
	<view id="all">
		<view class="title">消息</view>
		<u-collapse :value="['2']">
		<u-collapse-item class='wd' 
		title='未读'
		 >
		 <text>成绩通知：</text>
		 <text>考试通知：</text>
		 </u-collapse-item>
		 <u-collapse-item
		 title='已读'
		  >
		  <text>成绩通知：</text>
		  <text>考试通知：</text>
		  </u-collapse-item>
		</u-collapse>
	</view>
	
</template>

<script>
import tab from '../../components/tab.vue'
	export default {
		components:{
			tab
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
