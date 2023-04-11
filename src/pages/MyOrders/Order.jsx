import React from 'react'
import ProductCard from '../../components/ProductCard'

const Order = ({data}) => {
  return (
    <div className='order'>
    <header className='orderHeader'>
        <h4>Order Placed: {data.orderDate}</h4>
        <h4>Status: {data.orderStatus}</h4>
    </header>
    <ul className='orderBody'>
      {data.orderItems.map((item)=><li className='singleOrder' key={item.id}>
        <ProductCard item={item}/>
      </li>)}
    </ul>

    </div>
  )
}

export default Order