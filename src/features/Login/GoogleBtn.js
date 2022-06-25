import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleBtn = () => {
  const navigate = useNavigate();
  const [Auth, setAuth] = useState('');
  const clientId =
    '1015759403917-3nfg6lne24msd1t9v09n6eov9nk4beo7.apps.googleusercontent.com';

  useEffect(() => {
    if (Auth !== '') {
      fetch(' - 백엔드 서버 ', {
        method: 'POST',
        headers: {
          Authorization: Auth,
        },
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('access_token', data);
        });
      localStorage.getItem('access_token')
        ? navigate('/dashboard')
        : navigate('/login');

      // .then(res => {
      //   if (res.access_token) {
      //     sendToken(res.access_token);
      //   } else {
      //     alert('다시 시도해주세요!');
      //   }
      // }
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          setAuth(credentialResponse.credential);
          console.log(Auth);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleBtn;
