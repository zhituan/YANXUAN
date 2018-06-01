<template>
  <div class="forYouRcmds">
    <div class="container" v-if="zhenPins[0]">
      <header class="title">严选甄品</header>
      <a href="javascript:;" class="bigRcmds" >
        <div class="imgContainer">
          <span class="topicTag">{{zhenPins[0].typeName}}</span>
          <img v-lazy="zhenPins[0].picUrl" alt="">
        </div>
        <div class="RcmdsInfo">
          <div class="RcmdsInfo-upper">
            <span class="RcmdsInfo-upper-title">{{zhenPins[0].title}}</span>
            <span class="RcmdsInfo-upper-price">{{zhenPins[0].priceInfo}}元起</span>
          </div>
          <p class="RcmdsInfo-down">{{zhenPins[0].subTitle}}</p>
        </div>
      </a>
      <a href="javascript:;" class="smallRcmds">
        <div class="leftItem">
          <div class="avatarCotner">
            <div class="avatar">
              <img :src="zhenPins[1].avatar" alt="">
            </div>
            <span>{{zhenPins[1].nickname}}</span>
          </div>
          <p class="leftItem-title">{{zhenPins[1].title}}</p>
          <p class="leftItem-subTitle">{{zhenPins[1].subTitle}}</p>
        </div>
        <div class="rightItem">
          <p>{{zhenPins[1].typeName}}</p>
          <img v-lazy="zhenPins[1].picUrl" alt="" class="rightItemImg">
        </div>
      </a>
      <a href="javascript:;" class="smallRcmds">
        <div class="leftItem">
          <div class="avatarCotner">
            <div class="avatar">
              <img :src="zhenPins[2].avatar" alt="">
            </div>
            <span>{{zhenPins[2].nickname}}</span>
          </div>
          <p class="leftItem-title">{{zhenPins[2].title}}</p>
          <p class="leftItem-subTitle">{{zhenPins[2].subTitle}}</p>
        </div>
        <div class="rightItem">
          <p>{{zhenPins[2].typeName}}</p>
          <img v-lazy="zhenPins[2].picUrl" alt="" class="rightItemImg">
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['zhenPins']),
    },
    mounted() {
      this.$store.dispatch('getZhenPins')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .forYouRcmds
    box-sizing border-box
    width 100%
    padding 0 (30/$rem) (40/$rem) (30/$rem)
    background-color #fff
    margin-bottom (20/$rem)
    .container
      width 100%
      .title
        height (120/$rem)
        width 100%
        text-align center
        font-size (32/$rem)
        line-height (120/$rem)
      .bigRcmds
        width 100%
        display block
        border 1px solid #d9d9d9
        margin-bottom (30/$rem)
        .imgContainer
          width 100%
          height (386/$rem)
          position relative
          box-sizing border-box
          >img
            width 100%
            height 100%
            border-radius (8/$rem)
          .topicTag
            position absolute
            top (20/$rem)
            left (20/$rem)
            display inline-block
            width (98/$rem)
            height (30/$rem)
            background-color rgba(255,255,255,.9)
            color #333
            border 1px solid #d9d9d9
            font-size (24/$rem)
            text-align center
            line-height (30/$rem)
        .RcmdsInfo
          width 100%
          height (185.98/$rem)
          padding (24/$rem) (20/$rem) (67/$rem) (20/$rem)
          box-sizing border-box
          .RcmdsInfo-upper
            width 100%
            height (43/$rem)
            margin-bottom (19/$rem)
            display flex
            justify-content space-between
            .RcmdsInfo-upper-title
              font-size (36/$rem)
              flex 1
              //margin-right (30/$rem)
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
              color #333
              text-align left
            .RcmdsInfo-upper-price
              font-size (36/$rem)
              color #333
          .RcmdsInfo-down
            width (648/$rem)
            height (33/$rem)
            font-size (28/$rem)
            text-align left
            color #7f7f7f
      .smallRcmds
        width 100%
        display block
        border 1px solid #d9d9d9
        height (274/$rem)
        margin-bottom (30/$rem)
        display flex
        &:last-child
          margin-bottom 0
        .leftItem
          padding 0 (30/$rem) 0 (20/$rem)
          display flex
          flex-direction column
          justify-content center
          width (408.2/$rem)
          box-sizing border-box
          .avatarCotner
            width 100%
            height (48/$rem)
            display flex
            align-items center
            margin-bottom (25/$rem)
            .avatar
              width (46/$rem)
              height (46/$rem)
              border-radius 50%
              overflow hidden
              margin-right (8/$rem)
              >img
                width 100%
                height 100%
                display block
            >span
              color #333
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
              font-size (24/$rem)
          .leftItem-title
            width 100%
            height (38/$rem)
            margin-bottom (14/$rem)
            font-size (32/$rem)
            text-align left
            color #333
          .leftItem-subTitle
            position: relative
            height (72/$rem)
            width 100%
            font-size (24/$rem)
            overflow hidden
            text-overflow ellipsis
            color #7f7f7f
            text-align left
            line-height 1.5
        .rightItem
          width (279.984/$rem)
          position relative
          .rightItemImg
            width 100%
            height 100%
          >p
            position absolute
            left (10/$rem)
            top (10/$rem)
            z-index 50
            font-size (24/$rem)
            width (202/$rem)
            height (36/$rem)
            background-color rgba(255,255,255,.9)
            border-radius (20/$rem)
            color #333
            line-height (36/$rem)
            text-align center
</style>
