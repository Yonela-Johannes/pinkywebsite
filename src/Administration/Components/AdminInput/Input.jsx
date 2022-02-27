import { useState} from 'react'

function Input() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [selectedProductImage, setSelectedProductImage] = useState(null)
  return (
    <div> 
        <div className="w-full divide-y divide-gray-300">
            <div className={``}>
                <input className="bg-transparent outline-none text-[black] text-[14px] placeholder-gray-400 tracking-wide w-full" 
                    placeholder="Product name"
                    value={productName} onChange={(e) => setProductName(e.target.value)}
                    />
                <input className="bg-transparent outline-none text-[black] text-[14px] placeholder-gray-400 tracking-wide w-full" 
                    placeholder="Product Price"
                    value={productPrice} onChange={(e) => setProductPrice(e.target.value)}
                />
                <div>
                    <div classname="absolute w-8 h-8 bg-[black] hover:bg-[grey] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer">
                        
                    </div>
                </div>           
            </div>
        </div>
    </div>
  )
}

export default Input