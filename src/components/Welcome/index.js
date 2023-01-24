import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
function Welcome() {
    return (
        <div className=' welcome'>
            <div className='d-flex justify-content-center  welcome-cont'>

                <div className='text-center shadow mt-5 rounded-3'>
                    <img src='./images/banner.png' className="welcome-img w-100 rounded-3" />
                    <div className='p-2 px-md-5 py-md-5'>
                        <h1 className=''>Welcome to NOM-<span className='text-danger'>NOM</span></h1>
                        <p className='d-inline-block mb-5'> Please Login to ExplorePlease Login to ExplorePlease Login to ExplorePlease Login to ExplorePlease Login to ExplorePlease Login to ExplorePlease Login to Explore....</p>

                        <Link className='btn rounded-5 mb-2 py-2 register-btn' to="/signup">Register for free</Link>
                        
                        <p className=''>Already have an account? <Link className='text-decoration-none sign-in-link' to="/login"> Sign in</Link></p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome