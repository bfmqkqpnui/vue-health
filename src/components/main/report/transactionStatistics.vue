<template>
  <div>
    <div id="u289" class="ax_default label">
      <span>交易统计</span>
    </div>

    <div id="u291" class="ax_default box_1">
      <img id="u291_img" class="img " src="/static/images/u291.png">
    </div>


    <div id="u33898" class="ax_default box_1">
      <div id="u33898_div" class="">
        <div id="u33916">
          <dataPickTimeComponent></dataPickTimeComponent>
        </div>

        <div id="u33920" class="ax_default primary_button">
          <el-button type="primary">提交</el-button>
        </div>

        <div id="u33900" class="ax_default label">
          <ul class="left">
            <li class="leftLi">
              <ul>
                <li>506.8</li>
                <li style="color: rgba(51, 51, 51, 0.717647058823529);font-size: .875rem;">今日交易总额</li>
              </ul>
            </li>
            <li class="leftLi">
              <ul>
                <li>25</li>
                <li style="color: rgba(51, 51, 51, 0.717647058823529);font-size: .875rem;">今日交易数</li>
              </ul>
            </li>
            <li class="leftLi">
              <ul>
                <li>20785.68</li>
                <li style="color: rgba(51, 51, 51, 0.717647058823529);font-size: .875rem;">本月交易额</li>
              </ul>
            </li>
            <li class="leftLi">
              <ul>
                <li>200</li>
                <li style="color: rgba(51, 51, 51, 0.717647058823529);font-size: .875rem;">本月交易数</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div id="u33922" class="ax_default box_1">
      <div id="u33922_div" class=""></div>
    </div>

  </div>
</template>

<script>
  import dataPickTimeComponent from '@/components/common/dataPickTimeComponent'
  //Js部分尽量采用ES6语法，webpack babel插件会转义兼容
  export default {
    //组件私有数据（必须是function，而且要return对象类型）
    data() {
      return {
        echartOption: {
          title: {
            text: ''
          },
          tooltip: {},
          xAxis: {
            data: []
          },
          yAxis: {
            // 'value' 数值轴，适用于连续数据。
            // 'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
            // 'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
            // 'log' 对数轴。适用于对数数据。
            type: '',                      //坐标轴类型。
            //是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。
            scale: true,                   //只在数值轴中（type: 'value'）有效。
            max: 0,                        //坐标轴刻度最大值。
            min: 0,                        //坐标轴刻度最小值。
            boundaryGap: [0.2, 0.2]         //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
          },
          legend: {
            data: []
          },
          series: []
        }
      }
    },
    //计算属性
    computed: {},
    //函数集，自己封装，便于开发使用
    methods: {
      drawReport() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('u33922_div'));
        // 绘制图表
        myChart.setOption(this.echartOption);
      },
      getMonthDay() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var d = new Date(year, month, 0);
        var list = [];
        for (let i = 1; i <= d.getDate(); i++) {
          list.push(i);
        }
        this.echartOption.xAxis.data = list;
      },
      getChartOption() {
        this.echartOption.title.text = "vue报表v0.0.1",
          this.echartOption.yAxis = [
            {
              type: 'value',
              scale: true,
              name: '交易量',
              max: 1200,
              min: 0,
              boundaryGap: [0.2, 0.2]
            },
            {
              type: 'value',
              scale: true,
              name: '交易额',
              max: 1200,
              min: 0,
              boundaryGap: [0.2, 0.2]
            }];
        this.echartOption.legend.data = ['交易量', '交易额'];
        this.echartOption.series = [
          {
            name: '交易额',
            type: 'line',
            data: (function(){
              var that = this;
              var res = [];
              var length = 31;
              while (length--) {
                res.push(Math.round(Math.random() * 1000));
              }
              return res;
            })()
          },
          {
            name: '交易量',
            type: 'line',
            data: (function(){
              var that = this;
              var res = [];
              var length = 31;
              while (length--) {
                res.push(Math.round(Math.random() * 500));
              }
              return res;
            })()
          }
        ];
      }
    },
    //生命周期钩子：组件实例渲染完成时调用
    mounted() {
      this.getMonthDay();
      this.getChartOption();
      this.drawReport();
    },
    //要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
    components: {dataPickTimeComponent}
  }
</script>

<style>
  #u33898 {
    border-width: 0px;
    position: absolute;
    left: 283px;
    top: 135px;
    width: 1047px;
    height: 228px;
  }

  #u33898_div {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1047px;
    height: 228px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0px;
    border-radius: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    -moz-box-shadow: 0px 0px 10px rgba(153, 153, 153, 0.349019607843137);
    -webkit-box-shadow: 0px 0px 10px rgba(153, 153, 153, 0.349019607843137);
    box-shadow: 0px 0px 10px rgba(153, 153, 153, 0.349019607843137);
  }

  #u33916 {
    border-width: 0px;
    position: absolute;
    left: 20px;
    top: 15px;
    width: 400px;
    height: 44px;
  }

  #u33920 {
    border-width: 0px;
    position: absolute;
    left: 450px;
    top: 15px;
    width: 71px;
    height: 32px;
    font-size: 14px;
  }

  #u33900 {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 40px;
    width: 100%;
    height: 57px;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    font-size: 48px;
    color: rgba(28, 142, 255, 0.717647058823529);
  }

  ul li {
    list-style: none;
  }

  .left li.leftLi {
    float: left;
    text-align: center;
    margin-right: 5.8rem;
  }

  .left li.leftLi ul li {
    margin-bottom: 1rem;
  }

  #u33922 {
    border-width: 0px;
    position: absolute;
    left: 283px;
    top: 384px;
    width: 1047px;
    height: 520px;
  }

  #u33922_div {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1047px;
    height: 520px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0px;
    border-radius: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    -moz-box-shadow: 0px 0px 10px rgba(153, 153, 153, 0.349019607843137);
    -webkit-box-shadow: 0px 0px 10px rgba(153, 153, 153, 0.349019607843137);
    box-shadow: 0px 0px 10px rgba(153, 153, 153, 0.349019607843137);
  }
</style>
