import React from 'react'
import "./Topbar.css"
import Alohalogo from "../../assets/Aloha.png"

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='left-section'>
            <img src={Alohalogo} alt="logo" className='logo' />
            <ul className='topbar-menu'>
                <li>Home</li>
                <li>Surfing</li>
                <li>Hula</li>
                <li>Vulcano</li>
            </ul>
        </div>
        <button className='nav-button'>Book a trip</button>

    </div>
  )
}

export default Topbar