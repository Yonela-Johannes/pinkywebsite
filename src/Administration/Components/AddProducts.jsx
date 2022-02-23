import { useState } from 'react';
import data from '../../pages/data';
import ProductList from './ProductList';
const Addproducts = () => {
    const product = data.products
    const [newProducts, setNewProducts ] = useState(product);
    const [newProduct, setNewProduct ] = useState('');
    const [newPrice, setNewPrice ] = useState(100)

    const addToList = () => {
        newProduct.push(newProduct.name = {newProduct})
    }
    return (
        <div className='productsContainer'>
            <div>
                <h3 className='productHeader' >New Product</h3>
                <div className='productInput'>
                    <div className="newProductWrapper">
                        <p className="productLabel">Product name:</p>
                        <input className='productInput' type="text" name='name' placeholder='product name' value={newProduct} onChange={e => setNewProduct(e.target.value)} />
                    </div>
                    <div className="newProductWrapper">
                        <p className="productLabel">Product price:</p>
                    <input className='productInput'  type="number" min={10} max={1500} step={10} value={newPrice} onChange={e => setNewPrice(e.target.value)} />
                    </div>
                </div>
                <button onClick={addToList} className='addProduct'>Add to list</button>
            </div>
            <p>{newProduct}</p>
            <div>
                <h3 className='productHeader' >Product List</h3>
                <div>
                    {product.map((item) => (
                        <ProductList key={item.id} item={item} />
                    ))}
                </div>
                <p>{newProduct}</p>
                <p>{newPrice}</p>
            </div>
        </div>
    );
}

export default Addproducts;
