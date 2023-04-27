import { Card, CardContent, CardActions, CardMedia, Typography, Button, Rating, Box, Stack } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react"; 
import productImage from "../pictures/sampleProduct.jpg";



export function ProductCard(){

  return (
      
    <Card  sx={{ width: 275, height:350}}>
      <CardMedia
        sx={{ height: 170, width:150}}
        image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        title="product image"

      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{fontWeight: "bold", textAlign:"center"}}>
        Mens Casual Premium Slim Fit T-Shirts 
        </Typography >
        
        <Stack direction="row" spacing= {1.5} sx={{justifyContent:"center"}}>
            <Rating name="simple-controlled" value={4.1} size="small"  readOnly
            /** onChange={(event, newValue) => {setValue(newValue)}*/
            />
            <Typography>({259})</Typography>
        </Stack>
        <Typography variant="h6" sx={{textAlign:"center"}}>
           $ 22.30
        </Typography>
      </CardContent>
    </Card>
    );
}