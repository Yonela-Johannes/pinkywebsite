import React, {useState} from 'react';
import { styled, Grid, Paper, Box, Container, Button, AppBar, Toolbar, Typography , IconButton, ThemeProvider, createTheme, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { ClassNames } from '@emotion/react';
import Navigation from '../../Components/NavBar/Navigation'
import products from '../../data/products';
import useStyles from './styles'

const darkTheme = createTheme({
    typography: {
      poster: {
        fontSize: 25,
        inlineSpacing: 2,
        fontFamily: ['Darker Grotesque', 'sans-serif'].join(','),
        color: '#C70039',
      },
      sub: {
        fontSize: 40,
        inlineSpacing: 2,
        fontFamily: ['Darker Grotesque', 'sans-serif'].join(','),
        color: '#C70039',
      },
      price: {
        fontSize: 20,
        inlineSpacing: 2,
        fontFamily: ['Darker Grotesque', 'sans-serif'].join(','),
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

// Add to cart handler


const Stock = ({ stock }) => {
  let  countCart = [] 
  const classes = useStyles();
  const [cartProduct, setCartProduct] = useState(stock);
  // let [countCartStock, setCountCartStock] = useState(countCart);
  let [newCartProduct, setNewCartProduct] = useState([]);

  const addToCart = () => {
    // alert(`You have added product to list: ${cartProduct.name}, ${cartProduct.id}`)
    setCartProduct(cartProduct)
    newCartProduct.push(cartProduct)
    setCartProduct(newCartProduct.id)

  }

    return <div>
        <ThemeProvider theme={darkTheme}>
            <Card className={classes.root}>
                <Typography className={classes.name} variant='poster'gutterbottom>
                    {stock.name}
                </Typography>
                <CardMedia className={classes.media} image={stock.image} title={stock.name}/>
                <CardContent>
                <div className={classes.cardContent}>
                        <Typography variant='price'gutterbottom>
                            R {stock.price}
                        </Typography>
                    </div>
                <CardActions disableSpacing className='classes.cardActions'>
                    <IconButton onClick={addToCart} aria-label='Add to Bag'>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
                </CardContent>
            </Card>
        </ThemeProvider>
    </div>;
};

export default Stock;
