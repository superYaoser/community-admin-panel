
import request from "./root/request";

// 管理员登录
function adminLogin(email?: string, password?: string) {
    return request({
        url: '/admin/login',
        method: 'post',
        data: {
            email: email,
            password: password
        }
    })
}

export {
    adminLogin,
}
