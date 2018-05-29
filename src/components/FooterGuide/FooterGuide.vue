<template>
  <footer class="footer_nav">
    <a href="javascript:;" class="guide_item" @click='goTo("/home")'>
      <span class="item_icon icon1" :class='{on: $route.path === "/home"}'></span>
      <p class="title">首页</p>
    </a>
    <a href="javascript:;" class="guide_item"  @click='goTo("/goodgoogs")'>
      <span class="item_icon icon2" :class='{on: $route.path === "/goodgoogs"}'></span>
      <p class="title">识物</p>
    </a>
    <a href="javascript:;" class="guide_item"  @click='goTo("/classify")'>
      <span class="item_icon icon3" :class='{on: $route.path === "/classify"}'></span>
      <p class="title">分类</p>
    </a>
    <a href="javascript:;" class="guide_item"  @click='goTo("/shopcart")'>
      <span class="item_icon icon4" :class='{on: $route.path === "/shopcart"}'></span>
      <p class="title">购物车</p>
    </a>
    <a href="javascript:;" class="guide_item"  @click='goTo("/profile")'>
      <span class="item_icon icon5" :class='{on: $route.path === "/profile"}'></span>
      <p class="title">个人</p>
    </a>
  </footer>
</template>

<script>
    export default {
      methods:{
        goTo(path) {
          this.$router.replace(path)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .footer_nav
    top-border-1px(#d9d9d9)
    position fixed
    z-index 10
    bottom 0
    left 0
    width 100%
    height (98/$rem)
    background #fafafa
    display flex
    flex-direction row
    align-items center

    .guide_item
      position: relative;
      display: block
      text-align center
      font-size (16/$rem)
      color #666
      line-height 1
      width 20%
      .title
        font-size (24/$rem)
        margin-bottom (2/$rem)
        margin-top (7/$rem)
      .item_icon
        display: inline-block
        vertical-align middle
        background-repeat no-repeat
        width (39.98/$rem)
        height (39.98/$rem)
        background-image url("images/footerpIc.png")
      .icon1
        background-position 0 (-250/$rem)
        &.on
          background-position 0 (-200/$rem)
      .icon2
        background-position 0 (-350/$rem)
        &.on
          background-position 0 (-300/$rem)
      .icon3
        background-position 0 (-150/$rem)
        &.on
          background-position 0 (-100/$rem)
      .icon4
        background-position 0 (-50/$rem)
        &.on
          background-position 0 0
      .icon5
        background-position 0 (-450/$rem)
        &.on
          background-position 0 (-400/$rem)

</style>
