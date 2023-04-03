<template>
  <el-form
      ref="ruleFormRef"
      :model="loginUser"
      :rules='rules'
      label-width="100px" class="loginForm sign-in-form">
    <div class="title">
      <h1>彗星后台管理系统</h1>
    </div>

    <el-form-item label="邮箱" prop="email" style="margin-top: 20px">
      <el-input v-model="loginUser.email" placeholder="输入邮箱"/>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input v-model="loginUser.password" type="password" placeholder="输入密码"/>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" class="submit-btn" @click="submitLoginForm(ruleFormRef)">提交</el-button>
    </el-form-item>

    <!--          找回密码-->
    <div class="tiparea">
      <p>忘记密码? <a href="">立即找回</a></p>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import {ruleFormRef, rules, loginUser, submitLoginForm} from "@/utils/loginRegister/login/loginSet";
</script>

<style scoped lang="less">
.title{
  width: 100%;
  display: flex;
  h1{
    display: inline;
    margin: 0 auto;
  }
}
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}

.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}

.tiparea p button {
  color: #409eff;
  background-color: #fff;
  border: inherit;
  cursor: pointer;
}
</style>
