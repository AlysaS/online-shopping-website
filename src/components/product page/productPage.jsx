import { useContext, useState } from "react"; 
import { Button, Typography, Box, Rating, Stack, Select, MenuItem, InputLabel } from "@mui/material";
import {useParams, useNavigate} from "react-router-dom";
import { ProductListContext } from "../../state/productList/productList-context";
import { CartContext } from "../../state/cart/cart-context";
import { cartActions } from "../../state/cart/cart-reducer";

export function ProductPage(){

    const {id} = useParams(); 
    const {cartState, cartDispatch} = useContext(CartContext);
    const{ productListState, productLIstDispatch} = useContext(ProductListContext);
    const product = productListState.productList.find((x) => x.id == id);
    
    const [size, setSize] = useState("");


    const navigate = useNavigate();

    
    const addToCart = (currProduct, size) => {
        cartDispatch({type: cartActions.ADD, product: size == "" ?currProduct : {...currProduct, size:size}});

        console.log("cart: ");
        console.log(cartState.cart);
      
    }
    

    const selectChange = (event) =>{
      setSize(event.target.value);
    }


    return(
        <Box  sx={{marginBottom:5}}>
        
        <Typography variant="h4" sx={{fontWeight:"bold", width:"75%", textAlign:"center", margin:"auto", paddingTop:5, paddingBottom:2}}>{product.title}</Typography>

<Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
          <Rating
            name="simple-controlled"
            value={product.rating.rate}
            size="medium"
            readOnly
            /** onChange={(event, newValue) => {setValue(newValue)}*/
          />
          <Typography>({product.rating.count})</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2} >
           < Box component="img" src={product.image} sx={{width:300, height:440, objectFit: "contain", paddingLeft:20}}/>
        
        <Stack>

        
       
            {/**Want to have a view more option instead fo the scroll */}
        <Typography  sx={{my:2, width:300, height:300, border:1, padding:2.5, overflow: "auto",}}>{product.description}</Typography>

        
        <Typography variant ="h6" sx={{ textAlign: "center", padding:2 }}>
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} </Typography>

        
        
        {
        (product.category === "men's clothing" || product.category === "women's clothing") > 0 
      && <Select
          defaultValue="Select Size"
          sx={{mx:"auto", width: 200,alignItems: 'center',
          justifyContent: 'center',
          }}
          onChange ={selectChange}
          
        >
          <MenuItem disabled value="Select Size" sx={{fontWeight: "bold"}}>
            Select Size
          </MenuItem>
          <MenuItem value={"small"}>Small</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"large"}>Large</MenuItem>
          <MenuItem value={"xlarge"}>XLarge</MenuItem>
        </Select>

}

<Typography variant ="h6" sx={{ textAlign: "center", padding:2 }}>
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} </Typography>


        
        <Button variant="contained" sx={{width:250, mx:"auto", my:2}} disabled={size == ""} onClick={() => addToCart(product, size)}>Add To Cart</Button>

        
        </Stack>
        </Stack>
        
        </Box>
    )
    
}