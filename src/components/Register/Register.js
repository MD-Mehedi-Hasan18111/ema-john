import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <h2>Create Account</h2>
            <form onSubmit="">
                <input type="email" placeholder="Your Email..." />
                <br /><br />
                <input type="password" placeholder="Password..." />
                <br /><br />
                <input type="password" placeholder="Re-type Password..." />
                <br /><br />
                <button className="addBtn">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Sign In</Link></p>
            <div>------------------or-------------------</div><br />
            <button className="addBtn">Sign In With Google <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
        </div>
    );
};

export default Register;