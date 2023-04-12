
import request from "./root/request";

// 管理员登录
function setImage(formData:any) {
    return request({
        url: '/upload/image',
        method: 'post',
        data: formData,
    })
}

export {
    setImage,
}
