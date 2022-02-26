import Basket from './Basket';
import Spinner from '../Components/Post/Feed.js/Spinner';
import Products from '../Components/Products';
import './styles.css'
import { BsCartCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Home = ( props ) => {
  const { products, onAdd, onRemove, cartItems } = props;

  const message = "Be Pleasured By Pinky"
  return (
    <main className='main'>
          <h2 className='head'>Products</h2>
        <div className="container">
          <div className="products">
              {
                products.map(product => (
                  <Products onAdd={onAdd} onRemove={onRemove} key={product._id} product={product} cartItems={cartItems} />
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