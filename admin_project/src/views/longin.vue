<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form"
        :model="loginForm"
        :rules="loginRules"
        ref="loginFormRef">
          <h1>Hello</h1>
          <h2>请登录！</h2>

          <el-form-item
          prop="username">
            <el-input
                placeholder="请输入用户名"
                prefix-icon="user"
                v-model="loginForm.username">
            </el-input>
          </el-form-item>

          <el-form-item
          prop="password">
            <el-input
                type="password"
                placeholder="请输入密码"
                prefix-icon="lock"
                v-model="loginForm.password"
                show-password>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button
                type="primary"
                class="login_btn"
                @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue"
import useUserStore from "@/store/modules/userStore.ts"
import {useRouter} from "vue-router"
import {ElNotification} from "element-plus"
import {getTime} from "@/utils/timeUtils.ts";

let loginForm = reactive({username:"admin", password:"111111"})

let userStore = useUserStore()

let $router = useRouter()
let loginFormRef = ref()

const validatorUsername = (rule:any, value:any, callback:any) => {
  if (value.length > 1) {
    callback()
  }else {
    callback('用户名长度至少2位！')
  }
}

const loginRules = {
  username: [
      {required: true, message:'用户名不能为空！', trigger:'blur'},
      {validator:validatorUsername, trigger:'blur'}
  ],
  password: [
      {required: true, message:'密码不能为空！', trigger:'blur'},
      {min:6, message:'密码长度至少为6位！', trigger:'blur'},
  ]
}

const login = () =>{
  if (!loginFormRef) return
   loginFormRef.value.validate((valid:boolean, fields:object) => {
     //console.log(fields)
     if (valid) {
       userStore.userLogin(loginForm)
           .then(()=>{
             //  跳转首页
             $router.push("/")
             ElNotification.success({
               message: `欢迎${loginForm.username}`,
               title: `Hi ,${getTime()}好！`,
             })
           })
           .catch(err=>{
             ElNotification.error({
               message: err.message,
             })
           })
     }
   })
}
</script>

<style scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
}
.login_form{
position: relative;
  width: 80%;
  top: 30vh;
  background: url('../assets/images/login_form.png') no-repeat;
  background-size: cover;
}

h1{
  color: white;
  font-size: 40px;
}
h2{
  color: white;
  font-size: 20px;
  margin: 20px 0;
}
.login_btn{
  width: 100%;
}
</style>

