<template>
  <div>
    <p><router-link to="/">首页</router-link></p>
    <p>经纬度：<input type="text" v-model="message"></p>
      
    <button @click='getFn()'>查询天气</button>
  <div>
          <p>气温：{{list.temp}}</p>
          <p>天气情况：{{list.text}}</p>
          <p>风向：{{list.windDir}}</p>
      </div>
  
    

</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Weather',
 data(){
   return{
     message:'116.41,39.92',
     list:[]    
    
     
   
   }
 },
  methods:{
    getFn(){
     const url='https://devapi.qweather.com/v7/weather/now?location='+this.message+'&key=cd5c76903f804c2dbb86d98c16176d08'
      axios.get(url).then((res)=>{
        this.list=res.data.now
      })
    },
  } 
}
</script>

<style>

</style>
