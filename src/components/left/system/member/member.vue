<template>
  <div>
    <div id="u58_state7_content" class="panel_state_content">

      <!-- 会员列表 (Rectangle) "-->
      <div id="u93" class="ax_default box_1" data-label="会员列表" :class="{selected:selectFlag.u93Flag}"
           @mouseover="bindClass($event)" @mouseleave="unbindClass($event)" @click="selectClass($event)">
        <div id="u93_div" :class="{selected:selectFlag.u93Flag}"></div>
        <!-- Unnamed () -->
        <div id="u94" class="text">
          <p><span>会员列表</span></p>
        </div>
      </div>

      <!-- 会员列表 (Rectangle) [reference page] -->
      <div id="u93_ref" class="reference_page"></div>

      <!-- 充值记录 (Rectangle) -->
      <div id="u95" class="ax_default box_1" :class="{selected:selectFlag.u95Flag}" data-label="充值记录"
           @mouseover="bindClass($event)" @mouseleave="unbindClass($event)" @click="selectClass($event)">
        <div id="u95_div" :class="{selected:selectFlag.u95Flag}"></div>
        <!-- Unnamed () -->
        <div id="u96" class="text">
          <p><span>充值记录</span></p>
        </div>
      </div>

      <!-- 充值记录 (Rectangle) [reference page] -->
      <div id="u95_ref" class="reference_page"></div>

      <!-- 会员等级 (Rectangle) -->
      <div id="u97" class="ax_default box_1" :class="{selected:selectFlag.u97Flag}" data-label="会员等级"
           @mouseover="bindClass($event)" @mouseleave="unbindClass($event)" @click="selectClass($event)">
        <div id="u97_div" :class="{selected:selectFlag.u97Flag}"></div>
        <!-- Unnamed () -->
        <div id="u98" class="text">
          <p><span>会员等级</span></p>
        </div>
      </div>

      <!-- 会员等级 (Rectangle) [reference page] -->
      <div id="u97_ref" class="reference_page"></div>
    </div>
    <div class="showMain">
      <!-- 主要窗体 -->
      <router-view name="memberList"></router-view>
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
        selectFlag: {
          u93Flag: false,
          u95Flag: false,
          u97Flag: false
        }
      }
    },
    //计算属性
    computed: {},
    //函数集，自己封装，便于开发使用
    methods: {
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
        if (id == "u93") {
          this.selectFlag.u93Flag = true;
          this.selectFlag.u95Flag = false;
          this.selectFlag.u97Flag = false;
          this.$router.push("/index/system/member/memberList");
        } else if (id == "u95") {
          this.selectFlag.u93Flag = false;
          this.selectFlag.u95Flag = true;
          this.selectFlag.u97Flag = false;
        } else if (id == "u97") {
          this.selectFlag.u93Flag = false;
          this.selectFlag.u95Flag = false;
          this.selectFlag.u97Flag = true;
        } else {
          this.selectFlag.u93Flag = false;
          this.selectFlag.u95Flag = false;
          this.selectFlag.u97Flag = false;
        }

        let flag = jQuery("#" + id).hasClass("mouseOver");
        if (!flag) {
          jQuery("#" + id).addClass("mouseOver");
          jQuery("#" + id).find("div").eq(0).addClass("mouseOver");
        }
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
  #u93, #u95, #u97 {
    cursor: pointer;
  }

  #u93 #u93_div.selected, #u95 #u95_div.selected, #u97 #u97_div.selected {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 177px;
    height: 61px;
    background: inherit;
    background-color: rgba(238, 238, 238, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(204, 204, 204, 1);
    border-left: 0px;
    border-top: 0px;
    border-right: 0px;
    border-radius: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 14px;
    color: #666666;
  }

  .showMain {
    position: relative;
    top: -3.5rem;
    right: 4.5rem;
    /* background: #F00; */
    width: 70rem;
  }
</style>
