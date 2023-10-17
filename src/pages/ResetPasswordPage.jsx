import { useEffect,useState } from 'react'
import React from 'react'
import { Toaster, toast } from 'sonner'

export default function ResetPasswordPage() {
    const [formData,setFormData] = useState({
        "email": "",
    })
    const {email
} = formData;
const handleChange = (e) =>{
    setFormData( (prev)=> ({
        ...prev,
        [e.target.name]: e.target.value
    }))
}
const handleSubmit = (e) =>{
    e.preventDefault();
    if (!email) {
        
        toast.error("Enter a valid email");
    }
    else{
        toast("Email sent successfully. Please check your inbox.");
    }
}
  return (
    <div>
        <Toaster richColors position="bottom-right" />
      <h1 className="text-8xl text-center uppercase font-bold">Reset Password</h1>
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
        <button className="btn mt-2 uppercase btn-outline" type="submit" onClick={handleSubmit}>Get Reset Link</button>
      </form>
    </div>
  )
}
