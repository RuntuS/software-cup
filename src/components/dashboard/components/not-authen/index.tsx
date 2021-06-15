import React from 'react'
import { Button } from 'antd'
import { StyleNotAuthenInfoBox } from './style'

type Props = {

}

export const NotAuthen: React.FC<Props> = (props) => {

    return (
        <StyleNotAuthenInfoBox>
            <Button
                className="login"
                type="link"
            >
                登录
            </Button>
            <Button
                className="register"
                type="link"
            >
                注册
            </Button>
        </StyleNotAuthenInfoBox>
    )
}