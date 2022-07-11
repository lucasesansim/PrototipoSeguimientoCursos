import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarData } from "./navbarData";
import './navbar.css';
import { IconContext } from "react-icons";

const Navbar = () => {
  const [sideBarActive, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');

  console.log(activeTab)
  const showSidebar = () => setActive(!sideBarActive);
  return (
    <>
      {/* <IconContext.Provider value={{ color: 'gray', size: '20px'}}> */}
        <div className="navbar">
          <Link to='#' className="menu-bars">
          </Link>
        </div>
        <nav className={sideBarActive ? 'nav-menu' : 'nav-menu inactive'}>
          <ul className='nav-menu-items'>
            <li className={sideBarActive ? 'nav-header' : 'nav-header inactive'}>
              <Link to='#' className='nav-header-text' onClick={showSidebar}>
                {sideBarActive ? 'Saas Kit' : 'Saas'}
              </Link>
            </li>
            {navbarData.map((item, index) => {
                return (
                  <li key={index} className={sideBarActive ? `${item.className}` : `${item.className} inactive`}>
                    <Link 
                      to={item.path} 
                      onClick={() => setActiveTab(item.title)} 
                      className={activeTab === item.title ? 'nav-text-selected' : ''}
                    >
                      <div style={{color: `${activeTab === item.title ? '#20a8d8': 'gray'}`, fontSize: '20px'}}>
                        {item.icon}
                      </div>
                      {sideBarActive && (
                        <span style={{color: `${activeTab === item.title ? '#20a8d8': 'gray'}`}}>{item.title}</span>
                      )}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
    </>
  )
}

export default Navbar;