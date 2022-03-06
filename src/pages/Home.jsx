import Basket from './Basket';
import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import Spinner from '../Components/Post/Feed.js/Spinner';
import Products from '../Components/Products';
import './styles.css'
import { db } from "../firebase";
import { BsCartCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Home = ( props ) => {
  const { products, onAdd, onRemove, cartItems, user } = props;

  const message = "Be Pleasured By Pinky"
  return (
    <main className='main'>
          <h2 className='head'>Products</h2>
        <div className="container">
          <div className="products">
              {
                products.map(product => (
                  <Products user={user} onAdd={onAdd} key={product.id} id={product.id} product={product.data()} cartItems={cartItems} />
                  ))
                }
              </div>
              {cartItems.length > 0 && (
                <div className="basket">
                  <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
                  <Link to="/cart">
                    <button className="homeShoppingCartButton" ><BsCartCheck className='homeCartIcon' /><div>Go to Shopping Cart</div></button>
                  </Link>
                </div>
              )}
              {cartItems.length === 0 && (
                <>
                <Spinner message={message} />
                </>
              )}
        </div>
    </main>
  )
};
export default Home