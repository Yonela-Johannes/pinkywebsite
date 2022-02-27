import { useState } from 'react';
import data from '../../pages/data';
import Input from './AdminInput/Input';
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
        <div>
            <div className='border-b border-gray-600 max-w-2xl flex items-center justify-center text-center'>
                <h2 className={`head `}>Add Products</h2>
            </div>
            <Input />
        </div>
    );
}

export default Addproducts;
