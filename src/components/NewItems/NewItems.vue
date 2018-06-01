<template>
  <div class="m-indexFloor m-newItems">
    <header class="m-newItems-header">
      <p class="newText">新品首发</p>
      <span class="newSearch"> 查看全部> </span>
    </header>
    <div class="m-goodGrid m-goodGrid-newItem">
      <ul class="newList">
        <li class="newItem" v-for="(item ,index) in newItemList" :key="index">
          <a href="javascript:;" class="newLink">
            <div class="newImg">
              <img class='newImg-img' v-lazy="item.listPicUrl" alt="">
            </div>
            <div class="newTxt">
              <span class="newIcon"></span>
              <span class="name">{{item.name}}</span>
              <span class="content">夏季爆品，媲美现煮</span>
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
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
      computed:{
        ...mapState(['newItemList'])
      },
      mounted() {
        this.$store.dispatch('getnewItemList',()=>{
          this.$nextTick(() => {
            new BScroll('.m-goodGrid-newItem',{
              click: true,
              scrollX:true
            });
          })
        });
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .m-newItems
    margin-bottom (20/$rem)
    background-color #fff
    bottom-border-1px(#eee)
    .m-newItems-header
      background-image url('./images/bitmap-d4f7b37e32.png')
      background-size (750/$rem) (260/$rem)
      height (260/$rem)
      width 100%
      position relative
      display flex
      flex-direction column
      align-items center
      justify-content center
      margin-bottom (32/$rem)
      .newText
        font-size (36/$rem)
        color #8BA0B6
      .newSearch
        display inline-block
        width (240/$rem)
        height (56/$rem)
        font-size (28/$rem)
        background-color #D8E5F1
        text-align center
        line-height (56/$rem)
        color #8BA0B6
        margin-top (16/$rem)
    .m-goodGrid-newItem
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
