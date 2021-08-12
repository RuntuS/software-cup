import { Axios as axios } from './config'


export const login = async (account: string, password: string): Promise<{data: string}> => {
    const response = await axios({
        method: 'GET',
        url: `/user/login?userId=${account}&password=${password}`
    })

    if(response.data.code != 200){
        throw new Error('密码错误')
    }
    
    return response.data
}