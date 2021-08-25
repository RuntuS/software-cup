import { Axios as axios } from './config'

export type Music = {
    id: string,
    title: string
}

export const requestMusicList = async () : Promise<Music[]> => {
    const data = await axios({
        method: 'get',
        url: 'http://36.133.57.158:23333/getMusicList'
    })

    return data.data.data
}