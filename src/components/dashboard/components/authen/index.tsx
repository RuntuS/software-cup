import { Avatar } from 'antd';
import React from 'react';
import { StyleAuthenInfoBox } from './style';

type Props = {
  avatarSrc: string;
  name: string;
};

export const AuthenInfo: React.FC<Props> = (props) => {
  const { avatarSrc, name } = props;
  return (
    <StyleAuthenInfoBox>
      <Avatar src={avatarSrc} />
      <span>{name}</span>
    </StyleAuthenInfoBox>
  );
};
