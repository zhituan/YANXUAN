<template>
  <div class="goodmore">
    <header class="goodmore-header">更多精彩</header>
    <div class="goodmore-container" v-for="(item ,index) in findMore" :key="index">
      <div class="img-container">
        <img :src="item.itemPicUrl" alt="">
      </div>
      <div class="goodmore-desc">{{item.title}}</div>
    </div>
  </div>
</template>
<script>
    import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['findMore'])
    },
    mounted() {
      this.$store.dispatch('getFindMore')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .goodmore
    width (690/$rem)
    margin 0 (30/$rem) (98/$rem) (30/$rem)
    .goodmore-header
      width 100%
      box-sizing border-box
      height (140/$rem)
      font-size (28/$rem)
      position relative
      color #7f7f7f
      line-height (140/$rem)
      padding 0 (8/$rem)
      text-align center
      &::before
        content ''
        position absolute
        top 0
        bottom 0
        margin auto
        width (250/$rem)
        height 1px
        left (-8/$rem)
        background-color #999
      &::after
        content ''
        position absolute
        top 0
        bottom 0
        margin auto
        width (250/$rem)
        height 1px
        background-color #999
        right (-8/$rem)
    .goodmore-container
      width 100%
      height (498/$rem)
      box-sizing border-box
      padding (24/$rem)
      margin-bottom (30/$rem)
      background-color #fff
      .img-container
        width 100%
        height (360/$rem)
        >img
          width 100%
          height 100%
          display block
      .goodmore-desc
        width 100%
        height (90/$rem)
        padding (28/$rem) 0
        box-sizing border-box
        font-size (28/$rem)
        text-align left
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
</style>
