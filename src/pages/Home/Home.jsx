import React, { useEffect, useState } from 'react'
import BookCard from './BookCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from './../../features/booksSlice';
import './styles.css'
import Loading from '../../components/Loading';
import { changeName } from '../../features/headerNameSlice';
const Home = () => {
   
   const  {allBooks,isLoading,errMsg} = useSelector((state)=>state.book);
   const dispatch = useDispatch();
   useEffect(()=>{
      
      if(!allBooks.length)
      dispatch(getAllBooks());

      dispatch(changeName(''))
    
   },[])

  return (
    <div className="homePage">
      
      {
          isLoading ? <Loading/>: ( errMsg== 'None'?
          allBooks.map((book)=><BookCard key={book.id} data={book}/>):
          errMsg
          )
       }

    </div>
  )
}

export default Home