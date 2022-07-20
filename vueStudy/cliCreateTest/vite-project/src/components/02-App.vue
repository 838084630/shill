<template>
<!-- ref方法(操作基本数据类型) -->
  <div>
    <p>{{num}}</p>
    
    <button @click="hdClick">按钮1</button>
  </div>
</template>

<script lang="ts">
import{defineComponent,ref} from 'vue'
export default defineComponent({
    setup(){
      let num = ref(20);
      const hdClick = ()=>{
        num.value++
      }
      return{
        num,
        hdClick
      }
    }
})
</script>

<style lang="less" scoped>
</style>