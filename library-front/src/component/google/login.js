import { GoogleLogin } from "@react-oauth/google";
import decode from "./decode";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { setLogin } from "../../state/index";

const GoogleLoginComponent = () => {
  
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const onLogin = (credential) => {
    dispatch(setLogin({user:credential,google:1}));
    navigate('/');
  };
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const credential=decode(credentialResponse.credential);
        onLogin(credential);
      }}
      onError={() => {
        console.log("Login Failed");
      }}

      width={"300px"}
    />
  );
};

export default GoogleLoginComponent;
