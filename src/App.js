import './App.css';
import {Header} from "./components/header/header";
import {Cart} from "./components/cart/cart";
import {Home} from "./components/home";
import {Orders} from "./components/orders/orders";
import {Products} from "./components/products/products";

import { useReducer, useEffect, useState } from 'react';
import { ProductListContext } from './state/productList/productList-context';
import { productListReducer } from './state/productList/productList-reducer';

import { HashRouter, Routes, Route } from "react-router-dom";
import { ProductPage } from './components/product page/productPage';

function App() {

/*
 const [originalProductList, setOproductList] =useState([]); 

function getProducts(){
    fetch(
"https://fakestoreapi.com/products"
)
.then((response) => response.json())
.then((data) => {
  console.log("Products: ");
  console.log(data);

//   const products = data.map(dataItem => dataItem.product)
//   console.log("new pproduct")
//   console.log(products)

  setOproductList(data);
});
}

*/
  const [productListState, productListDispatch] = useReducer(productListReducer, {productList: []}); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Products: ");
        console.log(data);

        const productList = data;

        productListDispatch({ type: "SET", payload: productList });
      });
  }, []);


  return (
    <HashRouter>
      <Header />
        
      <ProductListContext.Provider value={{productListState, productListDispatch}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<ProductPage/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/orders" element={<Orders/>} />
        </Routes>
      </ProductListContext.Provider>
        
    </HashRouter>
    
    
  );
}

export default App;
