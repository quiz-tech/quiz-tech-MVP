import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleBtn = ({ setAuth, Auth }) => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const successLogin = credentialResponse => {
    setAuth(credentialResponse);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={successLogin}
        y
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleBtn;
