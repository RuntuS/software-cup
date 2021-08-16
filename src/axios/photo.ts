import { Axios as axios } from './config'

export type Photo = {
    imgUrl: string;
    fileName: string;
    fileId: string;
}

export type DetailPhoto = {
    fileId: string,
    title: string,
    imgUrl: string,
    height: string,
    width: string,
    uploadTime: string,
    categories: Array<string>
}

export const requestPhotos = async (userId: string, item: string, curPage: number, pageSize: number): Promise<{
    total: number,
    imgList: Array<Photo>
}> => {
    const response = await axios({
        method: 'GET',
        url: `/photo/getImgList?userId=${userId}&item=${item}&curPage=${curPage}&pageSize=${pageSize}`
    })

    return response.data.data
}

export const requestDetail = async (userId: string, id: string, isAlbum: boolean): Promise<DetailPhoto> => {
    const response = await axios({
        method: 'GET',
        url: `/photo/getPhotoInfo?userId=${userId}&id=${id}&isAlbum=${isAlbum}`
    })

    return response.data.data
}

export const requestAllPhotos = async (userId: string, curPage:number, pageSize: number): Promise<{
    total: number,
    imgList: Array<Photo>
}> => {
    const response = await axios({
        method: 'GET',
        url: `/photo/getAllImg?userId=${userId}&curPage=${curPage}&pageSize=${pageSize}`
    })
    return response.data.data
}

export const requestWonderful = async (file : Array<string>): Promise<{
    url: string,
}> => {
    const response = await axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        url: `http://36.133.57.158:23333/generateVideo`,
        data:{
            "file":file
        }
    })
    return response.data
}

export const deletePhoto = async (fileId: string, imgUrl?: string): Promise<{
    data: string
}> => {
    const response = await axios({
        method: 'get',
        url: `/photo/deletePhotoInfo`,
        params: {
            fileId,
            imgUrl
        }
    })

    return response.data.data
}