import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import AboutUs from "./components/AboutUs/AboutHero";
import Shop from "./components/Shop/Shop";
import Collection from "./components/Collection/Collection"
import Blog from "./components/Blog/BlogHero"
import Cart from "./components/Cart/Carthero";
import Navbar from "./components/Navbar";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";
import Account from "./components/Account/account";
import Help from "./components/Help/Help"
import ScrollToTopButton from './components/TopIcon'; 
import Sidebar from "./views/Admin/SIdenavbar";
import Product from "./views/Admin/Product";
import Customer from "./views/Admin/Customer";
import ProtectedRoute from "./components/ProtectedRoute";
import TopOrders from "./views/Admin/TopOrders";
import Order from "./views/Admin/Order";
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp";
import VerifyUser from "./views/VerifyUser";
import ForgotPass from "./views/ForgotPass";



function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
      
        <Route>
          <Route path="/" element={<ProtectedRoute>
          {<Home/>}
          </ProtectedRoute>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/help" element={<Help />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customer" element={<Customer />} />


          <Route path="/TopOrders" element={<TopOrders/>}/>
          <Route path="/Order" element={<Order/>}/>

          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/user/verify" element={<VerifyUser />} />
          <Route path="/forgotPassword" element={<ForgotPass />} />


          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
      <ScrollToTopButton />
      <Footer/>
    </Router>
  );
}

export default App;
