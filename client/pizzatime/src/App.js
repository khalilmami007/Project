import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/registration';
import Login from './components/login';
import Home from './components/Home';
import Order from './components/Order';
import Account from './components/Account';

function App() {
  return (

    
    <Router>
      <h1>Pizaa Pete's</h1>
    <Routes>
      
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/order" element={<Order />} />
      
    </Routes>
  </Router>
);
  }

export default App;
