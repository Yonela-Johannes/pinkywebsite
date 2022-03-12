import { PhotographIcon, XIcon } from '@heroicons/react/outline';
import { useRef, useState } from 'react';
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import Spinner from '../../../Components/Post/Feed.js/Spinner';
import { db, storage } from "../../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";

function Input() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedProductImage, setSelectedProductImage] = useState(null)
    const filePickerRef = useRef(null)


    const message= '...loading'
    const postProduct = async () => {
        loading && <Spinner message={message} />;
        setLoading(true);

            const docRef = await addDoc(collection(db, "products"), {
            productName: productName,
            productPrice: productPrice,
            timestamp: serverTimestamp(),
          });
          const imageRef = ref(storage, `products/${docRef.id}/image`); 
        if (selectedProductImage) {
            await uploadString(imageRef, selectedProductImage, "data_url").then(async () => {
              const downloadURL = await getDownloadURL(imageRef);
              await updateDoc(doc(db, "products", docRef.id), {
                image: downloadURL,
              });
            });
          }
      
          setLoading(false);
          setProductName("");
          setProductPrice("");
          setSelectedProductImage(null);
    }
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
          reader.readAsDataURL(e.target.files[0]);
        }
    
        reader.onload = (readerEvent) => {
          setSelectedProductImage(readerEvent.target.result);
        };
      };

    return (
        <div>
            {!loading && (
                <div className="w-full divide-y divide-gray-300">
                    <div className={`${selectedProductImage && "pb-7"}`}>
                        <input className="bg-transparent outline-none text-[black] text-[14px] placeholder-gray-400 tracking-wide w-full" 
                            placeholder="Product name"
                            value={productName} onChange={(e) => setProductName(e.target.value)}
                            />
                        <input className="bg-transparent outline-none text-[black] text-[14px] placeholder-gray-400 tracking-wide w-full" 
                            placeholder="Product Price"
                            type="number"
                            value={productPrice} onInput={(e) => setProductPrice(e.target.value)}
                        />
                        {selectedProductImage && (
                            <div className="relative">
                                <div className="absolute w-8 h-8 bg-[black] hover:bg-[grey] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                                    onClick={() => setSelectedProductImage(null)}
                                >
                                    <XIcon className="text-[white] h-5" />
                                </div>
                                <img src={selectedProductImage} alt="select" className="rounded-2xl max-h-80 object-contain" />
                            </div>
                        )}
                    </div>
                    {!loading && (
                        <div className="flex items-center justify-between p-2.5">
                            <div className='flex items-center'>
                                <div className="icon" onClick={() => filePickerRef.current.click()}>
                                    <PhotographIcon className="text-[12px] h-[18px] text-[#000000]" />
                                    <input type="file" onChange={addImageToPost} ref={filePickerRef} hidden />
                                </div>
                            </div>
                            <button className="text-[12px] text-[gray] border-[gray] py-1 font-bold shadow-md hover:bg-[pink]
                                disabled:hover:bg-[#dddddd] disabled:opacity-50 disabled:cursor-default"
                                disabled={!productName.trim() | !productPrice.trim()  && !selectedProductImage}
                                onClick={postProduct}
                                >Post Product</button>
                        </div>          
                    )}
                </div>
            )}
        </div>
    )
}

export default Input