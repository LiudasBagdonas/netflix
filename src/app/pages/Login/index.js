import './index.css';
import React, { useContext } from 'react';
import Button from '../../components/Button';
import { useHistory } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";


function Login() {

    const {username, password, loginState, onSubmit, handleChange, setHistory} = useContext(AuthContext.context);
    setHistory(useHistory())

    return (
        <main className="login-main" >

            <div className="form-box">
                <form className="login-form" onSubmit={onSubmit}>
                    <label>Username
                    <input id="username-input" name="username" type="text" placeholder="Username"
                            value={username}
                            onChange={(e) => handleChange(e, "username")}
                        />
                    </label>
                    <label >Password
                    <input id="password-input" name="password" type="password" placeholder="Password"
                            value={password}
                            onChange={(e) => handleChange(e, "password")}
                        />
                    </label>
                    <Button big type="submit">Sign In</Button>
                </form>
            </div>
        </main>
    )



}

export default Login;