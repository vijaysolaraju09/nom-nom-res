import React from "react";
import "./index.css";
import {Link} from 'react-router-dom'
import { UserAuth } from "../../context/AuthContext";
import {useLocation} from "react-router-dom";

const Navbar = () => {
  const { user } = UserAuth();
  const location = useLocation()
  
  const headerBackground = location.pathname === '/home' ? 'bg-transaparent' : 'text-bg-dark';
  return (
    <>
      <header className={`header container-fluid ${headerBackground}`}>
        
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <Link className="nav-brands navbar-brand p-0" to="/"><img className='nav-logos mb-1' src="./images/get-app.png" alt="logo" />Get the App</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" href="#">Investor Relations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/restaurants'>Add restaurant</Link>
              </li>
              { user==null && <li className="nav-item">
                <Link className="nav-link" to="/login">Log in</Link>
              </li>}
              { user==null && <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>}
              { user!=null && <li className="nav-item">
                <Link className="nav-link" to='/items'>Items</Link>
              </li>}
              { user!=null && <li className="nav-item">
                <Link className="nav-link" to='/profile'>Profile</Link>
              </li>}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;