<template>
  <div class="wrap">
    <header class="classifyHeader">
      <router-link class="m-topSearchIpt ipt" to="/search">
        <span class="icon"></span>
        <span class="placeholder">搜索商品，共9726款好物</span>
      </router-link>
    </header>
    <div class="classifyWrap">
      <div class="classifyNav">
        <ul class="classifyList">
          <li class="classifyItem" :class='{active:index === currentIndex}' @click="goContent(index)" v-for="(item ,index) in navList" :key="index">
            <span>{{item.name}}</span></li>
        </ul>
      </div>
      <div class="classifyContentContainer">
        <div class="classifyContent" >
          <div class="bigImg">
            <img :src="navList[currentIndex].bannerUrl" alt="">
          </div>
          <div class="cateList" >
            <header class="hd">{{navList[currentIndex].name}}分类</header>
            <ul class="list" >
              <li class="cateItem" v-for="(item ,index) in currentContents" :key="index">
                <div class="cateImgWrapper">
                  <img :src="item.wapBannerUrl" alt="">
                </div>
                <div class="name">{{item.name}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return{
        currentIndex:3,
        currentContents:[]
      }
    },
    computed: {
      ...mapState(['navList'])
    },
    mounted() {
      this.$store.dispatch('getNavList',() => {
        this.$nextTick(() => {
          this._BScroll('.classifyNav')
          //
          this._BScroll('.classifyContentContainer')
        })
      });
    },
    watch:{
      navList (value) {
        this.$nextTick(() => {
          this.currentContents = this.navList[this.currentIndex].subCateList

        })
      }
    },
    methods:{
      goContent(index) {
        this.currentIndex = index
        this.currentContents = this.navList[this.currentIndex].subCateList
      },
      _BScroll(selector){
        return new BScroll(selector,{
          scrollY:true,
          click: true,
          // eventPassthrough: 'vertical'
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .wrap
    background-color #f4f4f4
    overflow hidden
    .classifyHeader
      width 100%
      height (88/$rem)
      box-sizing border-box
      padding 0 (30/$rem)
      position fixed
      top 0
      left 0
      display flex
      align-items center
      border-bottom 1px solid #d9d9d9
      background-color #fff
      z-index 99
      .m-topSearchIpt
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        height (56/$rem)
        width 100%
        font-size (28/$rem)
        background-color #ededed
        border-radius (8/$rem)
        .icon
          display inline-block
          vertical-align center
          background-image url('./images/search2-2fb94833aa.png')
          background-size 100% 100%
          width (27.98/$rem)
          height (27.98/$rem)
          margin-right (10/$rem)
        .placeholder
          color #666
          font-size (26/$rem)
          letter-spacing (2/$rem)
    .classifyWrap
      width 100%
      height (1148/$rem)
      clearFix()
      margin-top (88/$rem)
      background-color white
      .classifyNav
        width (161/$rem)
        border-right 1px solid #d9d9d9
        float left
        height 100%
        overflow hidden
        .classifyList
          box-sizing border-box
          padding (40/$rem) 0 (138/$rem) 0
          .classifyItem
            width 100%
            height (50/$rem)
            text-align center
            line-height (50/$rem)
            margin-top (40/$rem)
            position relative
            >span
              display block
              font-size (28/$rem)
              line-height (50/$rem)
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
            &.active
              >span
                color #ab2b2b
                font-size (36/$rem)
              &::before
                content ''
                position absolute
                top 0
                left 0
                bottom 0
                width (6/$rem)
                background-color #ab2b2b
            &:first-child
              margin-top 0
      .classifyContentContainer
        height 100%
        width (588/$rem)
        float right
        .classifyContent
          width (588/$rem)
          box-sizing border-box
          padding (30/$rem) (30/$rem) (21/$rem)(30/$rem)
          z-index 1 !important
          .bigImg
            width (528/$rem)
            height (192/$rem)
            >img
              display block
              width 100%
              height 100%
          .cateList
            width 100%
            background-color #fff
            .hd
              height (108/$rem)
              width 100%
              text-align center
              line-height (108/$rem)
              font-size (24/$rem)
              position relative
              display flex
              justify-content center
              &::before
                content ''
                position absolute
                top 0
                bottom 0
                margin auto
                width (40/$rem)
                height 1px
                left (150/$rem)
                background-color #999
              &::after
                content ''
                position absolute
                top 0
                bottom 0
                margin auto
                width (40/$rem)
                height 1px
                background-color #999
                right (150/$rem)

            .list
              width 100%
              display flex
              flex-wrap wrap
              .cateItem
                width (144/$rem)
                height (216/$rem)
                margin-right (34/$rem)
                &:nth-child(3n)
                  margin-right 0
                .cateImgWrapper
                  width (144/$rem)
                  height (144/$rem)
                  >img
                    display block
                    width 100%
                    height 100%

                .name
                  width 100%
                  height (72/$rem)
                  font-size (24/$rem)
                  text-align center
                  line-height (34/$rem)
                  color #333
</style>
