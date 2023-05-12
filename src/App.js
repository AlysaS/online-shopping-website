import './App.css';
import {Header} from "./components/header/header";
import {Cart} from "./components/cart/cart";
import {Home} from "./components/home";
import {Orders} from "./components/orders/orders";
import {Products} from "./components/products/products";

import { useReducer, useEffect, useState } from 'react';
import { ProductListContext } from './state/productList/productList-context';
import { productListActions, productListReducer } from './state/productList/productList-reducer';

import { HashRouter, Routes, Route } from "react-router-dom";
import { ProductPage } from './components/product page/productPage';
import { cartReducer } from './state/cart/cart-reducer';
import { CartContext } from './state/cart/cart-context';

function App() {


  const [productListState, productListDispatch] = useReducer(productListReducer, {productList: []}); 
  const [cartState, cartDispatch] = useReducer(cartReducer, {cart: [], saveForLater: []});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Products: ");
        console.log(data);

        const productList = data;

        productListDispatch({ type: productListActions.SET, productList: productList });
      });
  }, []);

  return (
    <HashRouter>
      <Header />
        
      <ProductListContext.Provider value={{productListState, productListDispatch}}>
      <CartContext.Provider value = {{cartState, cartDispatch}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<ProductPage/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/orders" element={<Orders/>} />
        </Routes>
        
      </CartContext.Provider>
      </ProductListContext.Provider>
        
    </HashRouter>
    
    
  );
}

export default App;
