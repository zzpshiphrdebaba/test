<template>
    <div>
        <el-button type="info" @click="login">登录</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        login(){
            console.log('我点了')
            this.$router.push('/NavMenuZ')
        }
    }
}
</script>
