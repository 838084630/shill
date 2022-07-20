<template>
  <div>
    <p></p>
  </div>
</template>

<script lang="ts">
import{defineComponent,ref,reactive} from 'vue'
export default defineComponent({
    setup(){
    
      let obj = {
        num:20
      }
      //ref用来实现基础数据类型的响应式
      //reactive用来实现复杂数据类型的响应式（也可以用ref但是需要.value）
      let objref = ref(obj)
      let bojret = reactive(obj)
      console.log(objref.value.num);
      console.log(bojret.num);
      
      return{
        objref,
        bojret
      }  
    }
})
</script>

<style lang="less" scoped>
</style>