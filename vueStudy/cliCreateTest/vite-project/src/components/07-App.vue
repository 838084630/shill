<template>
<!-- watch的各种写法 -->
  <div>
    <p>{{num}}</p>
    <button @click="num++">按钮</button>
  </div>
</template>

<script lang="ts" setup>
import{ ref,watch,reactive,toRefs, watchEffect} from 'vue'
  let obj = {
    num:10
  }
  let objRef = reactive(obj)
  let {num} = toRefs(objRef)
  //第一种写法
  watch(num,(newVal,oldVal)=>{
    console.log(newVal,oldVal);
    
  })
  //第二种写法(是对象的情况下可以)
  watch(()=>objRef.num,(newVal,oldVal)=>{
    console.log(newVal,oldVal);
    
  })
  //第三种写法(是对象的情况下可以,[],分割可以监听多个对象)
  watch([()=>objRef.num],(newVal,oldVal)=>{
    console.log(newVal,oldVal);
    
  })

  //在页面刷新的时候立即监听
  watchEffect(()=>{
    //凡是写在这里的数据，只要发生变化，都会触发这里的代码执行
    console.log(objRef.num);
    
  })
  
  //使用场景，想知道新旧值用watch，有逻辑处理用watchEffect
</script>

<style lang="less" scoped>
</style>