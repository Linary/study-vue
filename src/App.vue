<!-- 这个一个单文件组件，放置的是vue的一个组件，其效果类似与class的定义 -->
<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
