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

          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
