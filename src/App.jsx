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
import { Toaster } from 'sonner';
import NotFoundPage from './pages/NotFoundPage';
import ResetPasswordPageConfirm from './pages/ResetPasswordPageConfirm';
export default function App() {
  return (
    <div className="flex flex-col justify-center items-center" style={{
      width: '100vw',
      height:'100vh'
  }}>
      <BrowserRouter>
      <Navbar/>
      <Toaster richColors position="bottom-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/activate/:uid/:token" element={<ActivatePage/> } />
        <Route path="/activated" element={<ActivatedAccountPage/> } />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordPageConfirm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage/> } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
