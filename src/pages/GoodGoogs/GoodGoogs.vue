<template>
  <div class="wrap">
    <header class="googs-header">
      <div class="header-content">
        <router-link class="goHome" to="/home"></router-link>
        <router-link class="header-title" to="/home"></router-link>
        <router-link class="goSearch" to="/search"></router-link>
        <router-link class="goCart" to="shopcart"></router-link>
      </div>
    </header>
    <div class="googs-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item , index) in banner" :key="index">
            <div class="content">
              <div class="subTitle">{{item.subTitle}}</div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
            <img :src="item.picUrl" alt="">
          </div>
        </div>
      </div>
    </div>
    <GoodGoogsRecommend/>
    <ForYouRecommend/>
    <Tenfifteen/>
    <Perfection/>
    <div class="look">
      <header class="look-header">严选Look</header>
      <div class="img-container">
        <img :src="yxLook.picUrl" alt="">
      </div>
      <div class="look-info">
        <div class="look-author">
          <div class="author-avatar">
            <img :src="yxLook.avatar" alt="">
          </div>
          <span>{{yxLook.nickname}}</span>
        </div>
        <p class="author-desc">
          {{yxLook.content}}
        </p>
      </div>
    </div>
    <Goodmore/>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import GoodGoogsRecommend  from '../../components/GoodGoogsRecommend/GoodGoogsRecommend'
  import ForYouRecommend from '../../components/ForYouRecommend/ForYouRecommend'
  import Tenfifteen from '../../components/Tenfifteen/Tenfifteen'
  import Perfection from '../../components/Perfection/Perfection'
  import Goodmore from '../../components/Goodmore/Goodmore'
  export default {
    computed:{
      ...mapState(['yxLook','banner'])
    },
    mounted() {
      this.$store.dispatch('getYxLook')
      this.$store.dispatch('getBanner',() => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            autoplay:true,
            spaceBetween: 8,
            slidesPerView : 1.1,
            centeredSlides : true
          });
        })
      })
    },
    components:{
      GoodGoogsRecommend,
      ForYouRecommend,
      Tenfifteen,
      Perfection,
      Goodmore
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .wrap
    background-color #f4f4f4
    overflow-x hidden
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
    .googs-swiper
      width 100%
      height (432.98/$rem)
      margin-top (87/$rem)
      background-color white
      overflow hidden
      box-sizing border-box
      .swiper-container
        box-sizing border-box
        width (690/$rem)
        height 100%
        padding (24/$rem) 0
        margin-left (30/$rem)
        margin-right (30/$rem)
        position relative
        overflow hidden
        display flex
        .swiper-slide
          width 100%
          //flex-shrink 0
          padding 0 (10/$rem)
          position relative
          box-sizing border-box
          z-index 6
          >img
            width 100%
            height 100%
            display block
            border-radius (8/$rem)
          .content
            position absolute
            width (465.984/$rem)
            height (198/$rem)
            left 0
            top 0
            right 0
            bottom 0
            margin auto
            background-color rgba(255,255,255,.9)
            display flex
            flex-direction column
            justify-content center
            align-items center
            .subTitle
              font-size (20/$rem)
              position relative
              color #7f7f7f
              line-height (16/$rem)
              padding 0 (8/$rem)
              &::before
               content ''
               position absolute
               top 0
               bottom 0
               margin auto
               width (24/$rem)
               height 1px
               left (-24/$rem)
               background-color #999
              &::after
                content ''
                position absolute
                top 0
                bottom 0
                margin auto
                width (24/$rem)
                height 1px
                background-color #999
                right (-24/$rem)
            .title
              font-size (32/$rem)
              line-height (48/$rem)
              color #333
              margin-top (16/$rem)
              font-weight 700
            .desc
              font-size (28/$rem)
              line-height (36/$rem)
              color #333
              margin-top (4/$rem)
    .look
      width 100%
      background-color #fff
      .look-header
        text-align center
        font-size (32/$rem)
        height (120/$rem)
        line-height (120/$rem)
        color #333
      .img-container
        width 100%
        height (1000/$rem)
        >img
          width 100%
          height 100%
          display block
      .look-info
        width 100%
        height (274/$rem)
        box-sizing border-box
        padding (24/$rem) (30/$rem) (46/$rem) (30/$rem)
        display flex
        flex-direction column
        justify-content space-between
        .look-author
          height (48/$rem)
          width 100%
          display flex
          align-items center
          .author-avatar
            width (46/$rem)
            height (46/$rem)
            border-radius 50%
            overflow hidden
            margin-right (10/$rem)
            >img
              width 100%
              height 100%
              display block


          >span
            font-size (24/$rem)
            color #333
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            display inline-block


        .author-desc
          width 100%
          height (132/$rem)
          font-size (28/$rem)
          line-height 1.6
          color #7f7f7f
          text-align left
</style>
