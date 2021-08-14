import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutation';


//TO-DO Define projectID here

const Login = () => {
  const [ email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ login, { error } ] = useMutation(LOGIN_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const { data } = await login({
            variables: {
                email: email,
                password: password,
            }
        });
        console.log(data);
        Auth.login(data.login.token);
        
    } catch (err) {
        console.error(err);
    };

  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">1-Chat</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Login;