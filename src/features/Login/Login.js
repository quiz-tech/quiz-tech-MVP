import GoogleBtn from './GoogleBtn';
import { useState, useEffect } from 'react';
const Login = () => {
  const [Auth, setAuth] = useState({});

  useEffect(() => {
    fetch('http://backend.tecquiz.net:8000/users/google/login/callback/', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify({
        clientId: Auth.clientId,
        credential: Auth.credential,
        select_by: Auth.select_by,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // localStorage.setItem('access_token', data);
        // console.log(localStorage.getItem('access_token'));
      });
    // localStorage.getItem('access_token')
    //   ? navigate('/dashboard')
    //   : navigate('/login');

    // .then(res => {
    //   if (res.access_token) {
    //     sendToken(res.access_token);
    //   } else {
    //     alert('다시 시도해주세요!');
    //   }
    // }
    console.log(Auth.credential);
  }, [Auth]);

  console.log(Auth);

  return (
    <div>
      <div>안녕나는로그인페이지야</div>
      <GoogleBtn setAuth={setAuth} Auth={Auth} />
      <a
        href="http://backend.tecquiz.net:8000/users/google/login/"
        target="_blank"
        rel="noreferrer"
      >
        구글 로그인
      </a>
    </div>
  );
};

export default Login;
