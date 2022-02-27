import React from 'react';
import Navigation from './Navigation';
import avatar from '../../img/avatar.png'
import Logo from '../../img/logopinky.png'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = ( props ) => {
  const { countCartItems, user, admin } = props;
  const LogoImage = {
    width: 40,
    height: 50,
    borderRadius: 25,
    padding: 5,
}
  return (
         <nav className='navBar'>
              <div className='grow'>
                <Link to='/' className="name">
                  <img src={Logo} style={LogoImage} alt="logo" />
                  Be Pleasured By Pinky
                </Link>
                { user ? (
                  <ul className='list'>
                    <li className='listItem'>
                      <img className='avatar' src={user.image} alt='' />
                    </li>
                    <li className='listItem username'>{user?.userName}</li>
                    <li className='listItem jobTitle'>{user.jobTitle}</li>
                  </ul>
                ) : (
                  <Link to='/signin'>
                    <ul className='list'>
                      <li className='listItem'>
                        <img className='avatar' src={avatar} alt='user avatar' />
                      </li>
                      <li className='listItem username'>Jane Doe</li>
                      <li className='listItem login'>log in</li>
                    </ul>
                  </Link>
                )}

              <Navigation countCartItems={countCartItems} admin={admin} user={user} />
              </div>
        </nav>
  )
};

export default Navbar;