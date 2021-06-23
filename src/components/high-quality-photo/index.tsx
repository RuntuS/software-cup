import React from 'react'
import { Image } from 'antd'
import { StyleHighQualityImage } from './style'

type Props = {
    id: string,
}

export const HighQualityPhoto: React.FC<Props> = (props) => {
    const { id } = props;

    console.log(id)


    return (
        <StyleHighQualityImage>
            <div>
                <Image 
                    src="https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png"
                    className={"image"}
                    alt="预览"
                />
            </div>
            <div className={'descption'}>
                {"图片详细信息放这里"}
            </div>
        </StyleHighQualityImage>
    )
}