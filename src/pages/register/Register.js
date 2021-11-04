import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from '../../redux/apiCalls';
import './register.scss'

const Register = () => {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);

    const handleClick = e => {
        e.preventDefault();
        registerUser(dispatch, { name, lastname, username, email, password });
    };

    return (
        <div className="register">
            <div className="wrapper">
                <h1>CREATE AN ACCOUNT</h1>
                <form>
                    <input type="text" placeholder="name" onChange={e => setName(e.target.value)} />
                    <input type="text" placeholder="lastname" onChange={e => setLastname(e.target.value)} />
                    <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
                    <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                    <input type="password" placeholder="confirm password" />
                    <span>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </span>
                    <button onClick={handleClick} disabled={isFetching}>CREATE</button>
                    {error && <span>Something went wrong...</span>}
                </form>
            </div>
        </div>
    )
}

export default Register
