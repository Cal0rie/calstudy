<template>
    <div>
        <div id='displayblogs'>
          <view class='tit'>{{blog.blogs[blogid].title}}</view>
          <view class='con'>{{blog.blogs[blogid].content}}</view>
          <button @click='edit'>修改</button>
          <button @click='del'>删除</button>
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js';

export default{
	props:['blogid'],
	data() {
		return {
			list: store.state.blogs,
			blog: store.state,
		}},
    mounted(){
	},
    methods:{
        edit(){
                uni.navigateTo({
                	url:"/pages/Edit/Edit?blogid="+this.blogid,
                })
        },
        del(){
          
          store.commit('del',this.blogid);
		  uni.navigateTo({
		  	url:"/pages/index/index"
		  })
        },
    }
}

</script>

<style scoped>

</style>

