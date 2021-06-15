import React from 'react';
import { PageHeader } from 'antd';
import { AuthenInfo } from './components/authen';
import { NotAuthen } from './components/not-authen';
import './index.css';
import avatar from '@/images/avatar.png';

type Props = {};

export const DashBoard: React.FC<Props> = (props) => {
  // TODO mock数据，
  const isAuthen = false;

  return (
    <div>
      <PageHeader
        className={'header'}
        // TODO lhl 名称待确定
        title={'title'}
        subTitle={'智能相册管理'}
        avatar={{ src: avatar }}
        extra={[
          isAuthen ? (
            <AuthenInfo avatarSrc={avatar} name="Runtu" />
          ) : (
            <NotAuthen />
          ),
        ]}
      />
    </div>
  );
};
