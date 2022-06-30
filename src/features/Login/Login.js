import GoogleBtn from './GoogleBtn';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div>
      <div>안녕나는로그인페이지야</div>
      <GoogleBtn setAuth={setAuth} Auth={Auth} />
    </div>
  );
};

export default Login;
