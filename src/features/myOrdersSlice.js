import {createSlice, createAsyncThunk, createReducer} from '@reduxjs/toolkit';

export const fetchOrders = createAsyncThunk('myOrders/fetchOrders', async () => {
    const response = await fetch('http://localhost:3000/orders');
    return response.json();
    
});

export const addOrder = createAsyncThunk('myOrders/addOrder',  (data) => {
  
     return fetch('http://localhost:3000/orders',{
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
           
          }
     }).then((data)=>data.json());
});
const initialState = {
    orders: [],
    isLoading: false,
    errMsg : null
};
export const myOrdersReducer = createReducer(
    initialState,
   (builder) =>{
    builder.addCase(fetchOrders.pending,(state)=>{
       
          state.isLoading = true;
          state.errMsg =  null;
    }).addCase(fetchOrders.fulfilled,(state,action)=>{
       
        state.orders = action.payload;
        state.isLoading = false;
        

    }).addCase(fetchOrders.rejected,(state)=>{
        state.isLoading = false;
        state.errMsg = "Unable to fetch Data";
    }).addCase(addOrder.pending,(state)=>{
        state.isLoading = true;
        state.errMsg =  null;
    }).addCase(addOrder.fulfilled,(state,action)=>{
        if(state.orders.length>0){
            state.orders.push(action.payload)
        }
        state.isLoading = false;
    }).addCase(addOrder.rejected,(state,action)=>{
        state.isLoading = false;
        state.errMsg = "Server Error";
    })
}

);

export default  myOrdersReducer;