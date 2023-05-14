import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  MenuItem,
  Tooltip,
  Button,
  Tab,
  Tabs,
  Avatar,
  Container,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Badge
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import cartImage from "../../pictures/cartImage.png";
import { CartContext } from "../../state/cart/cart-context";

const pages = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Cart", path: "/cart" },
  {name: "Orders", path: "/orders"}
];

const productMenu = ["All Products", "Women", "Men"]


export function Header() {
  const navigate = useNavigate();


  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {cartState} = useContext(CartContext);

 

  const handleOpenProductMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

 
 
  /*

  const navToPage = (page) =>{
    const currPage = (pages.find((p) => p.name === page));
    console.log(currPage)
    navigate(currPage.path);
  }*/
 
  //Want a way for the product page to be rendered with specific requirements
  const handleCloseProductMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: "bold",
              fontSize: 24,
              backgroundColor:"white",
              color:"black",
              px: 3
            }}
          >
            Buy In Bulk
          </Typography>



{/*
          <Box sx={{flexGrow:1, textAlign: "center"}} >
          <Button onClick={handleOpenProductMenu} sx={{ my: 2, color: "white", display: "block", fontSize:17, fontWeight:"bold"}}>
                Products
              </Button>
          
          
          <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseProductMenu}
            >
              {productMenu.map((setting) => (
                <MenuItem key={setting} onClick={ () => {handleCloseProductMenu(); navigate("/products")}}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>

            
          </Box>
*/}
<Box sx={{flexGrow:1, textAlign:"left"}}>

          <Button onClick={() => navigate("/products")} sx={{  my: 2, color: "white", display: "block", fontSize:17, fontWeight:"bold"}}>
                Products
              </Button>
</Box>

          <Button
                onClick={() => navigate("/orders")}
                sx={{ my: 2, color: "white", display: "block", fontSize:17, fontWeight:"bold"}}
              >Past Orders</Button>
             

<Box sx={{px:4}}>
  {/* Badge # is hardcoded now but planning to make it match the number of items in the cart*/}
  <Badge badgeContent={5} overlap="circular" sx={{ "& .MuiBadge-badge":{color:"white", backgroundColor:"black", width:5}}}>
    <Avatar  onClick ={() => navigate("/cart")} alt="loginLogo" src ={cartImage} sx={{ width: 56, height: 56}} />
  </Badge>
  
</Box>
          
             

          
      </Toolbar>
    </AppBar>
  );
}