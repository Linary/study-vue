<template>
  <div>
    <detail-banner></detail-banner>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
export default {
  name: 'Detail',
  components: {
    DetailBanner
  }
}
</script>

<!--scoped 表示这些样式只对当前组件有效-->
<style lang="stylus" scoped>
  @import "~styles/varible.styl"
</style>
