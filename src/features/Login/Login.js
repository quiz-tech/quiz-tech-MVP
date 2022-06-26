import React from 'react';
import GoogleBtn from './GoogleBtn';

const Login = () => {
  return (
    <div>
      <div>안녕나는로그인페이지야</div>
      <GoogleBtn />
      <a
        href="http://13.209.49.51:8000/users/login/"
        target="_blank"
        rel="noreferrer"
      >
        구글
      </a>
    </div>
  );
};

export default Login;
