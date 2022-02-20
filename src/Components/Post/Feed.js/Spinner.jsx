import React from 'react'
import { Circles } from 'react-loader-spinner'

export default function Spinner({message}) {
  return (
    <div className='loader'>
        <Circles
            type='Circles'
            color= "pink"
            height={80}
            width={200}
            className="loader"
        />

        <p className='message'>{message}</p>
    </div>
  )
}
