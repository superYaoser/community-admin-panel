/*
    登录的配置文件 分离
 */
import { ref} from 'vue'
import type {FormInstance} from 'element-plus'

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
        {
            min: 6,
            max: 30,
            message: "密码长度应该在8~16之间"
        }
    ],
})

const loginUser = ref<IUser>({
    email: '',
    password: '',
})
//登录 eplus 自带的校验方法
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
export{
    ruleFormRef,rules,loginUser,submitLoginForm
}
