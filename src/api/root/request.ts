// 1引入axios
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// 2 创建axios实例
const instance = axios.create({
    baseURL:'http://localhost:3000/api',
    headers: {
        "authorization": localStorage.getItem('token')
    },
});

// 3 添加请求拦截器
// @ts-ignore
instance.interceptors.request.use(function (config: AxiosRequestConfig) {
    // 在发送请求之前做些什么
    console.log('发送请求之前');
    return config;
}, function (error: any) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 4 添加响应拦截器
instance.interceptors.response.use(function (response: AxiosResponse) {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    console.log('响应后');
    return response;
}, function (error: any) {
    // 超出 2xx 范围的状态码会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;
