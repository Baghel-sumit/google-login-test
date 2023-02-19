import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

const Login = () => {
    const [details, setDetails] = useState('');

    const tokenDecoder = (token)=>{
        const data = jwtDecode(token);
        console.log("the data", data)
        setDetails(JSON.stringify(data));
    }
  return (
    <div>
      <GoogleLogin
        onSuccess={(response) => {
            tokenDecoder(response.credential);
        }}
        onError={()=>{
            console.log('login failed');
        }}
        useOneTap
      />

      <div>
        {details}
      </div>
    </div>
  )
}

export default Login