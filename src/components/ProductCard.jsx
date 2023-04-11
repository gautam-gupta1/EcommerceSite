import React from 'react'
import './ProductCard.css'

const ProductCard = ({item}) => {
  return (
    <div className='productCard'>
        
        <figure className='productCardImage'>
        <img  src={item.imageLinks.thumbnail} alt="bookImage"/>
        </figure>
        <section className='productCardDetails'>
        <h3>{item.title}</h3>
        <h5>Author/Authors: {item.authors.join(", ")}</h5>
        <h5>Price: ₹{item.price}</h5>
        <h5>Quantity: {item.quantity}</h5>
        </section>

   </div>
  )
}

export default ProductCard