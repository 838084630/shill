<template>
  <div>
    <p>这是一个组件</p>
    <input type="checkbox" v-model="checkAll">全选
    <ul>
      <li v-for="item,index in list" :key="index">
        <input type="checkbox" v-model="status[index]">{{item}}
      </li>
    </ul>

  </div>
</template>

<script lang="ts" setup>
import{ref,reactive,toRefs, computed} from 'vue'
// let {list,status} = toRefs(reactive({
//   list:[1,2,3,4],
//   status:[false,false,false,false]
// }))

let data = reactive({
   list:[1,2,3,4],
  status:[false,false,false,false]
})
let {list,status} = toRefs(data)

let checkAll = computed({
  get(){
    return !data.status.includes(false)
  },
  set(newVal){
    console.log(newVal);
    data.status=data.status.map(()=>newVal);
    
  }
})
</script>

<style lang="less" scoped>
</style>