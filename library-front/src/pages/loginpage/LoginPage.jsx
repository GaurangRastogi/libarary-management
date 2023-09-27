

import {Link} from "react-router-dom"
import React, { useEffect, useState } from "react";
import GoogleLoginComponent from "../../component/google/login";
// import { GoogleLogin } from "@react-oauth/google";



function LoginPage() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    console.log("Login")
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
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
      </div>

      <div className="flex flex-col w-1/3">
        <label htmlFor="password" className="text-2xl">Password</label>
        <input
          className="text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focur:border-gray-600"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
      </div>

      <button
        onClick={onLogin}
        className="w-1/3 p-3 m-4 text-xl text-white bg-pink-600 border border-pink-300 rounded-lg mb-4 focus:outline-none focur:border-pink-700"
      >
        Login Here!
      </button>

      <GoogleLoginComponent/>
      
      <Link to="/signup" className="m-4 mt-10 text-lg hover:underline">Register here! SignUp</Link>

    </div>
  );
}

export default LoginPage;