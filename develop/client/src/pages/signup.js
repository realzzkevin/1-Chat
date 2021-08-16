import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../utils/mutation';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    //const [error, setError] = useState('');
    const [addUser, { error, data }] = useMutation(SIGN_UP);


    const handleSubmit = async (e) => {
        e.preventDefault();

        //const authObject = { 'Project-ID': 1, 'User-Name': username, 'User-Secret': password };
        try {

            const { data } = await addUser({
                variables: {
                    username: username,
                    email: email,
                    password: password,
                }
            });
            Auth.login(data.signUp.token);
            console.log(data);
        } catch (err) {
            console.error(err);
        }

    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">1-Chat</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>SignUp</span>
                        </button>
                    </div>
                </form>

                <Link to='/'>Login</Link>
            </div>
        </div>

    );
};

export default SignUpPage;