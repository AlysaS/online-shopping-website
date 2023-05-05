
import { Button, Typography, Box, Rating, Stack, Select, MenuItem, InputLabel } from "@mui/material";
import {useParams, useNavigate} from "react-router-dom";
import { ProductListContext } from "../../state/productList/productList-context";
import { useContext } from "react"; 

export function ProductPage(){

    const {id} = useParams(); 
    const navigate = useNavigate();

    const{ productListState, productLIstDispatch} = useContext(ProductListContext);

    const product = productListState.productList.find((x) => x.id == id);



    return(
        <Box  sx={{marginBottom:5}}>
        <Box sx={{margin:2}}>
            <Button onClick={() => navigate("/products") } variant= "outlined" >Back to all products </Button>
        </Box>
        
        <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2} >
           < Box component="img" src={product.image} sx={{width:300, height:440, objectFit: "contain", paddingLeft:20}}/>
        
        <Stack>

        <Typography variant="h5" sx={{fontWeight:"bold", width:350, textAlign:"center"}}>{product.title}</Typography>
        
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
        
        <Typography variant ="h6" sx={{ textAlign: "center" }}>
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} </Typography>
            {/**Want to have a view more option instead fo the scroll */}
        <Typography  sx={{my:2, width:300, height:300, border:1, padding:2.5, overflow: "auto",}}>{product.description}</Typography>

        {
      (product.category === "men's clothing" || product.category === "women's clothing") > 0 && <Select
          defaultValue="Select Size"
          sx={{mx:"auto", width: 200,alignItems: 'center',
          justifyContent: 'center'}}
        >
          <MenuItem value="Select Size">
            <em>Select Size</em>
          </MenuItem>
          <MenuItem value={"small"}>Small</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"large"}>Large</MenuItem>
          <MenuItem value={"xlarge"}>XLarge</MenuItem>
        </Select>

}


        
        <Button variant="contained" sx={{width:250, mx:"auto", my:2}}>Add To Cart</Button>

        
        </Stack>
        </Stack>
        
        </Box>
    )
    
}