import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ActivatedAccountPage from './pages/ActivatedAccountPage';
import ActivatePage from './pages/ActivatePage';
export default function App() {
  return (
    <div className="flex flex-col justify-center items-center" style={{
      width: '100vw',
      height:'100vh'
  }}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/activated-user" element={<ActivatedAccountPage/> } />
        <Route path="/activate" element={<ActivatePage/> } />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
