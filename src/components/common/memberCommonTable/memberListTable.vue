<template>
  <el-table
    :data="tableData"
    style="width:100%;"
    height=40
  >
    <el-table-column
      label="批量选择"
      width="90">
      <template slot-scope="scope">
        <el-checkbox></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column
      prop="memberId"
      label="会员ID"
      width="100">
    </el-table-column>
    <el-table-column
      prop="memberName"
      label="会员姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="memberAge"
      label="年龄"
      width="45">
    </el-table-column>
    <el-table-column
      prop="memberSex"
      label="性别"
      width="45">
    </el-table-column>
    <el-table-column
      prop="memberCardId"
      label="会员卡号"
      width="180">
    </el-table-column>

    <el-table-column
      prop="memberLevel"
      label="会员等级"
      width="100">
    </el-table-column>

    <el-table-column
      prop="address"
      label="家庭住址"
      width="260">
    </el-table-column>
    <el-table-column
      prop=""
      label="操作"
      width="160">
      <template slot-scope="scope">
        <a href="javascript:;" style="padding: 0 .5rem;"><img class="img " src="/static/images/u376.png" tabindex="0"
                                                              style="outline: none;"></a>
        <a href="javascirpt:;"><img class="img " src="/static/images/u378.png"></a>
        <a href="javascript:;" style="padding: 0 .5rem;">查看</a>
        <!--<el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除
        </el-button>-->
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  //Js部分尽量采用ES6语法，webpack babel插件会转义兼容
  export default {
    //组件私有数据（必须是function，而且要return对象类型）
    data() {
      return {
        tableData: [
          {
            memberId: 10001,
            memberName: '张先生',
            memberAge: 60,
            memberSex: '男',
            memberCardId: '362121198211091586',
            memberLevel: 1,
            address: '上海静安区万航渡路XXX号XX幢XX室'
          },
          {
            memberId: 10002,
            memberName: '李先生',
            memberAge: 65,
            memberSex: '男',
            memberCardId: '362121198211091587',
            memberLevel: 2,
            address: '上海静安区万航渡路XXX号XX幢XX室'
          },
          {
            memberId: 10003,
            memberName: '王女士',
            memberAge: 65,
            memberSex: '女',
            memberCardId: '362121198211091588',
            memberLevel: 3,
            address: '上海静安区万航渡路XXX号XX幢XX室'
          },
        ]
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
