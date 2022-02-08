<template>
	<view>
		<view  v-for="(item, index) in list" @click= 'xq(index)'>
			<view class='tit'>{{index + 1}}  {{blog.blogs[index].title}}</view>
			<view class='con'>{{blog.blogs[index].content}}</view>
			</view>
			<hr>   
	    </view>
</template>

<script>
import store from '@/store/index.js';//需要引入store

var temp=0;
export default{
	data() {
		return {
			list: store.state.blogs,
			blog: store.state,
		}},

    mounted(){
	},
    methods:{
		xq(index){
			uni.navigateTo({
				url:"/pages/Content/Content?blogid="+index,
				});
		},
    }
}
</script>

<style>
	
</style>
