<template>
<!-- 父组件 -->
  <div>
    <p>这是父组件</p>
    <Child :test="xx" @fn="chanNum"></Child>
  </div>
</template>

<script lang="ts" setup>
import Child from "./10-AppChild.vue"
import{ref} from 'vue'
  let xx = ref(10)
  const chanNum = ()=>{
    xx.value++
  }
</script>

<style lang="less" scoped>
</style>