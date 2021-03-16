<template>
    <div> 
                <el-menu :router="true" mode="horizontal">
                   <!--基座中可以哦放自己的路由-->
                   <el-menu-item index="/">银行</el-menu-item>
                   <!--引用其他子应用-->
                   <el-menu-item index="/balm-login">登录注册</el-menu-item>
                   <el-menu-item index="/balm-ui">vue2应用</el-menu-item>
                   <el-menu-item style="float:right">
                     
                <el-dropdown trigger="click">
                   <span class="el-dropdown-link">
                   嘻嘻<i class="el-icon-arrow-down el-icon--right"></i>
                   </span>
                   <el-dropdown-menu slot="dropdown">
                       <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                       <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                       <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                       <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                       <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                   </el-dropdown-menu>
                </el-dropdown>
   
                   </el-menu-item>
                </el-menu>
        
      
     
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>