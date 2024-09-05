import React from 'react'
import "./Header.css"
import HeaderImage from "../../assets/Image.png"
import Topbar from '../Topbar/Topbar'

const Header = () => {
  return (
    <div className='header'>
        <img src={HeaderImage} alt="" />
        <Topbar/>
        <p>Welcome to Hawaii</p>
    </div>
  )
}

export default Header