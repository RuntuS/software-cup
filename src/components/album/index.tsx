import React from 'react'
import { useCallback } from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import { StyleImageBox } from './style'

type Props = {
    id: string,
    title: string,
    // 相册内照片总数
    url: string,
    number ?: number,
}

export const Album: React.FC<Props> = (props) => {
    const { title, url, id, number = 0 } = props

    const history = useHistory()

    const urlObj = useLocation()


    const turnToAlbum = useCallback(() => {
        history.push(`${urlObj.pathname}?album=${id}`)
    },[history, id, urlObj.pathname])


    return (
        <StyleImageBox
            onClick={() => turnToAlbum()}
        >
            <figure className={'imgBox imghvr-fade'}>
                <img
                    src={url}
                    alt={"图片加载问题"}
                />
                <figcaption>
                    查看相册图片
                </figcaption>
            </figure>
            <div className="desc">
                <span className={'title'}>
                    {title}
                </span>
                <span className={'number'}>
                    {number}张照片
                </span>
            </div>
        </StyleImageBox>
    )
}