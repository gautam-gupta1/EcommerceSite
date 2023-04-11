import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

const BookCard = ({data}) => {
 const {title,description,imageLinks} = data.volumeInfo;
 const price = data.saleInfo.retailPrice.amount;
  const navigate = useNavigate();
  const toBookPage = ()=>{
    navigate(`/book/${data.id}`, {state:data});
  } 
  return (
  <div className="bookCard">
  <img className='bookImage' src={imageLinks.thumbnail} alt={title}/>
  <div className="bookCardDetails">
  <h4 className="bookCardTitle">{title}</h4>
  <p className="bookCardPrice">₹ {Math.floor(price)}.00</p>
  <p className="bookCardDescription">{description.slice(0,100)}...</p>
  <button className='blueButton bookCardBuyButton' onClick={toBookPage}>Buy Book</button>
  {/* <Link to={`/book/${data.id}`} state={data} > Buy Book</Link>   */}
  </div>
  </div>
  )
}

export default BookCard