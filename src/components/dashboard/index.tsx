import avatar from '@/images/avatar.png';
import icon from '@/images/icon.png';
import { PageHeader } from 'antd';
import React from 'react';
import { AuthenInfo } from './components/authen';
import { InputSearch } from './components/input-search';
import { NotAuthen } from './components/not-authen';
import './index.css';

type Props = {};

export const DashBoard: React.FC<Props> = (props) => {
  // TODO mock数据，
  const isAuthen = !!window.sessionStorage.getItem('user');

  return (
    <div>
      <PageHeader
        className={'header'}
        subTitle={'智能相册管理'}
        avatar={{ src: icon }}
        extra={[
          isAuthen ? (
            <div className="header-back">
              <InputSearch
                className="search"
              />
              <AuthenInfo avatarSrc={avatar} name="Runtu" />
            </div>
          ) : (
            <NotAuthen />
          ),
        ]}
      />
    </div>
  );
};
