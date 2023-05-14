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
  } from "@mui/material";
  import * as React from "react";
  import { cartActions, cartReducer } from "../../state/cart/cart-reducer";
import { useContext } from "react";
import { CartContext } from "../../state/cart/cart-context";
  
  export const SavedItem = (props) => {
    const { item } = props;
    const {cartDispatch} = useContext(CartContext) ; 


    const addToCart = () => {
        
        cartDispatch({type: cartActions.ADD, product:item});
        cartDispatch({type: cartActions.REMOVE_SAVED, product: item});
    }

    const remove =() => {
        cartDispatch({type: cartActions.REMOVE_SAVED, product: item});
    }


    return (
      <Card sx={{ width: 300, height: 200, border: 0.5 }}>
        <Stack direction="row" sx={{px:2}}>
        <CardMedia
          sx={{ height: 150,width:90, objectFit: "contain", py: 1 }}
          component="img"
          image={item.image}
          title="item image"
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            sx={{ textAlign: "center", fontSize: 14, fontWeight: "bold" }}
          >
            {item.title}
          </Typography>
  
          <Typography sx={{ textAlign: "center", fontSize: 14 }}>
            {item.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Typography>


          <Button variant="contained" sx={{fontSize:11, width:110, height:22}}
          onClick={() => addToCart()}>Add to Cart</Button>

          <Button variant="contained" size="small" sx={{fontSize:11, width:90, height:22}}
          onClick={() => remove() }>Remove</Button>
        </CardContent>
        </Stack>
      </Card>
    );
  };