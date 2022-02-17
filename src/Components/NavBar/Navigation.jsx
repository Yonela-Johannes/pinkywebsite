import React from 'react';
import { styled, Grid, Paper, Box, Container, Button, AppBar, Toolbar, Typography , IconButton, ThemeProvider, createTheme, } from '@mui/material';
import LOGO from '../../img/logopinky.png'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import { Badge } from '@mui/material';
import './style.css'
import {NavLink} from 'react-router-dom'
const LogoImage = {
    width: 40,
    height: 50,
    borderRadius: 25,
    padding: 5,
}

const Navigation = (props) => {
    const {countCartItems} = props;
  return (
         <nav className='appBar'>
                <div className='grow'>
                    <div className='button'>
                            <ul className='navList'>
                                <NavLink to='/'>
                                    <IconButton aria-label='Home page'>
                                    <img src={LOGO} style={LogoImage} alt="logo" />
                                    </IconButton>
                                </NavLink>
                                <li className='navLink'>
                                    <NavLink to='/cart'>
                                        <IconButton aria-label='Show cart items' color='inherit'>
                                            <Badge className='icon' badgeContent={countCartItems}>
                                                <ShoppingBasketOutlinedIcon className='icon' />
                                            </Badge>
                                        </IconButton>
                                    </NavLink>
                                </li>
                                <li className='navLink'><NavLink to='/feeds'>
                                        <IconButton aria-label='Newsfeeds' color='inherit'>
                                            <DynamicFeedOutlinedIcon className='icon' />
                                        </IconButton>
                                    </NavLink></li>
                                <li className='navLink'><NavLink to='/testimonials'>
                                         <IconButton aria-label='Testimonials' color='inherit'>
                                            <ReviewsOutlinedIcon className='icon' />
                                        </IconButton>                                   
                                    </NavLink></li>
                                <li className='navLink'><NavLink to='/signin'>
                                         <IconButton aria-label='Testimonials' color='inherit'>
                                            <div className="signin">Sign In</div>
                                        </IconButton>                                   
                                    </NavLink></li>
                            </ul>
                    </div>

                </div>    
        </nav>
  )
};

export default Navigation;