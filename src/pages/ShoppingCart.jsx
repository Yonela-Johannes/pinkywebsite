import ShoppingBasket from './ShoppingBasket';
import Spinner from '../Components/Post/Feed.js/Spinner';
import './styles.css'
const ShoppingCart = (props) => {
  const { onAdd, onRemove, cartItems } = props;
  const message = 'Be  Pleasured by Pinky'
  return (
    <div className='mainCartContainer'>
        <h3 className='head'>Shopping List</h3>
      <div className="cartWrapper">
          <div className='items'>
            {
              cartItems.map((item) => (
                <>
                <div key={item._id} className='mainContainer'>
                  <div className='image-container'>
                    <img src={item?.image.asset.url} className="image" alt="cart" />
                        <div>
                          <div className='item-name'>{item?.name}</div>
                          <div className='item-price'>R {item?.price}</div>
                        </div>
                        <div className="buttons">
                            <button className="remove cartButtons" onClick={() => onRemove(item)}>remove</button>
                        </div>
                  </div>
                </div>
                </>
              ))
            }
            <div>
            </div>
          </div>
          <>
            {cartItems.length === 0 && 
            <div className='emptyCart'>
                <p className='cartHead'>Cart Empty</p>
                <Spinner message={message} />
                <p className='cartDesc'>Add items to cart</p>
              </div>
            }
          </>
          <ShoppingBasket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />     
      </div>
    </div>
  )
};

export default ShoppingCart
