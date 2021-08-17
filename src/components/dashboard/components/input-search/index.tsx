import { searchValue } from '@/recoils/searchState'
import { useDebounceFn } from 'ahooks'
import { Input } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { StyleSearchBox } from './style'

const { Search } = Input

type Props = {
    className ?: string
}

export const InputSearch: React.FC<Props> = (props) => {
    const { className } = props;

    const [ , setSearch] = useRecoilState(searchValue)

    const history = useHistory()

    const {run: onChange} = useDebounceFn((item) => {
        setSearch(item.target.value)
        // 路由设置必须放在后面，如果在set之前进行路由更改会导致重复请求且拿不到最新数据
        history.push('/index/all-photo')
    }, {
        wait: 500
    })


    return (
        <StyleSearchBox
            className={className}
        >
            <Search
                placeholder="搜索图片关键词"
                onChange={onChange}
            />
        </StyleSearchBox>
    )
}