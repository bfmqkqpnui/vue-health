<template>
  <div id="head">
    <div class="head-body">
      <!-- Logo -->
      <div class="logo ax_default box_1">
        <span>屿真健康科技</span>
      </div>

      <!-- 导航 -->
      <div class="nav">
        <div id="systemId" :class="{active:cavFlag.systemFlag}" @click="selectItem($event)"><a
          href="javascript:;">系统</a></div>
        <div id="shopId" :class="{active:cavFlag.shopFlag}" @click="selectItem($event)"><a href="javascript:;">门店</a>
        </div>
        <div id="clinicId" :class="{active:cavFlag.clinicFlag}" @click="selectItem($event)"><a
          href="javascript:;">诊所</a></div>
        <div id="reportId" :class="{active:cavFlag.reportFlag}" @click="selectItem($event)"><a
          href="javascript:;">统计报告</a></div>
      </div>

      <!-- 账户收银 -->
      <div class="right">
        <div class="cashier">
          <a href="javascript:;">收银</a>
        </div>

        <div class="account">
          <!-- 用户头像 -->
          <div class="ax_default image headImg"><img src="/static/images/u259.png" alt=""></div>
          <div class="ax_default user" @click="showAccountSetting">
            <span>管理员</span>
            <span>admin</span>
          </div>
          <div class="ax_default image item" @click="showAccountSetting">
            <img src="/static/images/u265.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 登录设置 -->
    <div id="settingLogin" :class="{hide:!settingFlag,show:settingFlag}">
      <div class="settingLogin_status">
        <div class="settingLogin_status_content">
          <ul>
            <li style="position: absolute;top: .8rem;">
              <img src="/static/images/u270.png" width="25">
              <a href="javascript:;" style="font-size: .8rem;">个人信息</a>
            </li>
            <li style="    position: absolute;top: 3.2rem;">
              <img src="/static/images/u276.png" width="22">
              <a href="javascript:;">密码修改</a>
            </li>
            <li style="position: absolute;top: 5rem;left: -0.7rem;">
              <img src="/static/images/u278.png" width="147" height="22" style="margin: 0;">
            </li>
            <li style="position: absolute;top: 6.4rem;left: .3rem;"><img src="/static/images/u280.png" width="20"><a
              href="javascript:;">退出</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import jQuery from 'jquery'
  //Js部分尽量采用ES6语法，webpack babel插件会转义兼容
  export default {
    //组件私有数据（必须是function，而且要return对象类型）
    data() {
      return {
        cavFlag: {
          systemFlag: true,
          shopFlag: false,
          clinicFlag: false,
          reportFlag: false
        },
        settingFlag : false,
      }
    },
    //计算属性
    computed: {},
    //函数集，自己封装，便于开发使用
    methods: {
      selectItem(event) {
        let id = event.currentTarget.attributes[0].value;
        if ("systemId" == id) {
          this.cavFlag.systemFlag = true;
          this.cavFlag.shopFlag = false;
          this.cavFlag.clinicFlag = false;
          this.cavFlag.reportFlag = false;
        } else if ("shopId" == id) {
          this.cavFlag.systemFlag = false;
          this.cavFlag.shopFlag = true;
          this.cavFlag.clinicFlag = false;
          this.cavFlag.reportFlag = false;
        } else if ("clinicId" == id) {
          this.cavFlag.systemFlag = false;
          this.cavFlag.shopFlag = false;
          this.cavFlag.clinicFlag = true;
          this.cavFlag.reportFlag = false;
        } else if ("reportId" == id) {
          this.cavFlag.systemFlag = false;
          this.cavFlag.shopFlag = false;
          this.cavFlag.clinicFlag = false;
          this.cavFlag.reportFlag = true;
        } else {
          this.cavFlag.systemFlag = false;
          this.cavFlag.shopFlag = false;
          this.cavFlag.clinicFlag = false;
          this.cavFlag.reportFlag = false;
        }
      },
      showAccountSetting() {
        this.settingFlag = !this.settingFlag;
      }
    },
    //生命周期钩子：组件实例渲染完成时调用
    mounted() {

    },
    //要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
    components: {}
  }
</script>

<style>
  #head {
    background-color: rgba(69, 162, 255, 1);
    width: 100%;
    height: 3.5rem;
  }

  .head-body {
    width: 100%;
    height: 100%;
  }

  .head-body .logo {
    display: inline-block;
    font-size: 1.5rem;
    line-height: 3.5rem;
    font-weight: bold;
    position: relative;
    left: 1.5rem;
    top: 0rem;
    color: #FFF;
  }

  .head-body .nav {
    display: inline;
    position: absolute;
    left: 15rem;
    top: 0rem;
    height: 3.5rem;
    width: 40rem;
  }

  a {
    text-decoration: none;
  }

  ul, menu, dir {
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
  }

  ul li {
    list-style: none;
  }

  .head-body .nav div, .right .cashier {
    width: 8.125rem;
    height: 100%;
    display: inline-block;
    text-align: center;
    line-height: 3.5rem;
  }

  .head-body .nav div a {
    color: #FFF;
    height: 100%;
    display: inline-block;
    width: 100%;
    font-weight: bold;
    padding: 0rem 0.15rem;
  }

  .head-body .nav div a:hover {
    background-color: rgba(66, 139, 202, 0.517647058823529);
  }

  .head-body .nav .active > a {
    background-color: rgba(66, 139, 202, 0.517647058823529);
  }

  .head-body .right {
    position: absolute;
    right: 0rem;
    top: 0rem;
    width: 20rem;
    height: 3.5rem;
  }

  .right .cashier {
    float: left;
    color: #FFF;
    font-weight: bold;
    cursor: pointer;
  }

  .right .account {
    width: 10rem;
    height: 100%;
    display: inline-block;
    position: absolute;
    left: 10rem;
  }

  .right .account .headImg {
    position: absolute;
    left: 0rem;
    top: .6rem;
  }

  .right .account .user {
    width: 4.8125rem;
    height: 3rem;
    position: absolute;
    left: 2rem;
    top: .6rem;
    color: #FFF;
    font-weight: bold;
    cursor: pointer;
  }

  .right .account img {
    width: 2.1875rem;
    height: 2.1875rem;
  }

  .right .account .item {
    position: absolute;
    top: 1.8rem;
    left: 6rem;
    cursor: pointer;
  }

  .right .account .item img {
    width: .9375rem;
    height: .6875rem;
  }

  #settingLogin {
    z-index: -1;
    position: absolute;
    right: 2rem;
    top: 3.5rem;
    width: 7.875rem;
    height: 8.6875rem;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(204, 204, 204, 1);
    border-top: 0px;
    border-radius: 5px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    -moz-box-shadow: 0px 0px 15px rgba(204, 204, 204, 0.349019607843137);
    -webkit-box-shadow: 0px 0px 15px rgba(204, 204, 204, 0.349019607843137);
    box-shadow: 0px 0px 15px rgba(204, 204, 204, 0.349019607843137);
  }

  #settingLogin .settingLogin_status {
    position: relative;
    left: 0px;
    top: 0px;
    width: 7.875rem;
    height: 8.6875rem;
    background-image: none;
  }

  #settingLogin .settingLogin_status .settingLogin_status_content {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }

  .settingLogin_status_content ul li {
    height: 2rem;
    line-height: 2rem;
  }

  .settingLogin_status_content ul li img {
    vertical-align: middle;
    margin: 0px 0.5rem;
  }

  .settingLogin_status_content a {
    font-size: .9rem;
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern" 1;
    -webkit-font-feature-settings: "kern";
    -moz-font-feature-settings: "kern";
    -moz-font-feature-settings: "kern=1";
    font-kerning: normal;
    margin-left: 0.5rem;
  }

  #settingLogin.hide {
    transform: translateY(-200px);
    transition: all 1.5s;
  }
  #settingLogin.show {
    transform: translateY(0px);
    transition: all 1.5s;
  }
</style>
