import GoogleBtn from './GoogleBtn';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flex } from '../../styles/Mixin';

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
            <SubText>with your registered gmail Address</SubText>
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

const LoginContainer = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  ${flex('center', 'center')};
  margin: 0 auto;
  width: 1060px;
`;

const LoginImg = styled.img`
  width: 600px;
  height: 100vh;
`;

const LoginContent = styled.div`
  width: 400px;
  margin-left: 80px;
`;

const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainText = styled.span`
  font-weight: 700;
  font-size: 30px;
`;

const SubText = styled.span`
  margin-top: 5px;
  color: #8692a6;
`;

const GoogleLogin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
