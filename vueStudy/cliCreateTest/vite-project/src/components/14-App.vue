<template>
<!-- 具名插槽，插槽作用域 -->
<Child>
    <template #link>
        <a href="#">link</a>
    </template>
    <template #btn="scope">
    <!-- scope是自定义的对象，但是一般都叫scope
         scope专门收集所对应的子组件内部的slot标签身上的标签属性，
         作为自己的属性(除了name属性)
     -->
        <button>{{scope.title}}</button>
    </template>

</Child>

</template>

<script lang="ts" setup>
import Child from "./15-AppChild.vue"
import{} from 'vue'
</script>

<style lang="less" scoped>
</style>