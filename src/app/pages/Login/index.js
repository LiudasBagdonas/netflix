import './index.css';
import React from 'react';
import Button from '../../components/Button';
import { withRouter } from "react-router-dom";


class Login extends React.Component {
    constructor(loginState, setLoginState) {
        super();
        this.state = {
            password: "",
            username: "",
        };
    }

    onSubmit = (e) => {
        const { password, username } = this.state;
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
                console.log(data);
                localStorage.setItem("token", data.token);
                this.props.setLoginState(true)
                this.props.history.replace("/movies");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    handleChange = (e, field) => {
        this.setState({ [field]: e.target.value });
    };

    render() {

        return (
            <main className="login-main" >
            
                <div className="form-box">
                    <form className="login-form" onSubmit={this.onSubmit}>
                        <label>Username
                    <input name="username" type="text" placeholder="Username"
                                value={this.state.username}
                                onChange={(e) => this.handleChange(e, "username")} />
                        </label>
                        <label >Password
                    <input name="password" type="password" placeholder="Password"
                                value={this.state.password}
                                onChange={(e) => this.handleChange(e, "password")} />
                        </label>
                        <Button big type="submit">Sign In</Button>
                    </form>
                </div>
            </main>
        )
    }


}

export default withRouter(Login);