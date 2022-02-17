import React from 'react';
import { styled, Grid, Paper, Box, Container, Button, AppBar, Toolbar, Typography , IconButton, ThemeProvider, createTheme, } from '@mui/material';
import LOGO from '../../img/logopinky.png'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Badge } from '@mui/material';
import Navigation from './Navigation';
import './style.css'

const LogoImage = {
    width: 40,
    height: 50,
    borderRadius: 25,
    padding: 5,
}

const Navbar = ( props ) => {
  const { countCartItems } = props;
  return (
         <nav className='navBar'>
              <div className='grow'>
                {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <img src={LOGO} style={LogoImage} alt="logo" />
                </Typography> */}
                <div className="name">
                  Be Pleasured By Pinky
                </div>
              <Navigation countCartItems={countCartItems} />
              </div>
        </nav>
  )
};

export default Navbar;