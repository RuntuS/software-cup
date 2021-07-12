import { login } from '@/axios/login'
import { LockOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons'
import { useDebounceFn } from 'ahooks'
import { Button, Input, Menu, message } from 'antd'
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import url from './image/相机.svg'
import { StyleLoginBody } from './style'



const {Item} = Menu

type Props = {}

export const Login: React.FC<Props> = (props) => {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const {run: accountInput} = useDebounceFn((account: string) => {
        setAccount(account)
    },{
        wait: 500
    })

    const {run: passwordInput} = useDebounceFn((password: string) => {
        setPassword(password)
    }, {
        wait: 500
    })

    const loginLocal = useCallback(() => {
        login(account,password)
        .then(res => {
            message.success("登录成功",1)
            window.sessionStorage.setItem('user', res.data)
            setTimeout(() => {
                history.push("/index/0")
            }, 1000)
        })
        .catch(err => {
            message.error("密码错误", 1)
        })
    }, [account, history, password])

    

    return (
        <StyleLoginBody style={{height: window.innerHeight}}>
            <div className="titleBox">
                <div className="imageBox">
                    <img src={url} alt="标志"/>
                </div>
                <span className="title">智能云相册</span>
            </div>
            <div className="subTitle">
                新一代智能相册，释放您的硬件空间！
            </div>
            <Menu  mode="horizontal" selectedKeys={["login"]} className="menu">
                <Item key="login" icon={<LoginOutlined />}>
                    账号密码登录
                </Item>
            </Menu>

            <div className="loginBox">
                <Input
                    onChange={(e) => {accountInput(e.target.value)}}
                    className={"input"}
                    prefix={<UserOutlined className={'icon'} />}
                    placeholder="登录账号"
                />
                <Input
                    onChange={(e) => {passwordInput(e.target.value)}}
                    className={"input"}
                    prefix={<LockOutlined className={'icon'} />}
                    placeholder="密码"
                    type="password"
                />
            </div>

            <div className="buttonBox">
                <Button 
                    type="primary" 
                    className="loginBtn"
                    onClick={() => {loginLocal()}}
                >
                    登录
                </Button>
            </div>
        </StyleLoginBody>
    )
}