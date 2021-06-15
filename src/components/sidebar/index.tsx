import { Menu } from 'antd';
import React from 'react';
import { StyleSidebarBox } from './style';

const { SubMenu, Item } = Menu;
type Props = {
  onChoose: (order: string) => void;
  className?: string;
};

export const Sidebar: React.FC<Props> = (props: Props) => {
  const { onChoose, className } = props;

  return (
    <StyleSidebarBox className={className}>
      <Menu
        mode="inline"
        onSelect={(obj) => {
          onChoose(obj.key);
        }}
        defaultOpenKeys={['photo', 'albumTitle']}
      >
        <SubMenu key="photo" title="照片">
          <Item key="all-photo">全部照片</Item>
          <Item key="recent">最近上传</Item>
        </SubMenu>
        <SubMenu key="albumTitle" title="相册">
          <Item key="album">相册</Item>
          <Item key="people">人物</Item>
          <Item key="placement">地点</Item>
          <Item key="things">事件</Item>
        </SubMenu>
      </Menu>
    </StyleSidebarBox>
  );
};
