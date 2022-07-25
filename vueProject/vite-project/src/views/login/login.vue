<template>
  <div class="bg">
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span class="title">用户商品管理系统</span>
      </div>
    </template>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" type="text" autocomplete="off" placeholder="请输入账号" :prefix-icon="User"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model.number="ruleForm.password" type="password" autocomplete="off" placeholder="请输入密码" :prefix-icon="Key" show-password/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginFn()" class="loginBtn">login</el-button>
        <!-- <el-button @click="">register</el-button> -->
      </el-form-item>
    </el-form>
  </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
import { adminLoginApi } from '../../request/api'
import { User,Key} from '@element-plus/icons-vue'
import Cookie from 'js-cookie'

const state = reactive({
  ruleForm: {
    username: '',
    password: ''
  }
})

let { ruleForm } = toRefs(state)
//获取el-from组件对象
let ruleFormRef = ref();

const validateName = (rule: unknown, value: string, cb: (msg?: string) => void) => {
  if (!value) {
    cb('Please input the username')
  } else {
    cb();
  }
}
const validatePass = (rule: unknown, value: any, cb: (msg?: string) => void) => {
  if (!value) {
    cb('Please input the password')
  } else {
    if (!Number.isInteger(value)) {
      cb('password was not number')
    }
    cb();
  }
}
const rules = reactive({
  username: [{ validator: validateName, trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'blur' }]
})

const loginFn = () => {
  ruleFormRef.value.validate().then(() => {
    console.log('success')
    adminLoginApi({
      username: ruleForm.value.username,
      password: ruleForm.value.password
    }).then(res => {
      if(res.code === 200){
        //引入第三方库cookie，先存储token,expires:7过期时间
        Cookie.set('token',res.data.tokenHead + res.data.token,{ expires: 7})
      }
    })
  }).catch(() => {
    console.log('error')
  })
}


</script>

<style >

body{
  background-image: url('../../assets/p1.jpeg');
  background-size: 100% 100%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title,.loginBtn {
  margin: 0 auto;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 400px;
  /* opacity属性所以标准浏览器都支持，但是IE8和IE8以下浏览器不支持此属性，
  于是就使用filter:alpha(opacity=50)进行兼容，
  opacity的取值是0-1,但是filter下的那个取值是0-100 */
  filter:alpha(opacity=80);  
  opacity:0.8
}

.el-form{
  width: 200px;
  margin: 0px auto;
}
.el-card__body{
  padding-top: 50px;
}
</style>
