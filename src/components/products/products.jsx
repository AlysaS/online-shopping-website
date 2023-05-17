import * as React from "react";
import { ProductCard } from "./productCard";
import { Typography, Grid, Box, Button } from "@mui/material";

import { useContext } from "react"; 
import { ProductListContext } from "../../state/productList/productList-context";
import { useNavigate } from "react-router-dom";



export function Products(){

    const{ productListState, productLIstDispatch} = useContext(ProductListContext);


  


      const navigate = useNavigate();

      const productClicked =(currProduct) => {
        navigate(`/products/${currProduct.id}`)
      }

    return (
        <Box sx={{paddingBottom:15}}>
        <Typography gutterBottom variant="h3" component="div" sx={{fontWeight: "bold", textAlign:"center", marginBlock:5}}>
           Products 
        </Typography >

      <Grid container spacing={{xs:3, md:8}} columns={{xs:4, sm:8, md:12}} justifyContent="flex-start" sx={{px: 30}}>
          {productListState.productList.map((product) => (
              <Grid item xs={2} sm={4} md={4} >
               
                <ProductCard product={product} ></ProductCard>
                
              </Grid>
            ))}
      </Grid>
        
        </Box>
    
    );
}