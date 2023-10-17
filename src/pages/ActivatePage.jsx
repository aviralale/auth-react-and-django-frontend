import { useEffect,useState } from 'react'
import React from 'react'
import { Toaster, toast } from 'sonner'

export default function ActivatePage() {
const handleSubmit = (e) =>{
    e.preventDefault();
        toast("Activation link successfully. Please check your inbox.");
}
  return (
    <div>
        <Toaster richColors position="bottom-right" />
      <h1 className="text-7xl text-center uppercase font-bold">Activate Account</h1>
      <form className="mt-8 flex flex-col justify-center">
        <button className="btn mt-2 uppercase btn-outline" type="submit" onClick={handleSubmit}>Activate Account</button>
      </form>
    </div>
  )
}
