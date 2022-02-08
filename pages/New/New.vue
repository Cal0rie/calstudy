<template>
    <view id='all'>
        <p>输入标题：</p>
        <input v-model='t1'>
        <p>输入内容：</p>
        <textarea v-model='c1'></textarea><hr>
        <button @click="btn">点击保存</button>
    </view>
</template>

<script>
import store from '@/store/index.js';//需要引入store
export default{
	data(){
		return{
			t1:"",
			c1:""
		}
	},
    methods:{
        btn(){
            var temp={
                title:this.t1,
                content:this.c1
            }
            store.commit('putnew',temp);
			uni.navigateTo({
				url:'/pages/index/index',
				});
        }
    }
}

</script>

<style scoped>
#all {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight:bold;
}
button{
    align-self: end;
}
</style>