<template>
  <div class="wrap">
    <header class="googs-header">
      <div class="header-content">
        <router-link class="goHome" to="/home"></router-link>
        <router-link class="header-title" to="/home"></router-link>
        <a class="goSearch" href="http://m.you.163.com/search"></a>
        <router-link class="goCart" to="shopcart"></router-link>
      </div>
    </header>
    <div class="mdImg">
      <img src="./images/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="loginType">
      <div @click="goPhone">
        <router-link class="common" to="/login/passwordLogin">
          <span class="commonIcon icon"></span>
          <span>普通登录</span>
        </router-link>
      </div>

      <router-link class="phone" to="/login/phoneLogin">
        <span class="phoneIcon icon"></span>
        <span>手机动态密码登录</span>
      </router-link>
      <p class="register">手机号快捷注册 > </p>
    </div>
    <div class="thirdWrap">
      <div class="itemWrap">
        <i class="iconfont icon-weixin"></i>
        <span class="name">微信</span>
      </div>
      <div class="itemWrap qq">
        <i class="iconfont icon-QQ"></i>
        <span class="name">QQ</span>
      </div>
      <div class="itemWrap">
        <i class="iconfont icon-weibo"></i>
        <span class="name">微博</span>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    methods:{
      goPhone() {
        PubSub.publish('show',{toShow:true})
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .wrap
    background-color #f4f4f4
    overflow-x hidden
    height (1334/$rem)
    .googs-header
      width 100%
      height (87/$rem)
      position fixed!important
      top 0
      left 0
      background-color #fafafa
      z-index 100
      bottom-border-1px(#d9d9d9)
      .header-content
        width 100%
        height 100%
        box-sizing border-box
        padding 0 (16/$rem) 0 (24/$rem)
        display flex
        justify-content space-between
        align-items center
        >a
          background-image url('./images/hd-s342878591a-9af1a97852.png')
          background-repeat no-repeat
        .goHome
          display inline-block
          width (48/$rem)
          height (44/$rem)
          background-position 0 (-75/$rem)
        .header-title
          width (171.984/$rem)
          height (54/$rem)
          display inline-block
          background-position 0 (-128/$rem)
          position absolute
          left 50%
          margin-left (-85.992/$rem)
        .goSearch
          display inline-block
          width (63.98/$rem)
          height (63.98/$rem)
          background-position 0 (-334/$rem)
          position absolute
          left 78%
        .goCart
          display inline-block
          width (63.98/$rem)
          height (63.98/$rem)
    .mdImg
      width 100%
      height (410/$rem)
      box-sizing border-box
      padding (160/$rem) 0
      text-align center
      margin-top (87/$rem)
      >img
        width (268/$rem)
        height (90/$rem)
    .loginType
      width 100%
      height (292/$rem)
      box-sizing border-box
      padding 0 (40/$rem)
      margin-bottom (204/$rem)
      .common,.phone
        display block
        width (670/$rem)
        box-sizing border-box
        height (90/$rem)
        margin-bottom (32/$rem)
        border 1px solid #b4282d
        display flex
        align-items center
        justify-content center
        border-radius (8/$rem)
        .icon
          display block
          width (40/$rem)
          height (40/$rem)
          margin-right (16/$rem)
          background-repeat no-repeat
          &.commonIcon
            background-image url('./images/ico3.png')
            box-sizing 100%
          &.phoneIcon
            background-image url('./images/login-s2d0d826858-b284a621da.png')
            background-position 0 (-100/$rem)
        >span:last-child
          font-size (28/$rem)
          color #b4282d
      .common
        background-color #b4282d
        >span:last-child
          color white
      .register
        width 100%
        height (40/$rem)
        font-size (28/$rem)
        line-height (40/$rem)
        display flex
        justify-content center
    .thirdWrap
      width (552/$rem)
      height (40/$rem)
      display flex
      margin 0 (99/$rem)
      position absolute
      bottom (160/$rem)
      .itemWrap
        width (184/$rem)
        height 100%
        display flex
        align-items center
        justify-content center
        &.qq
          border-left 1px solid #333
          border-right 1px solid #333
        .iconfont
          font-size (28/$rem)
          margin-right (5/$rem)
          color #333
        .name
          font-size (28/$rem)
          color #333

</style>
