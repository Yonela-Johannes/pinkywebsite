import React from 'react'
import { useParams  } from 'react-router-dom';

function Product({product, products}) {
    console.log(products)
    const { _id, slug } = useParams()
    console.log(slug)
  return (
    <div>Product</div>
  )
}

export default Product