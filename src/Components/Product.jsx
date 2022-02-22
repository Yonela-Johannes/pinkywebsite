import React from 'react';
import { urlFor } from '../client';
import './styles.css'

export default function Product( props ) {
    const { product, onAdd} = props
    return(
        <div className='wrapper'>
            <div className='product-name'>{product?.name}</div>
            <div className='main-container'>
                <img className="image" src={product?.imageUrl} alt=' product ' />
                <div className='product-container'>
                </div>
            </div>
            <div className="product-price">R {product?.price}</div>
            <button  onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
    )
    }
