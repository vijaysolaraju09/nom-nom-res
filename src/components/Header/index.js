import React from "react";
import "./index.css";


const Navbar = () => {
  return (
    <>
      <header className="header container-fluid">
        
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a className="nav-brands navbar-brand" href="/"><img className='nav-logos mb-1' src="./images/get-app-icon.png" alt="logo" />Get the App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Investor Relations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Add restaurant</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Log in</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;