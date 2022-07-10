<template>
  <div class="login">
    <div class="login-content">
      <h1>火星</h1>
      <el-form :model="loginForm" ref="form" :rules="rules" class="form">
        <el-form-item prop="userName">
          <el-input
            v-model.trim="loginForm.userName"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            v-model.trim="loginForm.userPwd"
            type="password"
            :prefix-icon="View"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginOnSubmit" class="btn"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { validatePassword } from './rule'
import { User, View } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const form = ref('')
// 获取到用户名和密码
const loginForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})
// 登录正则验证
const rules = reactive({
  userName: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空'
    }
  ],
  userPwd: [
    {
      required: true,
      trigger: 'blur',
      // message: '密码不能为空',
      validator: validatePassword
    }
  ]
})
/**
 * 点击登录
 */
const loginOnSubmit = () => {
  // 表单校验
  form.value.validate(async (valid) => {
    // 如果不成功则不需要向下执行了
    if (!valid) return
    // 这个是调用登录接口
    // const response =
    await store.dispatch('user/getLogin', loginForm)
    router.push('/')
    // console.log('login=>', response)
  })
}
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
