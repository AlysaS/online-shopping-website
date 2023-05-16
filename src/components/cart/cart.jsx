import * as React from "react";
import { Typography, Box, ListItem, List, Grid, Button} from "@mui/material";
import { CartContext } from "../../state/cart/cart-context";
import { useContext } from "react"; 
import { CartItem } from "./cartItem";
import { SavedItem } from "./savedItem";
import { useNavigate } from "react-router-dom";
import { OrdersContext } from "../../state/orders/orders-context";
import { ordersActions } from "../../state/orders/orders-reducer";
import { cartActions } from "../../state/cart/cart-reducer";

export function Cart(){
    
    const {cartState, cartDispatch} = useContext(CartContext);
    const {ordersState, ordersDispatch} = useContext(OrdersContext);
   
   //Code so can click on item and go to its product page
    const navigate = useNavigate();

    const productClicked =(currProduct) => {
      navigate(`/products/${currProduct.id}`)
    }

    const placeOrder = () => {
        ordersDispatch({type: ordersActions.ADD, order: cartState.cart});
        cartDispatch({type: cartActions.CLEAR_CART});

        console.log("orders: ");
        console.log(ordersState.orders);

        navigate("/orders");
    }

    
    return (
    <Box  sx={{paddingBottom:15}}>
        <Box id="cartItems">
        <Typography gutterBottom variant="h3" component="div" sx={{fontWeight: "bold", textAlign:"center", marginBlock:5}}>
           Cart
        </Typography >
        

        <List sx={{mx:"auto", alignItems:"center"}}>
            {cartState.cart.map((item) => (
                <ListItem sx={{margin:"auto", alignItems:"center", width:900}}>
                    <CartItem item={item}></CartItem>
                </ListItem>
            ))}
        </List>

        <Box>Total Price: {/* Put total price here -- add up qty*price of each item */}</Box>


        <Button size="large" variant="contained" 
        onClick={() => placeOrder()}
        sx={{my: 6, display:"flex", mx:"auto", fontSize:20 , fontWeight:"bold" }}>Place Order</Button>

        </Box>
        <Box id="saved for later">
        <Typography gutterBottom variant="h3" component="div" sx={{fontWeight: "bold", textAlign:"center", marginBlock:5}}>
           Saved For Later
        </Typography >

        <List sx={{mx:"auto", alignItems:"center"}}>
            {cartState.saveForLater.map((item) => (
                <ListItem sx={{margin:"auto", alignItems:"center", width:900}}>
                    <SavedItem item={item}></SavedItem>
                </ListItem>
            ))}
        </List>
       
        </Box>
        
    </Box>);
}