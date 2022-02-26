<template>
	<view>
	<view id='all'>
		<view @tap='edit' class='content'>
			<u-avatar
						size="65"
			            text="张"
			            fontSize="30"
			            randomBgColor
			    ></u-avatar>
			<view class='text'>张三</view>
			<view class='to'>></view>
			</view>
			
			<!-- <u-line id='line'></u-line> -->
			<u-cell-group id='set'>
				<u-cell size ="large" :isLink="true" icon="setting-fill" title="设置"></u-cell>
			</u-cell-group>
			
			
			
	</view>
	<!-- <tab></tab> -->
	</view>
</template>

<script>
import tab from '../../components/tab.vue'
	export default {
		components:{
			tab
		},
		data() {
			return {
				text: '无头像',
			}
		},
		methods: {
			edit(){
				uni.navigateTo({
					url:'mes/edit'
				})
			}
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
	#set{
		
	}
.text{
	position: relative;
	top:10rpx;
		width: 60%;
		margin-top: 5rpx;
		
	}
	.content{
		left: 25rpx;
		font-size: 70rpx;
		margin-bottom: 40rpx;
		color :#000000;
		display: flex;
		justify-content: space-around;
		width: 100%;
		
	}
	.to{
		position: relative;
		top:15rpx;
		right:10rpx;
	}
</style>
