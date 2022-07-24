<template>
    <table>
        <tr>
            <th>name</th>
            <th>age</th>
            <th>function</th>
        </tr>
        <tr v-for="item,index in arr2" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <!-- <td>{{(item as {name:string}).name}}</td>
            <td>{{(item as {age:number}).age}}</td> -->
            <td>
                <slot name="btns" :index="index"></slot>
            </td>
        </tr>
    </table>
</template>

<script lang="ts" setup>
import{} from 'vue'
let props = defineProps({
    stuArr:{
        type:Array,
        default:[]
    }
})

//优化：放在了接口文件中
// interface Usertype{
//     name:string,
//     age:number
// }
let arr2 = props.stuArr as Usertype[]
</script>

<style scoped>
    table{border-collapse: collapse;}
    table,th,td{border: 1px solid #000;}
</style>