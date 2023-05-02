import * as React from "react";
import { ProductCard } from "./product card";
import { Typography, Grid, Box } from "@mui/material";

import { useEffect, useState, useContext } from "react"; 
import { ProductListContext } from "../state/productList/productList-context";




export function Products(){

    //const [products, setProducts] = useState([]);
    const{ productListState} = useContext(ProductListContext);


    /*

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
  
          setProducts(data);
        });
    }


    useEffect(() => {
        getProducts();
      }, []);

  */

    return (
        <Box sx={{paddingBottom:15}}>
        <Typography gutterBottom variant="h3" component="div" sx={{fontWeight: "bold", textAlign:"center", marginBlock:5}}>
           Products 
        </Typography >

      <Grid container spacing={{xs:3, md:4}} columns={{xs:4, sm:8, md:12}} justifyContent="flex-start" sx={{px: 30}}>
          {productListState.productList.map((product) => (
              <Grid item xs={2} sm={4} md={4}>

                  <ProductCard product={product}></ProductCard>
                 </Grid>
            ))}
      </Grid>
        
        </Box>
    
    );
}