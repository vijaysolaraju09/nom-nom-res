import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import './index.css'
function Profile() {
    const { user } = UserAuth()
    const auth = getAuth()
    const navigate = useNavigate()
    const logOut = async () => {
        await signOut(auth);
        localStorage.setItem("isAuthenticated", "false")
        navigate('/')
    };
    return (
        <>
            <div className=' profile-container px-3'>

                    <div className=" d-md-flex shadow-lg border border-2 rounded-3">
                        <img src="./images/user.png" className="card-img-top rounded-2" alt="..." />
                        <div className=" d-flex flex-column justify-content-center align-items-start  p-5 ">
                            <h5 className=" d-flex">User: <span className='user'>{user.displayName?user.displayName:"Admin"}</span></h5>
                            <h5 className=" d-flex">Email: <span>{user.email}</span></h5>
                            <a href="#" className="btn btn-secondary w-100" onClick={logOut}>Logout</a>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Profile