import React from 'react'
import "./styles.css";

function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-static">
        <div className="container">
          <a className="navbar-brand" href="#">
          <img src="./img/logo.png" alt="..." height="60"/>
          </a>
            <ul className="navbar-nav ms-auto">
    
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
        </div>
      </nav>
      <br/>
        </>
    )
}

export default Navbar
