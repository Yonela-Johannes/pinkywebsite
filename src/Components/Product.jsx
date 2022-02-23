import React from 'react';
import './styles.css'
import { FaCartArrowDown } from "react-icons/fa";

export default function Product( props ) {
    const { product, onAdd} = props
    return(
        <div className='wrapper'>
            <div className='product-name'>{product?.name}</div>
            <div className='main-container'>
                <img className="image" src={product?.image.asset.url} alt=' product ' />
                <div className='product-container'>
                </div>
            </div>
            <div className="product-price">R {product?.price}</div>
            <button className="homeCartButton"  onClick={() => onAdd(product)}><FaCartArrowDown className='homeCartIcon' /><div>Add To Cart</div></button>
         </div>
    )
    }
