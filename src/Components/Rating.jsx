import React from 'react'
import {v4 as uuidv4} from 'uuid';
import { GiHalfHeart } from "react-icons/gi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import './rating.css'
export default function Rating({value, text }) {
  return (
    <div className='rating'>
        {[1,2,3,4,5].map((rate) => (
            <span key={uuidv4()}>
                <div className='heart-icon'>
                {value + 1 === rate + 0.5 ? 
                        <GiHalfHeart className='ratingsIcon'  /> : value >= rate ?
                            <BsFillSuitHeartFill className='ratingsIcon' /> :
                            <BsFillSuitHeartFill className='ratingsIcon' />      
                
            } 
                </div>
            </span>
        ))}
        <span className='text'>{text && text}</span>
    </div>
  )
}
