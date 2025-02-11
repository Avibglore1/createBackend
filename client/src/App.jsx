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
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp";
import ForgotPass from "./views/ForgotPass";



function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
      
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/help" element={<Help />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
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
