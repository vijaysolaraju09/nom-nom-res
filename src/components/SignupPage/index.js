import './index.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState, useEffect } from "react";
import { provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../../context/AuthContext';

function SignupPage() {
  const [email, setRegisterEmail] = useState("");
  const [password, setRegisterPassword] = useState("");
  const auth = getAuth();
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
    // <div className=" d-flex flex-column justify-content-center">
      <div className="login-page h-100 d-flex flex-column align-items-center">
        <div className="shadow login-cont rounded-5 p-sm-5  d-flex flex-column align-items-center">
          <h2 className=" mb-2 ">Welcome User</h2>
          <p className=" text-secondary  mb-4 ">Please Register for free to get started.</p>
          
            <form className="form-container mx-sm-5 my-3">
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
                <button type="submit" onClick={register} className="sign-up-btn">
                  Signup
                </button>
              </div>
            </form>
            <div className='horizontal-line mb-3'>
              <hr />
              <span>OR</span>
            </div>
            <button className="login-with-google-btn " onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
          </div>
        </div>
      // </div>


  )
};

export default SignupPage;