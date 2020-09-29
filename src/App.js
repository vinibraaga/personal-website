import React from 'react';
import Main from './components/Main';

import './App.css';
import Column from './components/Column';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Column />
      <Header />
      <Main />
    </div>
  );
}

export default App;
