<template>
    <div id="app">
        <p>行数：</p>
        <input type="text" v-model="row"/>
        <p>列数：</p>
        <input type="text" v-model="column"/>
        <table ref="table" border="1"></table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            row: "",
            column: "",
        }
    },
    watch: {
        // 检测行列变化，实现实时渲染
        row(r){
            this.commitRowAndColumn();
        },
        column(c){
            this.commitRowAndColumn();
        }
    },
    methods: {
        commitRowAndColumn: function(){
            let row = this.row,
                column = this.column,
                table = this.$refs.table;

            if(!row) return;
            if(!column) return;

            // 当且仅当行列乘积小于5000时显示
            // 否则渲染速度会很慢，网页卡住
            if(row*column > 5000){
                alert("输入的数太大了,请重新输入");
                this.row = 0;
                this.column = 0;
                table.innerHTML = "";
                return;
            }

            let cArr = "";
            for(let i=0;i<column;i++){
                cArr += "<th></th>";
            }

            let rArr = "" 
            for(let i=0;i<row;i++){
                rArr += "<tr>" + cArr + "</tr>";
            }

            table.innerHTML = rArr;
        }
    }
}
</script>