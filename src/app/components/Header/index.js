import './index.css';
import React, { useContext } from 'react';
import AuthContext from "../../contexts/AuthContext";
import navimg from '../../imgs/navigationimg.png';
import Button from '../Button';
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    NavLink
} from "react-router-dom";

function Header() {

    const { loginState, setLoginState } = useContext(AuthContext.context);


    return (
        <header>
            <nav>
                <NavLink to="/">
                    <div className="nav-home-img-box">
                        <img src={navimg} className="nav-home-img" alt=""></img>
                    </div>
                </NavLink>
                {loginState ?
                    <NavLink to="/">
                        <Button
                            logout={setLoginState}
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

export default Header;