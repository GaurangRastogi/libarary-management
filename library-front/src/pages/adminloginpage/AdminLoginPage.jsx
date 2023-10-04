

import {Link, useNavigate} from "react-router-dom"
import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { setAdminLogin } from "../../state/index";


function AdminLoginPage() {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const onLogin = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/admin/signin",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),
        }
      );

      const json = await response.json();
      
      email.value="";
      password.value="";
      
      if(response.status===400){
        return;
      }

      dispatch(setAdminLogin({admin:{email:json.email,token:json.token,google:0}}));
      navigate('/admin');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 relative">

      <a className="absolute left-10 top-10 text-lg font-medium underline" href="/"> <span className="text-xl font-bold">&larr;</span>Back to Home!</a>
      <h1 className="text-4xl">Login</h1>
      <hr />
      <div className="flex flex-col w-1/3">
        <label htmlFor="email" className="text-2xl">Email</label>
        <input
          className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focur:border-gray-600"
          id="email"
          type="text"
          value={admin.email}
          onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
          placeholder="email"
        />
      </div>

      <div className="flex flex-col w-1/3">
        <label htmlFor="password" className="text-2xl">Password</label>
        <input
          className="text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focur:border-gray-600"
          id="password"
          type="password"
          value={admin.password}
          onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
          placeholder="password"
        />
      </div>

      <button
        onClick={onLogin}
        className="w-1/3 p-3 m-4 text-xl text-white bg-pink-600 border border-pink-300 rounded-lg mb-4 focus:outline-none focur:border-pink-700"
      >
        Login Here!
      </button>

    </div>
  );
}

export default AdminLoginPage;