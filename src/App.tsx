import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
