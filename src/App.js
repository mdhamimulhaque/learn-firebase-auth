import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './utilities/utilities';
// import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import app from './firebase/firebase.init';
// import { GoogleAuthProvider } from "firebase/auth";
// import { useState } from 'react';
// import EmailPasswordAuth from "./components/EmailPasswordAuth/EmailPasswordAuth";

// const auth = getAuth(app);

function App() {
  // const [user, setUser] = useState({})
  // const googleProvider = new GoogleAuthProvider();
  // const githubProvider = new GithubAuthProvider();

  // // ---> google sign In
  // const handleGoogleSignIn = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then(res => {
  //       const user = res.user;
  //       setUser(user)
  //     }).catch(err => {
  //       console.error(err)
  //     })
  // }

  // // ---> sign out
  // const handleSignOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser({})
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }

  // // ---> github sign in
  // const handleGithubSignIn = () => {
  //   signInWithPopup(auth, githubProvider)
  //     .then(res => {
  //       const user = res.user;
  //       setUser(user)
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }


  // ===========================================
  // ---> router use

  return (
    <div className="App">


      {/* <section className="google_container">
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
      </section> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
