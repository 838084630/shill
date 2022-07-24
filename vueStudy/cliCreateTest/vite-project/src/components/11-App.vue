<template>
<!-- checkAll 练习 -->
    <input type="checkbox" v-model="checkAll">全选和全不选
    <ul>
        <li v-for="item,index in list" :key="index">
            <input type="checkbox" v-model="checkList[index]">{{item}}
        </li>
    </ul>
</template>

<script lang="ts" setup>
import{ reactive, toRefs, computed} from 'vue'

//checkList[]不直接写死，用map遍历list去赋值，list有多少个项目，
//checkList就有多少个状态，也可以将这个接口定义在types文件夹下，统一管理
interface DataTypes{
    list:number[],
    checkList:boolean[];
}

    let data = reactive<DataTypes>({
        list:[1,2,3,4],
        checkList:[]
        // checkList:[false,false,false,false]
    })
    data.checkList.map(()=>false);
    let {list,checkList} =toRefs(data);

    let checkAll = computed({
        get(){
            return !data.checkList.includes(false)
        },
        set(newVal:boolean){
            data.checkList=data.checkList.map(()=>newVal)
        }

    })
       
</script>

<style lang="less" scoped>
</style>