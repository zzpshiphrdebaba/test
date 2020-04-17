import Vue from 'vue'
import VueRouter from 'vue-router'
import NavMenu from '../components/NavMenu'
import NavMenuZ from '../components/NavMenuZ'
import accountManage from '../components/accountManage'
import accountManage1 from '../components/accountManage1'
import login from '../components/login'
import table from '../components/table'
import addtable from '../components/addtable'
import test from '../components/test'
import dropdown from '../components/dropdown'
import testtwo from '../components/testtwo'
import testfrist from '../components/testfrist'
Vue.use(VueRouter)

  const routes = [
    {path:'/testfrist',component:testfrist},
    {path:'/testtwo',component:testtwo},
    {path:'/dropdown',component:dropdown},
    {path:'/test',component:test},
    {path:'/addtable',component:addtable},
    {path:'/login',component:login},
    {path:'/NavMenu',component:NavMenu},
    {path:'/NavMenuZ',component:NavMenuZ,
    redirect:'table',
    children:[
      {path:'/table',component:table},
      {path:'/accountManage',component:accountManage},
      {path:'/accountManage1',component:accountManage1},
    ]
    },
    
]

const router = new VueRouter({
  routes
})

export default router
