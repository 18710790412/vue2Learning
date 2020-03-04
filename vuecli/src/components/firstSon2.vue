<template>
  <div>
      <p>{{ msg }}</p>
      <p>{{$route.params.userName}} - {{$route.params.age}} - {{$route.params.favor}}</p>
  </div>
</template>

<script>
export default {
    name: 'firstSon2',
    data: function(){
        return {
            msg: '我是第二个子路由的界面!!!'
        }
    }
}
</script>

<style>

</style>