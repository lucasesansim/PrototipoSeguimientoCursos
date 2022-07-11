import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarData } from "./navbarData";
import './navbar.css';
import { IconContext } from "react-icons";
import { Image } from "react-bootstrap";
import { Avatar } from "@mui/material";
import redHeadImage from "../assets/pelirroja.jpg";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  const [sideBarActive, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');

  const showSidebar = () => setActive(!sideBarActive);
  return (
    <>
        <div className="navbar">
        </div>
        <nav className={sideBarActive ? 'nav-menu' : 'nav-menu inactive'}>
          <ul className='nav-menu-items'>
            <li className={sideBarActive ? 'nav-header' : 'nav-header inactive'}>
              <Link to='#' className='nav-header-text' onClick={showSidebar}>
                {sideBarActive ? 'Saas Kit' : 'Saas'}
              </Link>
            </li>
            <UserAvatar 
              user={{image: redHeadImage, name: 'Sierra Ferguson', email: 's.ferguson@gmail.com'}}
              usedIn="navigator"
            />
            {navbarData.map((item, index) => {
                return (
                  <li 
                    key={index}
                    className={sideBarActive ? `${item.className}` : `${item.className} inactive`}
                    style={{
                      marginBottom: '12px',
                      borderBottom: `${index === navbarData.length - 1 ? '1.5px solid rgb(204 204 204 / 40%)' : ''}`
                    }}
                  >
                    <Link 
                      to={item.path} 
                      onClick={() => setActiveTab(item.title)} 
                      className={activeTab === item.title ? 'nav-text-selected' : ''}
                    >
                      <div style={{ color: `${activeTab === item.title ? '#20a8d8': 'gray'}`, fontSize: '20px' }}>
                        {item.icon}
                      </div>
                      {sideBarActive && (
                        <span style={{color: `${activeTab === item.title ? '#20a8d8': 'gray'}`}}>
                          {item.title}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
    </>
  )
}

export default Navbar;