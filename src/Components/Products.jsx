import React from 'react';
import './styles.css'
import Rating from './Rating';
import { FaCartArrowDown } from "react-icons/fa";

export default function Product( props ) {
    const { product, onAdd } = props;
    console.log(product)
    return(
        <div className='wrapper productCard'>
            <div className='product-name'>{product?.productName}</div>
            <div className='main-container'>
                <img className="image" src={product?.image} alt=' product ' />
                <div className='product-container'>
                </div>
            </div>
            <div className="product-price">R {product?.productPrice}</div>
            <button className="homeCartButton"  onClick={() => onAdd(product)}><FaCartArrowDown className='homeCartIcon' /><div>Add To Cart</div></button>
         </div>
    )
}
