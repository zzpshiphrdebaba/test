<template>
<div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom:20px">
        <el-breadcrumb-item :to="{ path: '/accountManage' }">一级菜单</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
    <el-table :data="TableList" border   :stripe="true">
        <el-table-column type="expand">
            <!-- <template slot-scope="props"> -->
                <h2>1111</h2>
                <h2>1111</h2>
                <h2>1111</h2>
                <h2>1111</h2>
            <!-- </template> -->
        </el-table-column>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column label="房间" prop="room"></el-table-column>
        <el-table-column label="电表" prop="switch"></el-table-column>
        <el-table-column label="充值电量" prop="investD"></el-table-column>
        <el-table-column label="赠送电量" prop="givD"></el-table-column>
        <el-table-column label="使用电量" prop="sendD"></el-table-column>
        <el-table-column label="剩余电量" prop="residueD"></el-table-column>
        <el-table-column label="剩余充值电量" prop="residueinvestD"></el-table-column>
        <el-table-column label="剩余赠送电量" prop="residuegivD"></el-table-column>
        <el-table-column label="剩余电费" prop="money"></el-table-column>
        <el-table-column label="详情" prop="mg_state" width="250px">
            <template slot-scope="scope">
                <el-button type="text" @click="open(scope.row.id)">充值</el-button><span style="margin:0 5px">|</span>
                <el-button type="text" @click="open(scope.row.id)">退费</el-button><span style="margin:0 5px">|</span>
                <el-button type="text" @click="showEditDialog(scope.row.id)">赠电</el-button><span style="margin:0 5px">|</span>
                <el-button type="text" >退赠电</el-button><span style="margin:0 5px">|</span>
                <el-button type="text" @click="clear">清零</el-button>
                <!-- <el-button @click="showEditDialog(scope.row.id)" type="primary" icon="el-icon-edit" size="mini"></el-button>
                <el-button type="danger" icon="el-icon-delete" size="mini"></el-button> -->
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryInfo.pagenum"
            :page-sizes="[1, 2, 5, 10]"
            :page-size="queryInfo.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
    </el-pagination>
    <el-dialog
        title="充值电费"
        :visible.sync="EditDialogVisible"
        width="50%" @close="editDialogClosed">
        <el-form :model="EditForm"  ref="EditFormRef" label-width="70px">
            <el-form-item label="原有金额" >
                <el-input  disabled></el-input>
            </el-form-item>
            <el-form-item label="充值金额">
                <el-input v-model="EditForm.username"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="EditDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editUserInfo">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>
<script>
export default {
    data(){
        return{
            dialogTableVisible: false,
            dialogFormVisible: false,
            EditDialogVisible:false,
            EditForm:{},
            TableList:[
                {id:1,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                {id:2,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                {id:3,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                {id:4,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                {id:5,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                {id:6,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                {id:7,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                // {id:8,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                // {id:9,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                // {id:10,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                // {id:11,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                // {id:12,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                // {id:13,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                // {id:14,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                // {id:15,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                // {id:16,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                // {id:17,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                // {id:18,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                // {id:19,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
                // {id:20,room:'B201房间',switch:'160504150150',investD:'00',givD:'00',sendD:'48.92',residueD:'30.1',residueinvestD:'10.1',residuegivD:'00',money:'20.5'},
            ],
            total:20,
            queryInfo:{
                query:'',
                pagenum:1,
                pagesize:10
            }
        }
    },
    methods:{
        created(){
            
        },
        //显示充值框，同时可以加载后台数据
        showEditDialog(id){
            this.EditDialogVisible=true
        },
        //提交充值
        editUserInfo(){
            this.EditDialogVisible=false
            this.$message.success('充值成功！')
        },
        editDialogClosed(){
           this.$refs.EditFormRef.resetFields()
        },
        open(id) {
            this.$prompt('请输入充值金额', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            }).then(({ value }) => {
            this.$message({
                type: 'success',
                message: '成功充值: ' + value + '元'
            });
            this.TableList.investD===Number(this.TableList.investD)+Number(value)
            if(value===null){
                this.$message({
                type: 'info',
                message: '充值失败'})
            }
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '充值失败'
            });       
            });
        },
        //pagesize改变事件
        handleSizeChange(e){
            console.log(e)
            this.queryInfo.pagesize = e;
        },
        //页码改变事件
        handleCurrentChange(e){
            console.log(e)
            this.queryInfo.pagenum = e
        },
        clear(id){
            
        }
    }
}

</script>
<style lang="less" scoped>
.el-table{
    text-align: center;
    a{
       margin: 0 3px; 
    }
}
a{
    margin: 0 3px;
}

</style>