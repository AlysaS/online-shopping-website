import * as React from "react";
import { ProductCard } from "./product card";
import { Typography } from "@mui/material";

import { useEffect, useState } from "react"; 





export function Products(){

    const [products, setProducts] = useState([]);



    function getProducts(){
            fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Products: ");
          console.log(data);

        //   const products = data.map(dataItem => dataItem.product)
        //   console.log("new pproduct")
        //   console.log(products)
  
          setProducts(data);
        });
    }

    useEffect(() => {
        getProducts();
      }, []);

  

    return (
        <>
        <Typography gutterBottom variant="h3" component="div" sx={{fontWeight: "bold", textAlign:"center", marginBlock:5}}>
           Products 
        </Typography >

        {products.map((product) => (
              
                 <ProductCard product={product}></ProductCard>
            ))}
        </>
    
    );
}