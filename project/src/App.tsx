import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import CartPage from './pages/CartPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}