
import request from "./root/request";

// 获取文章分页
function getPage(page_number: number, page_size: number) {
    return request({
        url: '/article/page',
        method: 'get',
        params: {
            page_number: page_number,
            page_size: page_size
        }
    })
}
// 上传文章
function setArticle(title: string, content: any,category?:number) {
    return request({
        url: '/article',
        method: 'post',
        data: {
            title: title,
            content: content,
            category:category
        },
    })
}

export {
    getPage,setArticle
}
