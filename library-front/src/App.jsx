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
import AdminLoginPage from "./pages/adminloginpage/AdminLoginPage";
import AdminPage from "./pages/adminpage/AdminPage";

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
      path:"/admin/login",
      element:<AdminLoginPage/>
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
    },
    {
      path:"/admin",
      element:<AdminPage/>
    }

  ]);

  return <GoogleOAuthProvider clientId={process.env.REACT_APP_GAPI_CLIENTID}><RouterProvider router={router} /></GoogleOAuthProvider>;
}

export default App;
