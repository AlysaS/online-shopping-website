import './App.css';
import {Header} from "./components/header";
import {Cart} from "./components/cart";
import {Home} from "./components/home";
import {Orders} from "./components/orders";
import {Products} from "./components/products";

import { useReducer, useEffect, useState } from 'react';
import { ProductListContext } from './state/productList/productList-context';
import { productListReducer } from './state/productList/productList-reducer';

import { HashRouter, Routes, Route } from "react-router-dom";

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


useEffect(() => {
getProducts();
}, []);
*/
  const [productListState, productListDispatch] = useReducer(productListReducer, {productList: []}); 

  return (
    <HashRouter>
      <Header />
        
      <ProductListContext.Provider value={{productListState, productListDispatch}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/orders" element={<Orders/>} />
        </Routes>
      </ProductListContext.Provider>
        
    </HashRouter>
    
    
  );
}

export default App;
