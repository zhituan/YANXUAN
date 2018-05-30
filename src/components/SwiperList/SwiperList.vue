<template>
  <nav class="swiper_nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item ,index) in focusList" :key="index">
          <img :src="item.picUrl" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </nav>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['focusList'])
    },
    mounted() {
      this.$store.dispatch('getFocusList')
    },
    watch:{
      focusList(value){
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            loop: true,
            pagination:{
              el: '.swiper-pagination',
              type:'bullets'
            }
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .swiper_nav
    height (400/$rem)
    width 100%
    margin-top (90/$rem)
    .swiper-container
      width 100%
      height 100%
      margin-left 0
      margin-right 0
      position relative
      overflow hidden
      .swiper-wrapper
        width 100%
        height 100%
        z-index 1
        display flex
        .swiper-slide
          width 100%
          height 100%
          display flex
          flex-shrink 0
          img
            width 100%
            height 100%
            display inline-block
            background-color #f9f9f9
      .swiper-pagination-bullets
        .swiper-pagination-bullet
          width (40/$rem)
          height (4/$rem)
          border-radius 0
          background-color #fff
          opacity 0.4
        .swiper-pagination-bullet-active
          background #fff
          opacity 1
</style>
