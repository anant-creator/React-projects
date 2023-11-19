import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './Context';


export default function Modal() {
    const {isModalOpen, toggleModal} = useGlobalContext();
  return <div>
      <div className={isModalOpen?'modal-overlay show-modal' : 'modal-overlay'}>
        <div className="modal-container">
            <h3>modal-content</h3>
            <button type="button" onClick={toggleModal} className='close-modal-btn'>
                <FaTimes/>
            </button>
        </div>
        </div>
    </div>
}
