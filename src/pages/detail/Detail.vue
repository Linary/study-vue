<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<!--scoped 表示这些样式只对当前组件有效-->
<style lang="stylus" scoped>
  @import "~styles/varible.styl"
  .content
    height 50rem
</style>
