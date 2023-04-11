import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux'
const Header = () => {
  const pageName = useSelector(state=>state.headerName.value)
  return (
    <div className='header'>
    <Link to='/' className='link'>
     <h1 className='title'>
        Ecommerce Site  
    </h1>
    </Link>
     <h4>{pageName}</h4>
     <ul className='navigationBar'>
        <Link to='/' className='navEle'>Home</Link>
        <Link to='/myOrders' className='navEle'>My Orders</Link>
        <Link to='/cart' className='navEle'>Cart</Link>
     </ul>
    </div>
  )
}

export default Header