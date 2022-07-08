<template>
  <div class="login">
    <div class="login-content">
      <h1>火星</h1>
      <el-form :model="loginForm" :rules="rules" class="form">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            :prefix-icon="View"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { validatePassword } from './rule'
import { User, View } from '@element-plus/icons-vue'
const loginForm = reactive({
  username: '',
  password: ''
})
const rules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      // message: '密码不能为空',
      validator: validatePassword
    }
  ]
})
</script>

<style lang="scss" scoped>
.login {
  background-color: #f9fcff;
  .login-content {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgb(199 201 203 / 30%);
    margin: 150px auto;
  }
  h1 {
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    margin-bottom: 30px;
  }
  .btn {
    width: 500px;
  }
}
</style>
