<template>
<!-- table展示 -->
    <Child :stuArr="state.arr">
        <template #btns="scope">
            <button @click="updateItem(scope.index)">update</button>
        </template> 
    </Child>
    <Child :stuArr="state.arr">
        <template #btns>
            <button>update</button>
            <button>delete</button>
        </template>
    </Child>
</template>

<script lang="ts" setup>
import Child from "./17-AppChild.vue"
import{reactive} from 'vue'

let state = reactive({
    arr:[{
        name:"hong",
        age:18
    },{
        name:"ming",
        age:22
    }]
})

const updateItem = (index:number)=>{
    console.log(state.arr[index]);
    
}
</script>

<style lang="less" scoped>
</style>