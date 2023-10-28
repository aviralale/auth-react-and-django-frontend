import React, { useState, useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector, useDispatch } from 'react-redux'
import { resetPasswordConfirm } from '../features/auth/authSlice'

export default function ResetPasswordPageConfirm() {
    const {uid,token} = useParams()
const [formData, setFormData] = useState({
    'new_password': '',
    're_new_password': ''
})
const {new_password,re_new_password} = formData;
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
      uid,token,new_password,re_new_password
    }
    dispatch(resetPasswordConfirm(userData))
}

useEffect(() => {
  if (isError){
    toast.error(message)
    }
    if (isSuccess) {
      navigate("/login")
      toast.success("Password reset successful, Please login.")
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
          type="password"
          className="input mt-2 input-bordered"
          name="new_password"
          id="new_password"
          value={new_password}
          onChange={handleChange}
          placeholder="New Password"
          required
        />
        <input
          type="password"
          className="input mt-2 input-bordered"
          name="re_new_password"
          id="re_new_password"
          value={re_new_password}
          onChange={handleChange}
          placeholder="Confirm new password"
          required
        />
        <button className="btn mt-2 uppercase btn-outline" type="submit" onClick={handleSubmit}>Reset Password</button>
      </form>
    </div>
  )
}
