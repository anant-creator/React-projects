import React, { useRef, useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {links, social} from './data';
import logo from './logo.svg';

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleNavbar = () => {
    setShowLinks(!showLinks);
  }

  const linkStyles = {
    height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px',
  }
  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} className='logo' alt="logo" />
                <button type="button" className='nav-toggler' onClick={() => toggleNavbar()}>
                    <FaBars/>
                </button>
            </div>
            <div className="links-container" style={linkStyles} ref={linksContainerRef}>
                <ul className="links" ref={linksRef}>
                    {links.map((link) => {
                        const {id, text, url} = link;
                        return <li key={id}><a href={url}>{text}</a></li>
                    })}
                </ul>
            </div>
            {/* social links */}
            <ul className="social-icons">
              {
                social.map((socialIcon) => {
                  const {id, icon, url} = socialIcon;
                  return <li key={id}><a href={url}>{icon}</a></li>
                })
              }
            </ul>
        </div>
    </nav>
  )
}
 