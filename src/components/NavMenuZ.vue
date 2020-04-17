<template>
	<el-container class="home-container">
		<el-header>
			<div class="top">
				<img :width="isCollase ? '64px':'200px'" src="../assets/logo.png" alt="">
				<span class="title">智能用电管理系统</span>
			</div>
			<el-button type="info" @click="logout">退出</el-button>
		</el-header>
		<el-container>
			<el-aside  :width="isCollase ? '64px':'200px'">
				<div class="toggol-button" @click="toggleCollapse"> | | | </div>
				<el-menu :collapse-transition="false" :collapse="isCollase" unique-opened background-color="#333744" text-color="#fff" active-text-color="#ffd04b" :default-active="activeIndex" router>
				<NavMenu :navMenus="menuData"></NavMenu>
				</el-menu>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import NavMenu from "./NavMenu.vue";
export default {
  components: {
    NavMenu: NavMenu
  },
  data() {
    return {
      //折叠
      
      isCollase:false,
      activeIndex: 'table',
      menuData: [
        {
          //一级
          entity: {
            id: 0,
            name: "table",
            icon: "el-icon-message",
            alias: "一级菜单"
          }
        },
        {
          //一级
          entity: {
            id: 1,
            name: "systemManage",
            icon: "el-icon-message",
            alias: "两级菜单",
          },
          //二级
          childs: [
            {
              entity: {
                id: 3,
                name: "authManage",
                icon: "el-icon-loading",
                alias: "权限管理",
              },
              childs:[
                {
                entity: {
                id: 7,
                name: "accountManage",
                icon: "el-icon-phone-outline\r\n",
                alias: "帐号管理",
                },
                
              },
              {
                entity: {
                id: 20,
                name: "accountManage1",
                icon: "el-icon-phone-outline\r\n",
                alias: "分类管理",
                },
                
              },
              
              ]
            },
            {
              entity: {
                id: 4,
                name: "roleManage",
                icon: "el-icon-bell",
                alias: "角色管理",
                value: "/system/role"
              }
            },
            {
              entity: {
                id: 2,
                name: "menuManage",
                icon: "el-icon-edit",
                alias: "菜单管理",
                value: "/system/menu"
              }
            },
            {
              entity: {
                id: 5,
                name: "groupManage",
                icon: "el-icon-mobile-phone\r\n",
                alias: "分组管理",
                value: "/system/group"
              }
            }
          ]
        },
        {
          //一级
          entity: {
            id: 6,
            name: "userManage",
            icon: "el-icon-news",
            alias: "三级菜单"
          },
          //二级
          childs: [
            {
              entity: {
                id: 7,
                name: "accountManage",
                icon: "el-icon-phone-outline\r\n",
                alias: "帐号管理",
                value: ""
              },
              //三级
              childs: [
                {
                  entity: {
                    id: 14,
                    name: "emailManage",
                    icon: "el-icon-sold-out\r\n",
                    alias: "邮箱管理",
                    value: "/content/email"
                  },
                  childs:[
                    {
                      entity: {
                      id: 41,
                      name: "classifyManage2",
                      icon: "el-icon-printer",
                      alias: "分类管理"
                      }
                    }
                  ]
                },
                {
                  entity: {
                    id: 13,
                    name: "passManage",
                    icon: "el-icon-service\r\n",
                    alias: "密码管理",
                    value: "/content/pass"
                  }
                }
              ]
            },
            {
              entity: {
                id: 8,
                name: "integralManage",
                icon: "el-icon-picture",
                alias: "积分管理",

                value: "/user/integral"
              }
            }
          ]
        },
        {
          //一级
          entity: {
            id: 40,

            name: "contentManage",
            icon: "el-icon-rank",
            alias: "四级菜单"
          },
          //er级
          childs: [
            {
              entity: {
                id: 41,
                name: "classifyManage2",
                icon: "el-icon-printer",
                alias: "分类管理"
              },
              //三级
              childs: [
                {
                  entity: {
                    id: 42,
                    name: "classifyManage3",
                    icon: "el-icon-printer",
                    alias: "分类管理"
                  },
                  //四级
                  childs: [
                    {
                      entity: {
                        id: 43,
                        name: "classifyManage4",
                        icon: "el-icon-printer",
                        alias: "分类管理",
                        value: "/content/classify"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods:{
    logout(){
      console.log('退出了')
      this.$router.push('/login')
    },
    //切换折叠
    toggleCollapse(){
            this.isCollase=!this.isCollase
           
        }
  }
};
</script>

<style scope>
.active{width: 64px;}
.home-container{
    height: 100%;
}
.el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color:#fff;
    font-size:20px;
}
.el-header >div{
        display: flex;
        align-items: center;
}
.el-header >div span{
    margin-left: 15px;
}
.el-aside{
    background-color: #333744;
}
.el-aside .el-menu{
        border-right: none;
    }
.el-main{
    background-color: #eaedf1;
}
.toggol-button{
    background-color: #4a5064;
    color: white;
    font-size: 10px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}
.toggol-button{
  color: white;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.top img{
  height:50px;
}
.top{
  width: 100%;
}
.top span{
  width: 100%;
  display: flex;
  justify-content:center;
  text-align: center;
}
</style>

