import React, { useEffect, useState } from 'react'
import { feedbackQuery } from '../utils/data';
import { client } from '../client';
import Carousel from './Swiper/Swiper';
// import Slider from './Slider'
// import './Slider.css';
export default function Responses() {
  const [response, setResponse ] = useState([])

  useEffect(() => {
    client.fetch(feedbackQuery)
    .then((data) => {
      setResponse(data);
      // console.log(data)
    })
  }, []);

  return (
    <div className='main'>
                  <Carousel />
      <div className='swiperContainer'>
            <div className='container'>
              <div className="containerSlider">
                <div>
                  {/* <div className="responseName">{res?.name}</div> */}
                  {/* <div className="responseMessage">{res?.message}</div> */}
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}
