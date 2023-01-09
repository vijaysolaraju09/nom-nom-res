import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
function Restaurants() {
  const {user} = UserAuth()
    const auth = getAuth()
    const navigate= useNavigate()
    const logOut = async () => {
      await signOut(auth);
      localStorage.setItem("isAuthenticated", "false")
      navigate('/')
    };
  return (
    <div className='m-5 p-5'>
      <h1>Mail ID: {user.email}</h1>
      <button onClick={logOut} >signOut</button>
      </div>
    
  )
}

export default Restaurants