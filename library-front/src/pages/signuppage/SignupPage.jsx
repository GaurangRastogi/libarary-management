
import React, { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";

function SignUpPage() {

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
    mobile:""
  });

  const navigate=useNavigate();

  const onSignup=async(e)=>{
    e.preventDefault();
    const username=document.getElementById("username");
    const email = document.getElementById("email");
    const mobile=document.getElementById("mobile");
    const password = document.getElementById("password");

    const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/user/signup",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name:username.value,
            email: email.value,
            mobile:mobile.value,
            password: password.value
          }),
        }
      );

      const json = await response.json();
      
      username.value="";
      email.value="";
      mobile.value="";
      password.value="";
      
      if(response.status===400){
        return;
      }
      navigate('/login');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 relative">

      <a className="absolute left-10 top-10 text-lg font-medium underline" href="/"> <span className="text-xl font-bold">&larr;</span>Back to Home!</a>
      <h1 className="text-4xl">Signup</h1>
      <hr />

      <div className="flex flex-col w-1/3">
        <label htmlFor="username" className="text-2xl">Username</label>
        <input
          className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focur:border-gray-600"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
      </div>


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
        <label htmlFor="mobile" className="text-2xl">Phone Number</label>
        <input
          className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focur:border-gray-600"
          id="mobile"
          type="number"
          value={user.mobile}
          onChange={(e) => setUser({ ...user, mobile: e.target.value.substring(0,10) })}
          placeholder="mobile"
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
        onClick={onSignup}
        className="w-1/3 p-3 m-4 text-xl text-white bg-pink-600 border border-pink-300 rounded-lg mb-4 focus:outline-none focur:border-pink-700"
      >
        Sign Up!
      </button>
       
        
      <Link to="/login" className="m-4 text-lg hover:underline">Already have an account? Login</Link>
      </div>
  );
}

export default SignUpPage;