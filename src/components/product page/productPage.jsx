
import { Button, Typography, Box, Paper, Stack } from "@mui/material";
import {useParams, useNavigate} from "react-router-dom";
import { ProductListContext } from "../../state/productList/productList-context";
import { useContext } from "react"; 

export function ProductPage(){

    const {id} = useParams(); 
    const navigate = useNavigate();

    const{ productListState, productLIstDispatch} = useContext(ProductListContext);

    const product = productListState.productList.find((x) => x.id == id);



    return(
        <>
        <Box sx={{margin:2}}>
            <Button onClick={() => navigate("/products") } variant= "outlined" >Back to all products </Button>
        </Box>
        
        <Stack direction="row" >
           < Box component="img" src={product.image} sx={{width:300, height:440, objectFit: "contain", paddingLeft:20}}/>
        
        <Stack>

        <Typography variant="h5" sx={{fontWeight:"bold"}}>{product.title}</Typography>
            {/**Want to have a view more option instead fo the scroll */}
        <Typography  sx={{width:300, height:350, border:1, padding:2.5, overflow: "auto",}}>{product.description}</Typography>

        </Stack>
        
        </Stack>
        
        </>
    )
    
}