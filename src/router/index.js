import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import headComponent from '@/components/head/head'

import systemComponent from '@/components/left/system/system'
import memberComponent from '@/components/left/system/member/member'

import shopComponent from '@/components/left/shop/shop'
import reportComponent from '@/components/left/report/report'

import memberListComponent from '@/components/main/member/memberList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: headComponent,
      //子路由
      children: [
        {
          path: 'system',
          component: systemComponent,
          children: [
            {
              path: 'member',
              components: {member: memberComponent},
              children: [
                {
                  path: 'memberList',
                  components: {memberList: memberListComponent},
                }
              ]
            },
            {
              path: 'memberList',
              components: {memberList: memberListComponent},
            }
          ]
        },
        {path: 'shop', component: shopComponent},
        {path: 'clinic', component: systemComponent},
        {path: 'report', component: reportComponent},
        {
          path: 'memberList',
          components: {memberList: memberListComponent},
        }
      ]
    }
  ]
})
