<template>
  <div class="special-goods">
    <header class="hd">
      <a class='more' href="">
        <span>专题精选</span>
        <span class="spaNincon"></span>
      </a>
    </header>
    <div class="special-goods-container">
      <ul class="special-goods-list">
        <li class="special-goods-item" v-for="(item ,index) in topicList" :key="index">
          <div class="special-goods-img">
            <img v-lazy="item.itemPicUrl" alt="">
          </div>
          <div class="line1">
            <h4 class="line1-title">{{item.title}}</h4>
            <span class="line1-price">{{item.priceInfo}}元起</span>
          </div>
          <div class="desc">{{item.subtitle}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
      computed:{
        ...mapState(['topicList'])
      },
      mounted () {
        this.$store.dispatch('getTopicList',()=>{
          this.$nextTick(()=>{
            new BScroll('.special-goods-container',{
              click: true,
              scrollX:true
            })
          })
        })
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .special-goods
    margin-bottom (20/$rem)
    background-color #fff
    width 100%
    .hd
      width 100%
      height (110/$rem)
      font-size (32/$rem)
      display flex
      align-items center
      justify-content center
      box-sizing border-box
      .more
        color #333
        display flex
        align-items center
        .spaNincon
          display inline-block
          width (30/$rem)
          height (30/$rem)
          background-image url('./images/go2-3e511991d6.png')
          margin-left (10/$rem)

    .special-goods-container
      width 100%
      height (453/$rem)
      padding 0 (30/$rem) (36/$rem) (30/$rem)
      box-sizing border-box
      .special-goods-list
        height 100%
        display flex
        width (1820/$rem)
        .special-goods-item
          width (575/$rem)
          margin-right (20.833/$rem)
          .special-goods-img
            width 100%
            height (322/$rem)
            margin-bottom (16/$rem)
            border-radius 8px
            overflow hidden
            >img
              width 100%
              height auto
              position relative
              left 50%
              transform translateX(-50%)


          .line1
            width 100%
            height (41/$rem)
            margin-bottom (2/$rem)
            display flex
            justify-content space-between
            .line1-title
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              font-size (28/$rem)
              width (410/$rem)
              text-align left
            .line1-price
              color #b4282d
              font-size (28/$rem)

          .desc
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            width (575/$rem)
            font-size (28/$rem)
            color #7F7F7F
            text-align left
</style>
