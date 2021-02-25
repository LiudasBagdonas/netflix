import { useState, useEffect } from "react";
import Context from "./context";
import { useHistory } from "react-router-dom";


function Provider({children}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginState, setLoginState] = useState(localStorage.getItem("token") ? true : false)
    const [history, setHistory] = useState();

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
                console.log(data);
                localStorage.setItem("token", data.token);
                setLoginState(true)
                history.replace("/movies");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = () => {
        setUsername(document.getElementById('username-input').value);
        setPassword(document.getElementById('password-input').value);
    };



    return (
        <Context.Provider value={{username, password, loginState, setLoginState, onSubmit, handleChange, setHistory}}>
            {children}
        </Context.Provider>
    );
}

export default Provider;