import axios from 'axios';
import {getToken} from './gettoken';
console.log(getToken('token'))
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8888', //是用于请求的服务器URL
    timeout:5000, //请求超时时间  如果请求花费超过了timeout 的时间，请求将被中断
    headers:{'token':getToken('token')}//自定义请求头
});
instance.interceptors.request.use((config)=>{
    return config;
},(error)=>{
    return Promise.reject(error);
});
instance.interceptors.response.use((response)=>{
    //console.log('response...',response);
    if(response.status!==200){
        //  message.error(response.statusText);
    }
    return response.data;
},(error)=>{
     console.log('error',error);
    return Promise.reject(error);
})
export default instance;