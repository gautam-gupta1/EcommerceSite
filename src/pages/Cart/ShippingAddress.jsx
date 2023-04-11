import React, { useEffect, useState,useReducer } from "react";


const reducer = (state,action) => {
   switch(action.type){
     
    case 'name': return {
      ...state,
      name : action.payload
    }
    case 'phoneNumber':return {
      ...state,
      phoneNumber : action.payload
    }
    case 'address':return {
      ...state,
     address : action.payload
    }
    case 'city':return {
      ...state,
      city : action.payload
    }
    case 'state':return {
      ...state,
      state : action.payload
    }
    case 'email':return {
      ...state,
     email : action.payload
    }
    case 'pinCode':return {
      ...state,
      pinCode : action.payload
    }
    default : return state;
   }

}

const ShippingAddress = () => {
  const [formEditable, setFormEditable] = useState(true);
  const shippingInfo = JSON.parse(localStorage.getItem("shippingAddress"))||{};
  
  const {
    name = "Customer241",
    phoneNumber = "9999999999",
    address = "342-R",
    city = "Delhi",
    state = "Delhi",
    pinCode = "123456",
    email = "email@email.com",
  } =  shippingInfo;
  
  const shippingDetails = {
    name,
    phoneNumber,
    address,
    city,
    state,
    pinCode,
    email,
  };
  const [formData, dispatch] = useReducer(reducer, shippingDetails);

  const handleOnSave = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify(formData   )
    );
    setFormEditable(false);
  };

  return (
    <div className="shippingAddress">
      <h1>ShippingAddress:</h1>
      {formEditable ? (
        <form id='shippingAddressForm'>
          <label htmlFor="customerName">Customer Name: </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => {
             dispatch({type:'name',payload:e.target.value})
            }}
            id="customerName"
            required
          />
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => {
             dispatch({type:'address',payload:e.target.value})
            }}
            id="address"
            required
          />
          <label htmlFor="city">City: </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => {
             dispatch({type:'city',payload:e.target.value})
            }}
            id="city"
            required
          />
          <label htmlFor="state">State: </label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => {
             dispatch({type:'state',payload:e.target.value})
            }}
            id="state"
            required
          />
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => {
             dispatch({type:'phoneNumber',payload:e.target.value})
            }}
            id="phoneNumber"
            required
          />
          <label htmlFor="pinCode">Pin Code: </label>
          <input
            type="number"
            value={formData.pinCode}
           
            onChange={(e) => {
             dispatch({type:'pinCode',payload:e.target.value})
            }}
            id="pinCode"
            required
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => {
             dispatch({type:'email',payload:e.target.value})
            }}
            id="email"
            required
          />
          <button className="blueButton" type="submit" onClick={handleOnSave}>Save</button>
        </form>
      ) : (
        <section className="savedAddress">
         <div className="myAddress">
          <p>{name}</p>
          <p>{address}</p>
          <p>{`${city}, ${state}, ${pinCode}`}</p>
          <p>{phoneNumber}</p>
          <p>{email}</p>
         </div>
          <button className="blueButton" type="submit"
            onClick={(e) => {
              e.preventDefault();
              setFormEditable(true);
            }}
          >
            Edit
          </button>
        </section>
      )}
    </div>
  );
};

export default ShippingAddress;
