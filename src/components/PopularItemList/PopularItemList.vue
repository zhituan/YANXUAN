<template>
  <div class="m-indexFloor m-popularItemList">
    <header class="m-popularItemList-header">
      <p class="popularText">人气推荐 .好物精选</p>
      <span class="popularSearch"> 查看全部> </span>
    </header>
    <div class="m-goodGrid m-goodGrid-popularItem">
      <ul class="newList">
        <li class="newItem" v-for="(item ,index) in popularItemList" :key="index">
          <a href="javascript:;" class="newLink">
            <div class="newImg">
              <img class='newImg-img' :src="item.listPicUrl" alt="">
            </div>
            <div class="newTxt">
              <span class="newIcon"></span>
              <span class="name">{{item.name}}</span>
              <span class="content">{{item.simpleDesc}}</span>
              <span class="price">￥{{item.retailPrice}}</span>
            </div>
          </a>
        </li>
        <li class="newItem">
          <a href="javascript:;" class="newLink-more">
            <span class="searchMore">查看全部</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
    export default {
      computed:{
        ...mapState(['popularItemList'])
      },
      mounted() {
        this.$store.dispatch('getPopularItemList')
        new BScroll('.m-goodGrid-popularItem',{
          click: true,
          scrollX:true
        })
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .m-popularItemList
    margin-bottom (20/$rem)
    background-color #fff
    bottom-border-1px(#eee)
    .m-popularItemList-header
      background-image url('./images/bitmap2-d626e0b52a.png')
      background-size (750/$rem) (260/$rem)
      height (260/$rem)
      width 100%
      position relative
      display flex
      flex-direction column
      align-items center
      justify-content center
      margin-bottom (32/$rem)
      .popularText
        font-size (36/$rem)
        color #B4A078
      .popularSearch
        display inline-block
        width (240/$rem)
        height (56/$rem)
        font-size (28/$rem)
        background-color #F4E9CB
        text-align center
        line-height (56/$rem)
        color #B4A078
        margin-top (16/$rem)
    .m-goodGrid-popularItem
      width 100%
      height (480/$rem)
      background-color #fff
      overflow hidden
      .newList
        display flex
        width (2850/$rem)
        overflow hidden
        .newItem
          margin-left (30/$rem)
          width (280/$rem)
          padding 0!important
          .newLink
            display block
            width 100%
            .newImg
              width (279.98/$rem)
              height (279.98/$rem)
              background-color #f4f4f4
              margin-bottom (20/$rem)
              .newImg-img
                width 100%
                height 100%
            .newTxt
              .name
                display block
                box-sizing border-box
                margin-top (10/$rem)
                padding 0 (10/$rem)
                font-size (28/$rem)
                line-height (34/$rem)
                text-align left
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
                color #333
              .content
                display block
                margin-bottom (14/$rem)
                margin-top (14/$rem)
                font-size (24/$rem)
                color #7f7f7f
                line-height (30/$rem)
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
                padding 0 (10/$rem)
                text-align left
              .price
                padding 0 (10/$rem)
                text-align left
                color #b4282d
                font-size (28/$rem)
                display block

          .newLink-more
            width (263.98/$rem)
            height (263.98/$rem)
            display block
            width 100%
            border (8/$rem) solid #F4F4F4
            .searchMore
              color #666
              font-size (28/$rem)
              text-align center
              line-height (263.98/$rem)

</style>
