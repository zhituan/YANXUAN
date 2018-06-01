<template>
  <div class="m-indexFloor">
    <header class="hd">
      <a class='more' href="">
        <span>品牌制造商直供</span>
        <span class="spaNincon"></span>
      </a>
    </header>
    <div class="m-indexManufacturersSupplying">
      <ul class="list">
        <li class="item" v-for="(item ,index) in tagList" :key="index">
          <a href="javascript:;">
            <div class="cnt">
              <h4 class="title">{{item.name}}</h4>
              <div>
                <span class="price1">{{item.floorPrice}}</span>
                <span class="price2">元起</span>
              </div>
            </div>
            <img v-lazy="item.picUrl" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
      computed:{
        ...mapState(['tagList'])
      },
      mounted() {
        this.$store.dispatch('getTagList')
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .m-indexFloor
    top-border-1px(#eee)
    width 100%
    margin-bottom (20/$rem)
    background-color white
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


    .m-indexManufacturersSupplying
      width 100%
      box-sizing border-box
      padding-bottom (8/$rem)
      .list
        position relative
        margin 0 (16/$rem)
        height (468/$rem)
        overflow hidden
        box-sizing border-box
        clearFix()
        .item
          display inline-block
          position relative
          margin-bottom (8/$rem)
          width (354.98/$rem)
          height (236/$rem)
          overflow hidden
          background-color #f4f4f4
          float left
          text-align left
          &:nth-child(1)
            margin-right (8/$rem)
          &:nth-child(3)
            margin-right (8/$rem)
          .cnt
            position absolute
            left 0
            top 0
            padding (20/$rem) 0 0 (20/$rem)
            width 100%
            z-index 4
            height (33/$rem)
            .title
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
              color #333
              font-size (28/$rem)
              line-height (34/$rem)
              margin-bottom (6/$rem)
            div
              box-sizing border-box
              height (34/$rem)
              .price1
                color #333
                font-size (28/$rem)
                line-height (34/$rem)
              .price2
                color #333
                font-size (24/$rem)
                line-height (34/$rem)


          img
            width 100%
            height 100%

</style>
