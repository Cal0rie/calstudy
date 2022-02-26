//创建整个文件的路由器
import VueRouter from 'vue-router'
//隐去组件
import Weather from '../components/Weather'
import Home from '../components/Home'

//创建路由器
export default new VueRouter ({
routes:[
     {
    path: '/',
    redirect: '/Home'
  },

{
    path:'/Home',
    component:Home
},
{
    path:'/Weather',
    component:Weather
}
]
})