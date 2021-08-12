import { Axios as axios } from './config'

export type Album = {
    fileId: string;
    title: string;
    imgUrl: string;
    number: number;
}

export const requestAlbum = async (userId: string, id: string, isAlbum: boolean): Promise<Array<Album>> => {
    const response = await axios({
        method: 'GET',
        url:`/photo/getPhotoInfo?userId=${userId}&id=${id}&isAlbum=${isAlbum}`
    })

    return response.data.data
}


