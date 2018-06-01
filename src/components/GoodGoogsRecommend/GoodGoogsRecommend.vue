<template>
  <div class="recommend">
    <ul class="recommend-list">
      <li class="recommend-item" v-for="(item ,index) in column" :key="index">
        <div class="img-content">
          <p>{{item.articleCount}}</p>
          <img v-lazy="item.picUrl" alt="">
        </div>
        <div class="recommend-item-title">{{item.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['column'])
    },
    mounted(){
      this.$store.dispatch('getColumn',() => {
        this.$nextTick(() => {
          new BScroll('.recommend',{
            scrollX:true,
            click: true,
            eventPassthrough: 'vertical'
          })
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .recommend
    width 100%
    height (285.98/$rem)
    padding (32/$rem) (30/$rem) (28/$rem) (30/$rem)
    box-sizing border-box
    background-color white
    margin-bottom (20/$rem)
    .recommend-list
      height (226/$rem)
      display flex
      width (1528/$rem)
      .recommend-item
        width (164/$rem)
        height (210/$rem)
        margin-right (24/$rem)
        flex-shrink 0
        .img-content
          width 100%
          height (164/$rem)
          margin-bottom (22/$rem)
          position relative
          >p
            width 100%
            height (32/$rem)
            position absolute
            right 0
            top 0
            text-align right
            font-size (24/$rem)
            background-image url('./images/rbGradient-049c62dfb5.png')
            background-size 100%
            line-height (32/$rem)
            color white
            z-index 20
          >img
            width 100%
            height 100%
            position absolute
            left 0
            top 0
            border-radius (8/$rem)
        .recommend-item-title
          width (183.98/$rem)
          height (24/$rem)
          font-size (24/$rem)
          text-align center
          margin-left (-18/$rem)




</style>
