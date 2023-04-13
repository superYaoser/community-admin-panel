
import request from "./root/request";

// 获取全部用户信息
function getAllUser() {
    return request({
        url: '/user/list',
        method: 'GET',
    })
}

/**
 * 获取用户信息
 * @param id 用户id
 */
function getAUserById(id:string) {
    return request({
        url: '/user/'+id,
        method: 'GET',
    })
}

export {
    getAllUser,getAUserById
}
