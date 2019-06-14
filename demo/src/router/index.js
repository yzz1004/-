import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import login from '../components/pages/login'
import home from  '../components/pages/home'

import manage from '../components/pages/manage'
import manageList from '../components/pages/manageList'
import Mcreate from '../components/pages/mcreate'

import user from '../components/pages/user'
import userList from '../components/pages/userList'
import Ucreate from '../components/pages/ucreate'

import notice from '../components/pages/notice'
import noticeList from '../components/pages/noticeList'
import Ncreate from '../components/pages/ncreate'

import device from '../components/pages/device'
import deviceList from '../components/pages/deviceList'
import Dcreate from '../components/pages/dcreate'

import welcom from '../components/pages/welcom'


export default new Router({
  routes: [
    {
      path:'/login',
      component:login
    },
    {
      path:'/home',
      component:home,
      children:[
        {
          path:'manage',
          component:manage,
          children:[
            {
              name:'管理员列表页', 
              path:'',
              component:manageList
            },
            {
              name:'添加/修改管理员',
              path:'create/:id',
              component:Mcreate
            }
          ]
        },
        
        {         
          path:'user',
          component:user,
          children:[
            {
              name:'用户列表页',
              path:'',
              component:userList,
            },
            {
              name:'添加/修改用户',
              path:'create/:id',
              component:Ucreate
            }
          ]
        },
        {
          path:'notice',
          component:notice,
          children:[
            {
              name:'通知列表页',
              path:'',
              component:noticeList
            },
            {
              name:'添加/修改通知',
              path:'create/:id',
              component:Ncreate
            }
          ]
        },
        {          
          path:'device',
          component:device,
          children:[
            {
              name:'设备列表页',
              path:'',
              component:deviceList
            },
            {
              name:'添加/修改设备',
              path:'create/:id',
              component:Dcreate
            }
          ]
        },
        {
          path:'',
          component:welcom
        }
      ]
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})
