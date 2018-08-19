<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<!--scoped 表示这些样式只对当前组件有效-->
<style lang="stylus" scoped>
  @import "~styles/varible.styl"
  .item-title-icon
    position relative
    left .06rem
    top .06rem
    display inline-block
    width .36rem
    height: .36rem
    background url("") 0 -.45rem no-repeat
    margin-right .1rem
    background-size .4rem 3rem
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
  .item-children
    padding 0 .2rem
</style>
