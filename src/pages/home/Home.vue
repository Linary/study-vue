<!--相当于最外层的容器组件-->
<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    // 自动关联上上面的home-header
    HomeHeader
  }
}
</script>

<style>

</style>
