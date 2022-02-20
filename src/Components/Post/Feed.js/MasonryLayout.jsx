import React from 'react'
import Pin from './Pin';
export default function MasonryLayout({ pins }) {

  return (
    <div>
      {
        pins?.map((pin) => <Pin key={pin.id} pin={pin} className='pin' />)
      }
    </div>
  )
}
