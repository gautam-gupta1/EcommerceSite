import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard';
import { redirect, useLocation,useNavigate } from 'react-router-dom';
import './Checkout.css'
import { addOrder } from '../../features/myOrdersSlice';
import { emptyCart } from '../../features/cartSlice';
import Loading from '../../components/Loading';
import { v4 as uuidv4 } from 'uuid';
import { todayDate } from '../../utility/todayDate';
import { changeName } from '../../features/headerNameSlice';
    
const Checkout = () => {
  const {isLoading,errMsg} = useSelector(state=>state.myOrders);
   const location = useLocation();
   const cart = location.state;
   const navigate = useNavigate();
   const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(changeName('Checkout'))
   if(!cart){
    
    return navigate('/cart');
   }},[]
  )

  if(isLoading){
    return <Loading/>
  }
 if(!cart){
    return <h1>Redirecting...</h1>
  }
  const cartTotal = cart.reduce((a, c) => a + c.price * c.quantity, 0);

  const handleConfirmOrder = () =>{

      dispatch(addOrder(
        {
        id: uuidv4(),
        orderDate: todayDate(),
        orderStatus: "Shipped",
        orderItems :cart.slice(0)
      }
      )
  )
      if(cart.length>1||cart[0].quantity>1)
      dispatch(emptyCart());
   
      navigate('/myOrders',{replace:true});
  }

  const handleCancel = () =>{
    navigate('/cart')

  }

  return (
    <div className='checkout'>
      <section className='paymentOptions'>
      <h1>Current Payment Options:</h1>
      <label htmlFor='cod'>Cash On Delivery</label>
      <input type='radio' id='cod' checked={true} onChange={()=>{ }}/>
      </section>
      
      <section className='checkoutCart'>
      <h1>Items:</h1>
      {cart.map((item)=><ProductCard key={item.id} item={item}/>)}
      <div>
        <h2>Total Price:</h2>
        <p>{(75 + cartTotal * 1.05).toFixed(2)}</p>
      </div>
      <button className='blueButton' onClick={handleConfirmOrder} >Confirm Order</button>
      <button  className='blueButton' onClick={handleCancel}>Cancel</button>
      </section>
</div>
  )
}

export default Checkout