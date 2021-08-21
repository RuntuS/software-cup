import axios from 'axios';

let requestUrl;

// 开发环境
if(process.env.NODE_ENV === 'development'){
    requestUrl = 'http://36.133.57.158'
} else {
    requestUrl = 'http://localhost'
}

export const Axios = axios.create({
    baseURL: `${requestUrl}:8081/`
})