<template>
  <el-form
      ref="ruleFormRef"
      :model="loginUser"
      :rules='rules'
      label-width="100px" class="loginForm sign-in-form">
    <div class="title">
      <h1>Admin登录</h1>
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
import {ref} from 'vue'
import type {FormInstance} from 'element-plus'
import {adminLogin} from "@/api/admin";
import router from '@/router';
//用户接口
interface IUser {
  email: string;
  password: string;
}

//规则接口
interface IRules {
  email: { type: string, message: string, required: boolean, trigger: string }[],
  password: ({ required: boolean, trigger: string, message: string, min?: undefined, max?: undefined, massage?: undefined } | {})[]
}

const ruleFormRef = ref<FormInstance>()

const rules = ref<IRules>({
  email: [{
    type: 'email',
    message: '邮箱格式有误',
    required: true,
    trigger: 'blur',
  }],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '密码不能为空'
    },
    // {
    //     min: 8,
    //     max: 16,
    //     message: "密码长度应该在8~16之间"
    // }
  ],
})

const loginUser = ref<IUser>({
  email: '',
  password: '',
})
//登录 eplus 自带的校验方法
const submitLoginForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid: any) => {
    if (valid) {
      try {
        const result = await adminLogin(loginUser.value.email, loginUser.value.password)
        if (result.status == 200) {
          localStorage.setItem('token', result.data.token);
          await router.push({path: '/admin/home'});
        }
      } catch (error) {
        alert("用户名或者密码错误")
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}
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
