import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Order from "./pages/Order"
import Verify from "./pages/Verify"
import MyOrder from "./pages/MyOrder"
import Footer from "./components/Footer"
import { useState } from "react"
import LoginPopUp from "./components/LoginPopup"
import Payment from "./pages/Payment"
import Confirmation from "./components/Confirmation"


export default function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
   <div className="overflow-hidden text-[#404040]">
      <BrowserRouter>
        <div className="bg-primary">
            {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/>  : <></>}
          <Header setShowLogin={setShowLogin}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>}>

            
              <Route path=":product" element={<Product/>}/>
            </Route>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/verify" element={<Verify/>}/>
            <Route path="/orders" element={<MyOrder/>}/>
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
   </div>
  )
}