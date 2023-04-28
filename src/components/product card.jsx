import { Card, CardContent, CardActions, CardMedia, Typography, Button, Rating, Box, Stack } from "@mui/material";
import * as React from "react";


export const ProductCard = (props) => {

  const {product} = props;

  return (
      
    <Card  sx={{ width: 275, height:350}}>
      <CardMedia
        sx={{ height: 170, width:150,display: "flex", justifyContent: "center", objectFit:"contain"}}
        component="img"
        image={product.image}
        title="product image"

      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{fontWeight: "bold", textAlign:"center"}}>
        {product.title}
        </Typography >
        
        <Stack direction="row" spacing= {1} sx={{justifyContent:"center"}}>
            <Rating name="simple-controlled" value={product.rating.rate} size="small"  readOnly
            /** onChange={(event, newValue) => {setValue(newValue)}*/
            />
            <Typography>({product.rating.count})</Typography>
        </Stack>
        <Typography variant="h6" sx={{textAlign:"center"}}>
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
    );
}