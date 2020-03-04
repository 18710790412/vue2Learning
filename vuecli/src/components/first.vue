<template>
  <div>
      <p>{{ msg }}</p>
      <p>{{ $route.name }}</p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'firstPage',
    data: function(){
        return {
            msg: 'Welcome to the first page!!!'
        }
    }
}
</script>

<style>

</style>