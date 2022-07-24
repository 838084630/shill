<template>
  <div>
    <p>{{num}}</p>
    <button @click="addNum">按钮</button>
  </div>
</template>

<script lang="ts" setup>
import{} from 'vue'

let props = defineProps({
  num:{
    type:Number,
    default:50
  }
})

const emit = defineEmits<{
  (event:"update:num",n:number):void
}>()

let n = props.num
const addNum = ()=>{
  n++
  emit("update:num",n)
}

</script>

<style lang="less" scoped>
</style>