import './App.css';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
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
    <div className="App">
      <div className="google_container">
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
            <button className='g_signIn_btn' onClick={handleGoogleSignIn}>Google Sign In</button>
        }

      </div>
    </div>
  );
}

export default App;
