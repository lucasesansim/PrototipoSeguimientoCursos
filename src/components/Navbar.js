import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarData } from "./navbarData";
import './navbar.css';
import { IconContext } from "react-icons";

const Navbar = () => {
  const [displaySidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!displaySidebar);
  return (
    <>
      <IconContext.Provider value={{ color: 'gray'}}>
        <div className="navbar">
          <Link to='#' className="menu-bars">
            <div className="nav-header-text" role="presentation" onClick={showSidebar}>
              Saas 
            </div>
          </Link>
        </div>
        <nav className={displaySidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                Saas Kit
              </Link>
            </li>
            {navbarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;