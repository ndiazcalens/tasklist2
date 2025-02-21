import React from 'react';
import './App.css';
import Logo from './components/logo.jsx';
import Tasklist from './components/task-list.jsx';


function App() {

  return (
    <div className="App">
      <Logo />
      <div className="list-container">
        <h1>My Tasks</h1>
        <Tasklist />
      </div>
    </div>
  );
};

export default App;
