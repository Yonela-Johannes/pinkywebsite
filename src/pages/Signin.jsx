import React from 'react';
import './styles.css'
import SignIn from '../Components/Auth/SignIn';
import banner from '../img/safety.png'
const Signin = () => {
  return (
    <div className='main'>
      <h2 className='head'>Join us</h2>
        <SignIn />
        <div className='bannerContainer'>
          <img src={banner} className='banner' alt='banner' />
        </div>
    </div>
  )
};

export default Signin
