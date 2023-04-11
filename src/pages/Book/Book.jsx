import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  useParams,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { addToCart } from "./../../features/cartSlice";
import "./Book.css";
import { changeName } from "../../features/headerNameSlice";

const Book = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState(location.state);

  const {
    title = "",
    authors = "",
    description = "",
    pageCount = "",
    categories = "",
    imageLinks = "",
  } = bookData?.volumeInfo || {};

  const price = Math.floor(bookData?.saleInfo?.retailPrice?.amount);

  useEffect(() => {
    if (!bookData) {
     
      fetch(`http://localhost:3000/books/${id}`)
        .then((data) => data.json())
        .then((data) => {
          setBookData(data);  
          dispatch(changeName(data?.volumeInfo?.title))
        })
        .catch((error) => {
         
        });
    }
    else{
      dispatch(changeName(title))
    }
   
  },[]);

  const handleOnAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        imageLinks,
        price,
        authors
      })
    );
    navigate("/cart");
  };

  const handleCheckout = () => {
    
      navigate("/checkout",{state:[{
        id,
        title,
        imageLinks,
        price,
        authors,
        quantity:1
      }]});
    
  }

  if (!bookData) {
    return "Searching....";
  }

  return (
    <div className="bookPage">
      <figure className='bookImageSection'>
      <img src={imageLinks.thumbnail} className="bookImage" alt="Book Image" />
      </figure>
      <section className="bookDetails">
        <h1 className="bookTitle">{title}</h1>

        <p className="bookPrice">Price:- Rs.{price}</p>
        <p className="bookAuthors">Author/Authors:- {authors.join(" ")}</p>
        <p className="bookPageCount">Page Count:- {pageCount}</p>
        <p className="bookCategories">Category:- {categories.join(" ")}</p>

        <button className="blueButton" onClick={handleOnAddToCart}>
          Add to Cart
        </button>
        <button
          className="blueButton"
          onClick={handleCheckout}
        >
          Checkout
        </button>
        <p className="description">{description}</p>
      </section>
    </div>
  );
};

export default Book;
