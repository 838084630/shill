<template>
    <slot name="link"></slot>
    <slot name="btn" title="ahha" mynum="num"></slot>
</template>

<script lang="ts" setup>
import{ref} from 'vue'
let num = ref(20)
</script>

<style lang="less" scoped>
</style>