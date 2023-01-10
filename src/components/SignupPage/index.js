import './index.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState, useEffect } from "react";
import { provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../../context/AuthContext';

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setRegisterEmail] = useState("");
  const [password, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const auth = getAuth();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { createUser } = UserAuth();

  //   useEffect(() => {
  //     onAuthStateChanged(auth, (currentUser) => {
  //       setUser(currentUser);
  //     })
  //   }, [])

  const register = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      console.log(user);
      alert("Registered successfully")
      navigate("/login")
    } catch (error) {
      console.log(error.message);
    }
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem('isAuthenticated', 'true')
        alert("Logged in Successfully")
        navigate("/home")
      })
      .catch((error) => {
      })
  }

  return (
    <div className="form-container">
      <form >
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter email ID"
          className=""
          onChange={(event) => { setRegisterEmail(event.target.value) }}
        />
        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          className=""
          onChange={(event) => { setRegisterPassword(event.target.value) }}
        />
        <div className="">
          <button type="submit" onClick={register}>
            Signup
          </button>
        </div>
      </form>
      <button className="login-with-google-btn " onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>

    </div>


  )
};

export default SignupPage;