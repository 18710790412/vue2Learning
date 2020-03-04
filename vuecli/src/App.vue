<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">home</router-link> | 
      <router-link to="/">redirectHome</router-link> | 
      <router-link to="/home1">home1</router-link> | 
      <router-link to="/news/newsId/newsTitle">news</router-link> | 
      <router-link to="/news/newsId2/newsTitle2">redirectNews</router-link> | 
      <router-link to="/firstPage">firstPage</router-link> | 
      <router-link to="/firstPage/firstSon1">firstSon1</router-link> | 
      <router-link :to="{name:'firstSon2', params:{userName:'hxx', age: '29', favor: 'love beautiful girls'}}">firstSon2</router-link> | 
      <router-link to="/hxx">hxx</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition> 
    <router-view name="left" style="float:left;width:50%;height:200px;background:pink;font-size:20px;color:white;"></router-view>
    <router-view name="right" style="float:left;width:50%;height:200px;background:purple;font-size:20px;color:white;"></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  opacity: 1;
  transition: opacity 0.5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
