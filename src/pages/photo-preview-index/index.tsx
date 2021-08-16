import { DashBoard } from '@/components/dashboard';
import { Sidebar } from '@/components/sidebar';
import { FolderAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { PhotoFrame } from './components/photos-frame';
import './index.css';
import { StyleBody, StyleHeader } from './style';

type Props = {};

export const PhotoPreview: React.FC<Props> = (props) => {
  const history = useHistory();

  let screenHeight = document.body.scrollHeight;

  return (
    <div>
      <StyleHeader>
        <DashBoard />
      </StyleHeader>
      <StyleBody>
        <div className="sideBarBox" style={{height: screenHeight - 72}}>
          <Sidebar
            className="sideBar"
            onChoose={(e) => {
              history.push(`/index/${e}`);
            }}
          />
          <Button type="link" className="createAlbum" icon={<FolderAddOutlined />} size="large">
            新建相册
          </Button>
        </div>
        <Switch>
          <Route path={['/index/:current']} exact>
            <PhotoFrame />
          </Route>
        </Switch>
      </StyleBody>
    </div>
  );
};
