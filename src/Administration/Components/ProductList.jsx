
import {MdDeleteForever } from "react-icons/md";
export default function ProductList({item}) {
  return (
    <div className='itemList'>
        <p>{item.name}</p>
        <p>R {item.price}</p>
        <div><MdDeleteForever className='deleteItemIcon'/></div>
    </div>
  )
}
