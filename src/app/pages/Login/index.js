import auth from '../../../auth';
import './index.css';
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import Button from '../../components/Button';
import { useHistory } from "react-router-dom";

function Login() {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        fetch("https://academy-video-api.herokuapp.com/auth/login ", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username, password: password }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw Error(res.status);
            })
            .then((data) => {
                dispatch(auth.actions.onLogin(data.token))
                history.replace("/movies");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <main className="login-main" >

            <div className="form-box">
                <form className="login-form" onSubmit={(e) => onSubmit(e)}>
                    <label>Username
                    <input name="username" type="text" placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label >Password
                    <input name="password" type="password" placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <Button big type="submit">Sign In</Button>
                </form>
            </div>
        </main>
    )
}

export default Login;