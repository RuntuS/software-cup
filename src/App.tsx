import { Login } from '@/pages/login';
import { PhotoPreview } from '@/pages/photo-preview-index';
import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';

// TODO 登录状态的判断在这里进行
function App() {

  const userToken = window.sessionStorage.getItem('user')

  // 关于未登录重定向这部分代码先写死，后期设置中间件来进行拦截
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route path={['/index']} exact> 
          {
              userToken ? 
              (
                <Redirect to="/index/0" />
              )
              :
              (
                <Redirect to="/login" />
              )
            }
          </Route>
          <Route path={['/index/:current', '/index']} exact>
            {
              <PhotoPreview />
            }
          </Route>
          <Route path={['/login']} exact>
            <Login />
          </Route>
          <Route path="*">
            {
              userToken ? 
              (
                <Redirect to="/index/0" />
              )
              :
              (
                <Redirect to="/login" />
              )
            }
            
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
