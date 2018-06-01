<template>
  <div>
    <div class="good-recommend" v-for="(cate ,index) in cateList" :key="index">
      <h3>
        {{cate.name}}好物
      </h3>
      <div class="good-recommend-container" v-if="cate.itemList.length > 0">
        <ul class="good-recommend-list">
          <li class="good-recommend-item" v-for="(cateItem , index) in cate.itemList">
            <div class="good-recommend-upper">
              <div class="good-recommend-img">
                <img v-lazy="cateItem.listPicUrl" alt="">
              </div>
              <div class="desc">{{cateItem.simpleDesc}}</div>
            </div>
            <div class="good-recommend-tagWraper">
              <p v-if="cateItem.promTag">{{cateItem.promTag}}</p>
            </div>
            <div class="good-recommend-name">{{cateItem.name}}</div>
            <div class="price">￥{{cateItem.couponPrice}}</div>
          </li>
          <li class="good-recommend-item">
            <div class="good-recommend-upper">
              <div class="good-recommend-upper-last">
                <p class="good-recommend-upper-search">更多居家好物</p>
                <span class="good-recommend-icon"></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['cateList'])
    },
    mounted () {
      this.$store.dispatch('getCateList')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .good-recommend
    width 100%
    margin-bottom (20/$rem)
    >h3
      width 100%
      height (120/$rem)
      line-height (120/$rem)
      text-align center
      font-size (28/$rem)
      color #333
      background-color #fff
    .good-recommend-container
      width 100%
      .good-recommend-list
        position relative
        overflow hidden
        width 100%
        background-color white
        clearFix()
        .good-recommend-item
          width 50%
          box-sizing border-box
          &:nth-child(2n+1)
            padding 0 (10/$rem) (30/$rem) (20/$rem)
          &:nth-child(2n)
            padding 0 (20/$rem) (30/$rem) (10/$rem)
          float left
          position relative
          overflow hidden
          background-color white
          .good-recommend-upper
            background-color #f4f4f4
            width 100%
            position relative
            height (414/$rem)
            .good-recommend-upper-last
              padding (128/$rem) 0 (129/$rem) 0
              .good-recommend-upper-search
                color #333
                font-size (32/$rem)
                margin-bottom (60/$rem)
              .good-recommend-icon
                display inline-block
                width (66.98/$rem)
                height (66.98/$rem)
                background-image url('./images/goodGridMore-233aaf669a.png')
                background-size 100% 100%
            .good-recommend-img
              width 100%
              >img
                width 100%
                height (345/$rem)
            .desc
              position absolute
              top (345/$rem)
              width 100%
              box-sizing border-box
              background #F1ECE2
              border-radius 0 0 (4/$rem) (4$rem)
              font-size (24/$rem)
              color #9F8A60
              letter-spacing 0
              line-height (29/$rem)
              padding (20/$rem) (10/$rem)
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
              text-align left
          .good-recommend-tagWraper
            width 100%
            padding-left (10/$rem)
            margin (20/$rem) 0 0 (4/$rem)
            height (30/$rem)
            overflow hidden
            box-sizing border-box
            text-align left
            display flex
            >p
              background-color #f48f18
              margin-bottom (1/$rem)
              height (30/$rem)
              padding (5/$rem) (16/$rem)
              line-height (20/$rem)
              text-align center
              color #fff
              font-size (24/$rem)
              border-radius (2/$rem)
              display inline-block
              vertical-align middle
          .good-recommend-name
            margin-top (10/$rem)
            padding 0 (10/$rem)
            line-height (48/$rem)
            text-align left
            font-size (28/$rem)
            box-sizing border-box
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            color #333
            width 100%
          .price
            text-align left
            color #b4282d
            font-size (32/$rem)
            line-height 1
            padding (10/$rem)
</style>
