import './shoppingbasket.css'
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import CartContext from '../context/cart/CartContext';
import React, { useContext } from 'react';

const ShoppingBasket = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    const { addToCart } = useContext(CartContext)

    // const AddToCartHandler = () => {
    //     addToCart(product)
    //     onAdd(product)
    // }
    
    const itemsPrice = cartItems.reduce((acc, count) => acc + count.price * count.quantity, 0);
    const taxPrice = itemsPrice * .18;
    const deliveryPrice = itemsPrice > 200 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + deliveryPrice;

    return (
        <aside className="cartContainer">
            <h2 className="cartTitle">Cart Items</h2>
            <hr></hr>
            <div className='cartContainerDetailsWrapper'>
                {cartItems.length === 0 && <div className="title-name">Cart is Empty, add Items to cart.</div>}
                {cartItems.map((item) => (
                    <div key={item._id} className='row'>
                        <div className="cartItemName">{item.name.length <= 15 ? item.name : 
                        item.name.slice(0,13) + '...'
                    }
                        
                        </div>
                        <div className="buttons">
                            <div className="shoppingButton remove" onClick={() => onRemove(item)}><MdOutlineDeleteForever className='cartIcon' /></div>
                            <div className="shoppingButton add" onClick={() => onAdd(item)}><IoMdAddCircleOutline className='cartIcon' /></div>
                        </div>
                            <div className="itemCount">
                                {item.quantity} {item.quantity === 1 || item.quantity === 0 ? 'item' : 'items'} x R {item.price.toFixed(2)}
                            </div>
                        <div className='totalItemWrapper'>
                            <div className="itemsTotal">Total:</div>
                            <div style={{display: 'flex', alignItems: 'end'}}>
                                <div className='itemsTotal rand'>R</div>
                                <div style={{fontWeight: 'bold', fontSize: "13px"}}>{item.quantity * item.price}</div>
                            </div>
                        </div>
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
                    <div><strong>Total Cost</strong></div>
                    <div><strong>R {totalPrice.toFixed(2)}</strong></div>
                </div>
                <div className='col'>
                    <div><strong>Total items</strong></div>
                </div>
                </>
            )}
        </aside>
    );
};

export default ShoppingBasket;