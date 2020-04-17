<template>
    <div id="nav">
       <ul>
         <li v-for="item in items" :key="item.id">
           <h2 @click="showToggle(item)">{{ item.name }}</h2>
           <ul v-if="item.isSubshow">
             <li v-for="subItem in item.subItems" :key="subItem.name">
               <h3>{{ subItem.name }}</h3>
             </li>
           </ul>
         </li>
       </ul>
     </div>
</template>
<script>
export default {
    data(){
        return{
            items:[
            { 
                id:"1",
                name: "Web前端",
                isSubshow:false,
                subItems:[
                 {
                   name:"HTML"
                 },
                 {
                   name:"Css"
                 },
                 {
                   name:"JavaScript"
                 }
               
               ]
            },
            {
                id:"2",
                name:"web框架",
                isSubshow:false,
                subItems:[
                 {
                   name:"Vue"
                 },
                 {
                   name:"bootstrap"
                 },
                 {
                   name:"JQuery"
                 }
               ]
            }
          ]
        }
    },
    methods:{
        showToggle:function(item){
            item.isSubshow = !item.isSubshow;
        }
    }
}
</script>
<style scoped>

ul{      
    width: 200px;      
    height: auto;  
    padding: 0; 
} 
li{
    list-style: none;
}
h2{      
    background: green;      
    border: 1px solid #fff;      
    color: #fff;      
    height: 30px;      
    line-height: 30px;      
    text-indent: 24px;    
}  

h3{      
    background: #999;      
    height: 24px;      
    line-height: 24px;      
    border: 1px solid #fff;      
    text-indent: 50px;    
}  
</style>