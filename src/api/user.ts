
import request from "./root/request";

// 获取全部用户信息
function getAllUser() {
    return request({
        url: '/user/list',
        method: 'GET',
    })
}

export {
    getAllUser,
}
