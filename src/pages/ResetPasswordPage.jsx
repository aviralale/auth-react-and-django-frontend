import { useEffect,useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { toast } from 'sonner'
import { resetPassword } from '../features/auth/authSlice'

export default function ResetPasswordPage() {
    const [formData,setFormData] = useState({
        "email": "",
    })
    const {email
} = formData;

const dispatch = useDispatch();
const navigate = useNavigate();

const {isLoading,isError,isSuccess,message} = useSelector((state) => state.auth)

const handleChange = (e) =>{
    setFormData( (prev)=> ({
        ...prev,
        [e.target.name]: e.target.value
    }))
}
const handleSubmit = (e) =>{
    e.preventDefault();

    const userData = {
      email
    }
    dispatch(resetPassword(userData))

    if (!email) {
        
        toast.error("Enter a valid email");
    }
}

useEffect(() => {
  if (isError){
    toast.error(message)
    }
    if (isSuccess) {
      navigate("/")
      toast.success("Reset password link has been sent to your mail.")
    }
    },[isError,isSuccess,message,navigate,dispatch])

  return (
    <div>
      <h1 className="text-8xl text-center uppercase font-bold">Reset Password</h1>
      {isLoading && <p className='text-center uppercase font-bold'>Loading...</p>}
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