
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/Abouts';
import Product from './pages/Products';
import Mota from './pages/Mota';

import Contact from './pages/Contact';




import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Loginpage from './pages/Loginpage';
import Register from './pages/Register';
import Product2 from './pages/Product2';
import Mota2 from './pages/Mota2';
import Brand from './pages/Brand';




function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);
  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/mota" element={<Mota />} />
        <Route path="/lienhe" element={<Contact/>} />
        <Route path="/brand" element={<Brand/>} />
        <Route path="/dashboard" element={<Dashboard setIsAuthenticated={setIsAuthenticated} />}/>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
        <Route path="/login" element={<Logout/>} />
        <Route path="/loginpage" element={<Loginpage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/product/2" element={<Product2/>} />
        <Route path="/mota/2" element={<Mota2/>} />
      </Routes>
      
    </>
  );

}

export default App;
