<!-- 这个一个单文件组件，放置的是vue的一个组件，其效果类似与class的定义 -->
<template>
  <div id="app">
    <!--路由中的内容加载过一次后就放到内存，以后不会每次都去发送ajax请求-->
    <keep-alive>
      <!-- 显示的是当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
