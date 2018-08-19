<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://image.3001.net/images/20180803/15332906001818.png!small"/>
      <div class="banner-info">
        <div class="banner-title">
          大连海洋世界
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe648;</span>
          39
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'Banner',
  data () {
    return {
      showGallery: false,
      imgs: ['https://avatars0.githubusercontent.com/u/9151831?s=460&v=4']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery
  }
}
</script>

<!--scoped 表示这些样式只对当前组件有效-->
<style lang="stylus" scoped>
  @import "~styles/varible.styl"
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-numer
        margin-top .14rem
        padding 0 .4rem
        height .32rem
        line-height .32rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
