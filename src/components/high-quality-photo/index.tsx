import { DetailPhoto, requestDetail } from '@/axios/photo'
import { Image, Tag } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleHighQualityImage } from './style'

type Props = {
    id: string,
}

export const HighQualityPhoto: React.FC<Props> = (props) => {
    const { id } = props;

    console.log(id)


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
        requestDetail('2018091609025',id,false)
        .then(res => {
            setDetail(res)
        })
        .catch(err => {
            console.error(err)
        })
    }, [id])

    useEffect(() => {
        requestDetailLocal()
    }, [requestDetailLocal])

    console.log(detail)


    return (
        <StyleHighQualityImage>
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
                        <Tag color="cyan">{item}</Tag>
                    ))}
                </div>
                
            </div>
        </StyleHighQualityImage>
    )
}