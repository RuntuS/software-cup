import axios from 'axios'


export const login = async (account: string, password: string): Promise<{data: string}> => {
    const response = await axios({
        method: 'GET',
        url: `http://47.108.85.69:8081/user/login?userId=${account}&password=${password}`
    })

    if(response.data.code != 200){
        throw new Error('密码错误')
    }
    
    return response.data
}