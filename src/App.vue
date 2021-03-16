<template>
  <div id="homePage">
       <div class="container-fluid">
              <TopNav/> 

        <router-view>
      
        </router-view>
        <div id="balm-login"></div>
        <div id="balm-ui"></div>
    
       </div>
       <!--导航栏-->
      
  </div>
</template>
<script>
import TopNav from './components/TopNav.vue'
export default {
   components:{
        TopNav
   }
}
</script>
