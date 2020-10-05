import React, { useContext } from 'react';
import { UserContext } from '../../App';
import logos from '../../logos/header-logo.png';

import './Header.css';

const Header = () => {
  const [loggesinUser, setLoggedInUser] = useContext(UserContext);
    return (
    <div className="container">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <img style={{height:'30px'}} src={logos} alt=""/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <a className="nav-link" href="/">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Donation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Events</a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Blog</a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Register</a>
            </li>
            <li className="nav-item">
              <a style={{backgroundColor:'skyblue',color:'white'}} className="nav-link" href="/">{loggesinUser.name}</a>
            </li>

            
          </ul>
        </div>
      </nav>
         

          
      </div>
    );
};

export default Header;