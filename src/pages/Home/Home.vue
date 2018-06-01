<template>
  <div class="wrap">
    <header class="m-header">
        <a href="javascript:;" class="logo"></a>
        <router-link class="m-topSearchIpt ipt" to="/search">
          <span class="icon"></span>
          <span class="placeholder">搜索商品，共9776款好物</span>
        </router-link>
      </header>
    <nav class="m-tabs">
        <ul class="list">
          <li class="tab " :class="{active: currentIndex === index}" v-for="(item ,index) in homeNav"
              :key="index" @click="changeColor(index)">
            <span class="txt">{{item.name}}</span>
          </li>
        </ul>
      </nav>
    <SwiperList/>
    <div class="m-indexServicePolicy">
      <ul class="g-grow">
        <li class="item">
          <a class='u-icon' href='./images/tick.png'></a>
          <span class="text">网易自营品牌</span>
        </li>
        <li class="item">
          <a class='u-icon' href='./images/tick.png'></a>
          <span class="text">30天无忧退货</span>
        </li>
        <li class="item">
          <a class='u-icon' href='./images/tick.png'></a>
          <span class="text">48小时快速退款</span>
        </li>
      </ul>
    </div>
    <Brand/>
    <NewItems/>
    <PopularItemList/>
    <div class="Limited-time">
      <a href="javascript:;" class="Limited-time-link">
        <div class="Limited-time-content">
          <div class="leftItem">
            <p class="Limited-time-title">严选限时购</p>
            <div class="time">
              <span class="hours">01</span>
              <span class="colon">:</span>
              <span class="mins">25</span>
              <span class="colon">:</span>
              <span class="secs">17</span>
            </div>
            <p class="next-title">下一场10:00开始</p>
          </div>
          <div class="rightItem">
            <div class="rightItem-img">
              <img src="./images/9e8a9f7ded1a5191f4972ac45f6fbd2b.png" alt="">
            </div>
            <div class="price">
              <span class="price-now">￥160</span>
              <span class="price-origin">￥199</span>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="welfare-service">
      <a href="javascript:;" class="welfare-service-link">
        <img src="./images/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="" class="welfare-service-img">
      </a>
    </div>
    <SpecialGoods/>
    <GoodRecommend/>
    <div class="m-ftWrap">
      <div class="bd">
        <a class='bd-left' href="javascript:;">下载APP</a>
        <a class='bd-right' href="javascript:;">电脑版</a>
      </div>
      <p class="copyright">
        <span>网易公司版权所有 © 1997-2018</span>
        <br>
        <span>食品经营许可证：JY13301080111719</span>
      </p>
    </div>
    <a href="javascript:;" class="m-wapNewUserEntrance">
      <span class="gift"></span>
      <span class="toTop" @click="goTop()"></span>
    </a>
  </div>
</template>
<script>
    import BScroll from 'better-scroll'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import {mapState} from 'vuex'
    import Brand from '../../components/Brand/Brand'
    import NewItems from '../../components/NewItems/NewItems'
    import PopularItemList from '../../components/PopularItemList/PopularItemList'
    import SpecialGoods from '../../components/SpecialGoods/SpecialGoods'
    import GoodRecommend from '../../components/GoodRecommend/GoodRecommend'
    import SwiperList from '../../components/SwiperList/SwiperList'
    export default {
      data(){
        return {
          currentIndex:0
        }
      },
      name:'scroll-top',
      props: {
        toBottom: {
          type: Number,
          default: 0
        }
      },


      mounted() {
        this.$store.dispatch('getHomeNav')
        let toTop = document.querySelector('.wrap .m-wapNewUserEntrance .toTop')
        window.onscroll = () => {
          this.t = document.documentElement.scrollTop || document.body.scrollTop
          if( this.t > 600){
            toTop.style.opacity = 1
          }else {
            toTop.style.opacity = 0
          }
        };
        //document.querySelector('.toTop').style.bottom = this.toBottom;
      },
      computed:{
        ...mapState(['homeNav'])
      },
      watch:{
        homeNav(value){
          this.$nextTick(()=>{
            new BScroll('.m-tabs',{
              click: true,
              scrollX:true,
              eventPassthrough:'vertical'
            });
          })
        }
      },
      methods:{
        goTop() {
          document.documentElement.scrollTop = document.body.scrollTop = 0;
        },
        changeColor (index) {
          this.currentIndex = index
        }
      },
      components:{
        Brand,
        NewItems,
        PopularItemList,
        SpecialGoods,
        GoodRecommend,
        SwiperList
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .wrap
    background-color #f4f4f4
    overflow-x hidden
    .m-header
      display flex
      width 100%
      height (87.97/$rem)
      padding (16/$rem) (30/$rem)
      flex-flow row nowrap
      align-items center
      position fixed
      left 0
      top 0
      box-sizing border-box
      z-index 100
      background-color #fff
      .logo
        width (138/$rem)
        height (40/$rem)
        background-image url('./images/indexLogo-11d65342f9.png')
        display inline-block
        margin-right (20/$rem)
        background-size cover
        background-position center
      .m-topSearchIpt
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        height (56/$rem)
        width (532/$rem)
        font-size (28/$rem)
        background-color #ededed
        border-radius (8/$rem)
        .icon
          display inline-block
          vertical-align center
          background-image url('images/search2-2fb94833aa.png')
          background-size 100% 100%
          width (27.98/$rem)
          height (27.98/$rem)
          margin-right (10/$rem)


    .m-tabs
      bottom-border-1px(#d9d9d9)
      width 100%
      height (60/$rem)
      left 0
      top (87.97/$rem)
      //margin-top (87.97/$rem)
      box-sizing border-box
      position fixed
      z-index 100
      .list
        display flex
        flex-flow row nowrap
        flex-shrink 0
        padding 0 (30/$rem)
        background #fff
        height 100%
        width (1535/$rem)
        overflow hidden
        .tab
          display flex
          flex-shrink 0
          position relative
          margin-left (48/$rem)
          &:first-of-type
            margin-left 0
          &.active
            .txt
              color #b4282d
              &:after
                content ''
                position absolute
                left 0
                bottom  0
                width 100%
                height (4/$rem)
                background-color #b4282d
          .txt
            display inline-block
            padding 0 (16/$rem)
            line-height (60/$rem)
            font-size (28/$rem)
            text-align center
            color #333
    .m-indexServicePolicy
      width 100%
      height (72/$rem)
      background-color #fff
      margin-bottom (20/$rem)
      bottom-border-1px(#eee)
      .g-grow
        width 100%
        height 100%
        display flex
        justify-content space-around
        padding 0 (30/$rem)
        align-items center
        box-sizing border-box
        .item
          display flex
          align-items center
          .u-icon
            display inline-block
            width (32/$rem)
            height (32/$rem)
            background-image url('./images/tick.png')
            vertical-align middle
            background-size 100% 100%
          .text
            font-size (24/$rem)




    .Limited-time
      width 100%
      height (380/$rem)
      background-color white
      .Limited-time-link
        display block
        width 100%
        height 100%
        margin-bottom (20/$rem)
        .Limited-time-content
          width 100%
          height 100%
          box-sizing border-box
          padding (30/$rem) (40/$rem) (30/$rem) (56/$rem)
          display flex
          justify-content space-between
          .leftItem
            display flex
            flex 1
            flex-direction column
            padding-top (80/$rem)
            .Limited-time-title
              font-size (36/$rem)
              line-height (36/$rem)
              margin-bottom (24/$rem)
              color #333
              letter-spacing (12/$rem)
              text-align left
            .time
              display inline
              height (56/$rem)
              display flex
              .hours,.mins,.secs
                display inline-block
                line-height (56/$rem)
                text-align center
                width (62/$rem)
                height (56/$rem)
                font-size (32/$rem)
                color #fff
                border-radius (4/$rem)
                background #444
                margin-right (-3/$rem)
              .colon
                color #333
                font-size (26/$rem)
                width (20/$rem)
                display inline-block
                text-align center
                line-height (56/$rem)
                font-weight 700
            .next-title
              margin-top (40/$rem)
              color #333
              font-size (24/$rem)
              line-height (24/$rem)
              height (24/$rem)
              text-align left


          .rightItem
            background #fff
            width (320/$rem)
            height (320/$rem)
            position relative
            .rightItem-img
              width 100%
              height 100%
              >img
                width 100%
                height 100%


            .price
              height (96/$rem)
              width (96/$rem)
              background red
              position absolute
              right (20/$rem)
              bottom (36/$rem)
              background-color rgba(244,143,24,.95)
              border-radius 100%
              color #fff
              text-align center
              display flex
              flex-direction column
              justify-content center
              align-items center
              .price-now,.price-origin
                font-size (28/$rem)
                line-height (28/$rem)
                height (28/$rem)


    .welfare-service
      width 100%
      height (300/$rem)
      margin-bottom (20/$rem)
      margin-top (20/$rem)
      .welfare-service-link
        display block
        width 100%
        height 100%
        .welfare-service-img
          width 100%
          height 100%


    .m-ftWrap
      width 100%
      height (243.98/$rem)
      background-color #414141
      text-align center
      padding (54/$rem) (20/$rem) (28/$rem)
      border-top 1px solid rgba(0,0,0,.15)
      box-sizing border-box
      margin-bottom (98/$rem)
      .bd
        width 100%
        height (62/$rem)
        display flex
        justify-content center
        >a
          width (172/$rem)
          font-size (28/$rem)
          color #fff
          border 1px solid white
          border-radius (4/$rem)
          display inline-block
          text-align center
          line-height (62/$rem)
          &.bd-left
            margin-right (50/$rem)



      .copyright
        margin-top (36/$rem)
        font-size (24/$rem)
        line-height (32/$rem)
        color #999


    .m-wapNewUserEntrance
      display block
      position fixed
      right 0
      bottom (240/$rem)
      z-index 500
      width (111.984/$rem)
      height (80/$rem)
      .gift
        background-image url('./images/wapNewUserEntry-d7cf1023e9.png')
        background-size 100% 100%
        width 100%
        height 100%
        display inline-block
      .toTop
        display inline-block
        width (81.98/$rem)
        height (81.98/$rem)
        background-image url('./images/goToTop-7a19216f77.png')
        background-size 100% 100%
        opacity 0

</style>
