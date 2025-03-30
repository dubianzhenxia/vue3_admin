import axios from "axios";
import { ElMessage } from "element-plus";
//创建axios实例,axios.create方法返回的也是一个axions，只是可以配置请求和响应拦截器
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})
//请求拦截器
request.interceptors.request.use(
    //成功的回调，需返回config配置对象，可以设置headers属性请求头，给服务器携带公共参数
    config => {
             return config;
    },

    //失败时的回调
    error => {
        ElMessage({
        type: 'error',
        message: '请求出错'
    })
        return Promise.reject(error)
    }
);


//响应拦截器
request.interceptors.response.use(
    //成功的回调
    (response) => {
    return response.data;
    },
    //失败时的回调
    (error) => {
    //处理网络错误
    let msg = '';
    let status = error.response.status;
    switch (status) {
        case 401:
            msg = "token过期";
            break;
        case 403:
            msg = '无权访问';
            break;
        case 404:
            msg = "请求地址错误";
            break;
        case 500:
            msg = "服务器出现问题";
            break;
        default:
            msg = "无网络";

    }
    ElMessage({
        type: 'error',
        message: msg
    })
    return Promise.reject(error);
});
export default request;