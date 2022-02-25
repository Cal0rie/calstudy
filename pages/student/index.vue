<template>
	<view>
		<view class='cont'>
		<view class='content'><view>★</view><view>我的考试</view><view>></view></view>
		<view class='content'><view>★</view><view>日程管理</view><view>></view></view>
		<view class='content'><view>★</view><view>个人成绩</view><view>></view></view>
		</view>
			<tab></tab>
	    </view>
</template>

<script>
import store from '@/store/index.js';//需要引入store
import tab from '../../components/tab.vue'

var temp=0;
export default{
	components:{
		tab
	},
	data() {
		return {
			// list: store.state.blogs,
			// blog: store.state,
		}},

    mounted(){
	},
    methods:{
		// xq(index){
		// 	uni.navigateTo({
		// 		url:"/pages/Content",
		// 		});
		// },
    }
}
</script>

<style>
	.content{
		font-size: 50rpx;
		height: 100rpx;
		color :#000000;
		line-height: 100rpx;
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
	.cont{
		/* display: flex;
		flex-direction: column; */
	}
</style>

