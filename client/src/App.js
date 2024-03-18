import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import DetailPage from './components/DetailPage/DetailPage';
import LoginPage from 'pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/api/v1/campaigns/" element={<HomePage />} />
          <Route path="/api/v1/campaigns/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
      <LoginPage/>
    </div>
    
  );
}

export default App;

