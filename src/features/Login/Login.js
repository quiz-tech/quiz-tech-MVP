import GoogleBtn from './GoogleBtn';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const [Auth, setAuth] = useState([]);
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
        // console.log(data.jwt_token.access);
        console.log(data[0].jwt_token.access);
        // console.log(data.jwt_token);
        data[0].jwt_token.access
          ? localStorage.setItem('access', data[0].jwt_token.access)
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
        <LoginContent>
          <LoginTitle>
            <MainText>Login to your Account</MainText>
            <SubText>with your registered Gmail Address</SubText>
          </LoginTitle>
          <GoogleLogin>
            <GoogleBtn setAuth={setAuth} Auth={Auth} />
          </GoogleLogin>
        </LoginContent>
      </Contents>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div``;

const Contents = styled.div``;

const LoginImg = styled.img``;

const LoginContent = styled.div``;

const LoginTitle = styled.div``;

const MainText = styled.span``;

const SubText = styled(MainText)``;

const GoogleLogin = styled.div``;
