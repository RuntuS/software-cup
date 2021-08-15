import { DetailPhoto, requestDetail } from '@/axios/photo'
import { Image, Spin, Tag } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleHighQualityImage, StyleLoadingBox } from './style'

type Props = {
    id: string,
}

export const HighQualityPhoto: React.FC<Props> = (props) => {
    const { id } = props;
    
    const [loading, setLoading] = useState(false)


    const [detail, setDetail] = useState<DetailPhoto>({
        fileId: '0',
        title: '',
        imgUrl: '',
        height: '',
        width: '',
        uploadTime: '',
        categories: []
    })
    const requestDetailLocal = useCallback(() => {
        setLoading(true)
        requestDetail('2018091609025',id,false)
        .then(res => {
            setDetail(res)
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
        })
    }, [id])

    useEffect(() => {
        requestDetailLocal()
    }, [requestDetailLocal])



    return (
        <>
            {
            loading ? 
            <StyleLoadingBox>
                <Spin />
            </StyleLoadingBox>
            :   
            (<StyleHighQualityImage key={id}>
                <div>
                    <Image 
                        src={detail.imgUrl}
                        className={"image"}
                        alt="预览"
                    />
                </div>
                <div className={'descrption'}>
                    <div className={"title"}>{detail.title}</div>
                    <div className={'uploadTime'}>
                        <span>上传时间: </span>
                        <span>{detail.uploadTime}</span>
                    </div>
                    <div className={'tag'}>
                        {detail.categories.map(item => (
                            <Tag color="cyan" className={'tagItem'}>{item}</Tag>
                        ))}
                    </div>
                </div>
            </StyleHighQualityImage>)}

        </>

    )
}