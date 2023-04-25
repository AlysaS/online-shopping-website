import './App.css';
import {Header} from "./components/header";
import {Cart} from "./components/cart";
import {Home} from "./components/home";
import {Orders} from "./components/orders";
import {Products} from "./components/products";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/orders" element={<Orders/>} />
        </Routes>
    </HashRouter>
    
    
  );
}

export default App;
