import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    allBooks:[],
    isLoading: false,
    errMsg : 'None'
}

export const getAllBooks   = createAsyncThunk('book/getBooks',()=>{
     return fetch('http://localhost:3000/books').then((data)=>data.json())
});


 const booksSlice = createSlice({
    name:'book',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getAllBooks.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getAllBooks.fulfilled,(state,action)=>{  
            state.allBooks = action.payload;
            state.isLoading = false;
        }).addCase(getAllBooks.rejected,(state)=>{
            state.isLoading = false;
            state.errMsg = " Unable to Fetch Data "
        })
    }
})

export default booksSlice.reducer;

