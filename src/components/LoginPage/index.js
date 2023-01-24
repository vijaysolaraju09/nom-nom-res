import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './index.css'
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../../context/AuthContext';

function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate()
  const { signIn } = UserAuth();

  const login = async (e) => {
    console.log("hi")
    e.preventDefault();
    try {
      await signIn(loginEmail, loginPassword)
      alert("Logged in Successfully")
      navigate("/home")
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {/* <div className=" d-flex flex-column justify-content-start justify-content-md-center"> */}
        <div className=" login-page d-flex flex-column align-items-center">
          <div className="shadow login-cont rounded-5 p-sm-5  d-flex flex-column align-items-center">
            <h2 className=" mb-2 ">Welcome Back</h2>
            <p className=" text-secondary  mb-4 ">Please sign in below to get started.</p>
            <form className="form-container mx-sm-5 mt-3" onSubmit={login}>
              <label htmlFor="email" className="">Email</label>
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                onChange={e => setLoginEmail(e.target.value)}
              />
              <label htmlFor="email" className="">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={e => setLoginPassword(e.target.value)}
              />
              <button type="submit" className="">
                Login
              </button>
            </form>
          </div>
        </div>
      {/* </div> */}
    </>
  );

};

export default LoginPage;