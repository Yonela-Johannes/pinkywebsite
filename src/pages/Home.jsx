import Basket from './Basket';
import Product from '../Components/Product';
import './styles.css'


const Home = ( props ) => {
  const { products, onAdd, onRemove, cartItems } = props;
  return (
    <main className='main'>
          <h2 className='head'>Products</h2>
        <div className="container">
          <div className="products">
              {
                products.map(product => (
                  <Product onAdd={onAdd} onRemove={onRemove} key={product._id} product={product} />
                  ))
                }
              </div>
            <div className="basket">
              <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            </div>
        </div>
    </main>
  )
};
export default Home