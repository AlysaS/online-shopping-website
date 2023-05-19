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
        (item.size != ""
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
                <MenuItem value={1} disabled={item.sizes != null ? (item.sizes.find(x => x.name === item.size).amount < 1): (item.totalQty < 1) }>1</MenuItem>
              <MenuItem value={2} disabled={item.sizes != null ? (item.sizes.find(x => x.name === item.size).amount < 2): (item.totalQty < 2) }>2</MenuItem>
              <MenuItem value={3} disabled={item.sizes != null ? (item.sizes.find(x => x.name === item.size).amount < 3): (item.totalQty < 3) }>3</MenuItem>
              <MenuItem value={4} disabled={item.sizes != null ? (item.sizes.find(x => x.name === item.size).amount < 4): (item.totalQty < 4) }>4</MenuItem>
              <MenuItem value={5} disabled={item.sizes != null ? (item.sizes.find(x => x.name === item.size).amount < 5): (item.totalQty < 5) }>5</MenuItem>
              
                </Select>
                </ListItem>

                <ListItem>
                    <Button variant="contained"  onClick ={() => deleteCartItem()} sx={{height:30}}>Delete</Button>
                    <Button variant="contained" onClick ={() => saveForLater()}  sx={{mx:2, height:30}}>Save for later</Button>
                </ListItem>

            </List>

            
            </CardContent>
            
        </Stack>
{
    item.sizes != null ? (
        item.sizes.find(x => x.name === item.size).amount < 6 &&(<Typography sx={{position:"absolute", bottom:50, right: 0 , py:11, paddingRight:9, fontSize:18, fontWeight:"bold"}}>Only {item.sizes.find(x => x.name === item.size).amount} left!</Typography>)

    ) :
    (item.totalQty < 6 &&(<Typography sx={{position:"absolute", bottom:50, right: 0 , py:11, paddingRight:9, fontSize:18, fontWeight:"bold"}}>Only {item.totalQty} left!</Typography>))
}

{item.totalQty < 6 &&(<Typography sx={{position:"absolute", bottom:50, right: 0 , py:11, paddingRight:9, fontSize:18, fontWeight:"bold"}}>Only {item.totalQty} left!</Typography>)}
        
        
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