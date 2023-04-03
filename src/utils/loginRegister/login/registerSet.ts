/*
    登录的配置文件 分离
 */
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
export {
    ruleFormRef, rules, registerUser, submitLoginForm
}
