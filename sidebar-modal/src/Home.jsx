import React from 'react'
import { useGlobalContext } from './Context';
import {FaBars} from 'react-icons/fa';

export default function Home() {
    const {toggleModal, toggleSidebar, isSidebarOpen, isModalOpen } = useGlobalContext();
    console.log(isSidebarOpen, isModalOpen );
  return (
    <main>
        <button onClick={toggleSidebar} className='sidebar-toggle'>
            <FaBars/>
        </button>
        <button type="button" onClick={toggleModal} className='btn'>Open Modal</button>
    </main>
  )
}
