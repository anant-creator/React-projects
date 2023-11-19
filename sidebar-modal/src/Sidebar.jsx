import React from 'react';
import { useGlobalContext } from './Context';
import logo from './logo.svg';
import {FaTimes} from 'react-icons/fa';
import {social, links} from './data'


export default function Sidebar() {
    const {isSidebarOpen, toggleSidebar} = useGlobalContext();
    return <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
            <div className="sidebar-header">
               <img src={logo} alt="logo" className='logo' />
               <button className='close-btn' onClick={() => toggleSidebar()}>
                <FaTimes/>
               </button>
            </div>
            <ul className="links">
                {links.map((link) => {
                    const {id, url, text, icon} = link;
                    return <li key={id}>
                        <a href={url}>
                            {icon}{text}
                        </a>
                    </li>
                })}
            </ul>
            <ul className="social-links">
                {social.map((link) => {
                    const {id, url, icon} = link;
                    return <li key={id}>
                        <a href={url}>
                            {icon}
                        </a>
                    </li>
                })}
            </ul>
        </aside>
}
