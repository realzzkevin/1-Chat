import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from './mutation';
//import axios from 'axios';

//TO-DO Define projectID here

const signUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  //const [error, setError] = useState('');
  const [ addUser, { error , data }] = useMutation(signUpPage)

  const handleSubmit = async (e) => {
    e.preventDefault();

    //const authObject = { 'Project-ID': 1, 'User-Name': username, 'User-Secret': password };
/*
    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }*/
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">1-Chat</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="eamil" value={email} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default signUpPage;