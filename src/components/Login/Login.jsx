import React from 'react';

const Login = () => {
    return (
        <section className="email_pass_container">
            <div className="login_form_wrapper">
                <h2>Login Form</h2>
                <form>
                    <label>Email</label><br />
                    <input type="email" placeholder='Inter Your Email' name="email" /> <br /><br />
                    <label>Password:</label><br />
                    <input type="password" placeholder='Your Password' name="password" /> <br /><br />
                    <button className='login_btn' type='submit'>Log In</button>
                </form>
            </div>
        </section>
    );
};

export default Login;