import { FaCartArrowDown } from "react-icons/fa";
import './styles.css'
import '../Components/product.css'
const Home = ( props ) => {
    // console.log(props)
  const { product, onAdd, id } = props;
  return (
      <div id={id} key={id} className='wrapper productCard'>
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
};
export default Home