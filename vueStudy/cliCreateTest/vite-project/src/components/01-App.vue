<template>
  <div>
    <p>这是一个组件</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted} from "vue"
export default defineComponent({
    setup(){
        console.log("执行了setup")
        
        onBeforeMount(()=>{
            console.log("执行了onBeforeMount")
        })

        onMounted(()=>{
        console.log("执行了")

        })
    }
})
</script>

<style lang="less" scoped>
</style>