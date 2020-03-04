<template>
  <div>
      <p>{{ msg }}</p>
      <p>newId: {{ $route.params.newsId }}</p>
      <p>newTitle: {{ $route.params.newsTitle }}</p>
  </div>
</template>

<script>
export default {
    name: 'news',
    data:function(){
        return {
            msg: 'news page'
        }
    },
    beforeRouteEnter: (to, from, next) => {
        console.log('准备进入路由');
        // next(true);
        // next(false);
        // next('/');
        next();
    },
    beforeRouteLeave: (to, from, next) => {
        console.log('准备离开路由');
        next();
    }
}
</script>

<style>

</style>