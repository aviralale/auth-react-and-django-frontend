import React from 'react'
import { Link } from 'react-router-dom';
import { Toaster,toast } from 'sonner';
export default function HomePage() {
  return (
    <div>
      <Toaster richColors position="bottom-right" />
      <Link to="/register">
      
      <button className="btn mt-2 uppercase btn-outline">Register</button>
      </Link>
      <Link to="/login">
      
      <button className="btn mt-2 uppercase btn-outline">Login</button>
      </Link>
    </div>
  )
}
