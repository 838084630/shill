<template>
<!-- 通过ref()获取到元素 -->
  <div>
    <p ref="op">这是一个组件</p>
  </div>
</template>

<script lang="ts">
import{defineComponent,ref,onMounted,nextTick} from 'vue'
export default defineComponent({
    setup(){
    
      let op = ref()
      console.log("setup",op.value); //undefined
      
      onMounted(()=>{
        console.log("onMounted",op.value); //挂在完毕之后，才能获取元素
        
      })
      nextTick(()=>{
        console.log("nextTick",op.value); //在下一个dom更新的时候执行(只会调用1次)
        
      })

      return{
        op
      }  
    }
})
</script>

<style lang="less" scoped>
</style>