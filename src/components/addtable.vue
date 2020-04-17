<template>
    <div class="TestWord">
		<el-dropdown  style="margin-left:30px" trigger="click">
			<el-button type="primary">
				<i class="el-icon-s-operation"></i>
			</el-button>
			<el-dropdown-menu slot="dropdown"  style="margin-left:10px">
				<el-dropdown-item v-for="item in Dropdown" :key="item.name">{{item.name}}</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
      	<el-button @click="addLine">添加行数</el-button>
        <el-table stripe :data="tableData" style="width: 50%">
            <el-table-column label="日期"  prop="date"> </el-table-column>
            <el-table-column label="姓名"  prop="name"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
		</el-table>
	</div>
</template>
<script>
export default {
    data() {
        return {
        newValue : {
                   data:"",
                   name:"",
                   address:""
			   },
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
		  }],
		  Dropdown:[{name:"黄金糕"},{name:"狮子头"},{name:"螺蛳粉"},{name:"双皮奶"},{name:"蚵仔煎"}]
        }
    },
    methods:{
        //删除
        handleDelete(index, row) {
            this.tableData.splice(index, 1)
		},
		//添加行数
        addLine(){
            this.tableData.push(this.newValue);
        },
    }
 
}  

</script>
<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  /* .el-table__row{
	  height: 100px;
  } */
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>