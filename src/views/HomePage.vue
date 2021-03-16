<template>
    <div id="homepage">
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <div class="row">
      <div class="col-2">
      <LeftNav></LeftNav>
      
      </div>
      <div class="col-10">
        
         <router-view></router-view>
         
      </div>

    </div>
    
    </div>
</template>

<script>
import LeftNav from '../components/LeftNav.vue'
export default {
     components:{
       LeftNav,  //左边导航栏
      
     }
}
</script>

<style >

</style>