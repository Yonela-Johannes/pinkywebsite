// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import products from '../../data/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { styled, Grid, Paper, Box, Container, Button, AppBar, Toolbar, Typography , IconButton, ThemeProvider, createTheme, } from '@mui/material';
import './Slider.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Slider Theme styles
const darkTheme = createTheme({
  typography: {
    poster: {
      fontSize: 25,
      inlineSpacing: 2,
      fontFamily: ['Sacramento', 'cursive'].join(','),
      color: 'grey',
    },
    sub: {
      fontSize: 20,
      inlineSpacing: 2,
      fontFamily: ['Darker Grotesque', 'cursive'].join(','),
      color: 'pink',
    },
    par: {
      fontSize: 30,
      inlineSpacing: 2,
      fontFamily: ['Darker Grotesque', 'sans-serif'].join(','),
      color: 'pink',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});
const SwiperSlider = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        observer={true}
        observerParents={true}
        spaceBetween={25}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: false }}
        loop={true}
        // parallax={true}
        autoplay={{delay: 1000,
          // disableOnInteraction: false
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
    {
      products.map(product => (
        <SwiperSlide key={product.id}>
          <div className='container'>
          <img src={product.image} alt='product' />
          </div>
        </SwiperSlide>
      ))
    }
      </Swiper>
    </ThemeProvider>
  );
};
export default SwiperSlider;