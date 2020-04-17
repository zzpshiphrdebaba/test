<template>
	<el-container>
        <el-header>
            <el-button @click="dropdown">默认按钮</el-button>
            <el-menu  v-show="isshow" unique-opened background-color="#333744" text-color="#fff" active-text-color="#ffd04b" router>
				<NavMenu :navMenus="menuData"></NavMenu>
			</el-menu>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>
import NavMenu from "./NavMenu.vue";
export default {
  components: {
    NavMenu: NavMenu
  },
  data(){
        return{
            isshow:false,
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
        }
    },
    methods:{
        dropdown(){
            this.isshow = !this.isshow
        },
        // show () {
        //     document.addEventListener('click', this.hidePanel, false)
        // },
        // hide () {
        //     document.removeEventListener('click', this.ishow, false)
        // },
        // hidePanel (e) {
        //     if (!this.$refs.projectButton.contains(e.target)) {
        //     this.visible = false
        //     this.hide()
        //     }
        // }
    }
}
</script>
<style scoped>
.el-button{
    margin-left: 20px;
    width: 150px;
}
.el-menu{
    position: absolute;
    left: 20px;top:60px;
	width: 150px;
  
}
.el-menu-item{
    width: 150px !important;
    padding-left: 0px !important;
    box-sizing: border-box;
}
</style>