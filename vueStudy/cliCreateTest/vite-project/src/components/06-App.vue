<template>
<!-- setup语法糖和重构 -->
  <div>
    <p>{{num}}</p>
    <button @click="num++"></button>
  </div>
</template>

<script lang="ts" setup>
//setup语法糖省去setup,return等
 import{reactive,toRefs} from 'vue'
 let obj = {
    num:10
 }
 let objRet = reactive(obj);
 let {num} = toRefs(objRet)
</script>

<style lang="less" scoped>
</style>