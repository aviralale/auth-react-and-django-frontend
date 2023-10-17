import { useEffect,useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'sonner'

export default function LoginPage() {
    const [formData,setFormData] = useState({
        "email": "",
        "password": "",
    })
    const {email,
    password
} = formData;
const handleChange = (e) =>{
    setFormData( (prev)=> ({
        ...prev,
        [e.target.name]: e.target.value
    }))
}
const handleSubmit = (e) =>{
    e.preventDefault();
    if(!email || !password){
        toast.error("Please fill all the fields")
        }else{
            toast.success('Login Successful')
        }
}
  return (
    <div>
        <Toaster richColors position="bottom-right" />
      <h1 className="text-8xl text-center uppercase font-bold">Login</h1>
      <form className="mt-8 flex flex-col justify-center" style={{
        width: '50vw',
    }}>
        <input
          type="email"
          className="input mt-2 input-bordered"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
          placeholder="email"
          required
        />
        <input
          type="password"
          className="input mt-2 input-bordered"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <Link to="/reset-password" className='mt-2 link'>Forgot password?</Link>
        <button className="btn mt-2 uppercase btn-outline" type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}
