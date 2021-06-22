import React from 'react'
import { Image } from 'antd'
import { StyleHighQualityImage } from './style'

type Props = {
    id: string,
}

export const HighQualityPhoto: React.FC<Props> = (props) => {
    const { id } = props;


    return (
        <StyleHighQualityImage>
            <div>
                <Image>

                </Image>    
            </div>
            <div className={'descption'}>

            </div>
        </StyleHighQualityImage>
    )
}