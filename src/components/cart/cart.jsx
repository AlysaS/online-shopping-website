import * as React from "react";
import { Typography, Box, ListItem, List, Card,Grid, Button, Stack} from "@mui/material";
import { CartContext } from "../../state/cart/cart-context";
import { useContext } from "react"; 
import { CartItem } from "./cartItem";
import { SavedItem } from "./savedItem";
import { useNavigate } from "react-router-dom";
import { OrdersContext } from "../../state/orders/orders-context";
import { ordersActions } from "../../state/orders/orders-reducer";
import { cartActions } from "../../state/cart/cart-reducer";
import emptyCartImage from "../../pictures/emptyCartImage.png";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

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
        
        
        { cartState.cart.length != 0 ? (
        <Box>
        <List sx={{mx:"auto", alignItems:"center"}}>
            {cartState.cart.map((item) => (
                <ListItem sx={{margin:"auto", alignItems:"center", width:800}}>
                    <CartItem item={item}></CartItem>
                </ListItem>
            ))}
        </List>

       <Box>Total Price: {/* Put total price here -- add up qty*price of each item*/ }</Box> 


        <Button size="large" variant="contained" 
        onClick={() => placeOrder()}
        sx={{my: 6, display:"flex", mx:"auto", fontSize:20 , fontWeight:"bold" }}>Place Order</Button>
        </Box>
        ) : (
            <Card sx={{border:1, width:"50%", mx:"auto", py:5}}>
            <Stack direction = "row" spacing={6} sx={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <Box component="img" src={emptyCartImage} alt="emptyCartImage" sx={{width:170}}/>
                <Typography sx={{textAlign: "center", fontSize:30, fontWeight:"bold"}}>Your cart is empty</Typography>
            </Stack>
            </Card>
            )}

         </Box>
        <Typography gutterBottom variant="h3" component="div" sx={{fontWeight: "bold", textAlign:"center", marginBlock:5}}>
           Saved For Later
        </Typography >

<Box id="saved for later">
         { cartState.saveForLater.length != 0 ? (
        <>
    
        <Grid container rowSpacing={5} justifyContent="flex-start" sx={{px:25}}>
            {cartState.saveForLater.map((item) => (
                <Grid item xs={12} sm={6} md={4}>
                    <SavedItem item={item}></SavedItem>
                </Grid>
            ))}
        </Grid>
       </>
        
         ) : (
            <Card sx={{border:1, width:"50%", mx:"auto", py:5}}>
            <Stack direction = "row" spacing={6} sx={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <StarBorderOutlinedIcon fontSize="large"/>
                <Typography sx={{textAlign: "center", fontSize:30, fontWeight:"bold"}}>You do not have any saved items</Typography>
            </Stack>
            </Card>
         )}
    </Box>
    </Box>);
}