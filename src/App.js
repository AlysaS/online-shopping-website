import './App.css';
import {Header} from "./components/header/header";
import {Cart} from "./components/cart/cart";
import {Orders} from "./components/orders/orders";
import {Products} from "./components/products/products";

import { useReducer, useEffect, useState } from 'react';
import { ProductListContext } from './state/productList/productList-context';
import { productListActions, productListReducer } from './state/productList/productList-reducer';

import { HashRouter, Routes, Route } from "react-router-dom";
import { ProductPage } from './components/product page/productPage';
import { cartReducer } from './state/cart/cart-reducer';
import { CartContext } from './state/cart/cart-context';
import { ordersReducer } from './state/orders/orders-reducer';
import { OrdersContext } from './state/orders/orders-context';

function App() {


  const [productListState, productListDispatch] = useReducer(productListReducer, {productList: []}); 
  const [cartState, cartDispatch] = useReducer(cartReducer, {cart: [], saveForLater: [], });
  const [ordersState, ordersDispatch] = useReducer(ordersReducer, {orders:[]});

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
     
        
      <ProductListContext.Provider value={{productListState, productListDispatch}}>
      <CartContext.Provider value = {{cartState, cartDispatch}}>
      <OrdersContext.Provider value = {{ordersState, ordersDispatch}}>
        
         <Header />
        
        <Routes>
          <Route path= "/" element={<Products/>} />
          <Route path= "/products" element={<Products/>} />
          <Route path="/products/:id" element={<ProductPage/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/orders" element={<Orders/>} />
        </Routes>
      </OrdersContext.Provider>  
      </CartContext.Provider>
      </ProductListContext.Provider>
        
    </HashRouter>
    
    
  );
}

export default App;
