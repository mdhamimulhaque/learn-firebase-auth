import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const Login = () => {

    const [success, setSuccess] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess(false);

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                const user = res.user;
                console.log(user)
                setSuccess(true)
            })
            .catch(err => {
                console.error('error', err)
            })
    }


    return (
        <section className="email_pass_container">
            <div className="login_form_wrapper">
                <h2>Login Form</h2>
                <form onSubmit={handleLoginSubmit}>
                    <label>Email</label><br />
                    <input type="email" placeholder='Inter Your Email' name="email" /> <br /><br />
                    <label>Password:</label><br />
                    <input type="password" placeholder='Your Password' name="password" /> <br /><br />
                    <button className='login_btn' type='submit'>Log In</button>
                </form>
                {
                    success && <p className='success_msg'><small>Successfully LogIn</small></p>
                }
                <strong>Forget password ? <Link>reset password</Link></strong>
                <p><small>New to this website? please <Link to='/register'>Registration</Link></small></p>
            </div>
        </section>
    );
};

export default Login;