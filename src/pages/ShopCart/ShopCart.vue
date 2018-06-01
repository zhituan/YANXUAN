<template>
  <div class="wrap">
    <header class="CartHeader">购物车</header>
    <div class="content">
      <div class="explain">
        <ul class="explain-list">
          <li class="explain-item">
            <span class="icon"></span>
            <span>30天无忧退货</span>
          </li>
          <li class="explain-item">
            <span class="icon"></span>
            <span>48小时快速退款</span>
          </li>
          <li class="explain-item">
            <span class="icon"></span>
            <span>满88元免邮费</span>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="cartImgContainer">
          <img src="./images/noCart-a8fe3f12e5.png" alt="">
        </div>
        <div class="cartContent">
          <p class="goShop">去添点什么吧</p>
          <p @click="goPhone">
            <router-link class="login" to="/login/passwordLogin" >登录</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    methods: {
      goPhone() {
        console.log('dianji')
        PubSub.publish('show',{toShow:true})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .wrap
    background-color #f4f4f4
    height (1240/$rem)
    .CartHeader
      height (88/$rem)
      width 100%
      background-color white
      font-size (36/$rem)
      text-align center
      line-height (88/$rem)
    .content
      width 100%
      .explain
        width 100%
        box-sizing border-box
        padding 0 (30/$rem)
        height (70/$rem)
        .explain-list
          width 100%
          height 100%
          display flex
          justify-content space-between
          line-height (70/$rem)
          .explain-item
            display flex
            align-items center
            font-size (24/$rem)
            color #666
            .icon
              background-image url('./images/servicePolicy-1d7541974f.png')
              display block
              width (10/$rem)
              height (10/$rem)
              margin-right (10/$rem)




      .container
        width 100%
        margin-top (400/$rem)
        display flex
        flex-direction column
        align-items center
        .cartImgContainer
          width (248/$rem)
          height (248/$rem)
          >img
            width 100%
            height 100%
            display block
        .cartContent
          width 100%
          .goShop
            font-size (28/$rem)
            height (27/$rem)
            color #999
            text-align center
            margin-bottom (50/$rem)

          .login
            display block
            width (480/$rem)
            height (92/$rem)
            text-align center
            line-height (92/$rem)
            margin 0 auto
            color #fff
            background-color #b4282d
            font-size (30/$rem)


</style>
