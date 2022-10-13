import './App.css';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        const user = res.user;
        console.log(user)
      }).catch(err => {
        console.error(err)
      })
  }

  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>

    </div>
  );
}

export default App;
