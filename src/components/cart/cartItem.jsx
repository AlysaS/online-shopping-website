import * as React from "react";
import { Typography, Select, MenuItem, Card, CardMedia, Stack, CardContent, List,ListItem, Button} from "@mui/material";
import { useState, useContext } from "react";
import { CartContext } from "../../state/cart/cart-context";
import { cartActions } from "../../state/cart/cart-reducer";

export function CartItem(props){
    const {item} = props;
    const [qty, setQty] = useState(0);
    const {cartState, cartDispatch} = useContext(CartContext);


    const selectChange = (event) => {
        setQty(event.target.value);
    }

    const deleteCartItem = () => {
        cartDispatch({type: cartActions.REMOVE, item: item})
    
        console.log("deleted: ");
        console.log(cartState.cart)
    }

    return (
    <Card sx={{width:800, height:230, border:.05}}>
        <Stack direction="row">
            <CardMedia  component="img" image={item.image} title="item image"
            sx={{ height: 190, objectFit: "contain", py: 1 }}/>
            <CardContent>
                <List>
                <ListItem>
                    <Typography>{item.title}</Typography>
                </ListItem>

                {
        (item.size != null
      && 
                <ListItem>
                    <Typography>size: {item.size}</Typography>
                </ListItem>
        )}
                <ListItem>
                    <Typography>Qty: </Typography>
                <Select
                    defaultValue="Select Size"
                    size="small"
                    sx={{mx:"auto", width: 75,alignItems: 'center',
                    justifyContent: 'center'}}
                    onChange ={selectChange}
                 >
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                        <MenuItem value={150}>150</MenuItem>
                        <MenuItem value={200}>200</MenuItem>
                </Select>
                </ListItem>

                <ListItem>
                    <Button onClick ={() => deleteCartItem}>Delete</Button>
                    <Button>Save for later</Button>
                </ListItem>

            </List>

            </CardContent>
            <Typography variant ="h6" sx={{ textAlign: "center" }}>
                    {item.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
          })} </Typography>
        </Stack>
        
        
    </Card>);
}