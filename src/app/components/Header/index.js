import './index.css';
import React from 'react';
import {useState} from 'react';

import { withRouter } from "react-router-dom";
import navimg from '../../imgs/navigationimg.png';
import Button from '../Button';
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    NavLink
} from "react-router-dom";

function Header(loginState, setLoginState) {

console.log(loginState)
        return (
            <header>
                <nav>
                    <NavLink to="/">
                        <div className="nav-home-img-box">
                            <img src={navimg} className="nav-home-img" alt=""></img>
                        </div>
                    </NavLink>
                    {loginState.loginState ?
                        <NavLink to="/">
                            <Button 
                            logout={loginState.setLoginState} 
                            big>Log Out</Button>
                        </NavLink >
                        :
                        <NavLink to="/login">
                            <Button big>Sign In</Button>
                        </NavLink>
                    }
                </nav>
            </header>
        )


}

export default withRouter(Header);