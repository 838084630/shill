<template>
  <div>
    <p>这是一个组件</p>
    <Child v-model:num="num"></Child>
  </div>
</template>

<script lang="ts" setup>
import{ref} from 'vue'
// import Child from './13-AppChild.vue'
import Child from "@/components/13-AppChild.vue"
let num = ref(10)
</script>
<style lang="less" scoped>
</style>