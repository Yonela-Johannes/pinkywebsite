import React from 'react'
import safetyImage from '../img/safety.png'
function Adsboard() {
  return (
      <div className='adsContainer'>
        <div className="safetyImage">
            <img src={safetyImage} alt='add' />
        </div>
        <div className='safetyImage'>
            <p>bepleasuredbypinky_za</p>
        </div>
      </div>
  )
}

export default Adsboard