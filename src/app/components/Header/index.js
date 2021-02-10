import './index.css';
import React from 'react';
import { connect } from 'react-redux';

import navimg from '../../imgs/navigationimg.png';
import Button from '../Button';
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    NavLink
} from "react-router-dom";

function Header({token, onLogout}) {

    return (
        <header>
            <nav>
                <NavLink to="/">
                    <div className="nav-home-img-box">
                        <img src={navimg} className="nav-home-img" alt=""></img>
                    </div>
                </NavLink>
                {token ?
                    <NavLink to="/">
                        <Button
                            logout={onLogout}
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

function mapState({ auth }) {
    return {
        token: auth.token
    }
}

function  mapDispatchToProps(dispatch) {
    return {
      onLogout: () => {
        dispatch({ type: "LOGOUT", payload: null });
      },
    };
  }

export default connect(mapState, mapDispatchToProps)(Header);