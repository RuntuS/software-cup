import axios from 'axios'

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
        url: `http://47.108.85.69:8081/photo/getImgList?userId=${userId}&item=${item}&curPage=${curPage}&pageSize=${pageSize}`
    })

    return response.data.data
}

export const requestDetail = async (userId: string, id: string, isAlbum: boolean): Promise<DetailPhoto> => {
    const response = await axios({
        method: 'GET',
        url: `http://47.108.85.69:8081/photo/getPhotoInfo?userId=${userId}&id=${id}&isAlbum=${isAlbum}`
    })

    return response.data.data
}

export const requestAllPhotos = async (userId: string, curPage:number, pageSize: number): Promise<{
    total: number,
    imgList: Array<Photo>
}> => {
    const response = await axios({
        method: 'GET',
        url: `http://47.108.85.69:8081/photo/getAllImg?userId=${userId}&curPage=${curPage}&pageSize=${pageSize}`
    })
    return response.data.data
}