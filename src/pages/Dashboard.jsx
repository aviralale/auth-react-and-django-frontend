import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { toast } from 'sonner'
export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    toast.success("Logged out successfully.")
    navigate("/login")
}
  return (
    <div>
      <h1 className="text-8xl uppercase text-center font-bold">Dashboard</h1>
      <button className="btn btn-outline uppercase" onClick={handleLogout}>Logout</button>
    </div>
  )
}
