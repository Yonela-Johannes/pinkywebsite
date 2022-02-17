import React, {useState} from 'react';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import products from '../../data/products';
import { styled, Grid, Paper, Box, Container, Button, AppBar, Toolbar, Typography , IconButton, ThemeProvider, createTheme, } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Stock from './Stock'


const darkTheme = createTheme({
    typography: {
      poster: {
        fontSize: 40,
        inlineSpacing: 2,
        fontFamily: ['Sacramento', 'cursive'].join(','),
        color: '#C70039',
      },
      par: {
        fontSize: 20,
        inlineSpacing: 2,
        // fontFamily: ['Mea Culpa', 'cursive'].join(','),
        color: '#F99B9B',
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
    },
  });

const Stocks = () => {
  return(
      <ThemeProvider theme={darkTheme}>
        <Grid container justify='center' spacing={4}>
          {
            products.map((stock) => (
              <Grid item key={stock.id} xs={12} sm={6} md={4} lg={3}>
                <Stock stock={stock} />
              </Grid>
              )
            )
          }
        </Grid>
      </ThemeProvider>
  );
};
export default Stocks
;