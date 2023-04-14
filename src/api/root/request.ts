// 1引入axios
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {G} from '@/utils/set'

// 2 创建axios实例
const instance = axios.create({
    baseURL:G.baseURL,
    headers: {
        "authorization": localStorage.getItem('token')
    },
});

// 3 添加请求拦截器
// @ts-ignore
instance.interceptors.request.use(function (config: AxiosRequestConfig) {
    // 在发送请求之前做些什么
    if (config && config.url) {
        console.log("请求之前:")
        console.log("url", instance.defaults.baseURL + config.url); // 打印出URL
    }
    return config;
}, function (error: any) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 4 添加响应拦截器
instance.interceptors.response.use(function (response: AxiosResponse) {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    if (response && response.config && response.config.url) {
            console.log("url：", response.config.baseURL + response.config.url+"响应结束"); // 打印出URL
    }
    return response;
}, function (error: any) {
    console.log("响应之后：")
    console.log("url：",instance.defaults.baseURL+error.config.url+"请求出错，错误信息：")
    console.log(error.response.data)
    console.log("响应结束")
    // 超出 2xx 范围的状态码会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;
