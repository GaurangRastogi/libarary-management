import React, { useEffect, useState } from "react";
import './App.css';
import {createBrowserRouter,RouterProvider,Route,Link} from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage";
import HomePage from "./pages/homepage/HomePage";
import SignUpPage from "./pages/signuppage/SignupPage";
import { GoogleOAuthProvider } from '@react-oauth/google';
import RentPage from "./pages/rentpage/RentPage";
import CartPage from "./pages/cartpage/CartPage";
import ProfilePage from "./pages/profilePage/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/signup",
      element:<SignUpPage/>
    },
    {
      path:"/rented",
      element:<RentPage/>
    },
    {
      path:"/cart",
      element:<CartPage/>
    },
    {
      path:"/profile",
      element:<ProfilePage/>
    }

  ]);

  // console.log(process.env.REACT_APP_CLIENT_ID);
  const clientId="594726725382-c5ae1fj7urg8ljfm5s5tq9lrjkfirr59.apps.googleusercontent.com";
  return <GoogleOAuthProvider clientId={clientId}><RouterProvider router={router} /></GoogleOAuthProvider>;
}

export default App;
