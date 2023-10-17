import React from "react";
import { useEffect, useState } from "react";
import { Toaster, toast } from 'sonner'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    "first_name": "",
    "last_name": "",
    "email": "",
    "password": "",
    "re_password": "",
  });

  const {
    first_name,
    last_name,
    email,
    password,
    re_password,
  } = formData;

  const handleChange = (e) => {
    setFormData( (prev) => ({
        ...prev,
        [e.target.name]: e.target.value
  }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(password != re_password){
        toast.error("Passwords don't match.")
    }
  }


  return (
    <div>
        <Toaster richColors position="bottom-right" />
      <h1 className="text-8xl text-center uppercase font-bold">Register</h1>
      <form className="mt-8 flex flex-col justify-center" style={{
        width: '50vw',
    }}>
        <input
          type="text"
          className="input mt-2 input-bordered"
          name="first_name"
          id="first_name"
          value={first_name}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          className="input mt-2 input-bordered"
          name="last_name"
          id="last_name"
          value={last_name}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
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
        <input
          type="password"
          className="input mt-2 input-bordered"
          name="re_password"
          id="re_password"
          value={re_password}
          onChange={handleChange}
          placeholder="Repeat Password"
          required
        />
        <button className="btn mt-2 uppercase btn-outline" type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}
