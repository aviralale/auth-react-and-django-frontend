import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to="/"> <button className="btn uppercase fixed top-0 left-0">Your Site</button> </Link>
    </div>
  )
}
