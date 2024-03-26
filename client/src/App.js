import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import DetailPage from './components/DetailPage/DetailPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import PageLayout from 'pages/PageLayout/PageLayout';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import LogoutPage from 'pages/LogoutPage/LogoutPage';

function App() {
  return (
    <div className="App">
      <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/api/v1/campaigns" element={<HomePage />} />
          <Route path="/api/v1/campaigns/:id" element={<DetailPage />} />

          <Route path="/" element={<PageLayout />}>
          <Route path="/logout" element={<LogoutPage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          </Route>
          
          
        </Routes>
      </BrowserRouter>
    </div>
    </div>
    
  );
}

export default App;

