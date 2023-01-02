import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { links, social } from './data';
import { FaBars, FaTwitter } from 'react-icons/fa';
// import logo from './Image/logo.svg';
// console.log(logo);

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks])

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src='./Image/logo.svg' className='logo' alt="image" />
            <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
              <FaBars />
            </button>
          </div>

          <div className='links-container' ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
            </ul>
          </div>

          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar