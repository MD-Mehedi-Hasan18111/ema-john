import React from 'react';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../context/useAuth';

const Login = () => {

    const { signInWithGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div className="login-form">
            <h2>Log In</h2>
            <form onSubmit="">
                <input type="email" placeholder="Your Email..." />
                <br /><br />
                <input type="password" placeholder="Password..." />
                <br /><br />
                <button className="addBtn">Log In</button>
            </form>
            <p>Don't have an account? <Link to="/register">Create Account</Link></p>
            <div>------------------or-------------------</div><br />
            <button onClick={handleGoogleLogin} className="addBtn">Sign In With Google <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
        </div>
    );
};

export default Login;