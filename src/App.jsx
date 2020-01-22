import React from 'react';
import logo from './logo.svg';
import './sass/app.scss';
import './App.css';

import TopSection from './components/Top/index.jsx';
import BottomSection from './components/Bottom/index.jsx';

function App() {
  return (
    <div className="app-container">
      <div className="main-container">
        <div className="top-section">
          <TopSection />
        </div>
        <div className="bottom-section">
          <BottomSection />
        </div>
      </div>
    </div>
  );
}

export default App;
