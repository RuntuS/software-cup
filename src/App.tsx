import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { PhotoPreview } from '@/pages/photo-preview-index'
import "./App.css"

function App() {
  return (
      <Router  >
        <Route 
          path="/index" 
          component={PhotoPreview}
        />
      </Router>
  );
}

export default App;
