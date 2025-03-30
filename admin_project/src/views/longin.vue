<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>请登录！</h2>

          <el-form-item>
            <el-input
                placeholder="请输入用户名"
                prefix-icon="user"
                v-model="loginForm.username">
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-input
                type="password"
                placeholder="请输入密码"
                prefix-icon="lock"
                v-model="loginForm.password"
                show-password>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="login_btn">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
let loginForm = reactive({username:"admin", password:"11111"});

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

