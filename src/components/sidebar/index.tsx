import { Menu } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { StyleSidebarBox } from './style';

const { SubMenu, Item } = Menu;
type Props = {
  onChoose: (order: string) => void;
  className?: string;
};

export const Sidebar: React.FC<Props> = (props: Props) => {
  const { onChoose, className } = props;
  const params = useParams() as { current: string };

  return (
    <StyleSidebarBox className={className}>
      <Menu
        mode="inline"
        onSelect={(obj) => {
          onChoose(obj.key);
        }}
        defaultOpenKeys={['photo', 'albumTitle']}
        defaultSelectedKeys={params ? [params.current] : ['']}
      >
        <SubMenu key="photo" title="照片">
          <Item key="all-photo">全部照片</Item>
          <Item key="recent">最近上传</Item>
        </SubMenu>
        <SubMenu key="albumTitle" title="相册">
          <Item key="0">事物</Item>
          <Item key="1">风景</Item>
          <Item key="2">人像</Item>
        </SubMenu>
      </Menu>
    </StyleSidebarBox>
  );
};
