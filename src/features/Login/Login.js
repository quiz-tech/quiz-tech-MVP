import GoogleBtn from './GoogleBtn';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [Auth, setAuth] = useState({});
  const navigate = useNavigate();
  // useEffect(() => {
  //   fetch('http://backend.tecquiz.net:8000/users/google/login/finish/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       // clientId: Auth.clientId,
  //       // credential: Auth.credential,
  //       // select_by: Auth.select_by,
  //       // access_token: `${Auth.clientId}`,
  //       // code: `${Auth.credential}`,
  //       // id_token: `${Auth.select_by}`,
  //       access_token: Auth.credential,
  //       // code: Auth.clientId,
  //       // id_token: Auth.select_by,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       // localStorage.setItem('access_token', data);
  //       // console.log(localStorage.getItem('access_token'));
  //     });
  //   // localStorage.getItem('access_token')
  //   //   ? navigate('/dashboard')
  //   //   : navigate('/login');

  //   // .then(res => {
  //   //   if (res.access_token) {
  //   //     sendToken(res.access_token);
  //   //   } else {
  //   //     alert('다시 시도해주세요!');
  //   //   }
  //   // }
  //   console.log(Auth.credential);
  // }, [Auth]);

  // ?code=${Auth.credential}

  useEffect(() => {
    fetch(`http://backend.tecquiz.net:8000/users/login/`, {
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded;',
        Authorization: Auth.credential,
      },
      // body: JSON.stringify({
      // clientId: Auth.clientId,
      // credential: Auth.credential,
      // select_by: Auth.select_by,
      // access_token: `${Auth.clientId}`,
      // code: `${Auth.credential}`,
      // id_token: `${Auth.select_by}`,
      // access_token: Auth.credential,
      // code: Auth.clientId,
      // id_token: Auth.select_by,
    })
      // .then(res => {
      //   if (res.status === 200 || res.status === 201) {
      //     return navigate('/');
      //   } else {
      //     console.log('다시 로그인을 진행해주세요.');
      //   }
      // })
      // .then(data => data);

      .then(res => res)
      .then(data => {
        localStorage.setItem('access-token', data);
        localStorage.getItem('access-token')
          ? navigate('/')
          : alert('다시 로그인을 진행해주세요.');
      });
  }, [Auth, navigate]);

  // console.log(Auth);

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
