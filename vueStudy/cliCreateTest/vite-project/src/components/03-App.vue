<template>
<!-- ref方法(操作复杂数据类型) -->
  <div>
    <p>{{objRef.num}}</p>
    <button @click="objRef.num++">按钮1</button>
    <button @click="hdClick">按钮2</button>
  </div>
</template>

<script lang="ts">
import{defineComponent,ref} from 'vue'
export default defineComponent({
    setup(){
        let obj = {
            num:30
        }
        let objRef = ref(obj)

        const hdClick = ()=>{
            objRef.value.num+=5
        }
      return{
        objRef,
        hdClick
      }  
    }
})
</script>

<style lang="less" scoped>
</style>