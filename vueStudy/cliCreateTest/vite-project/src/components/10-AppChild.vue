<template>
<!-- 子组件 -->
  <div>
    <p>这是子组件{{num}}</p>
    <button @click="hdClick">button</button>
  </div>
</template>

<script lang="ts" setup>
import{} from 'vue'
    defineProps({
      num:{
        type:Number,
        default:20
      }  
    })

    const emit = defineEmits<{
        (event: 'fn'):void
    }>()
    const hdClick = ()=>{    
        //以前通过$emit("自定义事件"，参数)
        emit("fn")
    }
</script>

<style lang="less" scoped>
</style>