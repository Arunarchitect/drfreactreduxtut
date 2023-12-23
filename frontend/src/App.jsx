import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from  'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Nav from './components/navigation/Nav'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword';
import Activate from './pages/Activate';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activate" element={<Activate />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App