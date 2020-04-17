<template>
    <div>
        <el-table :data="tableDataX"  border style="width: 50%">
            <el-table-column prop="date" label="" v-for="(item,index) in tableDataY" :key="index"></el-table-column>
        </el-table>
        <div>
            <input type="text" v-model="valueY" ><label for="">列数</label>
        </div>
        <div>
            <input type="text" v-model="valueX"><label for="">行数</label>
        </div>
        <el-button @click="add">确定</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
        valueX:"",
        valueY:"",
        table:{},
        tableDataX: [],
        tableDataY: [],
        }
    },
    methods:{
        add(){
            this.tableDataX = []
            for(var i=0;i<this.valueX;i++){
                this.tableDataX.push(this.table)
                console.log(this.valueX)
            }
            // this.tableDataY = []
            // for(var i=0;i<this.valueY;i++){
            //     this.tableDataX.push(this.table)
            //     console.log(this.valueY)
            // }
            // console.log(this.tableDataX)
            // let valueX = this.valueX
            // let valueY = this.valueY
            // this.tableDataX+=this.valueX.length
            // this.tableDataX.length=this.valueX
            // console.log(this.tableDataX.length)
            // this.tableDataY.length=this.valueY
            // console.log(this.valueY)
            // console.log(this.tableDataX)
        },
    }
}
</script>
<style scoped>

</style>