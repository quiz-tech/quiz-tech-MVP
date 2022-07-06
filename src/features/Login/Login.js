import GoogleBtn from './GoogleBtn';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const [Auth, setAuth] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem('access')
      ? navigate('/')
      : console.log('로그인을 진행해주세요.');

    fetch(`http://backend.tecquiz.net:8000/users/login/`, {
      headers: {
        Authorization: Auth.credential,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.jwt_token.access);
        data.jwt_token.access
          ? localStorage.setItem('access', data.jwt_token.access)
          : navigate('/login');
        localStorage.getItem('access')
          ? navigate('/')
          : alert('다시 로그인을 진행해주세요.');
      });
  }, [Auth, navigate]);

  return (
    <LoginContainer>
      <Contents>
        <LoginImg src="/images/logo.svg" alt="메인로고" />
        <Login>
          <LoginTitle>
            <MainText>Login to your Account</MainText>
            <SubText>with your registered Gmail Address</SubText>
          </LoginTitle>
          <GoogleLogin>
            <GoogleBtn setAuth={setAuth} Auth={Auth} />
          </GoogleLogin>
        </Login>
      </Contents>
    </LoginContainer>
  );
};

export default Login;
