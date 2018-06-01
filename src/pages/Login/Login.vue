<template>
  <div class="wrap">
    <header>
      <div class="back">
        <span class="back-icon" @click="$router.back()"></span>
      </div>
      <div class="mlogo"></div>
      <div class="toggleLoginType">
        <div class="passwordLogin loginType" :class="{on:isShow === show}" @click="show = true">
          <router-link replace href="javascript:;" to="/login/passwordLogin">普通登录</router-link>
          <span class="triangle"></span>
        </div>
        <div class="phoneLogin loginType" :class="{on:isShow !== show}" @click="show = false" >
          <router-link replace  href="javascript:;" to="/login/phoneLogin">手机动态密码登录</router-link>
          <span class="triangle"></span>
        </div>
      </div>
    </header>
    <div class="loginInfoContainer">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
      data() {
        return {
          isShow:true,
          show:false
        }
      },
      props: {
        data: Boolean
      },
      beforeMount () {
         PubSub.subscribe('show', (show ,{toShow}) => {
           this.show = toShow
         })
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .wrap
    background-color white
    height (1164/$rem)
    header
      width 100%
      height (360/$rem)
      background-color #b4282d
      .back
        height (100/$rem)
        width 100%
        box-sizing border-box
        padding 0 (24/$rem)
        display flex
        align-items center
        .back-icon
          display block
          width (44/$rem)
          height (40/$rem)
          background-image url('./images/personal-bico3.png')
          background-repeat no-repeat
      .mlogo
        width 100%
        height (172/$rem)
      .toggleLoginType
        height (88/$rem)
        width 100%
        display flex
        .loginType
          width (375/$rem)
          height 100%
          position relative
          &.on
            .triangle
              display block
              width 0
              height 0
              border-width (20/$rem)
              border-color transparent transparent #fff transparent
              border-style solid
              position absolute
              left 0
              right 0
              bottom -3px
              margin auto
          >a
            font-size (30/$rem)
            color #fff
            display block
            width 100%
            height 100%
            text-align center
            line-height (88/$rem)
</style>
