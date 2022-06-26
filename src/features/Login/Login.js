import React from 'react';
import GoogleBtn from './GoogleBtn';

const Login = () => {
  return (
    <div>
      <div>안녕나는로그인페이지야</div>
      <GoogleBtn />
      <a
        href="http://ec2-13-209-49-51.ap-northeast-2.compute.amazonaws.com:8000/users/google/login/"
        target="_blank"
        rel="noreferrer"
      >
        구글 로그인
      </a>
    </div>
  );
};

export default Login;
