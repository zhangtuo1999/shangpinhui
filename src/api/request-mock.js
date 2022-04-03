/**
 * 对 axios 进行二次封装
 */

import axios from "axios";

// 引入进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 1. 利用 axios 对象的 create 方法创建一个 axios 实例
// 这里的 request 就是 axios 的一个实例
const service = axios.create({
    // 1. 设置基础路径,在服务器地址和接口之间加上'/api'
    // 以后想发请求/api/user/list,只需要发请求/user/list即可，接口地址会自动加上/api
    baseURL: '/mock',

    // 2. 设置请求超时时间5s
    timeout: 5000
})

// 2. 配置请求拦截器
service.interceptors.request.use((config) => {
    nprogress.start()
    return config
})

// 3. 配置响应拦截器
service.interceptors.response.use((res) => {
        // 1. 响应成功的回调，只返回data字段
        nprogress.done()
        return res.data
    },
    () => {
        // 2. 响应失败的回调
        return Promise.reject(new Error('Error'))
    })


export default service
