import React, { useState } from 'react';
import Cart from '../Components/Cart/Cart';
import data from './data'
import Basket from './Basket';   
import './styles.css'
const ShoppingCart = (props) => {
  const { products, onAdd, onRemove, cartItems } = props;
  console.log(products)
  return (
    <div className='main'>
        <h3 className='head'>Shopping List</h3>
      <div className="cartWrapper">
        <div className='items'>
          {
            cartItems.map((item) => (
              <div key={item.id} className='mainContainer'>
                <div className='image-container'>
                  <img src={item.image} className="image" alt="cart" />
                      <div>
                        <div className='item-name'>{item.name}</div>
                        <div className='item-price'>R {item.price}</div>
                      </div>
                      <div className="buttons">
                          <button className="remove cartButtons" onClick={() => onRemove(item)}>remove</button>
                      </div>
                </div>
              </div>
            ))
          }
        </div>
        <div>
          <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />     
        </div>
      </div>
    </div>
  )
};

export default ShoppingCart
