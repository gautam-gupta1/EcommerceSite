import React, { useEffect } from 'react'
import { fetchOrders } from '../../features/myOrdersSlice';
import Loading from '../../components/Loading';
import ServerError from '../../components/ServerError';
import Order from './Order';
import {useSelector,useDispatch} from 'react-redux'
import './MyOrders.css'
import { changeName } from '../../features/headerNameSlice';
const MyOrders = () => {

  const {orders,isLoading,errMsg}= useSelector(state=>state.myOrders);
    
  const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(changeName('MyOrders'))
  if(orders.length==0){
  dispatch(fetchOrders());
  }}
 ,[])
  if(isLoading)
  return <Loading/>;

  if(errMsg){
    return <ServerError/>
  }

  return (
    <div>
   
     {orders.map((order)=><Order key={order.id} data={order}/>).reverse()}

    </div>
  )
}

export default MyOrders