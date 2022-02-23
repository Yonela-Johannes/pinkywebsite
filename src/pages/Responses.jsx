import React, { useEffect, useState } from 'react'
import { feedbackQuery } from '../utils/data';
import { client } from '../client';
// import Slider from './Slider'
// import './Slider.css';


export default function Responses() {
  const [response, setResponse ] = useState([])

  useEffect(() => {
    client.fetch(feedbackQuery)
    .then((data) => {
      setResponse(data);
    })
  }, []);

  return (
    <div className='main'>
      {/* <Carousel  response={response} /> */}
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
