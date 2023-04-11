import { createSlice } from "@reduxjs/toolkit";


export const headerNameSlice = createSlice({
    name: 'headerName',
    initialState: {
        value:'' 
    },
    reducers:{
        
        changeName : (state,action) =>{
            state.value = action.payload;
        }

    }
})

export const {changeName} = headerNameSlice.actions;

export default headerNameSlice.reducer;