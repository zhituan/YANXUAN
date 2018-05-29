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
        <li class="special-goods-item">
          <div class="special-goods-img">
            <img src="./images/22c06cba5722e5fd0e9561cf5b7b1800.jpg" alt="">
          </div>
          <div class="line1">
            <h4 class="line1-title">给毛孔来一次深度清洁</h4>
            <span class="line1-price">107.1元起</span>
          </div>
          <div class="desc">硅胶洁面仪，洗出会发光的素颜肌</div>
        </li>
        <li class="special-goods-item">
          <div class="special-goods-img">
            <img src="./images/22c06cba5722e5fd0e9561cf5b7b1800.jpg" alt="">
          </div>
          <div class="line1">
            <h4 class="line1-title">给毛孔来一次深度清洁</h4>
            <span class="line1-price">107.1元起</span>
          </div>
          <div class="desc">硅胶洁面仪，洗出会发光的素颜肌</div>
        </li>
        <li class="special-goods-item">
          <div class="special-goods-img">
            <img src="./images/22c06cba5722e5fd0e9561cf5b7b1800.jpg" alt="">
          </div>
          <div class="line1">
            <h4 class="line1-title">给毛孔来一次深度清洁</h4>
            <span class="line1-price">107.1元起</span>
          </div>
          <div class="desc">硅胶洁面仪，洗出会发光的素颜肌</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {

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
