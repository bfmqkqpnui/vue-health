<template>
  <div style="position: relative;">
    <div id="u289" class="ax_default label">
      <div id="u289_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u290" class="text">
        <p><span>会员列表</span></p>
      </div>
    </div>
    <div id="u291" class="ax_default box_1">
      <img id="u291_img" class="img " src="/static/images/u291.png">
      <!-- Unnamed () -->
      <div id="u292" class="text" style="display:none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <div id="u366" class="ax_default primary_button" style="cursor: pointer;">
      <!--<button id="u366_div">新增</button>-->
      <el-button type="primary">新增</el-button>
    </div>

    <div id="u368" class="ax_default primary_button">
      <!--<button id="u368_div">删除</button>-->
      <el-button type="primary">删除</el-button>
    </div>

    <div id="u395" class="ax_default box_1">
      <!--<input type="text" placeholder="姓名/身份证号" id="u395_div">-->
      <el-input placeholder="姓名/身份证号"></el-input>
      <!--<div id="u395_div"></div>
      <div id="u396" class="text"><p><span>&nbsp; 姓名/身份证号</span></p></div>-->
    </div>

    <div id="u397" class="ax_default primary_button">
      <!--<button id="u397_div">搜索</button>-->
      <el-button type="primary">搜索</el-button>
    </div>

    <!--<table style="position: absolute;top: 11.5rem;left: 17.5rem;border-color:#4FC0E8;border-collapse:collapse;border-spacing:0;width: 65.6875rem;" border="1" >
      <tr style="color:#FFF;background:#45A2FF;height: 2rem;font-weight: bold;">
        <td width="7%">批量选择</td>
        <td width="5%">会员ID</td>
        <td width="8%">会员姓名</td>
        <td width="5%">年龄</td>
        <td width="5%">性别</td>
        <td width="10%">会员卡号</td>
        <td width="5%">会员等级</td>
        <td width="15%">家庭住址</td>
        <td width="10%">操作</td>
      </tr>

      <tbody>
        <tr style="height: 2rem;font-weight: bold;">
          <td><input type="checkbox"></td>
          <td>10001</td>
          <td>张三</td>
          <td>28</td>
          <td>男</td>
          <td>362121198211091586</td>
          <td>1</td>
          <td>上海静安区万航渡路XXX号XX幢XX室</td>
          <td>
            <a href="javascript:;" style="padding: 0 .5rem;"><img class="img " src="/static/images/u376.png" tabindex="0" style="outline: none;"></a>
            <a href="javascirpt:;"><img class="img " src="/static/images/u378.png"></a>
            <a href="javascript:;" style="padding: 0 .5rem;">查看</a>
          </td>
        </tr>

        <tr style="height: 2rem;font-weight: bold;">
          <td><input type="checkbox"></td>
          <td>10002</td>
          <td>李四</td>
          <td>25</td>
          <td>男</td>
          <td>362121198211091586</td>
          <td>2</td>
          <td>上海静安区万航渡路XXX号XX幢XX室</td>
          <td>
            <a href="javascript:;" style="padding: 0 .5rem;"><img class="img " src="/static/images/u376.png" tabindex="0" style="outline: none;"></a>
            <a href="javascirpt:;"><img class="img " src="/static/images/u378.png"></a>
            <a href="javascript:;" style="padding: 0 .5rem;">查看</a>
          </td>
        </tr>

        <tr style="height: 2rem;font-weight: bold;">
          <td><input type="checkbox"></td>
          <td>10003</td>
          <td>王五</td>
          <td>35</td>
          <td>男</td>
          <td>362121198211091586</td>
          <td>3</td>
          <td>上海静安区万航渡路XXX号XX幢XX室</td>
          <td>
            <a href="javascript:;" style="padding: 0 .5rem;"><img class="img " src="/static/images/u376.png" tabindex="0" style="outline: none;"></a>
            <a href="javascirpt:;"><img class="img " src="/static/images/u378.png"></a>
            <a href="javascript:;" style="padding: 0 .5rem;">查看</a>
          </td>
        </tr>
      </tbody>
    </table>-->
    <memberTableComponent class="memberListTable"></memberTableComponent>

  </div>
</template>

<script>
  import memberTableComponent from '@/components/common/memberCommonTable/memberListTable'
  //Js部分尽量采用ES6语法，webpack babel插件会转义兼容
  export default {
    //组件私有数据（必须是function，而且要return对象类型）
    data() {
      return {}
    },
    //计算属性
    computed: {},
    //函数集，自己封装，便于开发使用
    methods: {},
    //生命周期钩子：组件实例渲染完成时调用
    mounted() {

    },
    //要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
    components: {memberTableComponent}
  }
</script>

<style>
  table {
    table-layout: fixed;
  }

  table tr td {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
  }

  #u395_div {
    padding: 0 .5rem;
  }

  .primary_button button {
    color: #FFF;
  }

  .memberListTable {
    position: absolute;
    top: 12rem;
    left: 17.6875rem;
  }
</style>
