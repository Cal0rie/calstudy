<template>
	<view>
		<view class='cont'>
		<view @tap='myexam' class='content'><view>★</view><view class='text'>我的考试</view><view>></view></view>
		<view @tap='date' class='content'><view>★</view><view class='text'>日程管理</view><view>></view></view>
		<view @tap='score' class='content'><view>★</view><view class='text'>个人成绩</view><view>></view></view>
		</view>
			<!-- <tab></tab> -->
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
		myexam(){
			uni.navigateTo({
				url:'../indexs/myexams/myexams'
			})
		},
		date(){
			uni.navigateTo({
				url:'../indexs/date/date'
			})
		},
		score(){
			uni.navigateTo({
				url:'../indexs/score/score'
			})
		}
		// xq(index){
		// 	uni.navigateTo({
		// 		url:"/pages/Content",
		// 		});
		// },
    }
}
</script>

<style scoped>
	.text{
		width: 60%;
	}
	.content{
		font-size: 50rpx;
		height: 200rpx;
		color :#000000;
		line-height: 100rpx;
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
	.cont{
		margin-top: 100rpx;
		/* display: flex;
		flex-direction: column; */
	}
</style>

