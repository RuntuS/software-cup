import axios from 'axios';

let requestUrl;

// 开发环境
if(process.env.NODE_ENV === 'development'){
    requestUrl = 'http://36.133.57.158'
} else {
    requestUrl = 'http://127.0.0.1'
}

export const Axios = axios.create({
    baseURL: `${requestUrl}:8081/`
})