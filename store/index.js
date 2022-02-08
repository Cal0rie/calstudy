// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
// #endif

// #ifdef VUE3
import { createStore } from 'vuex'

const store = createStore({
	// #endif
    state:{//存放状态
        blogs:[
                {
                  title:'智慧',
                  content:' 当我们得到理解的时候，智慧是不人地枯竭的；智慧同智慧相碰，就迸溅出无数的火花。'
                },
                {
                  title:'认识',
                  content:'认识存在两个飞跃的过程，先是经过感性实践才能有理性认识，有了理性认识后才能指导感性实践。'
                }
              ],
    },
	mutations: {
	    putnew(state,temp){
	      state.blogs.push(temp);
	    },
	    del(state,n){
	      state.blogs.splice(n,1,);
	    },
	    saveedit(state,temp){
			console.log(temp);
			state.blogs.splice(temp.index,1,temp);
			uni.switchTab({
				url:'/pages/index/index.vue',
					success() {
						console.log('调用成功')
					},
					fail() {
						console.log("调用失败")
					}
			});
			uni.showToast({
			    title: '已保存',
			    duration: 1000
			});
	    }
	  },
	  actions: {
	  },
	  modules: {
	  }
})

export default store