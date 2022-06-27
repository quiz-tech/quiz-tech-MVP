import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleBtn = ({ setAuth, Auth }) => {
  const navigate = useNavigate();
  const clientId =
    '1015759403917-3nfg6lne24msd1t9v09n6eov9nk4beo7.apps.googleusercontent.com';

  const successLogin = credentialResponse => {
    console.log(credentialResponse);
    setAuth(credentialResponse);
  };

  // console.log(Auth);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={
          successLogin
          //   credentialResponse => {
          //   setAuth(credentialResponse);
          //   // console.log(credentialResponse);
          //   console.log(Auth);
          // }
        }
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleBtn;
