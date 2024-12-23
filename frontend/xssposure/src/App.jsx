import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from './pages/landing-page/LandingPage';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import AddPost from './pages/add-post/AddPost';
import { useEffect, useState } from 'react';

function App() {

  const checkJWTValidity = () => {
    const token = localStorage.getItem('jwtToken');
    if (!token) return false;

    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp > currentTime;
    } catch (e) {
      return false;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/add-post' element={<AddPost />} />
          <Route path='*' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App