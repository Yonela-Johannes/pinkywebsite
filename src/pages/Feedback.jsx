import React from 'react';
import Testimonials from '../Components/Products/Testimonials/Testimonials'
import SwiperSlider from '../Components/Slider/SwiperSlider'
import './styles.css'

const Feedback = () => {
  return (
    <>
    <div className="main">
      <h2 className="head">Testimonials</h2>
    </div>
        <SwiperSlider />
        <div className='testimonials'>
          <Testimonials />
        </div>
    </>
  )
};

export default Feedback;