<template>
  <div class="block">
    <el-date-picker
      v-model="value3"
      type="datetimerange"
      range-separator="--"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>

<script>
    //Js部分尽量采用ES6语法，webpack babel插件会转义兼容
    export default {
        //组件私有数据（必须是function，而且要return对象类型）
        data() {
            return {
              value3: ['','']
            }
        },
        //计算属性
        computed: {},
        //函数集，自己封装，便于开发使用
        methods: {},
        //生命周期钩子：组件实例渲染完成时调用
        mounted() {

        },
        //要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
        components: {}
    }
</script>

<style>

</style>
