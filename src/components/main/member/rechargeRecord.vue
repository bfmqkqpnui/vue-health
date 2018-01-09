<!-- vue模板 -->
<template>
  <div style="position: relative;">
    <!-- 页面标题 -->
    <div id="u6119" class="ax_default label">
      <div id="u6119_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u6120" class="text">
        <p><span>充值记录</span></p>
      </div>
    </div>

    <!-- 分割线 -->
    <div id="u6121" class="ax_default box_1">
      <img id="u6121_img" class="img " src="/static/images/u291.png">
      <!-- Unnamed () -->
      <div id="u6122" class="text" style="display:none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <div id="u6184" class="ax_default droplist">
      <dataPickTimeComponent id="u6184_div"></dataPickTimeComponent>
    </div>


    <!-- 查询input -->
    <div id="u6180" class="ax_default box_1">
      <el-input placeholder="会员姓名/会员ID"></el-input>
    </div>

    <!-- 搜索按钮 -->
    <div id="u6182" class="ax_default primary_button">
      <el-button type="primary">搜索</el-button>
    </div>


    <table
      style="position: absolute;top: 11.5rem;left: 17.5rem;border-color:#4FC0E8;border-collapse:collapse;border-spacing:0;width: 65.6875rem;"
      border="1">
      <tr style="color:#FFF;background:#45A2FF;height: 2rem;font-weight: bold;">
        <td width="5%">会员ID</td>
        <td width="10%">会员姓名</td>
        <td width="5%">充值金额</td>
        <td width="25%">充值卡号</td>
        <td width="25%">提交时间</td>
        <td width="10%">支付方式</td>
        <td width="10%">操作</td>
      </tr>

      <tbody>
      <tr style="height: 2rem;font-weight: bold;">
        <td>1</td>
        <td>张三</td>
        <td>28</td>
        <td>362121198211091586</td>
        <td>2017-03-24 18:28</td>
        <td>微信支付</td>
        <td>
          <a href="javascript:;" style="padding: 0 .5rem;">查看</a>
        </td>
      </tr>

      <tr style="height: 2rem;font-weight: bold;">
        <td>2</td>
        <td>李四</td>
        <td>25</td>
        <td>362121198211091587</td>
        <td>2017-03-24 18:28</td>
        <td>支付宝支付</td>
        <td>
          <a href="javascript:;" style="padding: 0 .5rem;">查看</a>
        </td>
      </tr>

      <tr style="height: 2rem;font-weight: bold;">
        <td>3</td>
        <td>王五</td>
        <td>35</td>
        <td>362121198211091588</td>
        <td>2017-03-24 18:28</td>
        <td>现金支付</td>
        <td>
          <a href="javascript:;" style="padding: 0 .5rem;">查看</a>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import dataPickTimeComponent from '@/components/common/dataPickTimeComponent'
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
    components: {dataPickTimeComponent}
  }
</script>

<style>
  #u6119 {
    border-width: 0px;
    position: absolute;
    left: 283px;
    top: 81px;
    width: 81px;
    height: 24px;
    font-size: 20px;
    color: #666666;
  }

  #u6119_div {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 81px;
    height: 24px;
    background: inherit;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    border-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 20px;
    color: #666666;
  }

  #u6121 {
    border-width: 0px;
    position: absolute;
    left: 283px;
    top: 115px;
    width: 1047px;
    height: 1px;
  }

  #u6121_img {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1047px;
    height: 1px;
  }

  /**日期组件*/
  #u6184 {
    left: 685px;
  }

  #u6185 {
    left: 944px;
  }

  #u6184, #u6185 {
    border-width: 0px;
    position: absolute;
    top: 136px;
    width: 125px;
    height: 35px;
  }

  #u6186 {
    border-width: 0px;
    position: absolute;
    left: 927px;
    top: 146px;
    width: 11px;
    height: 16px;
  }

  #u6180 {
    border-width: 0px;
    position: absolute;
    left: 1097px;
    top: 136px;
    width: 137px;
    height: 35px;
    text-align: left;
  }

  #u6180_div {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 137px;
    height: 35px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(204, 204, 204, 1);
    border-radius: 5px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    text-align: left;
  }

  #u6182 {
    border-width: 0px;
    position: absolute;
    left: 1259px;
    top: 137px;
    width: 71px;
    height: 32px;
    font-size: 14px;
  }

  #u6182_div {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 71px;
    height: 32px;
    background: inherit;
    background-color: rgba(69, 162, 255, 1);
    border: none;
    border-radius: 5px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 14px;
    color: #FFF;
  }
  table tbody tr td{
    color:gray;
  }

  a{
    text-decoration: none;
  }

  table tr td a{
    color:#42AAE2;
  }

  #u6180_div{
    padding:0 .5rem;
  }
</style>
