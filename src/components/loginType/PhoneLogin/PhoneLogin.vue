<template>
    <div class="wrap">
      <div class="mformBox">
        <form action="" @submit.prevent="login">
          <div class="phoneNumber inputContainer">
            <span class="phoneIcon"></span>
            <input type="tel" placeholder="手机号" maxlength="11" v-model="phone"
                   :class="{right_phone: rightPhone}">
          </div>
          <div class="imgInfo inputContainer">
            <span class="InfoIcon"></span>
            <input type="text" placeholder="请输入图片内容" maxlength="11" v-model="imgCode">
            <img src="./images/seccode.jpg" alt="" class="imgPwd">
          </div>
          <div class="pwd inputContainer">
            <span class="pwdIcon"></span>
            <input type="text" placeholder="动态密码" maxlength="11" v-model="pwd">
            <button class="btnPwd" :disabled="!rightPhone" @click.prevent="getCode"> {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
          </div>
          <button class="button" >登录</button>
        </form>
      </div>
      <div class="register">
        <span>新用户注册</span>
        <span>忘记密码？</span>
      </div>
      <div class="joinNet">
        <p>合作网站登录</p>
        <div class="joinNetImg">
          <div class="imgContainer">
            <img src="./images/login_ico4.png" alt="">
          </div>
          <div class="imgContainer">
            <img src="./images/login_ico2.png" alt="">
          </div>
        </div>
      </div>
      <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip" />

    </div>
</template>

<script>
  import AlertTip from '../../../components/AlertTip/AlertTip'
  import PubSub from 'pubsub-js'
  export default {
    data () {
      return {
        phone:'',
        imgCode:'',
        pwd:'',
        computeTime:0,
        alertText: '', // 提示文本
        alertShow: false, // 是否显示警告框
      }
    },
    computed:{
      rightPhone() {
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      login () {
        if(!this.rightPhone){
          this.showAlert('手机号不正确')
          return
        }else if(!/^\d{6}$/.test(this.pwd)) {
          this.showAlert('密码不正确')
          return
        }
      },
      showAlert(alertText) {
        this.alertShow = true
        this.alertText = alertText
      },
      closeTip () {
        this.alertShow = false
        this.alertText = ''
      },
      getCode () {
        if(!this.computeTime){
          this.computeTime = 30
          this.intervalId = setInterval(() => {
            this.computeTime--
            if(this.computeTime<=0) {
              // 停止计时
              clearInterval(this.intervalId)
            }
          }, 1000)
        }
      },

    },
    components:{
      AlertTip
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  $rem = 750/10rem
  .mformBox
    width 100%
    box-sizing border-box
    padding 0 (42/$rem)
    margin-top (20/$rem)
    form
      .inputContainer
        width 100%
        height (92/$rem)
        display flex
        border-bottom 1px solid #e2e2e2
        align-items center
        .phoneIcon
          width (34/$rem)
          height (40/$rem)
          display block
          background-image url('./images/ico1.png')
          background-size 100%
          background-repeat no-repeat
          margin-right (20/$rem)
        .InfoIcon,.pwdIcon
          width (34/$rem)
          height (40/$rem)
          display block
          background-image url('./images/ico4.png')
          background-size 100%
          background-repeat no-repeat
          margin-right (20/$rem)
      input
        width (606/$rem)
        height (42/$rem)
        font-size (30/$rem)
        display block
        color #e2e2e2
        outline none
        caret-color #333
        &.right_phone
          color black
      .imgPwd
        display block
        width (170/$rem)
        height (60/$rem)
      .btnPwd
        width (300/$rem)
        height (60/$rem)
        font-size (24/$rem)
      .button
        width (615/$rem)
        height (76/$rem)
        margin-left (30/$rem)
        margin-right (30/$rem)
        background-color #b4282d
        font-size (30/$rem)
        color #fff
        line-height (76/$rem)
        text-align center
        border-radius (10/$rem)
        letter-spacing (10/$rem)
        margin-top (30/$rem)
  .register
    height (88/$rem)
    width 100%
    box-sizing border-box
    padding (24/$rem) (48/$rem)
    display flex
    justify-content space-between
    >span
      color #898989
      font-size (28/$rem)
  .joinNet
    width 100%
    height (228/$rem)
    margin-top (150/$rem)
    >p
      width 100%
      height (40/$rem)
      font-size (30/$rem)
      color #d7d7d7
      text-align center
      line-height (40/$rem)
    .joinNetImg
      width 100%
      height (188/$rem)
      padding (80/$rem)
      box-sizing border-box
      display flex
      justify-content space-between
    .imgContainer
      width (116/$rem)
      height (116/$rem)
      border-radius 50%
      overflow hidden
      >img
        width 100%
        height 100%
</style>
