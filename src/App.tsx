import { PhotoPreview } from '@/pages/photo-preview-index';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/index" exact>
          <PhotoPreview />
        </Route>
        <Route path="*">404 not found</Route>
      </Switch>
    </Router>
  );
}

export default App;
