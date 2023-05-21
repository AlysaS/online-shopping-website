import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Rating,
  Box,
  Stack,
  CardActionArea,
} from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router";

export const ProductCard = (props) => {
  const { product } = props;


  const navigate = useNavigate();

  const productClicked =() => {

    if(product.sizes != null  || product.totalQty > 0){
      navigate(`/products/${product.id}`)
    }
      
    

    
  }

  return (
    
    <Card sx={{ width: 285, height: 360, border: 0.5, backgroundColor: product.totalQty <= 0 ? 'grey' : 'inherit',
    opacity: product.totalQty <= 0 ? 0.3 : 1, }}>
      <CardActionArea disableRipple  onClick={() => productClicked()} sx={{width: "100%", height: "100%"}}>

      <CardMedia
        sx={{ height: 190, objectFit: "contain", py: 1, backgroundColor:"white" }}
        component="img"
        image={product.image}
        title="product image"
      />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold", textAlign: "center", fontSize: 18 }}
        >
          {product.title.length > 70? `${product.title.substring(0, 60)}...` : product.title}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
          <Rating
            name="simple-controlled"
            value={product.rating.rate}
            size="small"
            readOnly
          />
          <Typography>({product.rating.count})</Typography>
        </Stack>
        <Typography sx={{ textAlign: "center", fontSize: 17 }}>
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>
      </CardContent>
</CardActionArea>
     
    </Card>

    
  );
};
