import { useEffect } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activate, reset } from '../features/auth/authSlice'
import { toast } from 'sonner'
import { useNavigate,useParams } from 'react-router-dom'

export default function ActivatePage() {

  const {uid,token} = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

const handleSubmit = (e) =>{
    e.preventDefault();

    const userData = {
      uid,
      token
    }
    dispatch(activate(userData))
  }
  
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    
    if (isSuccess) {
      navigate("/login")
      toast.success("Your account has been activated.");
  }

  dispatch(reset())

}, [isError, isSuccess, navigate, dispatch])

  return (
    <div>
      <h1 className="text-7xl text-center uppercase font-bold">Activate Account</h1>
      {isLoading && <p>Activating</p> }
      <form className="mt-8 flex flex-col justify-center">
        <button className="btn mt-2 uppercase btn-outline" type="submit" onClick={handleSubmit}>Activate Account</button>
      </form>
    </div>
  )
}
