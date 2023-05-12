import * as React from "react";
import { Typography, Box, ListItem, List} from "@mui/material";
import { CartContext } from "../../state/cart/cart-context";
import { useContext } from "react"; 
import { CartItem } from "./cartItem";

export function Cart(){
    
    const {cartState, cartDispatch} = useContext(CartContext);
   
    /* Code so can click on item and go to its product page
    const navigate = useNavigate();

    const productClicked =(currProduct) => {
      navigate(`/products/${currProduct.id}`)
    }
*/
    
    return (
    <Box  sx={{paddingBottom:15}}>
        <Box id="cartItems">
        <Typography gutterBottom variant="h3" component="div" sx={{fontWeight: "bold", textAlign:"center", marginBlock:5}}>
           Cart
        </Typography >
        </Box>

        <List sx={{mx:"auto", alignItems:"center"}}>
            {cartState.cart.map((item) => (
                <ListItem sx={{margin:"auto", alignItems:"center", width:900}}>
                    <CartItem item={item}></CartItem>
                </ListItem>
            ))}
        </List>

        <Box id="saved for later">

        </Box>
        
    </Box>);
}