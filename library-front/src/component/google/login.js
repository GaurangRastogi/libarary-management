import { GoogleLogin } from "@react-oauth/google";
import decode from "./decode";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { setLogin } from "../../state/index";

const GoogleLoginComponent = () => {
  
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const onLogin = async (name,email) => {
    //special case, in this case it's already taken care by oauth
    //so random token is created oauth, which will handled specially in middleware,at backend

    const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/user/signingoogle",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            name:name
          }),
        }
    );

    const json = await response.json();
    dispatch(setLogin({user:{name:name,email:email,token:json.token,google:1}}));
    navigate('/');
  };
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        const credential=decode(credentialResponse.credential);
        await onLogin(credential.name,credential.email);
      }}
      onError={() => {
        console.log("Login Failed");
      }}

      width={"300px"}
    />
  );
};

export default GoogleLoginComponent;
