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
import { ProductListContext } from "../../state/productList/productList-context";
import { productListActions } from "../../state/productList/productList-reducer";
import savedImage from "../../pictures/savedImage.png";
import emptyCartImage2 from "../../pictures/emptyCartImage2.png";

export function Cart(){
    
    const {productListDispatch} = useContext(ProductListContext)
    const {cartState, cartDispatch} = useContext(CartContext);
    const {ordersState, ordersDispatch} = useContext(OrdersContext);
   
   //Code so can click on item and go to its product page
    const navigate = useNavigate();

    const productClicked =(currProduct) => {
      navigate(`/products/${currProduct.id}`)
    }

    const placeOrder = () => {

        //go througn each item in cart and subtract the qty 
        cartState.cart.map((item) => {
            productListDispatch({type: productListActions.SET_AMOUNT, product: item, amount: getAmount(item)})
        })

        
        ordersDispatch({type: ordersActions.ADD, order: cartState.cart});
        cartDispatch({type: cartActions.CLEAR_CART});

        console.log("orders: ");
        console.log(ordersState.orders);

        navigate("/orders");
    }

    const getAmount = (item) => {
        console.log(item);

        if (item.sizes != null){
            const size = item.sizes.find((x) => x.name == item.size);
            console.log(size);
            const amnt = size.amount;
            return (amnt- item.cartQty); 
        }else{
            return (item.totalQty - item.cartQty)
        }

        
    }

    const getTotalPrice = () => {
        let totalPrice =0; 
        cartState.cart.map((item) => {
            totalPrice += (item.cartQty * item.price);
        })

        return totalPrice;
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
        

    <Box sx={{border:2,  height:50, width:300, textAlign:"center", display:"flex", mx:"auto"}}>
        <Typography  sx={{ fontSize:25, fontWeight: "bold"}}>

                   Total Price: {getTotalPrice().toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                            })} 
        </Typography>

       </Box> 


        <Button size="large" variant="contained" 
        onClick={() => placeOrder()}
        sx={{my: 6, display:"flex", mx:"auto", fontSize:20 , fontWeight:"bold" }}>Place Order</Button>
        </Box>
        ) : (
            <Card sx={{border:1, width:"50%", mx:"auto", py:5}}>
            <Stack direction = "row" spacing={6} sx={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <Box component="img" src={emptyCartImage2} alt="emptyCartImage" sx={{width:180}}/>
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
                <Box component="img" src={savedImage} alt="starImage" sx={{width:70}}/>
                <Typography sx={{textAlign: "center", fontSize:30, fontWeight:"bold"}}>You do not have any saved items</Typography>
            </Stack>
            </Card>
         )}
    </Box>
    </Box>);
}