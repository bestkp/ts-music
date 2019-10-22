import qs from 'querystring'
import { AxiosResponse, AxiosRequestConfig } from 'axios'
console.log(process.env);
const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
    // 请求后的数据处理
    transformResponse: [function (data: AxiosResponse) {
        return data;
    }],
    // 查询对象序列化函数
    paramsSerializer: function (params: any) {
        return qs.stringify(params)
    },
    timeout: 30000,
    responseType: 'json',
    withCredentials: false,
    // 自定义错误状态码范围
    validateStatus: function (status: number) {
        return status >= 200 && status < 300
    }
};

export default axiosConfig;
