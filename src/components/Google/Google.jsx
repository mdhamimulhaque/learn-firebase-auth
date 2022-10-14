import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.init';



const auth = getAuth(app);

const Google = () => {
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();


    // ---> google sign In
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const user = res.user;
                setUser(user)
            }).catch(err => {
                console.error(err)
            })
    }

    // ---> sign out
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(err => {
                console.error(err)
            })
    }


    return (
        <section className="google_container">
            <h2>Google Auth</h2>

            {
                user.email &&
                <div className="info_wrapper">
                    <img src={user?.photoURL} alt="" />
                    <h2>Welcome {user?.displayName}</h2>
                    <p>Email : {user?.email}</p>
                </div>
            }

            {
                user.email ?
                    <button className='g_signOut_btn' onClick={handleSignOut}>Sign Out</button>
                    :
                    <>
                        <button className='g_signIn_btn' onClick={handleGoogleSignIn}>Google Sign In</button>
                    </>
            }

        </section>
    );
};

export default Google;