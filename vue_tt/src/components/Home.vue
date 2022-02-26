<template>
 <div>
        跳转中.....
  </div>
</template>

<script>import router from "../router"
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  created(){
    setTimeout(function(){
      router.push({
        path: '/Weather'
      })
    },3000)
  }
}
</script>

<style scoped>

</style>