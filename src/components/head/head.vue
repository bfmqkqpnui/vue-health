<template>
  <div id="base" class="">

    <!-- Unnamed (public) -->

    <!-- Unnamed (Rectangle) -->
    <div id="u1" class="ax_default box_1">
      <div id="u1_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u2" class="text" style="display:none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (Rectangle) -->
    <div id="u3" class="ax_default box_1">
      <div id="u3_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u4" class="text" style="display:none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (Rectangle) -->
    <div id="u5" class="ax_default label">
      <div id="u5_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u6" class="text">
        <p><span>屿真健康科技</span></p>
      </div>
    </div>

    <!-- 系统 (Rectangle) -->
    <div id="u7" class="ax_default box_2" :class="{selected:headSelectFlag.u7}" data-label="系统"
         @mouseover="bindClass($event)" @mouseleave="unbindClass($event)" @click="selectClass($event)">
      <div id="u7_div" :class="{selected:headSelectFlag.u7}"></div>
      <!-- Unnamed () -->
      <div id="u8" class="text">
        <p><span>系统</span></p>
      </div>
    </div>

    <!-- 门店 (Rectangle) -->
    <div id="u9" class="ax_default box_2" :class="{selected:headSelectFlag.u9}" data-label="门店"
         @mouseover="bindClass($event)" @mouseleave="unbindClass($event)" @click="selectClass($event)">
      <div id="u9_div" :class="{selected:headSelectFlag.u9}"></div>
      <!-- Unnamed () -->
      <div id="u10" class="text">
        <p><span>门店</span></p>
      </div>
    </div>

    <!-- 诊所 (Rectangle) -->
    <div id="u11" class="ax_default box_2" :class="{selected:headSelectFlag.u11}" data-label="诊所"
         @mouseover="bindClass($event)" @mouseleave="unbindClass($event)" @click="selectClass($event)">
      <div id="u11_div" :class="{selected:headSelectFlag.u11}"></div>
      <!-- Unnamed () -->
      <div id="u12" class="text">
        <p><span>诊所</span></p>
      </div>
    </div>

    <!-- 屿真健康科技 (Dynamic Panel) -->
    <div id="u13" class="ax_default" data-label="屿真健康科技">
      <div id="u13_state0" class="panel_state" data-label="系统">
        <router-view @child-system="setSystem"></router-view>
      </div>
      <div id="u13_state1" class="panel_state" data-label="门店">
        <router-view @child-HeadSelectFlag="setShop"></router-view>
      </div>
      <div id="u13_state2" class="panel_state" data-label="诊所">
        <div id="u13_state2_content" class="panel_state_content">
        </div>
      </div>
      <div id="u13_state3" class="panel_state" data-label="统计报告">
        <router-view @child-report="setReport"></router-view>
      </div>
    </div>

    <!-- Unnamed (Image) -->
    <div id="u259" class="ax_default image">
      <img id="u259_img" class="img " src="/static/images/u259.png"/>
      <!-- Unnamed () -->
      <div id="u260" class="text" style="display:none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (Rectangle) -->
    <div id="u261" class="ax_default label">
      <div id="u261_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u262" class="text">
        <p><span>管理员</span></p>
      </div>
    </div>

    <!-- Unnamed (Rectangle) -->
    <div id="u263" class="ax_default label">
      <div id="u263_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u264" class="text">
        <p><span>admin</span></p>
      </div>
    </div>

    <!-- Unnamed (Shape) -->
    <div id="u265" class="ax_default icon">
      <img id="u265_img" class="img " src="/static/images/u265.png"/>
      <!-- Unnamed () -->
      <div id="u266" class="text" style="display:none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 登录设置 (Dynamic Panel) -->
    <div id="u267" class="ax_default" :class="{ax_default_hidden:isAx_default_hidden}" data-label="登录设置">
      <settingLoginComponent></settingLoginComponent>
    </div>

    <!-- Unnamed (Hot Spot) -->
    <div id="u284" class="ax_default" @click="showSettringLogin">
    </div>

    <!-- Unnamed (Rectangle) -->
    <div id="u285" class="ax_default label">
      <div id="u285_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u286" class="text">
        <p><span>收银</span></p>
      </div>
    </div>

    <!-- 统计报告 (Rectangle) -->
    <div id="u287" class="ax_default box_2" :class="{selected:headSelectFlag.u287}" data-label="统计报告"
         @mouseover="bindClass($event)" @mouseleave="unbindClass($event)" @click="selectClass($event)">
      <div id="u287_div" :class="{selected:headSelectFlag.u287}"></div>
      <!-- Unnamed () -->
      <div id="u288" class="text">
        <p><span>统计报告</span></p>
      </div>
    </div>

  </div>
</template>

<script>
  import jQuery from 'jquery'
  import settingLoginComponent from '@/components/head/settingLogin/settingLogin'

  export default {
    data() {
      return {
        headSelectFlag: {
          u7: true,
          u9: false,
          u11: false,
          u287: false
        },
        isAx_default_hidden: true
      }
    },
    computed: {},
    methods: {
      setPageTitle: function () {
        document.body.style.background = '';
        document.title = '首页-订单派送';
      },
      //顶部鼠标移入事件
      bindClass(event) {
        let id = event.currentTarget.attributes[0].value;
        let flag = jQuery("#" + id).hasClass("mouseOver");
        if (!flag) {
          jQuery("#" + id).addClass("mouseOver");
          jQuery("#" + id).find("div").eq(0).addClass("mouseOver");
        }
      },
      //顶部鼠标移除事件
      unbindClass(event) {
        let id = event.currentTarget.attributes[0].value;
        let flag = jQuery("#" + id).hasClass("mouseOver");
        if (flag) {
          jQuery("#" + id).removeClass("mouseOver");
          jQuery("#" + id).find("div").eq(0).removeClass("mouseOver");
        }
      },
      selectClass(event) {
        let id = event.currentTarget.attributes[0].value;
        if (id == "u7") {
          this.headSelectFlag.u7 = true;
          this.headSelectFlag.u9 = false;
          this.headSelectFlag.u11 = false;
          this.headSelectFlag.u287 = false;
          this.$router.push("/index/system");
        } else if (id == "u9") {
          this.headSelectFlag.u7 = false;
          this.headSelectFlag.u9 = true;
          this.headSelectFlag.u11 = false;
          this.headSelectFlag.u287 = false;
          this.$router.push("/index/shop");
        } else if (id == "u11") {
          this.headSelectFlag.u7 = false;
          this.headSelectFlag.u9 = false;
          this.headSelectFlag.u11 = true;
          this.headSelectFlag.u287 = false;
        } else if (id == "u287") {
          this.headSelectFlag.u7 = false;
          this.headSelectFlag.u9 = false;
          this.headSelectFlag.u11 = false;
          this.headSelectFlag.u287 = true;
          this.$router.push("/index/report");
        } else {
          this.headSelectFlag.u7 = false;
          this.headSelectFlag.u9 = false;
          this.headSelectFlag.u11 = false;
          this.headSelectFlag.u287 = false;
        }
      },
      //门店
      setShop(value) {
        if (value) {
          this.headSelectFlag.u7 = false;
          this.headSelectFlag.u9 = value;
          this.headSelectFlag.u11 = false;
          this.headSelectFlag.u287 = false;
        }
      },
      //系统
      setSystem(value) {
        if (value) {
          this.headSelectFlag.u7 = value;
          this.headSelectFlag.u9 = false;
          this.headSelectFlag.u11 = false;
          this.headSelectFlag.u287 = false;
        }
      },
      //门诊
      setClinic(value) {
        if (value) {
          this.headSelectFlag.u7 = false;
          this.headSelectFlag.u9 = false;
          this.headSelectFlag.u11 = value;
          this.headSelectFlag.u287 = false;
        }
      },
      //统计报告
      setReport(value) {
        if (value) {
          this.headSelectFlag.u7 = false;
          this.headSelectFlag.u9 = false;
          this.headSelectFlag.u11 = false;
          this.headSelectFlag.u287 = value;
        }
      },
      //显示和隐藏账户设置
      showSettringLogin() {
        console.log("111");
        this.isAx_default_hidden = !this.isAx_default_hidden;
        console.log(">>>" + this.isAx_default_hidden);
      }
    },
    components: {
      settingLoginComponent
    }
  }
</script>

<style>
</style>
