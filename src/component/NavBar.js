import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from '../images/vhpl-logo-only.png';
import logoname from '../images/vhpl-logo-text.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            {/* CodeBucks */}
            <img className="nav-logo" src={logo} alt="Logo" />
            <img className="nav-logo-text" src={logoname} alt="Logo" />
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                PRODUCTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                CONTACT US 
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} />
          
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
