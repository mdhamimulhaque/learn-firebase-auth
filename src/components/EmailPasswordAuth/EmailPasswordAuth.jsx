import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        const name = form.name.value;
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
                emailVerify();
                handleUserName(name);
            })
            .catch(err => {
                console.error(err);
                setPasswordError(err.message)
            })
    }

    // ---> email verify
    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("Please verify your email address")
            })
    }

    // ---> handle user name
    const handleUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                console.log("display name update")
            })
            .catch(err => {
                console.error(err)
            })
    }


    return (
        <section className="email_pass_container">
            <div className="login_form_wrapper">
                <h2>Registration Form</h2>
                <form onSubmit={handleRegistrationForm}>
                    <label>Name</label><br />
                    <input type="text" placeholder='Your Name' name="name" /> <br /><br />
                    <label>Email</label><br />
                    <input type="email" placeholder='Input Your Email' name="email" /> <br /><br />
                    <label>Password:</label><br />
                    <input type="password" placeholder='Your Password' name="password" /> <br /><br />
                    <p className='error_msg'><small>{passwordError}</small></p>
                    {success && <p className='success_msg'><small>Registration done successfully !!</small></p>}
                    <button className='reg_btn' type='submit'>Register</button>
                </form>
                <p><small>Already have an account? please <Link to='/login'>Log in</Link></small></p>
            </div>
        </section>
    );
};

export default EmailPasswordAuth;