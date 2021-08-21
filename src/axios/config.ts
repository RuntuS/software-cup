import axios from 'axios';

let requestUrl = 'http://36.133.57.158';


export const Axios = axios.create({
    baseURL: `${requestUrl}:8081/`
})