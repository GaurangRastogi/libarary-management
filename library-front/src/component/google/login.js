import { GoogleLogin } from "@react-oauth/google";
import decode from "./decode";

import React from "react";

const GoogleLoginComponent = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const credential=decode(credentialResponse.credential);
        return credential;
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginComponent;
