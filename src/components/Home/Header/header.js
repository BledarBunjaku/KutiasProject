import React from 'react'
import './header.css'
import HeaderLogo from '../../Images/header-logo.png'
import UserLogo from '../../Images/user-logo.png'
import { Link } from 'react-router-dom'

const Header = ({ userState }) => (

    <div className='header'>
        <div className='header-logo'>
            <Link to='/'><img src={HeaderLogo} alt='img'></img></Link>
        </div>
        <div className='user-logo'>
            <div>
                <img src={UserLogo} alt='img' />
            </div>
            <p>{userState[0].name}</p>
        </div>
    </div>
)
export default Header