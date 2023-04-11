import { configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import booksReducer from './features/booksSlice'
import myOrdersReducer from './features/myOrdersSlice'
import headerNameReducer from './features/headerNameSlice'

export default configureStore({
  reducer: {
    cart:cartReducer,
    book: booksReducer,
    myOrders: myOrdersReducer,
    headerName: headerNameReducer
  }
  
})