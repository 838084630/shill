<template>
<!-- 计算属性 -->
  <div>
    <p>{{db1}}</p>
    <button @click="num++">button</button>
    <!-- <p>{{db2}}</p>
    <button @click="objRet.num1++">button</button> -->
  </div>
</template>

<script lang="ts" setup>
import{ref,reactive,computed} from 'vue'

//基本类型用计算属性
let num = ref(10);
let db1 = computed(()=>{
    return num.value * 2
}) 

//对象用计算属性
let obj = {
    num1: 30
}
let objRet = reactive(obj)
let db2 = computed(()=>{
    return objRet.num1 * 2
})
</script>

<style lang="less" scoped>

</style>