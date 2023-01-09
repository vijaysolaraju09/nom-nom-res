import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
function Welcome() {
    return (
        <div className='wel-come'>
            <div className='form-container'>

                <h1>Welcome</h1>
                <p>Alreeady have an account?<Link to="/login">Login</Link></p>
                <p>Create a new account<Link to="/signup">Signup</Link></p>
            </div>
        </div>
    )
}

export default Welcome