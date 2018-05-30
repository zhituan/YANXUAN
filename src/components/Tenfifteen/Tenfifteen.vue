<template>
  <div class="Tenfifteen">
    <div class="inner">
      <header class="Tenfifteen-header">十点一刻</header>
      <div class="Tenfifteen-container">
        <div class="Tenfifteen-list">
          <div class="Tenfifteen-content" v-for="(item , index) in tenfifteen" :key="index">
            <div class="txt">
              <div class="txt-header">今日话题</div>
              <p class="txt-title">{{item.title}}</p>
              <p class="txt-desc">{{item.desc}}</p>
              <div class="txt-joinInfo">
                <div class="txt-joinInfo-avatar">
                  <div class="txt-joinInfo-avatar1" v-for="(avatar , index) in item.participantAvatar" :key="index">
                    <img :src="avatar ? avatar : '/static/images/8945ae63d940cc42406c3f67019c5cb6.png'" alt="" >
                  </div>
                </div>
                <p class="txt-joinInfo-txt">{{item.participantNum}}人参与话题</p>
              </div>
            </div>
          </div>
          <div class="Tenfifteen-content">
            <div class="txt">
              <div class="txt-more">
                <span class="txt-more-words">查看更多话题</span>
                <span class="txt-more-img"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['tenfifteen'])
    },
    mounted() {
      this.$store.dispatch('getTenfifteen',()=>{
        this.$nextTick(() => {
          new BScroll('.Tenfifteen-container',{
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
  .Tenfifteen
    width 100%
    padding 0 (30/$rem) (40/$rem) (30/$rem)
    box-sizing border-box
    margin-bottom (20/$rem)
    background-color #fff
    .inner
      width 100%
      clearFix()
      .Tenfifteen-header
        width 100%
        height (120/$rem)
        font-size (32/$rem)
        text-align center
        line-height (120/$rem)
      .Tenfifteen-container
        .Tenfifteen-list
          display flex
          float left
          .Tenfifteen-content
            width (579.98/$rem)
            height (411/$rem)
            margin-right (30/$rem)
            box-sizing border-box
            padding (38/$rem) (40/$rem) (79/$rem) (40/$rem)
            background-image url('./images/tenFifteen-2a1d0ea11b.png')
            flex-shrink 0
            &:last-child
              background-image none
              border (10/$rem) solid #e6e6e6
              height (384/$rem)
              .txt
                width 100%
                height 100%
                display flex
                flex-direction column
                justify-content  center
                .txt-more
                  height (38/$rem)
                  display flex
                  line-height (38/$rem)
                  .txt-more-words
                    display inline-block
                    font-size (32/$rem)
                    color #7f7f7f
                    line-height (38/$rem)
                    margin-right (17/$rem)
                  .txt-more-img
                    display inline-block
                    width (30/$rem)
                    height (30/$rem)
                    line-height (30/$rem)
                    background-image url('./images/circle-right-arrow-3d59025cb6.png')

            .txt
              width 100%
              height 100%
              display flex
              flex-direction column
              justify-content space-between
              align-items center
              .txt-header
                font-size (24/$rem)
                position relative
                color #7f7f7f
                line-height (16/$rem)
                padding 0 (8/$rem)
                margin-bottom (40/$rem)
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
              .txt-title
                width 100%
                height (43/$rem)
                margin-bottom (14/$rem)
                font-size (36/$rem)
                font-weight 700
                margin-top (-40/$rem)
              .txt-desc
                width 100%
                height (40/$rem)
                font-size (28/$rem)
                margin-top (-40/$rem)
              .txt-joinInfo
                height (48/$rem)
                width 100%
                display flex
                justify-content center
                .txt-joinInfo-avatar
                  margin-right (16/$rem)
                  height 100%
                  display flex
                  .txt-joinInfo-avatar1
                    width (48/$rem)
                    height (48/$rem)
                    border-radius 50%
                    overflow hidden
                    >img
                      width 100%
                      height 100%
                      display block



                .txt-joinInfo-txt
                  height (27/$rem)
                  text-align left
                  font-size (26/$rem)
                  line-height (48/$rem)


</style>
