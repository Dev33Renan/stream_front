import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from '../src/components/Footer/Footer';
import Navbar from '../src/components/Navbar/Navbar';
import Login from '../src/pages/Login/Login';
import Register from '../src/pages/Register/Register';
import Profile from '../src/pages/Profile/Profile';
import Home from '../src/pages/Home/Home';
import Game from '../src/pages/Games/Games';
import WishList from '../src/pages/WishList/WishList';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game" element={<Game />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);  