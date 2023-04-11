import { Route, Routes } from 'react-router-dom'
import './App.css'
import Book from './pages/Book/Book'
import MyOrders from './pages/MyOrders/MyOrders'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Header from './components/Header'



function App() {
  

  return (
    <div className="App">
     <Header/>
     
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/book/:id" element={<Book/>}/>
      <Route path="/myOrders" element={<MyOrders/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="*" element={<h1>Invalid url</h1>}/>
     </Routes>
   
    </div>
  )
}

export default App
