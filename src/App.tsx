import { PhotoPreview } from '@/pages/photo-preview-index';
import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

// TODO 登录状态的判断在这里进行
function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/index']} exact>
          <Redirect to="/index/all-photo" />
        </Route>
        <Route path={['/index/:current', '/index']} exact>
          <PhotoPreview />
        </Route>
        <Route path="*">
          <Redirect to="/index/all-photo" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
