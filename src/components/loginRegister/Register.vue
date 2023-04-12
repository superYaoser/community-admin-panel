<template>
  <el-form
      ref="ruleFormRef"
      :model="registerUser"
      :rules='rules'
      label-width="100px" class="sign-up-form registerForm">
    <div class="title">
      <h1>Admin注册</h1>
    </div>

    <el-form-item label="邮箱" prop="email" style="margin-top: 20px">
      <el-input v-model="registerUser.email" placeholder="输入邮箱"/>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input v-model="registerUser.password" type="password" placeholder="输入密码"/>
    </el-form-item>

    <el-form-item label="确认密码" prop="password_again">
      <el-input v-model="registerUser.password_again" type="password" placeholder="再次输入密码"/>
    </el-form-item>

    <el-form-item label="测试码" prop="test_number">
      <el-input v-model="registerUser.test_number" type="text" placeholder="输入测试资格码"/>
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
import {reactive, ref} from 'vue'
import type {FormInstance, FormRules} from 'element-plus'

//用户接口
interface IUser {
  email: string;
  password: string;
  password_again: string;
  test_number: string;
}

//规则接口
interface IRules {
  email: { type: string, message: string, required: boolean, trigger: string }[],
  password: ({ required: boolean, trigger: string, message: string, min?: undefined, max?: undefined, massage?: undefined } | {})[]
  password_again: ({ required: boolean, trigger: string, message: string, min?: undefined, max?: undefined, massage?: undefined } | {})[]
  test_number: { required: boolean, trigger: string, message: string }[]
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
    {
      min: 8,
      max: 16,
      message: "密码长度应该在8~16之间"
    }
  ],
  password_again: [
    {
      required: true,
      trigger: 'blur',
      message: '确认密码不能为空'
    },
    {
      min: 8,
      max: 16,
      message: "密码长度应该在8~16之间"
    },
    {
      validator: (rules:any, value:string, callback:Function) => {
        if (value !== registerUser.value.password) {
          callback(new Error('两次输入的密码不一致'));
        } else {
          callback();
        }
      },
      trigger: 'blur'
    }
  ],
  test_number: [
    {
      required: true,
      trigger: 'blur',
      message: '测试码不能为空'
    }
  ]
})

const registerUser = ref<IUser>({
  email: '',
  password: '',
  password_again: "",
  test_number: ""
})
//注册 eplus 自带的校验方法
const submitLoginForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid: any) => {
    if (valid) {
      alert("登录成功")
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
