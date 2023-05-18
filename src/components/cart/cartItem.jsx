import * as React from "react";
import { Typography, Select, MenuItem, Card, CardMedia, Stack, CardContent, List,ListItem, Button} from "@mui/material";
import { useState, useContext } from "react";
import { CartContext } from "../../state/cart/cart-context";
import { cartActions } from "../../state/cart/cart-reducer";

export function CartItem(props){
    const {item} = props;
    const {cartState, cartDispatch} = useContext(CartContext);


    const selectChange = (event) => {
        const qty = event.target.value; 
        cartDispatch({type: cartActions.SET_QUANTITY, item: item, qty: qty})
        
    }

    const deleteCartItem = () => {
        cartDispatch({type: cartActions.REMOVE, product: item})
    
        console.log("deleted: ");
        console.log(cartState.cart)
    }

    const saveForLater =() => {
        console.log("saveforlater:  ");
        console.log(cartState.saveForLater);
        cartDispatch({type:cartActions.SAVE_FOR_LATER, product: item})
        console.log(cartState);
    }  

    return (
    <Card sx={{width:800, height:230, border:.05}}>
        <Stack direction="row" spacing={3}>
            <CardMedia  component="img" image={item.image} title="item image"
            sx={{ height: 190,width:200, objectFit: "contain", py: 1, px:2}}/>
            <CardContent sx={{py:.5}}>
                <List>
                <ListItem>
                    <Typography sx={{fontWeight:"bold", fontSize:18}}>{item.title}</Typography>
                </ListItem>

                {
        (item.size != null
      && 
                <ListItem>
                    <Typography sx={{fontSize:17}}>size: {item.size}</Typography>
                </ListItem>
        )}
                
                <ListItem>
                    <Typography sx={{paddingRight:2}}>Qty: </Typography>
                <Select
                    defaultValue={item.cartQty}
                    size="small"
                    sx={{ width: 75}}
                    onChange ={selectChange}
                 >
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                        <MenuItem value={150}>150</MenuItem>
                        <MenuItem value={200}>200</MenuItem>
                </Select>
                </ListItem>

                <ListItem>
                    <Button variant="contained"  onClick ={() => deleteCartItem()} sx={{height:30}}>Delete</Button>
                    <Button variant="contained" onClick ={() => saveForLater()}  sx={{mx:2, height:30}}>Save for later</Button>
                </ListItem>

            </List>

            
            </CardContent>
            
        </Stack>

{item.totalQty <= 100 &&(<Typography sx={{position:"absolute", bottom:50, right: 0 , py:11, paddingRight:10, fontSize:18, fontWeight:"bold"}}>Only {item.totalQty} left!</Typography>)}
        
        
        <Typography  sx={{ fontSize:18, fontWeight: "bold",position:"absolute", bottom:0, right:0 , margin:3, padding:.5,  border:.5}}>
                    {(item.price * item.cartQty).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                            })} 
            </Typography>

    </Card>);
}