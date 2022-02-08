<template>
    <view>
          <input v-model='t2'>
          <textarea v-model='c2'></textarea>
          <button @click='save'>保存</button>        
    </view>
</template>

<script>
import store from '@/store/index.js';//需要引入store
var blog=0;
export default{
	props:['blogid'],
	data() {
		return {
			t2:store.state.blogs[parseInt(this.blogid)].title,
			c2:store.state.blogs[parseInt(this.blogid)].content
		}},
    mounted(){
    },
    methods:{
        save(){
            var temp={
                index: this.blogid,
                title: this.t2,
                content: this.c2,
            };
            store.commit('saveedit',temp);
        },
    }
}

</script>

<style scoped>
</style>

