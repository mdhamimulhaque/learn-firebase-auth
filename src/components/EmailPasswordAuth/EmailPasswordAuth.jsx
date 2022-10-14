import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.init';

const auth = getAuth(app)

const EmailPasswordAuth = () => {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleRegistrationForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess(false)
        // ---> validation
        if (!/.{8,16}/.test(password)) {
            setPasswordError("Please should be 8-16 characters.")
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            setPasswordError("Please should be a Small latter.");
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError("Please should be a Capital latter.");
            return;
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setPasswordError("Please should be a  Digit.");
            return;
        }
        if (!/(?=.*\W)/.test(password)) {
            setPasswordError("Please should be a Spacial Character.");
            return;
        }
        setPasswordError('')


        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                const user = res.user;
                setSuccess(true);
                form.reset();
            })
            .catch(err => {
                console.error(err);
                setPasswordError(err.message)
            })
    }


    return (
        <section className="email_pass_container">
            <div className="login_form_wrapper">
                <h2>Registration Form</h2>
                <form onSubmit={handleRegistrationForm}>
                    <label>Email</label><br />
                    <input type="email" placeholder='Inter Your Email' name="email" /> <br /><br />
                    <label>Password:</label><br />
                    <input type="password" placeholder='Your Password' name="password" /> <br /><br />
                    <p className='error_msg'><small>{passwordError}</small></p>
                    {success && <p className='success_msg'><small>Registration success !!</small></p>}
                    <button type='submit'>Register</button>
                </form>
            </div>
        </section>
    );
};

export default EmailPasswordAuth;