<template>
    <div class="wrap">
      <div class="loginInfo">
        <div class="fromContainer" >
          <form action="#" @submit.prevent="login">
            <div class="upper">
              <span class="icon"></span>
              <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
            </div>
            <div class="down">
              <span class="pwdicon icon"></span>
              <input type="password" maxlength="8" placeholder="密码" v-model="pwd">
            </div>
            <button class="button">登录</button>
          </form>
        </div>
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
      <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
    </div>
</template>

<script>
  import AlertTip from '../../../components/AlertTip/AlertTip'
  export default {
    data() {
      return {
        name:'',
        pwd:'',
        alertText: '', // 提示文本
        alertShow: false, // 是否显示警告框
      }
    },
    methods:{
      login() {
        if(!this.name.trim()){
          this.showAlert('用户名必须输入')
          return
        }else if (!this.pwd){
          this.showAlert('密码必须输入')
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
    },
    components:{
      AlertTip
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  $rem = 750/10rem
  .loginInfo
    width 100%
    box-sizing border-box
    padding 0 (42/$rem)
    margin-top (20/$rem)
    .fromContainer
      width 100%
      height 100%
      >form
        width 100%
        height 100%
        .upper,.down
          width (666/$rem)
          height (92/$rem)
          display flex
          align-items center
          border-bottom 1px solid #e2e2e2
          >span
            display block
            width (34/$rem)
            height (42/$rem)
            background-image url('./images/ico3.png')
            background-repeat no-repeat
            background-size 100%
            margin-right (20/$rem)
            &.pwdicon
              background-image url('./images/ico4.png')
          input[type='text'],input[type='password']
            width (606/$rem)
            height (42/$rem)
            font-size (30/$rem)
            display block
            color #e2e2e2
            caret-color #333
            outline none
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
    margin-top (200/$rem)
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
