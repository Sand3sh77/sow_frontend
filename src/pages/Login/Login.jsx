import React, { useState } from 'react';
import "./login.css";
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div id='login-container'>
            <div id="login-content">
                <h1>Log in</h1>
                <div id='login-input-container'>
                    <div className='label-input-container'>
                        <label htmlFor='email'>Enter your email address</label>
                        <input id="email" placeholder='Email address' />
                    </div>
                    <div className='label-input-container'>
                        <label htmlFor='password'>Enter your password</label>
                        <div id='password-container'>
                            <input id="password" placeholder='Password' type={showPassword ? 'text' : 'password'} />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeOff strokeWidth={1} /> : <Eye strokeWidth={1} />}
                            </span>
                        </div>
                    </div>
                </div>
                <button id='login-button'>Log in</button>
                <div id='login-footer'>
                    <a>Register</a>
                    <a>Forgotten Password?</a>
                </div>
            </div>
        </div>
    );
}
