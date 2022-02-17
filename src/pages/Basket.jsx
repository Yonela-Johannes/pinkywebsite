import React, {useState} from 'react';
import data from './data'
import './styles.css'

const Basket = (props) => {
    const { cartItems, onAdd, onRemove } = props;

    const itemsPrice = cartItems.reduce((acc, count) => acc + count.price * count.quantity, 0);
    const taxPrice = itemsPrice * .18;
    const deliveryPrice = itemsPrice > 200 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + deliveryPrice;

    return (
        <aside className="aside">
            <h2 className="title">Cart Items</h2>
            <hr></hr>
            <div>
                {cartItems.length === 0 && <div className="title-name">Cart is Empty, add Items to cart.</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className='row'>
                        <div>{item.name}</div>
                        <div className="buttons">
                            <button className="remove" onClick={() => onRemove(item)}>-</button>
                            <button className="add" onClick={() => onAdd(item)}>+</button>
                        </div>
                        {item.quantity} x R {item.price.toFixed(2)}
                    </div>
                ))}
            </div>
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                <div className='col'>
                    <div>Price</div>
                    <div>R {itemsPrice.toFixed(2)}</div>
                </div>
                <div className='col'>
                    <div>Tax</div>
                    <div>R {taxPrice.toFixed(2)}</div>
                </div>
                <div className='col'>
                    <div>Delivery</div>
                    <div>R {deliveryPrice.toFixed(2)}</div>
                </div>
                <div className='col'>
                    <div><strong>Total</strong></div>
                    <div><strong>R {totalPrice.toFixed(2)}</strong></div>
                </div>
                </>
            )}
        </aside>
    );
};

export default Basket;