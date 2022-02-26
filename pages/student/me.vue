<template>
	<view id='all'>
		<view class='content'>
			<u-avatar
						size="65"
			            text="张"
			            fontSize="30"
			            randomBgColor
			    ></u-avatar>
			<view class='text'>张三</view>
			<view class='to'>></view>
			</view>
			
			<u-line id='line'></u-line>
			<u-cell-group id='set'>
				<u-cell size ="large" :isLink="true" icon="setting-fill" title="设置"></u-cell>
			</u-cell-group>
			
			
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: '无头像',
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	#all{
	}
	#set{
		position: fixed;
		top: 280rpx;
	}
	#line{
		position: fixed;
		top: 280rpx;
	}
.text{
	position: relative;
	top:10rpx;
		width: 60%;
		
	}
	.content{
		position: fixed;
		top: 120rpx;
		left: 25rpx;
		font-size: 70rpx;
		height: 200rpx;
		color :#000000;
		line-height: 100rpx;
		display: flex;
		justify-content: space-around;
		width: 100%;
		
	}
	.to{
		position: relative;
		top:10rpx;
		right:40rpx;
	}
	.cont{
		margin-top: 100rpx;
	}
</style>
