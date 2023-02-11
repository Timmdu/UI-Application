
import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import dataRequestor from '../dataRequestor';

function LoginPage() {

    const [user, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = useCallback(() => {
        if (user && password) {
            dataRequestor('api/user/login', 'POST', {
                user: user,
                password: password
            }).then(function () {
                navigate('/admin');
            })
        } else {
            alert('please input user and password');
        }
    });

    return <div >
        <label htmlFor="fname">Username: </label>
        <input type="text" onChange={(e) => { setName(e.target.value) }} /><br /><br />
        <label htmlFor="lname">Password: </label>
        <input type="password" onChange={(e) => { setPassword(e.target.value) }} /><br /><br />
        <button onClick={handleLogin} >登录</button>
    </div>;

}

export default LoginPage;
