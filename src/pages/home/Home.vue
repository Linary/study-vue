<!--相当于最外层的容器组件-->
<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>test</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    // 自动关联上上面的home-header
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
