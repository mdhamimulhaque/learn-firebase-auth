import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.init';


const auth = getAuth(app);

const Github = () => {
    const [user, setUser] = useState({})
    const githubProvider = new GithubAuthProvider();


    // ---> github sign in
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(res => {
                const user = res.user;
                setUser(user)
            })
            .catch(err => {
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
        <section className="github_wrapper">
            <h2>Github Auth</h2>

            {
                user.uid &&
                <div className="info_wrapper">
                    <img src={user?.photoURL} alt="" />
                    <h2>Welcome {user?.displayName}</h2>
                    <p>Email : {user?.email}</p>
                </div>
            }

            {
                user.uid ?
                    <button className='git_signOut_btn' onClick={handleSignOut}>Sign Out</button>
                    :
                    <>
                        <button className='git_signIn_btn' onClick={handleGithubSignIn}>Github Sign In</button>
                    </>
            }
        </section>
    );
};

export default Github;