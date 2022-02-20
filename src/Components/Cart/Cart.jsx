import React from 'react';
import { styled, Grid, Paper, Box, Container, Button, AppBar, Toolbar, Typography , IconButton, ThemeProvider, createTheme, } from '@mui/material';
import products from '../../data/products'
import './styles.css'
const Cart = () => {
    // const isEmpty = !products.length; 
    const isEmpty = false; 

    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no items in your shopping bag, start adding some!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid spacing={3}>
                {products.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
                <div 
                className='cardDetails'
                >
                    <Typography variant='h4'>Subtototal: {products.price}</Typography>
                    <div>
                        <Button className='emptyButton' size='large' type="button" variant='contained' color='secondary'>Empty Cart</Button>
                        <Button className='checkout' size='large' type="button" variant='contained' color='primary'>Checkout</Button>
                    </div>
                </div>
        </>
    )
    
    return (
        <Container>
            <div 
             className='toolbar' 
            />
            <div className='subhead'>
                Your Shopping Bag:
            </div>
            { isEmpty ? <EmptyCart /> : <FilledCart />

            }
        </Container>
    )
};

export default Cart;
