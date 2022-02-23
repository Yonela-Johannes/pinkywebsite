import React, { useContext } from 'react';
import './styles.css'
import Rating from './Rating';
import CartContext from '../context/cart/CartContext';
import { FaCartArrowDown } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

export default function Product( props ) {
    const { addToCart } = useContext(CartContext)
    const { product, onAdd } = props;
    const AddToCartHandler = () => {
        addToCart(product)
        onAdd(product)
    }

    return(
        <div className='wrapper'>
            <div className='product-name'>{product?.name}</div>
            <div className='main-container'>
                <img className="image" src={product?.image.asset.url} alt=' product ' />
                <div className='product-container'>
                </div>
            </div>
            <Rating value={product?.rating} text={`${product?.reviews} reviews`} />
            <div className="product-price">R {product?.price}</div>
            <button className="homeCartButton"  onClick={AddToCartHandler}><FaCartArrowDown className='homeCartIcon' /><div>Add To Cart</div></button>
         </div>
    )
}
