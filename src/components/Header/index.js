import React from "react";
import "./index.css";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className="header container-fluid">
        
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link className="nav-brands navbar-brand" to="/"><img className='nav-logos mb-1' src="./images/get-app-icon.png" alt="logo" />Get the App</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Investor Relations</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/restaurants'>Add restaurant</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Log in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;